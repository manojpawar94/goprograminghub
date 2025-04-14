---
title: "Machine Learning with MLlib"
excerpt: "A guide to using MLlib for machine learning tasks in Apache Spark, including data preparation, feature engineering, and model deployment."
createdAt: "2021-05-03"
author: manoj-pawar
---

# Machine Learning with MLlib

This tutorial covers machine learning with MLlib in Apache Spark.

## Overview of MLlib

MLlib is Spark's machine learning library.

## Data Preparation for ML

### Feature Extraction

Extract features from raw data.

### Feature Transformation

Transform features to improve model performance.

## Feature Engineering and Transformations

### VectorAssembler

Combines multiple columns into a single vector column.

```python
from pyspark.ml.feature import VectorAssembler

assembler = VectorAssembler(
 inputCols=["feature1", "feature2"],
 outputCol="features")

df = assembler.transform(df)
```

### StandardScaler

Scales features to have zero mean and unit variance.

```python
from pyspark.ml.feature import StandardScaler

scaler = StandardScaler(
 inputCol="features",
 outputCol="scaledFeatures",
 withStd=True, withMean=True)

scalerModel = scaler.fit(df)
df = scalerModel.transform(df)
```

## Pipeline API

The Pipeline API allows you to chain multiple transformations and estimators together.

```python
from pyspark.ml import Pipeline

pipeline = Pipeline(stages=[assembler, scaler])

model = pipeline.fit(df)
df = model.transform(df)
```

## Supervised Learning Algorithms

### Classification (Logistic Regression, Decision Trees, Random Forest)

#### Logistic Regression

```python
from pyspark.ml.classification import LogisticRegression

lr = LogisticRegression(
 featuresCol="scaledFeatures",
 labelCol="label",
 maxIter=10)

lrModel = lr.fit(df)

predictions = lrModel.transform(df)
```

#### Decision Trees

```python
from pyspark.ml.classification import DecisionTreeClassifier

dt = DecisionTreeClassifier(
 featuresCol="scaledFeatures",
 labelCol="label")

dtModel = dt.fit(df)

predictions = dtModel.transform(df)
```

#### Random Forest

```python
from pyspark.ml.classification import RandomForestClassifier

rf = RandomForestClassifier(
 featuresCol="scaledFeatures",
 labelCol="label")

rfModel = rf.fit(df)

predictions = rfModel.transform(df)
```

### Regression Models

#### Linear Regression

```python
from pyspark.ml.regression import LinearRegression

lr = LinearRegression(
 featuresCol="scaledFeatures",
 labelCol="label",
 maxIter=10)

lrModel = lr.fit(df)

predictions = lrModel.transform(df)
```

## Unsupervised Learning

### Clustering (K-means, Hierarchical)

#### K-means

```python
from pyspark.ml.clustering import KMeans

kmeans = KMeans(
 featuresCol="scaledFeatures",
 k=2)

model = kmeans.fit(df)

predictions = model.transform(df)
```

## Dimensionality Reduction (PCA)

### PCA

```python
from pyspark.ml.feature import PCA

pca = PCA(
 inputCol="scaledFeatures",
 k=2)

model = pca.fit(df)

result = model.transform(df)
```

## Model Evaluation and Validation

### Evaluators