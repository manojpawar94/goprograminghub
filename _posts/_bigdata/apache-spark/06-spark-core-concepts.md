---
title: "Spark Core: RDD"
excerpt: "An in-depth look at the core concepts of Apache Spark, including RDDs, partitioning, and execution model."
createdAt: "2021-05-03"
author: manoj-pawar
---

This tutorial delves into the fundamental concepts of Apache Spark's core, including Resilient Distributed Datasets (RDDs), partitioning strategies, shuffle operations, and the Spark execution model.

## Resilient Distributed Datasets (RDDs)

RDDs are the basic abstraction in Spark. They are fault-tolerant, parallel data structures that allow for distributed processing.

### Creating RDDs

RDDs can be created in several ways:

1.  **From existing collections:**

<div class="tabs-container" data-tabs-group="group1">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group1-python">Python</button>
      <button class="tab-button" data-tab="group1-java">Java</button>
      <button class="tab-button" data-tab="group1-scala">Scala</button>
      <div class="tab-indicator"></div>
 </div>

<div class="tab-content active" id="group1-python">

```python
from pyspark.sql import SparkSession
from pyspark import StorageLevel

spark = SparkSession.builder.appName("example").getOrCreate()
data = [1, 2, 3, 4, 5]
rdd = spark.sparkContext.parallelize(data)
```

</div>
<div class="tab-content" id="group1-java">

```java
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;
import org.apache.spark.storage.StorageLevel;
import java.util.Arrays;
import java.util.List;

SparkSession spark = SparkSession.builder().appName("example").getOrCreate();
List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);
JavaRDD<Integer> rdd = spark.sparkContext().parallelize(data);
```

</div>
<div class="tab-content" id="group1-scala">

```scala
import org.apache.spark.sql.SparkSession
import org.apache.spark.rdd.RDD
import org.apache.spark.storage.StorageLevel

val spark = SparkSession.builder.appName("example").getOrCreate()
val data = Seq(1, 2, 3, 4, 5)
val rdd = spark.sparkContext.parallelize(data)
```

</div>
</div>

2.  **From external datasets:**

<div class="tabs-container" data-tabs-group="group2">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group2-python">Python</button>
      <button class="tab-button" data-tab="group2-java">Java</button>
      <button class="tab-button" data-tab="group2-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
    
<div class="tab-content active" id="group2-python">

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("example").getOrCreate()
rdd = spark.sparkContext.textFile("data.txt")
```

</div>
<div class="tab-content" id="group2-java">

```java
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.SparkSession;

SparkSession spark = SparkSession.builder().appName("example").getOrCreate();
JavaRDD<String> rdd = spark.sparkContext().textFile("data.txt");
```

</div>
<div class="tab-content" id="group2-scala">

```scala
import org.apache.spark.sql.SparkSession
import org.apache.spark.rdd.RDD

val spark = SparkSession.builder.appName("example").getOrCreate()
val rdd = spark.sparkContext.textFile("data.txt")
```

</div>
</div>

### RDD Operations (Transformations and Actions)

RDD operations are divided into two types: transformations and actions.

#### Transformations

Transformations create new RDDs from existing ones. They are lazily evaluated.

Examples:

- `map()`: Applies a function to each element of the RDD.

<div class="tabs-container" data-tabs-group="group3">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group3-python">Python</button>
      <button class="tab-button" data-tab="group3-java">Java</button>
      <button class="tab-button" data-tab="group3-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group3-python">

```python
rdd2 = rdd.map(lambda x: x * 2)
```

</div>
<div class="tab-content" id="group3-java">

```java
JavaRDD<Integer> rdd2 = rdd.map(x -> x * 2);
```

</div>
<div class="tab-content" id="group3-scala">

```scala
val rdd2 = rdd.map(x => x * 2)
```

</div>
</div>

- `filter()`: Filters elements based on a condition.

<div class="tabs-container" data-tabs-group="group4">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group4-python">Python</button>
      <button class="tab-button" data-tab="group4-java">Java</button>
      <button class="tab-button" data-tab="group4-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group4-python">

```python
rdd2 = rdd.filter(lambda x: x % 2 == 0)
```

</div>
<div class="tab-content" id="group4-java">

```java
JavaRDD<Integer> rdd2 = rdd.filter(x -> x % 2 == 0);
```

</div>
<div class="tab-content" id="group4-scala">

```scala
val rdd2 = rdd.filter(x => x % 2 == 0)
```

</div>
</div>

- `flatMap()`: Applies a function that returns a list, and then flattens the results.

<div class="tabs-container" data-tabs-group="group5">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group5-python">Python</button>
      <button class="tab-button" data-tab="group5-java">Java</button>
      <button class="tab-button" data-tab="group5-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group5-python">

```python
rdd2 = rdd.flatMap(lambda x: [x, x * 2])
```

</div>
<div class="tab-content" id="group5-java">

```java
JavaRDD<Integer> rdd2 = rdd.flatMap(x -> Arrays.asList(x, x * 2));
```

</div>
<div class="tab-content" id="group5-scala">

```scala
val rdd2 = rdd.flatMap(x => Seq(x, x * 2))
```

</div>
</div>

- `reduceByKey()`: Merges the values for each key using a reducer function.

<div class="tabs-container" data-tabs-group="group6">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group6-python">Python</button>
      <button class="tab-button" data-tab="group6-java">Java</button>
      <button class="tab-button" data-tab="group6-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>

<div class="tab-content active" id="group6-python">

```python
rdd2 = rdd.map(lambda x: (x % 2, x)) \
          .reduceByKey(lambda a, b: a + b)
