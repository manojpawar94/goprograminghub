---
title: "Architecture"
excerpt: "A comprehensive guide to Apache Spark - the unified analytics engine for big data processing with lightning speed"
createdAt: "2021-05-03"
author: manoj-pawar
---

## Spark Architecture

Apache Spark adopts a distributed architecture to achieve scalability and fault tolerance. The key components of the architecture are:

1.  **Driver Program**: Acts as the central coordinator, transforming user code into tasks and scheduling them across executors. The driver:

    - Contains the SparkContext which connects to a cluster manager
    - Converts user program into DAG of tasks
    - Schedules tasks on executors and monitors their execution

2.  **Cluster Manager**: Manages the allocation of resources (CPU, memory) to Spark applications. It can be:

    - **Standalone**: Spark's built-in simple cluster manager
    - **YARN**: Hadoop's resource manager for shared clusters
    - **Kubernetes**: Container orchestration for cloud-native deployments
    - **Mesos**: General cluster manager (deprecated in Spark 3.0)

3.  **Executors**: Worker nodes that execute the tasks assigned by the driver. Each executor:
    - Runs tasks in multiple threads
    - Stores computation results in memory or disk
    - Reports task status back to the driver

```shell

+-----------------------+
|      Driver Program   |
|    (SparkContext)     |
+-----------------------+
          |
          v
+-----------------------+
|    Cluster Manager    |
| (YARN, Kubernetes)    |
+-----------------------+
       /       \
      /         \
     v           v
+----------+    +----------+
| Executor |    | Executor |
|   #1     |    |   #2     |
+----------+    +----------+
```

### Resource Management

Spark can run on various cluster managers, each providing different capabilities for resource management:

- **Standalone Mode**: Simple to set up; manages resources internally.
- **YARN**: Integrates with Hadoop ecosystems to leverage existing infrastructure.
- **Kubernetes**: Utilizes containerization for efficient resource isolation and management.

### Data Flow

Spark applications follow a specific data flow:

1.  The driver program defines transformations and actions on Resilient Distributed Datasets (RDDs).
2.  These operations are converted into a directed acyclic graph (DAG).
3.  The DAG is optimized and divided into stages.
4.  Tasks from these stages are scheduled and executed on the executors.

```shell

+-----------+    +-----------+    +-----------+
|   RDD 1   | -> |   RDD 2   | -> |   RDD 3   |
+-----------+    +-----------+    +-----------+
      |                |
      v                v
+--------------+  +-----------+
|Transformation|  |  Action   |
+--------------+  +-----------+
```

### Code Examples

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

# Initialize Spark session
spark = SparkSession.builder \
    .appName("SparkExample") \
    .getOrCreate()

# Create RDD from list
data = [1, 2, 3, 4, 5]
rdd = spark.sparkContext.parallelize(data)

# Transformation: Square each element
rdd_squared = rdd.map(lambda x: x ** 2)

# Action: Collect results
result = rdd_squared.collect()
print(result)  # Output: [1, 4, 9, 16, 25]
```

</div>
<div class="tab-content" id="group1-java">

```java

import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.SparkSession;

public class SparkExample {
    public static void main(String[] args) {
        // Initialize Spark
        SparkSession spark = SparkSession.builder()
            .appName("SparkExample")
            .getOrCreate();

        JavaSparkContext sc = new JavaSparkContext(spark.sparkContext());

        // Create RDD from list
        JavaRDD<Integer> rdd = sc.parallelize(Arrays.asList(1, 2, 3, 4, 5));

        // Transformation: Square each element
        JavaRDD<Integer> squared = rdd.map(x -> x * x);

        // Action: Collect results
        List<Integer> result = squared.collect();
        System.out.println(result);  // Output: [1, 4, 9, 16, 25]
    }
}
```

</div>
<div class="tab-content" id="group1-scala">

```scala

import org.apache.spark.sql.SparkSession

object SparkExample {
  def main(args: Array[String]): Unit = {
    // Initialize Spark
    val spark = SparkSession.builder
      .appName("SparkExample")
      .getOrCreate()

    // Create RDD from list
    val data = List(1, 2, 3, 4, 5)
    val rdd = spark.sparkContext.parallelize(data)

    // Transformation: Square each element
    val squared = rdd.map(x => x * x)

    // Action: Collect results
    val result = squared.collect()
    println(result.mkString(", "))  // Output: 1, 4, 9, 16, 25
  }
}
```

   </div>
</div>

Apache Spark has revolutionized big data processing with its speed, ease of use, and versatility. Whether you're performing batch processing, real-time analytics, machine learning, or graph computations, Spark provides a unified platform that can handle diverse workloads efficiently.

In the next tutorial, we'll explore different execution modes and cluster managers in Apache Spark to help you choose the right deployment strategy for your needs.
