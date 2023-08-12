---
title: "How to execute SQL queries (Select, Update, Insert, Delete) effectively using Python?"
excerpt: "The database is an integral part of most software applications. We always try to find out what is the best way to connect to the database. Often use readily available frameworks. The one thing I have experienced often frameworks or libraries provide a lot of abstractions to make it easy for end developers to use the framework or library."
createdAt: "2021-05-03"
author: manoj-pawar
---

The database is an integral part of most software applications. We always try to find out what is the best way to connect to the database. Often use readily available frameworks. The one thing I have experienced often frameworks or library provide a lot of abstractions to make it easy for end developers to use the framework or library. But this abstraction most of the time cost more resource consumptions. So, I was looking for a high-level lightweight framework or library with minimum abstraction. I do not find a framework or library that suits my expectations and then I have started implementing my own library named **Python-Jdbc**. Let me walk you through my approach to handling the maintainability and reusability of the code with minimal abstraction.

I have defined an abstract class `Connector` which has an abstract method `get_connection()`. It acts as a database connector. We can implement the Connector class based on our database systems like MySQL, Oracle etc.

```python[class="line-numbers"]
class Connector:
    def get_connection(self):
        """It is abstract method. The implementing class must return the connection object."""
        pass

    @staticmethod
    def errors_type():
        """It is an abstract method. The implementing class must return the class extending Exception"""
        pass
```

Now the most important part is to handle the database CRUD operation in a more generic way to achieve maintainability and reusability. I have defined a class `JdbcTemplate` which required constructor dependency of the `Connector` implementation class instance. It has the following methods,

- **`query_for_tuple`**: It executes query and returns database record as a tuple.
- **`query_for_tuple_list`**: It executes query and returns database records as a list of tuples.
- **`query_for_dict`**: It executes query and returns database record as a dictionary where the key is the name of the column and value is the actual value of the column.
- **`query_for_dict_list`**: It executes query and returns database record as a list of dictionar, where the key is the name of the column and value is the actual value of the column.
- **`update`**: To execute the Insert, Update and Delete queries. It returns the last row id.

```python[class="line-numbers"]
import logging as log

from jdbc.connector import Connector

ERROR_LOG_MSG = "error '%s' occurred while executing %s query"

class JdbcTemplate:

    def __init__(self, connector: Connector):
        self.database_connector = connector

    def query_for_tuple(self, query, parameters=()):
        """It executes query and returns database record as a tuple."""
        try:
            connection = self.database_connector.get_connection()
            cursor = create_and_execute_cursor(connection, query, parameters)
            row = cursor.fetchone()
            return row
        except self.database_connector.errors_type() as e:
            log.error(ERROR_LOG_MSG, e.msg, query, exc_info=True)
            return ()
        finally:
            close_cursor(self.database_connector, cursor)
            close_connection(self.database_connector, connection)

    def query_for_tuple_list(self, query, parameters=()):
        """It executes query and returns database records as a list of tuples."""
        try:
            connection = self.database_connector.get_connection()
            cursor = create_and_execute_cursor(connection, query, parameters)
            return cursor.fetchall()
        except self.database_connector.errors_type() as e:
            log.error(ERROR_LOG_MSG, e.msg, query, exc_info=True)
            return ()
        finally:
            close_cursor(self.database_connector, cursor)
            close_connection(self.database_connector, connection)

    def query_for_dict(self, query, parameters=()):
        """It executes query and returns database record as a dictionary."""
        try:
            connection = self.database_connector.get_connection()
            cursor = create_and_execute_cursor(connection, query, parameters)
            fields = [field_md[0] for field_md in cursor.description]
            return dict(zip(fields, cursor.fetchone()))
        except self.database_connector.errors_type() as e:
            log.error(ERROR_LOG_MSG, e.msg, query, exc_info=True)
            return ()
        finally:
            close_cursor(self.database_connector, cursor)
            close_connection(self.database_connector, connection)

    def query_for_dict_list(self, query, parameters=()):
        """It executes query and returns database record as a list of dictionary."""
        try:
            connection = self.database_connector.get_connection()
            cursor = create_and_execute_cursor(connection, query, parameters)
            fields = [field_md[0] for field_md in cursor.description]
            return [dict(zip(fields, row)) for row in cursor.fetchall()]
        except self.database_connector.errors_type() as e:
            log.error(ERROR_LOG_MSG, e.msg, query, exc_info=True)
            return ()
        finally:
            close_cursor(self.database_connector, cursor)
            close_connection(self.database_connector, connection)

    def update(self, query, parameters=()):
        """It executes insert, update queries."""
        try:
            connection = self.database_connector.get_connection()
            cursor = create_and_execute_cursor(connection, query, parameters)
            connection.commit()
            return cursor.lastrowid
        except self.database_connector.errors_type() as e:
            log.error(ERROR_LOG_MSG, e.msg, query, exc_info=True)
            return -1
        finally:
            close_cursor(self.database_connector, cursor)
            close_connection(self.database_connector, connection)


def create_and_execute_cursor(connection, query, parameters):
    cursor = connection.cursor(prepared=True)
    if not parameters:
        cursor.execute(query)
    else:
        cursor.execute(query, parameters)
    return cursor


def close_connection(connector: Connector, connection):
    """It closes the database connection."""
    if connection is not None:
        try:
            connection.close()
        except connector.errors_type() as e:
            log.error("error occurred while closing connection ", e.msg, exc_info=True)


def close_cursor(connector: Connector, cursor):
    """It closes the database cursor"""
    if cursor is not None:
        try:
            cursor.close()
        except connector.errors_type() as e:
            log.error("error occurred while closing cursor ", e.msg, exc_info=True)
```

