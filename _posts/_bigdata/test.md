# Apache Spark Tutorial: Getting Started with Big Data Processing

## Introduction to Apache Spark

Apache Spark is a powerful open-source distributed computing system designed for fast, in-memory data processing. Originally developed at UC Berkeley in 2009, Spark has become one of the most popular big data processing frameworks due to its speed, ease of use, and versatility.

## Why Use Apache Spark?

- **Speed**: Up to 100x faster than Hadoop MapReduce for in-memory operations
- **Ease of Use**: APIs available in Python, Java, Scala, R, and SQL
- **Versatility**: Unified engine that supports batch processing, stream processing, machine learning, and graph processing
- **Fault Tolerance**: Resilient Distributed Datasets (RDDs) can recover from node failures
- **Ecosystem Integration**: Works well with Hadoop, Kafka, Cassandra and other big data tools


## Deep Dive into Resilient Distributed Datasets (RDDs)

RDDs are Spark's fundamental data structure - immutable, distributed collections of objects that can be processed in parallel. They provide fault tolerance through lineage information.

### Creating RDDs

There are several ways to create RDDs:

```python
# 1. From a collection in your driver program
data = [1, 2, 3, 4, 5]
rdd = sc.parallelize(data)

# 2. From external storage (HDFS, S3, local filesystem)
rdd = sc.textFile("hdfs://path/to/file.txt")
rdd = sc.textFile("s3a://bucket/path/to/file.txt")
rdd = sc.textFile("file:///local/path/to/file.txt")

# 3. From other RDDs (through transformations)
filtered_rdd = rdd.filter(lambda x: x > 2)
```

### RDD Operations

RDD operations are divided into two types:

#### 1. Transformations (Lazy Execution)

Transformations create a new RDD from an existing one but don't execute until an action is called.

```python
# Basic transformations
mapped_rdd = rdd.map(lambda x: x * 2)  # Multiply each element by 2
filtered_rdd = rdd.filter(lambda x: x % 2 == 0)  # Keep only even numbers

# More transformations
flatmapped_rdd = rdd.flatMap(lambda x: range(x))  # Flatten nested collections
sample_rdd = rdd.sample(False, 0.5)  # Sample without replacement, 50% of data
distinct_rdd = rdd.distinct()  # Remove duplicates

# Key-value pair operations (when RDD contains tuples)
data = [("a", 1), ("b", 2), ("a", 3)]
pair_rdd = sc.parallelize(data)

grouped_rdd = pair_rdd.groupByKey()  # Group values by key
reduced_rdd = pair_rdd.reduceByKey(lambda a, b: a + b)  # Sum values by key
```

#### 2. Actions (Eager Execution)

Actions trigger the execution of RDD transformations and return results to the driver program.

```python
# Basic actions
result = rdd.collect()  # Return all elements
count = rdd.count()  # Return the number of elements
first_element = rdd.first()  # Return the first element
sample = rdd.take(5)  # Return the first 5 elements

# More actions
top_values = rdd.top(3)  # Return top 3 elements (by natural ordering)
element_count = rdd.countByValue()  # Count occurrences of each value
rdd.saveAsTextFile("path/to/output")  # Save to a text file

# Aggregation actions
sum_value = rdd.reduce(lambda a, b: a + b)  # Sum all elements
stats = rdd.stats()  # Get statistics (count, mean, stddev, etc.)
```

### Advanced RDD Concepts

#### 1. Persistence (Caching)

Improve performance by keeping RDDs in memory:

```python
# Cache in memory
rdd.cache()  # Same as rdd.persist(StorageLevel.MEMORY_ONLY)

# Different storage levels
from pyspark import StorageLevel
rdd.persist(StorageLevel.MEMORY_AND_DISK)
rdd.persist(StorageLevel.MEMORY_ONLY_SER)
rdd.persist(StorageLevel.DISK_ONLY)

# Remove from cache
rdd.unpersist()
```

#### 2. Partitioning

Control how data is distributed across the cluster:

