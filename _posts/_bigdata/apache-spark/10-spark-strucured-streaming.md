---
title: "Spark Structured Streaming"
excerpt: "A guide to using Spark Streaming for real-time data processing, including DStreams, Structured Streaming, and fault tolerance."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Spark Streaming

This tutorial covers Apache Spark Streaming, a module for real-time data processing.

## Introduction to Stream Processing

Spark Streaming enables you to process real-time data streams.

## DStreams (Discretized Streams)

DStreams are the basic abstraction in Spark Streaming.

## Structured Streaming

Structured Streaming is a higher-level API for stream processing.

## Input Sources (Kafka, Kinesis, Socket, Files)

Spark Streaming supports various input sources.

*   **Kafka:**

    ```python
df = spark.readStream.format("kafka") \
 .option("kafka.bootstrap.servers", "localhost:9092") \
 .option("subscribe", "mytopic") \
 .load()
    ```

*   **Kinesis:**

    ```python
df = spark.readStream.format("kinesis") \
 .option("streamName", "myStream") \
 .option("endpointUrl", "https://kinesis.us-east-1.amazonaws.com") \
 .load()
    ```

*   **Socket:**

    ```python
df = spark.readStream.format("socket") \
 .option("host", "localhost") \
 .option("port", 9999) \
 .load()
    ```

*   **Files:**

    ```python
df = spark.readStream.text("data/")
    ```

## Output Sinks

Spark Streaming supports various output sinks.

*   **Kafka:**

    ```python
df.writeStream.format("kafka") \
 .option("kafka.bootstrap.servers", "localhost:9092") \
 .option("topic", "mytopic") \
 .start()
    ```

*   **Console:**

    ```python
df.writeStream.format("console").start()
    ```

*   **Memory:**

    ```python
df.writeStream.format("memory").queryName("my_table").start()
spark.sql("SELECT * FROM my_table").show()
    ```

## Windowing Operations

Windowing operations allow you to perform calculations over a sliding window of data.

```python
from pyspark.sql.functions import window

df = df.withColumn("window", window(df["timestamp"], "10 minutes", "5 minutes"))
```

## Stateful Processing

## Structured Streaming Tutorial

Structured Streaming is a scalable and fault-tolerant stream processing engine built on the Spark SQL engine. It allows you to process data streams in real-time with the same ease as batch processing.

### Basic Concepts

*   **Input Data:**

    Structured Streaming consumes data from various sources like Kafka, files, and sockets.
*   **Processing:**

    Data is processed using Spark SQL operations like `select`, `filter`, `groupBy`, etc.
*   **Output:**

    The processed data can be written to various sinks like Kafka, console, and files.

### Code Examples

#### Read Stream from Socket

```python
from pyspark.sql import SparkSession
from pyspark.sql.types import StructType, StringType, StructField

# Initialize SparkSession
spark = SparkSession.builder.appName("SocketStream").getOrCreate()

# Define schema
schema = StructType([StructField("value", StringType(), True)])

# Read stream from socket
df = spark.readStream.format("socket") \
 .option("host", "localhost") \
 .option("port", 9999) \
 .load()

# Define schema
df = spark.readStream.format("socket") \
    .option("host", "localhost") \
    .option("port", 9999) \
    .schema(schema) \
    .load()


# Process data
query = df.writeStream.format("console").start()

query.awaitTermination()
```

#### Word Count Example

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import explode, split, from_json
from pyspark.sql.types import StructType, StringType, IntegerType, StructField

# Initialize SparkSession
spark = SparkSession.builder.appName("StructuredStreamingWordCount").getOrCreate()

# Define schema for the input data
schema = StructType([StructField("sentence", StringType(), True)])

# Create a streaming DataFrame from a socket source
df = spark.readStream.format("socket") \
    .option("host", "localhost") \
    .option("port", 9999) \
    .schema(schema) \
    .load()

# Split the lines into words
words = df.select(explode(split(df.value, " ")).alias("word"))

# Group the words and count the occurrences
wordCounts = words.groupBy("word").count()

# Start the streaming query to print the results to the console
query = wordCounts.writeStream.outputMode("complete").format("console").start()

query.awaitTermination()
```

#### Read Stream from Kafka

```python
from pyspark.sql import SparkSession

# Initialize SparkSession
spark = SparkSession.builder.appName("KafkaStream").getOrCreate()

# Read stream from Kafka
df = spark.readStream.format("kafka") \
 .option("kafka.bootstrap.servers", "localhost:9092") \
 .option("subscribe", "mytopic") \
 .load()

# Process data
df.selectExpr("CAST(key AS STRING)", "CAST(value AS STRING)")

query = df.writeStream.format("console").start()

query.awaitTermination()
```

### Fault Tolerance

Spark Streaming provides fault tolerance through checkpointing. You can configure checkpointing to save the state of your streaming application.

```python
spark.sparkContext.setCheckpointDir("checkpoint")
```

###

Stateful processing