The `MySQLConnector` class inherits the superclass `Connector`. It provides the implements with the abstract method `get_connection()` to return the database connection.

```python[class="line-numbers"]
from jdbc.connector import Connector
from mysql.connector.errors import Error
from mysql.connector.pooling import MySQLConnectionPool, PooledMySQLConnection


class MySQLConnector(Connector):

    def __init__(self, config, pool_name="default_pool", pool_size=10):
        self.__connPool = MySQLConnectionPool(pool_name=pool_name,
                                              **config,
                                              pool_size=pool_size)

    def get_connection(self) -> PooledMySQLConnection:
        """It returns the PooledMySQLConnection object"""
        return self.__connPool.get_connection()

    @staticmethod
    def errors_type():
        """It returns the mysql.connector.errors.Error"""
        return Error
```

As we see above implementation is lightweight and provides very minimal abstraction. Let's see how can use our application to perform CURD operation on the database.

```python[class="line-numbers"]
from jdbc.mysql_connector import MySQLConnector
from jdbc.template import JdbcTemplate

config = {
    "host": "goprogramminghub.com",
    "port": 3306,
    "database": "goprogramminghub",
    "user": "goprogramminghub_user",
    "password": ""
}

# initialize MySQLConnector and JdbcTemplate once in program (in __init__.py)
mysql_conn = MySQLConnector(config)
jdbcTemplate = JdbcTemplate(mysql_conn)

# query to retrieve tuple
jdbcTemplate.query_for_tuple("select * from users where user_id = %s ", (1234,))

# query to retrieve list of tuples
jdbcTemplate.query_for_tuple_list("select * from users where is_active = %s", ('A',))

# query to retrieve dictionary
jdbcTemplate.query_for_dict("select * from users where user_id = %s", (1234,))

# query to retrieve list of dictionary
jdbcTemplate.query_for_dict_list("select * from users where is_active = %s", ('A',))

# query to insert record
jdbcTemplate.update("Insert into users (first_nam, last_nam) values (%s, %s)", ("Manoj", "Pawar"))

# query to update record
jdbcTemplate.update("Update users set is_activev = %s where user_id = %s", ('A', 1234))
```

You can find the full implementation of above code in the below Github URL,

> **Github Repository**: [Python-Jdbc-Github-Repo](https://github.com/manojpawar94/python-jdbc)