```python
# Create RDD with specific number of partitions
rdd = sc.parallelize(data, numSlices=10)

# Change the number of partitions
repartitioned_rdd = rdd.repartition(4)  # Shuffle all data
coalesced_rdd = rdd.coalesce(4, shuffle=False)  # Avoid shuffle if possible

# Custom partitioning for key-value RDDs
from pyspark import HashPartitioner
rdd.partitionBy(HashPartitioner(10))
```

#### 3. Shared Variables

Share data efficiently across the cluster:

```python
# Broadcast variables (read-only)
broadcast_var = sc.broadcast([1, 2, 3])
result = rdd.map(lambda x: x + sum(broadcast_var.value))

# Accumulators (add-only)
accum = sc.accumulator(0)
def increment(x):
    global accum
    accum += x
    return x
rdd.foreach(increment)
print(accum.value)  # Final accumulated value
```

#### 4. Complete RDD Example: Word Count with Advanced Features

```python
from pyspark import SparkContext, StorageLevel
from operator import add

# Initialize SparkContext
sc = SparkContext("local[*]", "AdvancedWordCount")

# Load data and cache it
lines = sc.textFile("hdfs://path/to/large-text-file.txt")
lines.persist(StorageLevel.MEMORY_AND_DISK)

# Create broadcast variable for stopwords
stopwords = sc.broadcast(["the", "a", "an", "and", "of", "to", "in", "for", "on", "with"])

# Process the data
words = lines.flatMap(lambda line: line.lower().split(" "))
filtered_words = words.filter(lambda word: word not in stopwords.value and len(word) > 0)
word_pairs = filtered_words.map(lambda word: (word, 1))
word_counts = word_pairs.reduceByKey(add)

# Repartition for better performance in later operations
word_counts = word_counts.repartition(10)

# Sort by count in descending order
sorted_counts = word_counts.sortBy(lambda x: -x[1])

# Save results
sorted_counts.saveAsTextFile("hdfs://path/to/wordcount-output")

# Clean up
lines.unpersist()
sc.stop()
```

## Deep Dive into DataFrames and Datasets

DataFrames and Datasets are higher-level abstractions built on top of RDDs that provide a more structured and optimized way to work with data.

### DataFrames

DataFrames are distributed collections of data organized into named columns, similar to tables in a relational database.

#### Creating DataFrames

```python
from pyspark.sql import SparkSession

# Initialize SparkSession
spark = SparkSession.builder \
    .appName("DataFrame Examples") \
    .config("spark.some.config.option", "some-value") \
    .getOrCreate()

# 1. From a list of data
data = [("Alice", 25), ("Bob", 30), ("Charlie", 35)]
df = spark.createDataFrame(data, ["Name", "Age"])

# 2. From RDD
rdd = spark.sparkContext.parallelize(data)
df = spark.createDataFrame(rdd, ["Name", "Age"])

# 3. From external data sources
df = spark.read.json("people.json")
df = spark.read.csv("people.csv", header=True, inferSchema=True)
df = spark.read.parquet("people.parquet")
df = spark.read.orc("people.orc")
df = spark.read.format("jdbc") \
    .option("url", "jdbc:postgresql:dbserver") \
    .option("dbtable", "schema.tablename") \
    .option("user", "username") \
    .option("password", "password") \
    .load()
```

#### DataFrame Operations

