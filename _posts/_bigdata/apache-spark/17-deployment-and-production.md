---
title: "Deployment and Production"
excerpt: "A guide to deploying and managing Apache Spark applications in production environments, including cluster deployment modes, resource management, and security."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Deployment and Production

This tutorial covers deploying and managing Apache Spark applications in production environments.

## Cluster Deployment Modes (Standalone, YARN, Kubernetes, Mesos)

### Standalone Mode

Simplest deployment mode.

1.  Start the master:

    ```bash
    ./sbin/start-master.sh
    ```
2.  Start the workers:

    ```bash
    ./sbin/start-worker.sh spark://<master-url>
    ```

### YARN Mode

Runs on Hadoop YARN.

1.  Configure `yarn-site.xml`.
2.  Set `HADOOP_CONF_DIR`.
3.  Submit the application:

    ```bash
    spark-submit --class <main-class> \
 --master yarn \
 --deploy-mode cluster \
 <application-jar>
    ```

### Kubernetes Mode

Runs on Kubernetes.

1.  Create a Kubernetes cluster.
2.  Configure Spark to use Kubernetes.
3.  Submit the application:

    ```bash
    spark-submit --class <main-class> \
 --master k8s://<kubernetes-api-server-url> \
 --deploy-mode cluster \
 <application-jar>
    ```

### Mesos Mode

Runs on Apache Mesos.

1.  Configure Mesos.
2.  Submit the application:

    ```bash
    spark-submit --class <main-class> \
 --master mesos://<mesos-master-url> \
 --deploy-mode cluster \
 <application-jar>
    ```

## Resource Management

### Dynamic Allocation

Enabled by default.

### Setting Executor Cores and Memory

```
spark.executor.cores
spark.executor.memory
```

## Scheduling and Dynamic Allocation

### Fair Scheduler

Allocates resources fairly across applications.

### Dynamic Allocation

Dynamically adjusts the number of executors based on workload.

## Logging and Monitoring

### Spark UI

Access at `http://<driver-node>:4040`.

### History Server

Configured in `spark-defaults.conf`.

## Security Configuration

### Authentication

Enable authentication to secure the cluster.

### Authorization

Control access to resources based on user roles.

## High Availability Setup

### Standby Master

Configured to handle failover.

### Zoo