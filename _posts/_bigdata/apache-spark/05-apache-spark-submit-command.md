---
title: "Spark Submit Command"
excerpt: "Easy-to-understand guide to Apache Spark execution modes and cluster managers with practical examples"
createdAt: "2025-04-13"
author: manoj-pawar
---

# Spark Submit Command - A Complete Guide

## What is spark-submit?

The `spark-submit` command is a user-friendly tool that helps you run your Spark applications on a cluster. Think of it as the main gateway to execute your Spark code, regardless of how it was written or where you want it to run.

With `spark-submit`, you can:

- Run Spark applications written in any language Spark supports (Scala, Java, Python, R, or SQL)
- Deploy your application to different types of clusters
- Set up all the resources your application needs
- Manage all the files and dependencies your application requires

## When to Use spark-submit

You should use `spark-submit` when:

- You've finished developing your Spark application and want to run it on a cluster
- You need to process large amounts of data that won't fit on a single machine
- You want to take advantage of distributed computing resources
- You need to schedule your Spark jobs to run regularly

## Basic Syntax

The basic way to use the `spark-submit` command follows this pattern:

```bash
spark-submit [options] <your-application-file> [application arguments]
```

Where:
- `[options]` are settings for Spark itself
- `<your-application-file>` is your program (like a .py file or .jar file)
- `[application arguments]` are inputs to your specific program

## Common Options Explained Simply

### Basic Options

#### --class

- **What it does**: Tells Spark which main class to run (for Java/Scala apps)
- **How to use it**: `--class org.example.MainClass`
- **When you need it**: Only for Java and Scala applications
- **Real example**: `--class org.apache.spark.examples.SparkPi`
- **Simple explanation**: This is like telling Spark which door to enter your application through

#### --name

- **What it does**: Gives your application a name you can see in the Spark UI
- **How to use it**: `--name "My Spark Application"`
- **Why it's helpful**: Makes it easier to find your application in the Spark UI
- **Real example**: `--name "Daily Customer Analytics Job"`
- **Simple explanation**: This is like putting a name tag on your application

#### --master

- **What it does**: Tells Spark where to run your application
- **How to use it**: `--master <master-url>`
- **Common options**:
  - `local[*]`: Run on your computer using all CPU cores
  - `local[n]`: Run on your computer using n CPU cores
  - `yarn`: Run on a YARN cluster
  - `spark://host:port`: Run on a Spark standalone cluster
  - `k8s://host:port`: Run on Kubernetes
- **Real example**: `--master yarn`
- **Simple explanation**: This tells Spark which "playground" to run your application in

#### --deploy-mode

- **What it does**: Decides where the driver (main control program) runs
- **How to use it**: `--deploy-mode <mode>`
- **Options**:
  - `client`: Driver runs on the machine where you submit the job (default)
  - `cluster`: Driver runs on one of the worker machines in the cluster
- **Real example**: `--deploy-mode cluster`
- **Simple explanation**: This is like choosing whether you want to control your application from your computer or let the cluster handle everything

### Resource Allocation Options

#### --driver-memory

- **What it does**: Sets how much memory the driver program gets
- **How to use it**: `--driver-memory <value>`
- **Format**: Number followed by 'm' (megabytes) or 'g' (gigabytes)
- **Real example**: `--driver-memory 4g`
- **Default**: 1g
- **Simple explanation**: This is like deciding how much brain power your application's control center gets

#### --executor-memory

- **What it does**: Sets how much memory each worker process gets
- **How to use it**: `--executor-memory <value>`
- **Format**: Number followed by 'm' (megabytes) or 'g' (gigabytes)
- **Real example**: `--executor-memory 8g`
- **Default**: 1g
- **Simple explanation**: This is like deciding how much brain power each of your workers gets

#### --executor-cores

- **What it does**: Sets how many CPU cores each worker process can use
- **How to use it**: `--executor-cores <number>`
- **Real example**: `--executor-cores 4`
- **Default**: 1
- **Simple explanation**: This is like deciding how many tasks each worker can handle at once

#### --num-executors

- **What it does**: Sets how many worker processes to start
- **How to use it**: `--num-executors <number>`
- **Real example**: `--num-executors 10`
- **When to use**: Only when using YARN
- **Simple explanation**: This is like deciding how many workers you want to hire for your job

#### --total-executor-cores

