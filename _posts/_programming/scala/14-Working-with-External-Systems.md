---
title: "Working with External Systems"
excerpt: "Exploring how to work with external systems in Scala, including HTTP clients and servers with Akka HTTP, database access with Slick or Doobie, and JSON processing."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## HTTP clients and servers with Akka HTTP

Akka HTTP is a library for building HTTP-based applications in Scala.

```scala
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.http.scaladsl.server.Directives._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.io.StdIn

object AkkaHttpServer {
  def main(args: Array[String]): Unit = {

    implicit val system = ActorSystem("my-system")

    val route =
      path("hello") {
        get {
          complete(HttpEntity(ContentTypes.`text/html(UTF-8)`, "<h1>Say hello to my little friend!</h1>"))
        }
      }

    val bindingFuture = Http().newServerAt("localhost", 8080).bind(route)

    println(s"Server now online. Please navigate to http://localhost:8080/hello\nPress RETURN to stop...")
    StdIn.readLine() // let it run until user presses return
    bindingFuture
      .flatMap(_.unbind()) // trigger unbinding from the port
      .onComplete(_ => system.terminate()) // and shutdown when done
  }
}
```

## Database access with Slick or Doobie

Slick and Doobie are libraries for accessing databases in Scala.

### Slick

```scala
import slick.jdbc.H2Profile.api._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Await
import scala.concurrent.duration._

object SlickExample {
  // Define a table
  class Coffees(tag: Tag) extends Table[(String, Int, Double, Int, Int)](tag, "COFFEES") {
    def name = column[String]("COF_NAME", O.PrimaryKey)
    def supID = column[Int]("SUP_ID")
    def price = column[Double]("PRICE")
    def sales = column[Int]("SALES")
    def total = column[Int]("TOTAL")
    def * = (name, supID, price, sales, total)
  }
  val coffees = TableQuery[Coffees]

  def main(args: Array[String]): Unit = {
    val db = Database.forConfig("h2mem1")
    try {
      // Create the table schema
      val setup = DBIO.seq(
        coffees.schema.create
      )

      val setupFuture = db.run(setup)
      Await.result(setupFuture, 10 seconds)

      println("DONE")
    } finally db.close
  }
}
```

### Doobie

```scala
import doobie._
import doobie.implicits._
import cats._
import cats.effect._
import cats.implicits._
import scala.concurrent.ExecutionContext.Implicits.global

object DoobieExample extends IOApp {

  val xa = Transactor.fromDriverManager[IO](
    "org.h2.Driver",     // driver classname
    "jdbc:h2:mem:testdb", // connect URL (creates an in-memory database)
    "sa",                  // user
    ""                       // password
  )

  def run(args: List[String]): IO[ExitCode] = {
    val program = for {
      _ <- sql"DROP TABLE IF EXISTS person".update.run.transact(xa)
      _ <- sql"CREATE TABLE person (id INTEGER, name VARCHAR)".update.run.transact(xa)
      _ <- sql"INSERT INTO person (id, name) VALUES (1, 'Alice'), (2, 'Bob')".update.run.transact(xa)
      names <- sql"SELECT name FROM person".query[String].to[List].transact(xa)
      _ <- IO { println(s"Names: $names") }
    } yield ()

    program.as(ExitCode.Success) // ExitCode.Success signals no error
  }
}
```

## JSON processing with Play JSON or Circe

Play JSON and Circe are libraries for working with JSON data in Scala.

### Play JSON

```scala
import play.api.libs.json._

object PlayJsonExample {
  def main(args: Array[String]): Unit = {
    val json: JsValue = Json.parse(
      """{
        "name": "Alice",
        "age": 30,
        "city": "New York"
      }""")

    val name = (json \ "name").as[String]
    val age = (json \ "age").as[Int]

    println(s"Name: $name, Age: $age")
  }
}
```

### Circe

```scala
import io.circe._, io.circe.generic.auto._, io.circe.parser._, io.circe.syntax._

case class Person(name: String, age: Int, city: String)

object CirceExample {
  def main(args: Array[String]): Unit = {
    val jsonString = """{
      "name": "Alice",
      "age": 30,
      "city": "New York"
    }"""

    val person: Either[Error, Person] = decode[Person](jsonString)

    person match {
      case Right(p) => println(s"Name: ${p.name}, Age: ${p.age}")
      case Left(error) => println(s"Error: $error")
    }
  }
}
```

## Working with files and I/O

Scala provides several ways to work with files and I/O.

```scala
import scala.io.Source
import java.io._

object FileIOExample {
  def main(args: Array[String]): Unit = {
    val filename = "example.txt"

    // Writing to a file
    val writer = new PrintWriter(new File(filename))
    writer.write("Hello, Scala!\n")
    writer.close()

    // Reading from a file
    val source = Source.fromFile(filename)
    val lines = source.getLines().toList
    source.close()