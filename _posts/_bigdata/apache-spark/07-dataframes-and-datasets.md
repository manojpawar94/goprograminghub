---
title: "DataFrames and Datasets"
excerpt: "An introduction to Spark's structured APIs, DataFrames, and Datasets, including operations, transformations, and schema management."
createdAt: "2021-05-03"
author: manoj-pawar
---

# DataFrames and Datasets

This tutorial introduces Apache Spark's structured APIs, specifically DataFrames and Datasets. These APIs provide a higher-level abstraction for working with structured and semi-structured data.

## Introduction to Structured APIs

Spark's structured APIs provide a way to work with data in a tabular format, similar to a relational database.

## Creating DataFrames

DataFrames can be created from various data sources, including:

- **CSV files:**

<div class="tabs-container" data-tabs-group="group1">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group1-python">Python</button>
      <button class="tab-button" data-tab="group1-java">Java</button>
      <button class="tab-button" data-tab="group1-scala">Scala</button>
      <div class="tab-indicator"></div>
 </div>

<div class="tab-content active" id="group1-python">

```python
df = spark.read \
          .csv("data.csv", header=True, inferSchema=True)
```

</div>
<div class="tab-content" id="group1-java">

```java
Dataset<Row> df = spark.read()
                       .format("csv")
                       .option("header", "true")
                       .load("data.csv");
```

</div>
<div class="tab-content" id="group1-scala">

```scala
val df = spark.read
              .format("csv")
              .option("header", "true")
              .load("data.csv")
```

</div>
</div>

- **JSON files:**

<div class="tabs-container" data-tabs-group="group2">
<div class="tabs-header">   
      <button class="tab-button active" data-tab="group2-python">Python</button>
      <button class="tab-button" data-tab="group2-java">Java</button>
      <button class="tab-button" data-tab="group2-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group2-python">

```python
df = spark.read.json("data.json")
```

</div>
<div class="tab-content" id="group2-java">

```java
Dataset<Row> df = spark.read()
                       .format("json")
                       .load("data.json");
```

</div>
<div class="tab-content" id="group2-scala">

```scala
val df = spark.read
              .format("json")
              .load("data.json")
```

</div>
</div>

- **Parquet files:**

<div class="tabs-container" data-tabs-group="group3">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group3-python">Python</button>
      <button class="tab-button" data-tab="group3-java">Java</button>
      <button class="tab-button" data-tab="group3-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group3-python">

```python
df = spark.read.parquet("data.parquet")
```

</div>
<div class="tab-content" id="group3-java">

```java
Dataset<Row> df = spark.read()
                       .format("parquet")
                       .load("data.parquet");
```

</div>
<div class="tab-content" id="group3-scala">

```scala
val df = spark.read
              .format("parquet")
              .load("data.parquet")
```

</div>
</div>

- **RDDs:**

<div class="tabs-container" data-tabs-group="group4">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group4-python">Python</button>
      <button class="tab-button" data-tab="group4-java">Java</button>
      <button class="tab-button" data-tab="group4-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group4-python">

```python
rdd = spark.sparkContext.parallelize([(1, "Alice"), (2, "Bob")])
df = rdd.toDF(["id", "name"])
```

</div>
<div class="tab-content" id="group4-java">

```java
JavaRDD<Row> rdd = spark.sparkContext()
                        .parallelize(
                            Arrays.asList(new Row(1, "Alice"),new Row(2, "Bob"))
                        );
Dataset<Row> df = spark.createDataFrame(rdd, Encoders.bean(Row.class));
```

</div>
<div class="tab-content" id="group4-scala">

```scala
val rdd = spark.sparkContext
               .parallelize(
                    Seq((1, "Alice"), (2, "Bob"))
                )
val df = rdd.toDF("id", "name")
```

</div>
</div>

## DataFrame Operations and Transformations

DataFrames support various operations and transformations:

- `select()`: Selects columns.

<div class="tabs-container" data-tabs-group="group5">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group5-python">Python</button>
      <button class="tab-button" data-tab="group5-java">Java</button>
      <button class="tab-button" data-tab="group5-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group5-python">

```python
  df2 = df.select("name", "age")
```

</div>
<div class="tab-content" id="group5-java">

```java
  Dataset<Row> df2 = df.select("name", "age");
```

</div>
<div class="tab-content" id="group5-scala">

```scala
  val df2 = df.select("name", "age")
```

</div>
</div>

- `filter()`: Filters rows based on a condition.

<div class="tabs-container" data-tabs-group="group6">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group6-python">Python</button>
      <button class="tab-button" data-tab="group6-java">Java</button>
      <button class="tab-button" data-tab="group6-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group6-python">

