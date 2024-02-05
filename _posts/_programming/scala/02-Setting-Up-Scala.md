---
title: "Setting Up Scala Development Environment"
excerpt: "In this section, we'll guide you through the process of setting up your Scala development environment. Before you start writing Scala code, you'll need to install Scala itself and a build tool called sbt (Scala Build Tool). Let's get started!"
createdAt: "2021-05-03"
author: "manoj-pawar"
---

In this section, we'll guide you through the process of setting up your Scala development environment. Before you start writing Scala code, you'll need to install Scala itself and a build tool called sbt (Scala Build Tool). Let's get started!

### 1. Installing Scala:

#### For macOS and Linux:

1. Open a terminal window.

2. Run the following command to install Scala using the package manager (brew for macOS, or apt for Linux):

   ```bash
   brew install scala  # For macOS
   ```

   ```bash
   sudo apt-get install scala  # For Linux
   ```

#### For Windows:

1. Download the latest Scala MSI installer from the official Scala website (https://www.scala-lang.org/download/).

2. Run the installer and follow the on-screen instructions.

3. After installation, open a command prompt and type:

   ```bash
   scala -version
   ```

   This should display the installed Scala version, confirming a successful installation.

### 2. Installing sbt (Scala Build Tool):

#### For macOS and Linux:

1. Open a terminal window.

2. Run the following commands to install sbt:

   ```bash
   echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
   ```

   ```bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
   ```

   ```bash
   sudo apt-get update
   ```

   ```bash
   sudo apt-get install sbt
   ```

#### For Windows:

1. Download the latest sbt MSI installer from the official sbt website (https://www.scala-sbt.org/download.html).

2. Run the installer and follow the on-screen instructions.

3. After installation, open a command prompt and type:

   ```bash
   sbt sbtVersion
   ```

   This should display the installed sbt version, confirming a successful installation.

### 3. Configuring the Development Environment:

1. Create a new directory for your Scala project:

   ```bash
   mkdir MyScalaProject
   cd MyScalaProject
   ```

2. Inside your project directory, create a simple Scala project configuration file named `build.sbt`:

   ```scala
   name := "MyScalaProject"
   version := "1.0"
   scalaVersion := "2.13.8"
   ```

   Adjust the Scala version according to your installation.

3. Open a terminal/command prompt in your project directory and run sbt:

   ```bash
   sbt
   ```

4. You'll enter the sbt interactive shell. You can now start compiling and running Scala code within this environment.

Congratulations! You've successfully set up your Scala development environment. In the next section, we'll explore basic Scala syntax and write your first Scala program. Happy coding!