```

</div>
<div class="tab-content" id="group6-java">

```java
JavaPairRDD<Integer, Integer> rdd2 = rdd.mapToPair(x -> new Tuple2<>(x % 2, x))
                                        .reduceByKey((a, b) -> a + b);
```

</div>
<div class="tab-content" id="group6-scala">

```scala
val rdd2 = rdd.map(x => (x % 2, x))
              .reduceByKey(_ + _)
```

</div>
</div>

- `sortByKey()`: Sorts the RDD by key.
<div class="tabs-container" data-tabs-group="group7">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group7-python">Python</button>
      <button class="tab-button" data-tab="group7-java">Java</button>
      <button class="tab-button" data-tab="group7-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group7-python">

```python
rdd2 = rdd.map(lambda x: (x % 2, x)) \
            .sortByKey()
```

</div>
<div class="tab-content" id="group7-java">

```java
JavaPairRDD<Integer, Integer> rdd2 = rdd.mapToPair(x -> new Tuple2<>(x % 2, x))
                                        .sortByKey();
```

</div>
<div class="tab-content" id="group7-scala">

```scala
val rdd2 = rdd.map(x => (x % 2, x))
              .sortByKey()
```

</div>
</div>

#### Actions

Actions trigger the execution of the RDD computation graph and return a value.

Examples:

- `collect()`: Returns all elements of the RDD to the driver.

<div class="tabs-container" data-tabs-group="group8">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group8-python">Python</button>
      <button class="tab-button" data-tab="group8-java">Java</button>
      <button class="tab-button" data-tab="group8-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group8-python">

```python
result = rdd.collect()
```

</div>
<div class="tab-content" id="group8-java">

```java
List<Integer> result = rdd.collect();
```

</div>
<div class="tab-content" id="group8-scala">

```scala
val result = rdd.collect()
```

</div>
</div>

- `count()`: Returns the number of elements in the RDD.

<div class="tabs-container" data-tabs-group="group9">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group9-python">Python</button>
      <button class="tab-button" data-tab="group9-java">Java</button>
      <button class="tab-button" data-tab="group9-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group9-python">

```python
count = rdd.count()
```

</div>
<div class="tab-content" id="group9-java">

```java
long count = rdd.count();
```

</div>
<div class="tab-content" id="group9-scala">

```scala
val count = rdd.count()
```

</div>
</div>

- `first()`: Returns the first element of the RDD.

<div class="tabs-container" data-tabs-group="group10">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group10-python">Python</button>
      <button class="tab-button" data-tab="group10-java">Java</button>
      <button class="tab-button" data-tab="group10-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group10-python">

```python
first_element = rdd.first()
```

</div>
<div class="tab-content" id="group10-java">

```java
Integer firstElement = rdd.first();
```

</div>
<div class="tab-content" id="group10-scala">

```scala
val firstElement = rdd.first()
```

</div>
</div>

- `reduce()`: Reduces the elements of the RDD to a single value using a function.

<div class="tabs-container" data-tabs-group="group11">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group11-python">Python</button>
      <button class="tab-button" data-tab="group11-java">Java</button>
      <button class="tab-button" data-tab="group11-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group11-python">

```python
sum = rdd.reduce(lambda a, b: a + b)
```

</div>
<div class="tab-content" id="group11-java">

```java
int sum = rdd.reduce((a, b) -> a + b);
```

</div>
<div class="tab-content" id="group11-scala">

```scala
val sum = rdd.reduce(_ + _)
```

</div>
</div>

- `take()`: Returns the first n elements of the RDD.

<div class="tabs-container" data-tabs-group="group12">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group12-python">Python</button>
      <button class="tab-button" data-tab="group12-java">Java</button>
      <button class="tab-button" data-tab="group12-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group12-python">

```python
first_three = rdd.take(3)
```

</div>
<div class="tab-content" id="group12-java">

```java
List<Integer> firstThree = rdd.take(3);
```

</div>
<div class="tab-content" id="group12-scala">

```scala
val firstThree = rdd.take(3)
```

</div>
</div>

### Persistence and Caching

RDDs can be persisted in memory or disk to reuse them in subsequent computations.

<div class="tabs-container" data-tabs-group="group13">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group13-python">Python</button>
      <button class="tab-button" data-tab="group13-java">Java</button>
      <button class="tab-button" data-tab="group13-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group13-python">

```python
rdd.cache()
rdd.persist(StorageLevel.MEMORY_AND_DISK)
```

</div>
<div class="tab-content" id="group13-java">

```java
rdd.cache();
rdd.persist(StorageLevel.MEMORY_AND_DISK());
```

</div>
<div class="tab-content" id="group13-scala">

```scala
rdd.cache()
rdd.persist(StorageLevel.MEMORY_AND_DISK)
```

</div>
</div>

### RDD Partitioning

RDDs can be partitioned to distribute data across the cluster.

<div class="tabs-container" data-tabs-group="group14">
  <div class="tabs-header">
      <button class="tab-button active" data-tab="group14-python">Python</button>
      <button class="tab-button" data-tab="group14-java">Java</button>
      <button class="tab-button" data-tab="group14-scala">Scala</button>
      <div class="tab-indicator"></div>
    </div>
<div class="tab-content active" id="group14-python">

```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("example").getOrCreate()
rdd = spark.sparkContext.parallelize(data, num_partitions)
```

</div>
<div class="tab-content" id="group14-java">

```java
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.SparkSession;
import java.util.Arrays;
import java.util.List;

