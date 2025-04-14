---
title: "Graph Processing with GraphX"
excerpt: "A guide to using GraphX for graph processing tasks in Apache Spark, including graph creation, manipulation, and algorithms."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Graph Processing with GraphX

This tutorial covers graph processing with GraphX in Apache Spark.

## Graph Concepts in Spark

### Vertices

Represented by a unique ID and attributes.

### Edges

Represented by a source vertex ID, a destination vertex ID, and attributes.

## Creating and Manipulating Graphs

### Creating a Graph

```python
from pyspark.sql import SparkSession
from graphframes import *

spark = SparkSession.builder.appName("GraphXExample").getOrCreate()

vertices = spark.createDataFrame([
 ("1", "Alice", 34),
 ("2", "Bob", 36),
 ("3", "Charlie", 30)], ["id", "name", "age"])

edges = spark.createDataFrame([
 ("1", "2", "friend"),
 ("2", "3", "follow"),
 ("3", "1", "friend")], ["src", "dst", "relationship"])

graph = GraphFrame(vertices, edges)
```

### Graph Operators and Algorithms

#### PageRank Implementation

```python
results = graph.pageRank(resetProbability=0.15, maxIter=10)
results.vertices.show()
results.edges.show()
```

#### Connected Components

```python
result = graph.connectedComponents()
result.show()
```

#### Triangle Counting

```python
result = graph.triangleCount()
result.show()
```

## Using GraphFrames

GraphFrames is a library that provides a DataFrame-based API for graph processing.

### Motif Finding

```python
motifs = graph.find("(a)-[e]->(b); (b)-[e2]->(c)")
motifs.show()
```

### Shortest Paths

```python
results = graph.shortestPaths(landmarks=["1", "2"]