- **What it does**: Sets the total number of CPU cores to use across all workers
- **How to use it**: `--total-executor-cores <number>`
- **Real example**: `--total-executor-cores 100`
- **When to use**: Mainly in standalone mode
- **Simple explanation**: This is like setting a budget for the total computing power you want to use

### File & Environment Options

#### --jars

- **What it does**: Adds extra Java libraries your application needs
- **How to use it**: `--jars jar1.jar,jar2.jar`
- **Format**: Comma-separated list of JAR files
- **Real example**: `--jars mysql-connector.jar,custom-lib.jar`
- **Simple explanation**: This is like packing extra tools your application might need

#### --files

- **What it does**: Copies files to each worker's directory
- **How to use it**: `--files file1,file2`
- **Format**: Comma-separated list of files
- **Real example**: `--files config.json,lookup.csv`
- **Simple explanation**: This is like giving each worker a copy of important documents they need

#### --py-files

- **What it does**: Adds Python files your application needs
- **How to use it**: `--py-files file1.py,file2.zip`
- **Supports**: .py, .zip, .egg files
- **Real example**: `--py-files utils.py,libs.zip`
- **Simple explanation**: This is like packing extra Python tools your application might need

#### --archives

- **What it does**: Adds compressed files that get extracted on each worker
- **How to use it**: `--archives archive1,archive2`
- **Real example**: `--archives data.zip,models.tar.gz`
- **Simple explanation**: This is like sending packed boxes that get unpacked at each worker's station

### Configuration Options

#### --conf

- **What it does**: Sets any Spark configuration option
- **How to use it**: `--conf key=value`
- **Can be used**: Multiple times for different settings
- **Real example**: `--conf spark.executor.memory=4g --conf spark.cores.max=10`
- **Simple explanation**: This is like fine-tuning your application with custom settings

#### --properties-file

- **What it does**: Loads multiple configuration settings from a file
- **How to use it**: `--properties-file path/to/file`
- **Real example**: `--properties-file spark-config.conf`
- **Simple explanation**: This is like having all your settings in one place instead of typing them all out

## Real-World Examples

### Running a Simple Python Script

```bash
spark-submit \
  --master local[4] \
  --name "Simple Word Count" \
  word_count.py input.txt
```

This runs a word count program on your local machine using 4 CPU cores.

### Running a Java Application on YARN

```bash
spark-submit \
  --class com.example.BigDataAnalysis \
  --master yarn \
  --deploy-mode cluster \
  --executor-memory 4g \
  --num-executors 10 \
  my-application.jar \
  2023-01-01 2023-01-31
```

This runs a Java application on a YARN cluster with 10 executors, each with 4GB of memory, analyzing data for January 2023.

### Running a Python ML Application with Dependencies

```bash
spark-submit \
  --master spark://sparkmaster:7077 \
  --py-files helpers.py,ml_utils.zip \
  --files model_config.json \
  --executor-memory 8g \
  --executor-cores 4 \
  machine_learning_model.py --train
```

This runs a machine learning application on a standalone Spark cluster with helper modules and a configuration file.

## Common Problems and Solutions

### "No such file or directory"

**Problem**: Spark can't find your application file.

**Solution**: Make sure you're in the right directory or provide the full path to your file.

```bash
spark-submit /full/path/to/your/application.py
```

### "Class not found"

**Problem**: Spark can't find the main class you specified.

**Solution**: Double-check your class name and make sure it's included in your JAR file.

### "Resource allocation failed"

**Problem**: You're requesting more resources than available.

**Solution**: Reduce the memory or cores you're requesting, or try running on a bigger cluster.

### "Connection refused"

**Problem**: Spark can't connect to the cluster manager.

**Solution**: Check that your cluster is running and that you've specified the correct master URL.

## Tips for Better Performance

1. **Right-size your resources**: Don't ask for more memory or cores than you need
2. **Use cluster deploy mode** for big jobs to reduce the load on your submission machine
3. **Compress your dependencies** when possible to reduce network transfer time
4. **Use appropriate serialization** formats for your data
5. **Monitor your application** in the Spark UI to identify bottlenecks

## Next Steps

Now that you understand how to use `spark-submit`, you might want to learn about:

- Spark SQL for structured data processing
- Spark Streaming for real-time data processing
- MLlib for machine learning with Spark
- GraphX for graph processing

With the `spark-submit` command mastered, you're well on your way to becoming a Spark expert!
