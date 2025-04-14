---
title: "Implicits"
excerpt: "Exploring implicits in Scala, including implicit parameters, implicit conversions, type classes, and extension methods."
createdAt: "2024-01-07"
author: "manoj-pawar"
---

## Implicit Parameters

Implicit parameters are parameters that can be automatically supplied by the compiler if they are not explicitly provided.

```scala
case class Context(requestId: String)

def logMessage(message: String)(implicit ctx: Context): Unit = {
  println(s"[${ctx.requestId}] $message")
}

implicit val requestContext = Context("12345")

logMessage("Application started") // [12345] Application started
```

## Implicit Conversions

Implicit conversions are functions that can be automatically applied by the compiler to convert a value of one type to another.

```scala
implicit def stringToInt(s: String): Int = s.toInt

val x: Int = "123"
println(x + 1) // 124
```

## Type Classes

Type classes are a way to add new behavior to existing types without modifying their source code.

```scala
trait Summable[A] {
  def sum(a: A, b: A): A
}

object Summable {
  implicit val intSummable: Summable[Int] = new Summable[Int] {
    def sum(a: Int, b: Int): Int = a + b
  }

  implicit val stringSummable: Summable[String] = new Summable[String] {
    def sum(a: String, b: String): String = a + b
  }
}

def genericSum[A](a: A, b: A)(implicit summable: Summable[A]): A = {
  summable.sum(a, b)
}

println(genericSum(1, 2)) // 3
println(genericSum("Hello", "World")) // HelloWorld
```

## Extension Methods

Extension methods allow you to add new methods to existing types.

```scala
object StringExtensions {
  implicit class StringUtils(val s: String) {
    def capitalize: String = {
      s.charAt(0).to