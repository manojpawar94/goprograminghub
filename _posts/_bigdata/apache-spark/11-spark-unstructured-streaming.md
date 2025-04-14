---
title: "Spark Unstructured Streaming"
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

## DStreams (Discretized Streams)

DStreams are the basic abstraction in Spark Streaming.

### Basic Concepts

DStreams (Discretized Streams) are a sequence of RDDs (Resilient Distributed Datasets) representing a continuous stream of data.

### Transformations on DStreams

Spark Streaming provides various transformations on DStreams, similar to RDD transformations.

*   `map()`: Applies a function to each element of the stream.
*   `filter()`: Filters elements based on a condition.
*   `count()`: Returns the number of elements in each RDD.
*   `reduce()`: Reduces the elements using a function.
*   `window()`: Performs calculations over a sliding window of data.

### Code Examples

#### Java

```java
import org.apache.spark.streaming.*;
import org.apache.spark.streaming.api.java.*;
import org.apache.spark.SparkConf;

public class JavaDStreamExample {
 public static void main(String[] args) throws InterruptedException {
 SparkConf conf = new SparkConf().setAppName("JavaDStreamExample").setMaster("local[*]");
 JavaStreamingContext jssc = new JavaStreamingContext(conf, Durations.seconds(1));

 JavaReceiverInputDStream<String> lines = jssc.socketTextStream("localhost", 9999);
 lines.print();

 jssc.start();
 jssc.awaitTermination();
 }
}
```

#### Scala

```scala
import org.apache.spark.streaming._
import org.apache.spark.streaming.StreamingContext._
import org.apache.spark.SparkConf

object ScalaDStreamExample {
 def main(args: Array[String]) {
 val conf = new SparkConf().setAppName("ScalaDStreamExample").setMaster("local[*]")
 val ssc = new StreamingContext(conf, Seconds(1))

 val lines = ssc.socketTextStream("localhost", 9999)
 lines.print()

 ssc.start()
 ssc.awaitTermination()
 }
}
```

#### Python

```python
from pyspark import SparkContext
from pyspark.streaming import StreamingContext

sc = SparkContext("local[*]", "PythonDStreamExample")
ssc = StreamingContext(sc, 1)

lines = ssc.socketTextStream("localhost", 9999)
lines.pprint()

ssc.start()
ssc.awaitTermination()
```

### Setting up Spark Streaming Context

To set up a Spark Streaming context, you need to follow these steps:

1.  Create a SparkConf object with the application name and master URL.
2.  Create a StreamingContext object with the SparkConf and batch interval.
3.  Create an input DStream from a data source (e.g., socket, Kafka, Kinesis).
4.  Apply

## Stateful Processing

## DStreams (Discretized Streams)

DStreams are the basic abstraction in Spark Streaming.

### Basic Concepts

DStreams (Discretized Streams) are a sequence of RDDs (Resilient Distributed Datasets) representing a continuous stream of data.

### Transformations on DStreams

Spark Streaming provides various transformations on DStreams, similar to RDD transformations.

*   `map()`: Applies a function to each element of the stream.
*   `filter()`: Filters elements based on a condition.
*   `count()`: Returns the number of elements in each RDD.
*   `reduce()`: Reduces the elements using a function.
*   `window()`: Performs calculations over a sliding window of data.

### Code Examples

#### Java

```java
import org.apache.spark.streaming.*;
import org.apache.spark.streaming.api.java.*;
import org.apache.spark.SparkConf;

public class JavaDStreamExample {
 public static void main(String[] args) throws InterruptedException {
 SparkConf conf = new SparkConf().setAppName("JavaDStreamExample").setMaster("local[*]");
 JavaStreamingContext jssc = new JavaStreamingContext(conf, Durations.seconds(1));

 JavaReceiverInputDStream<String> lines = jssc.socketTextStream("localhost", 9999);
 lines.print();

 jssc.start();
 jssc.awaitTermination();
 }
}
```

#### Scala

```scala
import org.apache.spark.streaming._
import org.apache.spark.streaming.StreamingContext._
import org.apache.spark.SparkConf

object ScalaDStreamExample {
 def main(args: Array[String]) {
 val conf = new SparkConf().setAppName("ScalaDStreamExample").setMaster("local[*]")
 val ssc = new StreamingContext(conf, Seconds(1))

 val lines = ssc.socketTextStream("localhost", 9999)
 lines.print()

 ssc.start()
 ssc.awaitTermination()
 }
}
```

#### Python

```python
from pyspark import SparkContext
from pyspark.streaming import StreamingContext

sc = SparkContext("local[*]", "PythonDStreamExample")
ssc = StreamingContext(sc, 1)

lines = ssc.socketTextStream("localhost", 9999)
lines.pprint()

ssc.start()
ssc.awaitTermination()
```

### Setting up Spark Streaming Context

To set up a Spark Streaming context, you need to follow these steps:

1.  Create a SparkConf object with the application name and master URL.
2.  Create a StreamingContext object with the SparkConf and batch interval.
3.  Create an input DStream from a data source (e.g., socket, Kafka, Kinesis).
4.  Apply

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
from pyspark.sql.functions import explode, split
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