```python
# Show data
df.show()
df.show(5, truncate=False)  # Show 5 rows without truncating

# Schema information
df.printSchema()

# Select columns
df.select("Name").show()
df.select(df["Name"], df["Age"] + 1).show()

# Filter data
df.filter(df["Age"] > 30).show()
df.filter("Age > 30").show()  # SQL expression

# Group and aggregate
df.groupBy("Age").count().show()
from pyspark.sql.functions import avg, sum, max
df.groupBy("DepartmentId").agg(avg("Salary").alias("avg_salary"), 
                               sum("Salary").alias("total_salary")).show()

# Sort data
df.sort(df["Age"].desc()).show()
df.orderBy("Age", ascending=False).show()

# Add new columns
from pyspark.sql.functions import col, lit, expr
df = df.withColumn("AgeGroup", expr("CASE WHEN Age <= 25 THEN 'Young' WHEN Age <= 35 THEN 'Adult' ELSE 'Senior' END"))
df = df.withColumn("DoubleAge", col("Age") * 2)
df = df.withColumn("Country", lit("USA"))

# Drop columns
df = df.drop("AgeGroup")

# Rename columns
df = df.withColumnRenamed("Name", "FullName")

# Join DataFrames
employees = spark.createDataFrame([
    (1, "Alice", 1), 
    (2, "Bob", 2), 
    (3, "Charlie", 1)
], ["id", "name", "department_id"])

departments = spark.createDataFrame([
    (1, "Engineering"), 
    (2, "HR")
], ["id", "department_name"])

# Inner join
joined_df = employees.join(departments, 
                          employees["department_id"] == departments["id"],
                          "inner")

# Left join
left_joined_df = employees.join(departments,
                               employees["department_id"] == departments["id"],
                               "left")

# Set operations
df1 = spark.createDataFrame([("Alice", 25), ("Bob", 30)], ["Name", "Age"])
df2 = spark.createDataFrame([("Bob", 30), ("Charlie", 35)], ["Name", "Age"])

union_df = df1.union(df2)  # May contain duplicates
distinct_df = union_df.distinct()  # Remove duplicates
intersect_df = df1.intersect(df2)  # Common rows
except_df = df1.exceptAll(df2)  # Rows in df1 but not in df2
```

#### Working with SQL

```python
# Register DataFrame as a temporary view
df.createOrReplaceTempView("people")

# Run SQL queries
results = spark.sql("SELECT * FROM people WHERE Age > 30")
results.show()

# Register as a global temporary view (available across sessions)
df.createGlobalTempView("people_global")
results = spark.sql("SELECT * FROM global_temp.people_global")
```

### Datasets (Primarily in Scala and Java)

Datasets provide type-safety with the optimization benefits of DataFrames. Note: In Python, there's no separate Dataset API (DataFrame is equivalent to Dataset[Row] in Scala).

```scala
// Scala example
case class Person(name: String, age: Int)

// Create Dataset from a collection
val data = Seq(Person("Alice", 25), Person("Bob", 30))
val ds = spark.createDataset(data)

// Transformations with type-safety
val filteredDS = ds.filter(p => p.age > 25)
val namesDS = ds.map(p => p.name)
```

#### Converting Between RDDs, DataFrames, and Datasets

```python
# Python examples (DataFrame to RDD)
rdd = df.rdd

# RDD to DataFrame
from pyspark.sql import Row
row_rdd = rdd.map(lambda x: Row(name=x[0], age=int(x[1])))
df = spark.createDataFrame(row_rdd)

# In Scala: DataFrame to Dataset
// val ds = df.as[Person]

# In Scala: Dataset to DataFrame
// val df = ds.toDF()
```

#### Complete DataFrame Example: Customer Purchase Analysis

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum as sum_col, avg, count, desc, window
from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DoubleType, TimestampType

# Initialize SparkSession
spark = SparkSession.builder \
    .appName("CustomerPurchaseAnalysis") \
    .config("spark.sql.shuffle.partitions", 5) \
    .getOrCreate()

# Define schema
purchase_schema = StructType([
    StructField("purchase_id", StringType(), False),
    StructField("customer_id", StringType(), False),
    StructField("product_id", StringType(), False),
    StructField("quantity", IntegerType(), False),
    StructField("price", DoubleType(), False),
    StructField("purchase_time", TimestampType(), False)
])

# Load data
purchases = spark.read.schema(purchase_schema) \
    .csv("purchases.csv", header=True)

product_schema = StructType([
    StructField("product_id", StringType(), False),
    StructField("product_name", StringType(), False),
    StructField("category", StringType(), False)
])

products = spark.read.schema(product_schema) \
    .csv("products.csv", header=True)

# Register as temporary views
purchases.createOrReplaceTempView("purchases")
products.createOrReplaceTempView("products")

