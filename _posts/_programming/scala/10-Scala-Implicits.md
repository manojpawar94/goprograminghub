---
title: "Scala Implicits"
excerpt: "Learn about Scala's implicit parameters, conversions, and type classes for more expressive and flexible code."
createdAt: "2024-01-17"
author: "manoj-pawar"
---

# Scala Implicits

## Implicit Parameters
Implicit parameters are automatically passed by the compiler when available in scope.

```scala
// Define a context class
case class Context(userId: String, timestamp: Long)

// Function with implicit parameter
def log(message: String)(implicit context: Context): Unit = {
  println(s"[${context.userId}][${context.timestamp}] $message")
}

// Using implicit parameter
implicit val ctx = Context("user123", System.currentTimeMillis)
log("Hello, World!")  // [user123][1642434567890] Hello, World!

// Multiple implicit parameters
def processData[T](data: T)(implicit converter: T => String, ctx: Context): Unit = {
  log(converter(data))
}
```

## Implicit Conversions
Implicit conversions automatically convert one type to another when needed.

```scala
// Define classes
class Dollars(val amount: Double) {
  override def toString = f"$$$amount%.2f"
}

class Euros(val amount: Double) {
  override def toString = f"€$amount%.2f"
}

// Define implicit conversion
object CurrencyConversions {
  implicit def dollarToEuro(dollars: Dollars): Euros = {
    new Euros(dollars.amount * 0.85)  // Assuming 1 USD = 0.85 EUR
  }
}

// Using implicit conversion
import CurrencyConversions._

def processPayment(euros: Euros): Unit = {
  println(s"Processing payment of $euros")
}

val payment = new Dollars(100.0)
processPayment(payment)  // Automatically converts Dollars to Euros
```

## Type Classes
Type classes provide a way to add functionality to types after they are defined.

```scala
// Define a type class
trait Printable[A] {
  def format(value: A): String
}

// Type class instances
object PrintableInstances {
  implicit val stringPrintable: Printable[String] = new Printable[String] {
    def format(value: String): String = value
  }
  
  implicit val intPrintable: Printable[Int] = new Printable[Int] {
    def format(value: Int): String = value.toString
  }
}

// Interface syntax
object PrintableSyntax {
  implicit class PrintableOps[A](value: A) {
    def format(implicit printable: Printable[A]): String = {
      printable.format(value)
    }
  }
}

// Using type classes
import PrintableInstances._
import PrintableSyntax._

println("Hello".format)  // Hello
println(42.format)       // 42
```

## Extension Methods
Implicits can be used to add methods to existing types.

```scala
// Extension methods for String
object StringExtensions {
  implicit class RichString(val s: String) extends AnyVal {
    def encrypt(key: Int): String = s.map(c => (c + key).toChar)
    def decrypt(key: Int): String = s.map(c => (c - key).toChar)
  }
}

// Using extension methods
import StringExtensions._

val message = "Hello"
val encrypted = message.encrypt(1)
println(encrypted)           // Ifmmp
println(encrypted.decrypt(1)) // Hello
```

## Context Bounds
Context bounds provide a shorthand syntax for implicit parameters.

```scala
// Define a type class
trait Ordering[T] {
  def compare(x: T, y: T): Int
}

// Type class instance
implicit val intOrdering: Ordering[Int] = new Ordering[Int] {
  def compare(x: Int, y: Int): Int = x - y
}

// Using context bounds
def max[T: Ordering](x: T, y: T): T = {
  val ord = implicitly[Ordering[T]]
  if (ord.compare(x, y) >= 0) x else y
}

println(max(10, 5))  // 10
```

## View Bounds (Deprecated but Important to Know)
View bounds were used for implicit conversions but are now deprecated.

```scala
// Old style with view bounds
class Container[A <% Ordered[A]] {
  def compareContents(x: A, y: A): Int = x.compare(y)
}

// Modern approach using context bounds
class ModernContainer[A: Ordering] {
  def compareContents(x: A, y: A): Int = {
    implicitly[Ordering[A]].compare(x, y)
  }
}
```

## Best Practices

```scala
// 1. Keep implicits in a clear scope
object Implicits {
  implicit val defaultContext: Context = Context("system", 0L)
  implicit val defaultTimeout: Int = 5000
}

// 2. Use implicit parameter names for clarity
def process(data: String)(implicit ctx: Context = Context("default", 0L)): Unit = {
  // Implementation
}

// 3. Avoid ambiguous implicits
object DatabaseImplicits {
  implicit val timeout: Int = 3000
}

object NetworkImplicits {
  implicit val timeout: Int = 1000
}

// Use specific imports to avoid conflicts
import DatabaseImplicits.timeout
```