```python
df2 = df.filter(df["age"] > 30)
```

</div>
<div class="tab-content" id="group6-java">

```java
Dataset<Row> df2 = df.filter(df.col("age").gt(30));
```

</div>
<div class="tab-content" id="group6-scala">

```scala
val df2 = df.filter(col("age") > 30)
```

</div>
</div>

- `groupBy()`: Groups rows based on one or more columns.

<div class="tabs-container" data-tabs-group="group7">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group7-python">Python</button>
      <button class="tab-button" data-tab="group7-java">Java</button>
      <button class="tab-button" data-tab="group7-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group7-python">

```python
df2 = df.groupBy("city").count()
```

</div>
<div class="tab-content" id="group7-java">

```java
Dataset<Row> df2 = df.groupBy("city").count();
```

</div>
<div class="tab-content" id="group7-scala">

```scala
val df2 = df.groupBy("city").count()
```

</div>
</div>

- `orderBy()`: Orders rows based on one or more columns.
<div class="tabs-container" data-tabs-group="group8">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group8-python">Python</button>
      <button class="tab-button" data-tab="group8-java">Java</button>
      <button class="tab-button" data-tab="group8-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group8-python">

```python
df2 = df.orderBy(df["age"].desc())
```

</div>   
<div class="tab-content" id="group8-java">

```java
Dataset<Row> df2 = df.orderBy(df.col("age").desc());
```

</div>
<div class="tab-content" id="group8-scala">

```scala
val df2 = df.orderBy(col("age").desc)
```

</div>
</div>

- `withColumn()`: Adds a new column or replaces an existing one.
<div class="tabs-container" data-tabs-group="group9">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group9-python">Python</button>
      <button class="tab-button" data-tab="group9-java">Java</button>
      <button class="tab-button" data-tab="group9-scala">Scala</button> 
      <div class="tab-indicator"></div>     
    </div>
<div class="tab-content active" id="group9-python">

```python
df2 = df.withColumn("age_plus_one", df["age"] + 1)
```

</div>
<div class="tab-content" id="group9-java">

```java
Dataset<Row> df2 = df.withColumn("age_plus_one", expr("age + 1"));
```

</div>
<div class="tab-content" id="group9-scala">

```scala
val df2 = df.withColumn("age_plus_one", expr("age + 1"))
```

</div>
</div>

## Working with Columns and Expressions

Columns and expressions are used to manipulate DataFrame data.

- **Column access:**

<div class="tabs-container" data-tabs-group="group10">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group10-python">Python</button>
      <button class="tab-button" data-tab="group10-java">Java</button>
      <button class="tab-button" data-tab="group10-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group10-python">

```python
  df["name"]
```

</div>
<div class="tab-content" id="group10-java">

```java
  df.col("name")
```

</div>
<div class="tab-content" id="group10-scala">

```scala
  df.col("name")
```

</div>
</div>

- **Column operations:**

<div class="tabs-container" data-tabs-group="group11">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group11-python">Python</button>
      <button class="tab-button" data-tab="group11-java">Java</button>
      <button class="tab-button" data-tab="group11-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group11-python">

```python
  df["age"] + 1
```

</div>
<div class="tab-content" id="group11-java">

```java
  df.col("age").plus(1)
```

</div>
<div class="tab-content" id="group11-scala">

```scala
  df.col("age").plus(1)
```

</div>
</div>

- **Expressions:**
<div class="tabs-container" data-tabs-group="group12">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group12-python">Python</button>
      <button class="tab-button" data-tab="group12-java">Java</button>
      <button class="tab-button" data-tab="group12-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group12-python">

```python
  from pyspark.sql.functions import col, expr
  df.select(col("age") + 1)
  df.select(expr("age + 1"))
```

</div>
<div class="tab-content" id="group12-java">

```java
  from pyspark.sql.functions import col, expr
  df.select(col("age").plus(1))
  df.select(expr("age + 1"))
```

</div>
<div class="tab-content" id="group12-scala">

```scala
  from pyspark.sql.functions import col, expr
  df.select(col("age").plus(1))
  df.select(expr("age + 1"))
```

</div>
</div>

## Schema Definition and Management

DataFrames have a schema that defines the data types of each column.

- **Inferring schema:** Spark can infer the schema from the data.
- **Defining schema:** You can define the schema explicitly.

<div class="tabs-container" data-tabs-group="group13">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group13-python">Python</button>
      <button class="tab-button" data-tab="group13-java">Java</button>
      <button class="tab-button" data-tab="group13-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group13-python">

