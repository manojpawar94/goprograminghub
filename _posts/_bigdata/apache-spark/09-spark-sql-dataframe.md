---
title: "Spark SQL"
excerpt: "A guide to using Spark SQL for querying structured data, including SQL queries, UDFs, and performance optimization."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Spark SQL

This tutorial covers Apache Spark SQL, a module for structured data processing using SQL queries and DataFrames.

## SQL Queries on DataFrames

Spark SQL allows you to run SQL queries on DataFrames.

```python
df.createOrReplaceTempView("my_table")
result = spark.sql("SELECT * FROM my_table WHERE age > 30")
result.show()
```

## Temporary Views and Tables

You can create temporary views or tables to run SQL queries.

```python
df.createOrReplaceTempView("my_table")
```

## Catalog API and Metadata Operations

Spark SQL provides a Catalog API for managing metadata.

```python
spark.catalog.listTables()
```

## UDFs (User-Defined Functions)

You can define custom functions (UDFs) to extend SQL.

```python
from pyspark.sql.functions import udf
from pyspark.sql.types import IntegerType

def age_bucket(age):
 if age < 20:
 return "Teen"
 elif age < 60:
 return "Adult"
 else:
 return "Senior"

age_bucket_udf = udf(age_bucket, StringType())

df = df.withColumn("age_group", age_bucket_udf(df["age"]))
df.show()
```

## Window Functions

Window functions perform calculations across a set of rows.

```python
from pyspark.sql.window import Window
import pyspark.sql.functions as func

window_spec = Window.partitionBy("city").orderBy(func.col("age").desc())
df = df.withColumn("rank", func.rank().over(window_spec))
df.show()
```

## Performance Optimization Techniques

*   **Partitioning:**

    ```python
df = df.repartition(10)
    ```

*   **Caching:**

    ```python
df.cache()
    ```

## Interacting with Hive Metastore

Spark SQL can interact with Hive metastore.

1.  Configure `spark.sql.warehouse.dir` in `spark-defaults.conf