# Analysis 1: Total sales by category
category_sales = spark.sql("""
    SELECT p.category, 
           COUNT(pu.purchase_id) as num_purchases,
           SUM(pu.price * pu.quantity) as total_sales
    FROM purchases pu
    JOIN products p ON pu.product_id = p.product_id
    GROUP BY p.category
    ORDER BY total_sales DESC
""")
category_sales.show()

# Analysis 2: Same analysis using DataFrame API
category_sales_df = purchases.join(
    products, purchases["product_id"] == products["product_id"]
).groupBy(
    products["category"]
).agg(
    count("purchase_id").alias("num_purchases"),
    sum_col(col("price") * col("quantity")).alias("total_sales")
).orderBy(
    desc("total_sales")
)
category_sales_df.show()

# Analysis 3: Top spending customers
top_customers = purchases.groupBy("customer_id").agg(
    sum_col(col("price") * col("quantity")).alias("total_spent"),
    count("purchase_id").alias("num_purchases"),
    avg(col("price") * col("quantity")).alias("avg_purchase_value")
).orderBy(
    desc("total_spent")
).limit(10)

top_customers.show()

# Save results to Parquet format (efficient columnar storage)
category_sales_df.write.mode("overwrite").parquet("category_sales.parquet")
top_customers.write.mode("overwrite").parquet("top_customers.parquet")

# Clean up
spark.stop()
```

## Detailed Guide to Spark Streaming

Spark Streaming allows processing of real-time data streams. There are two APIs:

1. DStream API (older)
2. Structured Streaming API (newer, recommended)

### DStream API

DStreams (Discretized Streams) represent a continuous stream of data.

```python
from pyspark import SparkContext
from pyspark.streaming import StreamingContext

# Create a StreamingContext
sc = SparkContext("local[2]", "StreamingExample")
ssc = StreamingContext(sc, batchInterval=1)  # 1-second batches

# Create a DStream
# 1. From TCP socket
lines = ssc.socketTextStream("localhost", 9999)

# 2. From file system
lines = ssc.textFileStream("/path/to/directory")

# 3. From Kafka (requires Kafka package)
from pyspark.streaming.kafka import KafkaUtils
kafka_stream = KafkaUtils.createDirectStream(
    ssc, 
    ["topic"], 
    {"metadata.broker.list": "broker1:9092,broker2:9092"}
)

# Process the stream
words = lines.flatMap(lambda line: line.split(" "))
pairs = words.map(lambda word: (word, 1))
word_counts = pairs.reduceByKey(lambda x, y: x + y)

# Output operations
word_counts.pprint()  # Print first 10 elements
word_counts.saveAsTextFiles("prefix", "suffix")  # Save to text files

# Start the computation
ssc.start()
ssc.awaitTermination()  # Wait for the computation to terminate
```

#### Window Operations in DStream API

```python
# Count words in 10-second windows, sliding every 2 seconds
windowed_word_counts = pairs.reduceByKeyAndWindow(
    lambda x, y: x + y,        # Reduce function
    lambda x, y: x - y,        # Inverse function (for optimization)
    windowDuration=10,         # Window size
    slideDuration=2            # Slide interval
)

# Count words in last 30 seconds
windowed_counts = pairs.reduceByKeyAndWindow(
    lambda x, y: x + y, 
    windowDuration=30, 
    slideDuration=1
)
```

#### Stateful Operations in DStream API

```python
# Track word counts across batches
def update_function(new_values, running_count):
    if running_count is None:
        running_count = 0
    return sum(new_values, running_count)

# Enable checkpointing for stateful operations
ssc.checkpoint("checkpoint-directory")

# Update state for each key
stateful_counts = pairs.updateStateByKey(update_function)
```

#### Complete DStream Example: Real-time Network Monitoring

```python
from pyspark import SparkContext
from pyspark.streaming import StreamingContext
import json
from datetime import datetime

# Initialize context
sc = SparkContext("local[2]", "NetworkMonitoring")
ssc = StreamingContext(sc, 5)  # 5-second batch interval
ssc.checkpoint("hdfs://checkpoint-dir")

# Assume log format: {"timestamp": "2023-01-01T12:00:00", "ip": "192.168.1.1", "endpoint": "/api/users", "status": 200}
logs = ssc.socketTextStream("log-server", 9999)