SparkSession spark = SparkSession.builder().appName("example").getOrCreate();
List<Integer> data = Arrays.asList(1, 2, 3, 4, 5);
JavaRDD<Integer> rdd = spark.sparkContext()
                            .parallelize(data, num_partitions);
```

</div>
<div class="tab-content" id="group14-scala">

```scala
import org.apache.spark.sql.SparkSession
import org.apache.spark.rdd.RDD

val spark = SparkSession.builder.appName("example").getOrCreate()
val data = Seq(1, 2, 3, 4, 5)
val rdd = spark.sparkContext
               .parallelize(data, num_partitions)
```

</div>
</div>

## Partitioning Strategies

Partitioning determines how RDDs are split across the cluster.

- **Hash Partitioning:** Elements are partitioned based on the hash of a key.
- **Range Partitioning:** Elements are partitioned based on a range of keys.

## Shuffle Operations

Shuffle operations redistribute data across partitions.

Examples:

- `groupByKey()`
- `reduceByKey()`
- `sortByKey()`
- `join()`

## Job, Stage, and Task Execution

- **Job:** A high-level set of operations executed in response to an action.
- **Stage:** A set of tasks that can be executed in parallel.
- **Task:** A unit of execution, typically a function applied to a partition of data.

## Spark Execution Model

1.  The driver program creates a SparkContext.
2.  The SparkContext connects to the cluster manager.
3.  The cluster manager allocates resources (executors).
4.  The SparkContext sends tasks to the executors.
5.  Executors execute the tasks and return results to the driver.

This tutorial provided an overview of the core concepts in Apache