```python
  from pyspark.sql.types import StructType, StructField, IntegerType, StringType
  schema = StructType([
      StructField("id", IntegerType(), True),
      StructField("name", StringType(), True)
  ])
  df = spark.createDataFrame([(1, "Alice"), (2, "Bob")], schema)
```

</div>
<div class="tab-content" id="group13-java">

```java
  from pyspark.sql.types import StructType, StructField, IntegerType, StringType
  StructType schema = new StructType(new StructField[]{
      new StructField("id", IntegerType(), true),
      new StructField("name", StringType(), true)
  })
  Dataset<Row> df = spark.createDataFrame(Arrays.asList(new Row(1, "Alice"), new Row(2, "Bob")), schema);
```

</div>
<div class="tab-content" id="group13-scala">

```scala
  from pyspark.sql.types import StructType, StructField, IntegerType, StringType
  val schema = StructType(Seq(
      StructField("id", IntegerType, true),
      StructField("name", StringType, true)
  ))
  val df = spark.createDataFrame(Seq((1, "Alice"), (2, "Bob")), schema)
```

</div>
</div>

## Datasets: Typed Distributed Collections

Datasets are similar to DataFrames but provide compile-time type safety.

- **Creating Datasets:**

<div class="tabs-container" data-tabs-group="group14">
<div class="tabs-header">
      <button class="tab-button" data-tab="group14-java">Java</button>
      <button class="tab-button" data-tab="group14-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content  active" id="group14-java">

```java
  import org.apache.spark.sql.Encoders;
  import org.apache.spark.sql.Row;
  import org.apache.spark.sql.SparkSession;
  import java.util.Arrays;
  import java.util.List;
  
  SparkSession spark = SparkSession.builder().getOrCreate();
  List<Row> data = Arrays.asList(new Row(1, "Alice"), new Row(2, "Bob"));
  Dataset<Row> df = spark.createDataFrame(data, Encoders.bean(Row.class));
  Dataset<Row> ds = df.as("id", "name");
```

</div>
<div class="tab-content" id="group14-scala">

```scala
  from pyspark.sql import SparkSession
  val spark = SparkSession.builder().getOrCreate()
  val df = spark.createDataFrame(Seq((1, "Alice"), (2, "Bob"))).toDF("id", "name")
  val ds = df.as("id", "name")
```

</div>
</div>

- **Dataset Operations:**

<div class="tabs-container" data-tabs-group="group15">
<div class="tabs-header">
      <button class="tab-button" data-tab="group15-java">Java</button>
      <button class="tab-button" data-tab="group15-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content  active" id="group15-java">

```java
  ds.filter(ds.col("id").gt(1)).select(ds.col("name"));
```

</div>
<div class="tab-content" id="group15-scala">

```scala
  ds.filter(ds("id") > 1).select(ds("name"));
```

</div>
</div>

> Note: Datasets are only available in Scala and Java.

## Converting Between RDDs, DataFrames, and Datasets

- **RDD to DataFrame:**

<div class="tabs-container" data-tabs-group="group16">
<div class="tabs-header">
      <button class="tab-button active" data-tab="group16-python">Python</button>
      <button class="tab-button" data-tab="group16-java">Java</button>
      <button class="tab-button" data-tab="group16-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group16-python">

```python
  rdd = spark.sparkContext.parallelize([(1, "Alice"), (2, "Bob")])
  df = rdd.toDF(["id", "name"])
```

</div>
<div class="tab-content" id="group16-java">

```java
  JavaRDD<Row> rdd = spark.sparkContext().parallelize(Arrays.asList(new Row(1, "Alice"), new Row(2, "Bob")));
  Dataset<Row> df = spark.createDataFrame(rdd, Encoders.bean(Row.class));
```

</div>
<div class="tab-content" id="group16-scala">

```scala
  val rdd = spark.sparkContext.parallelize(Seq((1, "Alice"), (2, "Bob")))
  val df = rdd.toDF("id", "name")
```

</div>
</div>  
- **DataFrame to Dataset:**

<div class="tabs-container" data-tabs-group="group17">
<div class="tabs-header">
      <button class="tab-button" data-tab="group17-java">Java</button>
      <button class="tab-button" data-tab="group17-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group17-java">

```java
  Dataset<Row> df = spark.createDataFrame(Arrays.asList(new Row(1, "Alice"), new Row(2, "Bob")), Encoders.bean(Row.class));
  Dataset<Row> ds = df.as("id", "name");
```

</div>
<div class="tab-content" id="group17-scala">

```scala
  val df = spark.createDataFrame(Seq((1, "Alice"), (2, "Bob"))).toDF("id", "name")
  val ds = df.as("id", "name")
```

</div>
</div>