# Parse JSON logs
parsed_logs = logs.map(lambda line: json.loads(line))

# Extract fields
log_data = parsed_logs.map(lambda log: (
    log["ip"],
    log["endpoint"],
    log["status"]
))

# Count by status code
status_counts = parsed_logs.map(lambda log: (log["status"], 1)).reduceByKey(lambda a, b: a + b)

# Detect failed requests (status >= 400)
failed_requests = parsed_logs.filter(lambda log: log["status"] >= 400)
failed_endpoints = failed_requests.map(lambda log: (log["endpoint"], 1)).reduceByKey(lambda a, b: a + b)

# Track requests per IP in 1-minute windows, sliding every 10 seconds
requests_by_ip = parsed_logs.map(lambda log: (log["ip"], 1)) \
    .reduceByKeyAndWindow(lambda a, b: a + b, lambda a, b: a - b, 60, 10)

# Detect potential DDoS - IPs with more than 100 requests per minute
potential_ddos = requests_by_ip.filter(lambda ip_count: ip_count[1] > 100)

# Output operations
status_counts.pprint()
failed_endpoints.pprint(10)
potential_ddos.foreachRDD(lambda rdd: 
    rdd.foreach(lambda ip_count: 
        print(f"ALERT: Potential DDoS from {ip_count[0]} with {ip_count[1]} requests")
    )
)

# Start the computation
ssc.start()
ssc.awaitTermination()
```

### Structured Streaming API

Structured Streaming is built on the Spark SQL engine and provides a DataFrame-based API with stronger guarantees and optimizations.

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import explode, split, window, count, col
from pyspark.sql.types import StructType, StructField, StringType, TimestampType

# Initialize SparkSession
spark = SparkSession.builder \
    .appName("StructuredStreaming") \
    .getOrCreate()

# Define schema for incoming data
schema = StructType([
    StructField("timestamp", TimestampType(), True),
    StructField("message", StringType(), True)
])

# Create a streaming DataFrame
# 1. From socket
lines = spark.readStream \
    .format("socket") \
    .option("host", "localhost") \
    .option("port", 9999) \
    .load()

# 2. From file source
logs = spark.readStream \
    .schema(schema) \
    .json("logs-directory")

# 3. From Kafka
kafka_df = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "broker1:9092,broker2:9092") \
    .option("subscribe", "topic1") \
    .load()

# Process the data
# Example 1: Word count
words = lines.select(
    explode(split(lines.value, " ")).alias("word")
)
word_counts = words.groupBy("word").count()

# Example 2: Windowed counts
windowed_counts = words.groupBy(
    window(words.timestamp, "10 minutes", "5 minutes"),
    words.word
).count()

# Output sink
# 1. Console output (for debugging)
query = word_counts.writeStream \
    .outputMode("complete") \
    .format("console") \
    .start()

# 2. File sink
query = word_counts.writeStream \
    .outputMode("append") \
    .format("parquet") \
    .option("path", "word-counts") \
    .option("checkpointLocation", "checkpoint-dir") \
    .start()

# 3. Kafka sink
query = word_counts.writeStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "broker1:9092,broker2:9092") \
    .option("topic", "output-topic") \
    .option("checkpointLocation", "checkpoint-dir") \
    .start()

# Wait for termination
query.awaitTermination()
```

#### Output Modes in Structured Streaming

```python
# Complete mode - entire result table is output
query = df.writeStream.outputMode("complete")

# Append mode - only new rows are output
query = df.writeStream.outputMode("append")

# Update mode - only updated rows are output
query = df.writeStream.outputMode("update")
```

#### Watermarking for Late Data

```python
from pyspark.sql.functions import window, col

windowed_counts = df \
    .withWatermark("timestamp", "10 minutes") \
    .groupBy(
        window(col("timestamp"), "10 minutes", "5 minutes"),
        col("device")
    ) \
    .count()
```

#### Event Time Processing

