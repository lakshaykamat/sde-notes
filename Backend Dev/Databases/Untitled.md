Sure, here's a detailed SQL commands cheat sheet covering a wide range of SQL functionalities:

### Basic SQL Commands
- **Create Database**
  ```sql
  CREATE DATABASE database_name;
  ```

- **Drop Database**
  ```sql
  DROP DATABASE database_name;
  ```

- **Create Table**
  ```sql
  CREATE TABLE table_name (
      column1 datatype,
      column2 datatype,
      column3 datatype,
      ...
  );
  ```

- **Drop Table**
  ```sql
  DROP TABLE table_name;
  ```

- **Alter Table**
  - Add Column
    ```sql
    ALTER TABLE table_name
    ADD column_name datatype;
    ```
  - Drop Column
    ```sql
    ALTER TABLE table_name
    DROP COLUMN column_name;
    ```
  - Modify Column
    ```sql
    ALTER TABLE table_name
    MODIFY COLUMN column_name new_datatype;
    ```

### Data Manipulation Language (DML)
- **Insert Data**
  ```sql
  INSERT INTO table_name (column1, column2, column3, ...)
  VALUES (value1, value2, value3, ...);
  ```

- **Update Data**
  ```sql
  UPDATE table_name
  SET column1 = value1, column2 = value2, ...
  WHERE condition;
  ```

- **Delete Data**
  ```sql
  DELETE FROM table_name
  WHERE condition;
  ```

- **Select Data**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

### Filtering and Sorting
- **Where Clause**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

- **Order By**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
  ```

- **Limit**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  LIMIT number;
  ```

### Functions and Operators
- **Aggregate Functions**
  - COUNT
    ```sql
    SELECT COUNT(column_name)
    FROM table_name;
    ```
  - SUM
    ```sql
    SELECT SUM(column_name)
    FROM table_name;
    ```
  - AVG
    ```sql
    SELECT AVG(column_name)
    FROM table_name;
    ```
  - MIN
    ```sql
    SELECT MIN(column_name)
    FROM table_name;
    ```
  - MAX
    ```sql
    SELECT MAX(column_name)
    FROM table_name;
    ```

- **String Functions**
  - CONCAT
    ```sql
    SELECT CONCAT(string1, string2, ...)
    FROM table_name;
    ```
  - SUBSTRING
    ```sql
    SELECT SUBSTRING(column_name, start, length)
    FROM table_name;
    ```
  - LENGTH
    ```sql
    SELECT LENGTH(column_name)
    FROM table_name;
    ```

- **Date Functions**
  - NOW
    ```sql
    SELECT NOW();
    ```
  - CURDATE
    ```sql
    SELECT CURDATE();
    ```
  - DATEDIFF
    ```sql
    SELECT DATEDIFF(date1, date2);
    ```

- **Mathematical Functions**
  - ROUND
    ```sql
    SELECT ROUND(column_name, decimal_places)
    FROM table_name;
    ```
  - ABS
    ```sql
    SELECT ABS(column_name)
    FROM table_name;
    ```
  - MOD
    ```sql
    SELECT MOD(column_name, divisor)
    FROM table_name;
    ```

- **Logical Operators**
  - AND, OR, NOT
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 AND|OR|NOT condition2;
    ```

- **Comparison Operators**
  - `=`, `<>`, `>`, `<`, `>=`, `<=`
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE column_name =|<>|>|<|>=|<= value;
    ```

- **Wildcards**
  - LIKE
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE column_name LIKE pattern;
    ```
  - IN
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE column_name IN (value1, value2, ...);
    ```
  - BETWEEN
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE column_name BETWEEN value1 AND value2;
    ```

### Advanced Queries
- **Join Statements**
  - INNER JOIN
    ```sql
    SELECT columns
    FROM table1
    INNER JOIN table2
    ON table1.common_column = table2.common_column;
    ```
  - LEFT JOIN
    ```sql
    SELECT columns
    FROM table1
    LEFT JOIN table2
    ON table1.common_column = table2.common_column;
    ```
  - RIGHT JOIN
    ```sql
    SELECT columns
    FROM table1
    RIGHT JOIN table2
    ON table1.common_column = table2.common_column;
    ```
  - FULL JOIN
    ```sql
    SELECT columns
    FROM table1
    FULL OUTER JOIN table2
    ON table1.common_column = table2.common_column;
    ```

- **Subqueries**
  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE column_name = (SELECT column_name FROM another_table WHERE condition);
  ```

- **Union**
  ```sql
  SELECT column1, column2, ...
  FROM table1
  UNION
  SELECT column1, column2, ...
  FROM table2;
  ```

- **Group By**
  ```sql
  SELECT column1, COUNT(*)
  FROM table_name
  GROUP BY column1;
  ```

- **Having**
  ```sql
  SELECT column1, COUNT(*)
  FROM table_name
  GROUP BY column1
  HAVING COUNT(*) > value;
  ```

### Transactions
- **Begin Transaction**
  ```sql
  BEGIN TRANSACTION;
  ```

- **Commit Transaction**
  ```sql
  COMMIT;
  ```

- **Rollback Transaction**
  ```sql
  ROLLBACK;
  ```

### Indexes
- **Create Index**
  ```sql
  CREATE INDEX index_name
  ON table_name (column_name);
  ```

- **Drop Index**
  ```sql
  DROP INDEX index_name;
  ```

### Views
- **Create View**
  ```sql
  CREATE VIEW view_name AS
  SELECT column1, column2, ...
  FROM table_name
  WHERE condition;
  ```

- **Drop View**
  ```sql
  DROP VIEW view_name;
  ```

### Stored Procedures and Triggers
- **Create Stored Procedure**
  ```sql
  CREATE PROCEDURE procedure_name (parameters)
  BEGIN
    SQL statements;
  END;
  ```

- **Execute Stored Procedure**
  ```sql
  EXEC procedure_name (parameters);
  ```

- **Create Trigger**
  ```sql
  CREATE TRIGGER trigger_name
  BEFORE|AFTER INSERT|UPDATE|DELETE
  ON table_name
  FOR EACH ROW
  BEGIN
    SQL statements;
  END;
  ```

This cheat sheet covers the most commonly used SQL commands and concepts, providing a solid foundation for working with SQL databases.