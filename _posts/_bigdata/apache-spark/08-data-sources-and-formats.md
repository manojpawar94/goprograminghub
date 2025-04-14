---
title: "Data Sources and Formats"
excerpt: "A guide to working with various data sources and formats in Apache Spark, including built-in sources, JDBC, and cloud storage."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Data Sources and Formats

This tutorial explores how to read data from and write data to various data sources and formats in Apache Spark.

## Built-In Data Sources (CSV, JSON, Parquet, Avro, ORC)

Spark supports several built-in data sources.

*   **CSV:**

    ```python
df = spark.read.csv("data.csv", header=True, inferSchema=True)
df.write.csv("output.csv", header=True)
    ```

*   **JSON:**

    ```python
df = spark.read.json("data.json")
df.write.json("output.json")
    ```

*   **Parquet:**

    ```python
df = spark.read.parquet("data.parquet")
df.write.parquet("output.parquet")
    ```

*   **Avro:**

    ```python
df = spark.read.format("avro").load("data.avro")
df.write.format("avro").save("output.avro")
    ```

*   **ORC:**

    ```python
df = spark.read.orc("data.orc")
df.write.orc("output.orc")
    ```

## JDBC/ODBC Connectivity

Spark can connect to databases using JDBC/ODBC.

```python
df = spark.read.format("jdbc") \
 .option("url", "jdbc:mysql://localhost:3306/mydb") \
 .option("dbtable", "mytable") \
 .option("user", "myuser") \
 .option("password", "mypassword") \
 .load()

df.write.format("jdbc") \
 .option("url", "jdbc:mysql://localhost:3306/mydb") \
 .option("dbtable", "mytable") \
 .option("user", "myuser") \
 .option("password", "mypassword") \
 .mode("append") \
 .save()
```

## Reading From and Writing to Databases

See JDBC/ODBC Connectivity.

## Working with Cloud Storage (S3, Azure Blob, GCS)

Spark can read data from and write data to cloud storage.

*   **S3:**

    ```python
df = spark.read.parquet("s3a://mybucket/data.parquet")
df.write.parquet("s3a://mybucket/output.parquet")
    ```

*   **Azure Blob:**

    ```python
df = spark.read.parquet("wasbs://mycontainer@myaccount.blob.core.windows.net/data.parquet")
df.write.parquet("wasbs://mycontainer@myaccount.blob.core.windows.net/output.parquet")
    ```

*   **GCS:**

    ```python
df = spark.read.parquet("gs://mybucket/data.parquet")
df.write.parquet("gs://mybucket/output.parquet")
    ```

## Custom Data Source Implementation

You can implement custom data sources by extending Spark's DataSource API.