```python
from pyspark.sql.functions import window, col

# Group the data by window and word and compute the count
windowedCounts = words \
    .withWatermark("timestamp", "10 minutes") \
    .groupBy(
        window(words.timestamp, "10 minutes", "5 minutes"),
        words.word
    ) \
    .count()
```

#### Complete Structured Streaming Example: IoT Sensor Analysis

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col, window, avg, max, min, count
from pyspark.sql.types import StructType, StructField, StringType, DoubleType, TimestampType

# Initialize SparkSession
spark = SparkSession.builder \
    .appName("IoTSensorAnalysis") \
    .getOrCreate()

# Define schema for sensor data
sensor_schema = StructType([
    StructField("device_id", StringType(), False),
    StructField("timestamp", TimestampType(), False),
    StructField("temperature", DoubleType(), False),
    StructField("humidity", DoubleType(), False),
    StructField("pressure", DoubleType(), False),
    StructField("location", StringType(), True)
])

# Read streaming data from Kafka
kafka_df = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "broker:9092") \
    .option("subscribe", "sensors") \
    .option("startingOffsets", "latest") \
    .load()

# Parse JSON data
parsed_df = kafka_df \
    .select(from_json(col("value").cast("string"), sensor_schema).alias("data")) \
    .select("data.*")

# 1. Filter abnormal temperature readings
abnormal_temp = parsed_df.filter(
    (col("temperature") > 30) | (col("temperature") < 0)
)

# 2. Calculate 5-minute rolling averages with 1-minute sliding window
rolling_avgs = parsed_df \
    .withWatermark("timestamp", "10 minutes") \
    .groupBy(
        col("device_id"),
        window(col("timestamp"), "5 minutes", "1 minute")
    ) \
    .agg(
        avg("temperature").alias("avg_temp"),
        avg("humidity").alias("avg_humidity"),
        avg("pressure").alias("avg_pressure")
    )

# 3. Calculate statistics by location
location_stats = parsed_df \
    .withWatermark("timestamp", "15 minutes") \
    .groupBy(
        col("location"),
        window(col("timestamp"), "15 minutes", "5 minutes")
    ) \
    .agg(
        avg("temperature").alias("avg_temp"),
        max("temperature").alias("max_temp"),
        min("temperature").alias("min_temp"),
        count("device_id").alias("num_readings")
    )

# Output 1: Write abnormal temperatures to Kafka for alerts
abnormal_query = abnormal_temp.writeStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "broker:9092") \
    .option("topic", "temperature-alerts") \
    .option("checkpointLocation", "checkpoint-dir/abnormal") \
    .start()

# Output 2: Write rolling averages to memory for querying
avg_query = rolling_avgs.writeStream \
    .outputMode("complete") \
    .format("memory") \
    .queryName("rolling_averages") \
    .start()

# Output 3: Write location statistics to console for monitoring
location_query = location_stats.writeStream \
    .outputMode("complete") \
    .format("console") \
    .option("truncate", False) \
    .start()

# Output 4: Write raw data to Parquet files for long-term storage
storage_query = parsed_df.writeStream \
    .format("parquet") \
    .option("path", "s3a://bucket/sensor-data") \
    .option("checkpointLocation", "checkpoint-dir/storage") \
    .partitionBy("location") \
    .start()

# Query the in-memory table periodically
from time import sleep
while True:
    spark.sql("SELECT * FROM rolling_averages ORDER BY window DESC LIMIT 10").show(truncate=False)
    sleep(10)

# Wait for termination (or you can stop manually after testing)
spark.streams.awaitAnyTermination()
```

## Conclusion

Apache Spark provides a powerful, versatile framework for processing large datasets. This tutorial covers RDDs, DataFrames, Datasets, and Streaming in detail, but Spark offers much more. Explore the official documentation and community resources to learn advanced features and optimizations.

## Additional Resources

- [Apache Spark Official Documentation](https://spark.apache.org/docs/latest/)
- [Spark GitHub Repository](https://github.com/apache/spark)
- [Databricks Spark Knowledge Base](https://databricks.com/spark)
- [Learning Spark, 2nd Edition (O'Reilly)](https://pages.databricks.com/learning-spark-free-ebook.html)