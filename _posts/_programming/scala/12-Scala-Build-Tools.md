---
title: "Scala Build Tools and Dependency Management"
excerpt: "Learn about SBT (Scala Build Tool), project structure, dependency management, and building applications."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Scala Build Tools and Dependency Management

## SBT Basics
SBT (Scala Build Tool) is the standard build tool for Scala projects.

```scala
// build.sbt - Basic structure
name := "MyProject"
version := "1.0"
scalaVersion := "2.13.8"

libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest" % "3.2.9" % Test,
  "com.typesafe.akka" %% "akka-actor" % "2.6.18"
)
```

## Project Structure
Standard SBT project structure and organization.

```plaintext
my-project/
  build.sbt           # Build definition
  project/            # Build support files
    build.properties  # SBT version
    plugins.sbt       # SBT plugins
  src/
    main/
      scala/         # Application sources
      resources/     # Application resources
    test/
      scala/         # Test sources
      resources/     # Test resources
  target/            # Generated files
```

## Dependencies Management
Managing project dependencies in SBT.

```scala
// Different ways to specify dependencies
libraryDependencies ++= Seq(
  // Group ID %% Artifact ID % Version
  "org.typelevel" %% "cats-core" % "2.6.1",
  
  // For Java libraries use single %
  "com.h2database" % "h2" % "1.4.200",
  
  // Test dependencies
  "org.scalatest" %% "scalatest" % "3.2.9" % Test,
  
  // Multiple configurations
  "org.slf4j" % "slf4j-api" % "1.7.32" % "compile->default"
)

// Resolvers for custom repositories
resolvers ++= Seq(
  "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots",
  "Custom Repository" at "http://custom.repository.com/maven"
)
```

## SBT Tasks and Settings
Defining custom tasks and settings in SBT.

```scala
// Custom task definition
lazy val hello = taskKey[Unit]("Prints Hello")
hello := {
  println("Hello!")
}

// Custom setting definition
lazy val scalaCustomVersion = settingKey[String]("Custom Scala version")
scalaCustomVersion := "2.13.8"

// Task dependencies
lazy val buildAndTest = taskKey[Unit]("Build and test")
buildAndTest := Def.sequential(
  compile,
  test
).value

// Input task
import complete.DefaultParsers._
lazy val greet = inputKey[Unit]("Greets a person")
greet := {
  val name = spaceDelimited("<name>").parsed.headOption.getOrElse("World")
  println(s"Hello, $name!")
}
```

## Building and Packaging
Common build and package commands in SBT.

```scala
// build.sbt packaging settings
packageOptions += Package.ManifestAttributes(
  "Main-Class" -> "com.example.Main"
)

// Assembly plugin for fat JARs
addSbtPlugin("com.eed3si9n" % "sbt-assembly" % "1.1.0")

assemblyMergeStrategy in assembly := {
  case PathList("META-INF", xs @ _*) => MergeStrategy.discard
  case x => MergeStrategy.first
}
```

## Multi-Project Builds
Managing multiple projects in a single build.

```scala
// Root project
lazy val root = (project in file("."))
  .aggregate(core, api)
  .settings(
    name := "my-project"
  )

// Sub-projects
lazy val core = (project in file("core"))
  .settings(
    name := "my-project-core",
    libraryDependencies += "org.typelevel" %% "cats-core" % "2.6.1"
  )

lazy val api = (project in file("api"))
  .dependsOn(core)
  .settings(
    name := "my-project-api",
    libraryDependencies += "com.typesafe.akka" %% "akka-http" % "10.2.7"
  )
```

## Testing Configuration
Setting up testing frameworks and configurations.

```scala
// Test framework selection
testFrameworks += new TestFramework("org.scalatest.tools.Framework")

// Test options
Test / testOptions += Tests.Argument("-oD")

// Fork tests in a separate JVM
Test / fork := true

// JVM options for tests
Test / javaOptions ++= Seq(
  "-Xms512M",
  "-Xmx2G",
  "-XX:MaxPermSize=2048M"
)
```

## Common SBT Commands
Frequently used SBT commands for development.

```plaintext
# Basic commands
sbt compile        # Compile the project
sbt test          # Run tests
sbt run           # Run the application
sbt package       # Create a JAR file

# Dependency management
sbt update        # Update dependencies
sbt dependencies  # Show dependency tree
sbt evicted       # Show conflict resolution

# Continuous development
sbt ~compile      # Continuous compilation
sbt ~test         # Continuous testing

# Clean and build
sbt clean         # Clean generated files
sbt reload        # Reload build definition
```

## Publishing
Configuring project publishing settings.

```scala
// Publishing settings
publishTo := Some(
  if (isSnapshot.value)
    "Sonatype Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"
  else
    "Sonatype Releases" at "https://oss.sonatype.org/service/local/staging/deploy/maven2"
)

// PGP signing
usePgpKeys := true
pgpSigningKey := Some("YOUR-KEY-ID")

// Publishing credentials
credentials += Credentials(
  "Sonatype Nexus Repository Manager",
  "oss.sonatype.org",
  "your-username",
  "your-password"
)
```