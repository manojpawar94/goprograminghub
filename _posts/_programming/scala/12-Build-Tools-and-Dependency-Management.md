---
title: "Build Tools and Dependency Management"
excerpt: "Exploring build tools and dependency management in Scala, with a focus on SBT (Scala Build Tool)."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## SBT (Scala Build Tool) in depth

SBT is the most widely used build tool for Scala projects. It handles compiling, testing, packaging, and dependency management.

## Project structure

A typical SBT project has the following directory structure:

```
my-project/
  src/
    main/
      scala/    # Source code
    test/
      scala/    # Test code
  build.sbt      # Build definition
```

## Managing dependencies

Dependencies are declared in the `build.sbt` file.

```scala
name := "My Project"
version := "1.0"
scalaVersion := "2.13.8"

libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.10" % Test
```

To update dependencies, run `sbt update` in the terminal.

## Building and packaging applications

To compile the project, run `sbt compile`.
To run tests, run `sbt test`.
To create a JAR file, run `sbt package`.

## Example build.sbt
```scala
name := "hello"

version := "1.0"

scalaVersion := "2.13.8"

val circeVersion = "0.14.1"

libraryDependencies ++= Seq(
  "io.circe" %% "circe-core",
  "io.circe