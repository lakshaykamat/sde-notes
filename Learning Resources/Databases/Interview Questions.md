## Database Interview Questions and Answers

### 1. What is DBMS and what is its utility?

DBMS stands for Database Management System. It is a software system that enables users to create, maintain, control and access a database efficiently. DBMS provides an interface for performing various operations such as inserting, deleting, updating data in a database. It helps overcome issues like data redundancy, inconsistency and makes data management more organized and secure compared to traditional file-based systems.

### 2. What are the advantages of DBMS over file-based systems?

Some key advantages of DBMS over file-based systems include:

- Reduced data redundancy and inconsistency
- Easier data access and management 
- Enforced data integrity
- Atomicity of updates
- Ability to handle concurrent access by multiple users
- Improved data security and privacy

### 3. What is a database?

A database is an organized, consistent and logical collection of interrelated data that can be easily accessed, managed and updated. It typically consists of one or more tables, where each table contains a set of related data organized into rows and columns. The columns represent attributes or fields, while each row represents a record or tuple.

### 4. What are the different types of database models?

The main types of database models are:

1. **Hierarchical model** - Data is organized into a tree-like structure with parent-child relationships.

2. **Network model** - Allows for multiple parent-child relationships, forming a graph-like structure.

3. **Relational model** - Data is stored in tables with rows and columns. Tables can be related to each other using keys.

4. **Object-oriented model** - Data and methods are encapsulated into objects which are instances of classes.

5. **Entity-relationship model** - Conceptual model that views the real world as entities and relationships[1][4].

### 5. What is a primary key and a foreign key?

A **primary key** is a column or a set of columns that uniquely identifies each row in a table. It cannot contain NULL values and there can be only one primary key per table.

A **foreign key** is a column or a set of columns that refers to the primary key of another table. It establishes a link between two tables, allowing data from one table to reference data in the associated table.

### 6. What is database normalization?

Database normalization is a process of organizing data in a database to reduce redundancy and dependency. It involves decomposing a table into smaller tables and defining relationships between them. The main goals are to:

1. Minimize data redundancy 
2. Eliminate insertion, update and deletion anomalies
3. Simplify queries

Some common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF and 5NF.

### 7. What is a stored procedure and a trigger?

A **stored procedure** is a set of SQL statements with an assigned name that are stored in the database. They can take parameters, perform complex operations and return values. Stored procedures help encapsulate business logic and improve performance.

A **trigger** is a special type of stored procedure that automatically executes when a specific event occurs on a table, such as an insert, update or delete operation. Triggers are commonly used to maintain data integrity and enforce business rules.

### 8. How can database performance be monitored and improved?

Database performance can be monitored and improved using techniques like:

- Regular monitoring of key metrics like CPU usage, memory, disk I/O, query times
- Optimizing slow queries using execution plans, indexing, rewriting
- Creating and maintaining indexes on frequently used columns
- Configuring database parameters for specific workloads
- Upgrading hardware components like CPU, memory, storage
- Partitioning large tables to distribute data across disks
- Performing routine maintenance tasks like vacuuming, reindexing

### 9. What are the best practices for database backup and recovery?

Best practices for database backup and recovery include:

- Taking regular full and incremental backups 
- Testing backup and restore procedures
- Deploying redundant database servers and storage
- Establishing a disaster recovery site in a separate location
- Implementing automated monitoring and alerting
- Documenting disaster recovery procedures
- Conducting regular disaster recovery testing
- Ensuring compliance with regulatory requirements

### 10. How do you restore a database from a backup?

To restore a database from a backup:

1. Identify the most recent backup to restore
2. Prepare the environment with sufficient storage space
3. Stop any services or applications accessing the database 
4. Restore the database backup using the appropriate tools
5. Verify the integrity and completeness of the restored database
6. Restart services and applications once restore is complete

### 11. What is the difference between a clustered and a non-clustered index?

A **clustered index** determines the physical order of data in a table. There can be only one clustered index per table, as the data rows themselves are stored in this order. 

A **non-clustered index**, on the other hand, maintains a separate structure from the data rows. It contains pointers to the actual data, allowing for more than one non-clustered index per table. This type of index is useful for speeding up queries that do not require the data to be in a specific order.

### 12. What is ACID compliance in databases?

ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable processing of database transactions:

- **Atomicity** ensures that all operations within a transaction are completed successfully; if not, the transaction is aborted.
  
- **Consistency** guarantees that a transaction will bring the database from one valid state to another, maintaining all predefined rules.
  
- **Isolation** ensures that transactions occur independently without interference, even if they are executed concurrently.
  
- **Durability** means that once a transaction is committed, it will remain so, even in the event of a system failure.

### 13. What is denormalization, and why is it used?

Denormalization is the process of intentionally introducing redundancy into a database by merging tables or adding redundant data. This is done to improve read performance and reduce the complexity of queries, particularly in scenarios where read operations are more frequent than write operations. While it can enhance performance, it may also lead to data anomalies and increased storage requirements.

### 14. Explain the concept of a view in a database.

A **view** is a virtual table that is based on the result of a SELECT query. It does not store data physically but provides a way to simplify complex queries, encapsulate logic, and present data in a specific format. Views can be used to restrict access to certain data or to aggregate data from multiple tables.

### 15. What is the purpose of a transaction log?

A **transaction log** is a file that records all transactions and modifications made to a database. It plays a crucial role in ensuring data integrity and recovery. In the event of a failure, the transaction log can be used to restore the database to its last consistent state by replaying or rolling back transactions.

### 16. What are the different types of relationships in databases?

In databases, there are three primary types of relationships:

1. **One-to-One**: Each record in one table corresponds to a single record in another table.
  
2. **One-to-Many**: A single record in one table can be associated with multiple records in another table.
  
3. **Many-to-Many**: Records in one table can be related to multiple records in another table, typically managed through a junction table.

### 17. What is a data warehouse?

A **data warehouse** is a centralized repository that stores large volumes of historical data from various sources. It is designed for query and analysis rather than transaction processing. Data warehouses support business intelligence activities, including reporting, data mining, and decision-making.

### 18. What is a schema in a database?

A **schema** is a logical structure that defines how data is organized in a database. It includes the definitions of tables, fields, relationships, views, indexes, and other elements. Schemas help to enforce data integrity and provide a blueprint for the database's structure.

### 19. What is the purpose of indexing in databases?

Indexing is a technique used to improve the speed of data retrieval operations on a database table. An index creates a data structure that allows for faster searches by providing a quick lookup mechanism. While indexes can significantly enhance performance, they also require additional storage space and can slow down write operations due to the need to maintain the index.

### 20. How do you ensure data integrity in a database?

Data integrity can be ensured through various methods, including:

- **Constraints**: Enforcing rules at the database level, such as primary keys, foreign keys, unique constraints, and check constraints.
  
- **Transactions**: Using ACID properties to ensure that operations are completed successfully and consistently.
  
- **Validation**: Implementing application-level validation to check data before it is entered into the database.

- **Regular Audits**: Conducting periodic checks to identify and rectify any data inconsistencies or errors.
## 11. What is the purpose of a transaction log in a database?

The transaction log records all transactions and modifications made to a database. It is crucial for ensuring data integrity and enabling recovery in case of failures. By replaying or rolling back transactions from the log, the database can be restored to its last consistent state.

Data integrity can be maintained through various methods:

- **Constraints**: Enforcing rules like primary keys, foreign keys, unique constraints, and check constraints at the database level.
- **Transactions**: Using ACID properties to ensure operations are completed successfully and consistently. 
- **Validation**: Implementing application-level validation to check data before inserting into the database.
- **Regular Audits**: Conducting periodic checks to identify and fix any data inconsistencies or errors.

## 21. What is the purpose of normalization in databases?

Normalization is the process of organizing data in a database to reduce redundancy and dependency. The main goals are:

1. Minimize data redundancy 
2. Eliminate insertion, update and deletion anomalies
3. Simplify queries

Some common normal forms are 1NF, 2NF, 3NF, BCNF, 4NF and 5NF.

A **clustered index** determines the physical order of data in a table. There can be only one clustered index per table, as the data rows themselves are stored in this order.

A **non-clustered index** maintains a separate structure from the data rows. It contains pointers to the actual data, allowing for more than one non-clustered index per table. This is useful for speeding up queries that do not require the data to be in a specific order.

## 22. What is the purpose of a view in a database?

A **view** is a virtual table based on the result of a SELECT query. It does not store data physically but provides a way to simplify complex queries, encapsulate logic, and present data in a specific format. Views can be used to restrict access to certain data or aggregate data from multiple tables.

## 23. What is the difference between a primary key and a foreign key?

A **primary key** is a column or set of columns that uniquely identifies each row in a table. It cannot contain NULL values and there can be only one primary key per table.

A **foreign key** is a column or set of columns that refers to the primary key of another table. It establishes a link between two tables, allowing data from one table to reference data in the associated table.

## 24. What is the purpose of ACID compliance in databases?

ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable processing of database transactions:

- **Atomicity** ensures all operations in a transaction are completed successfully; if not, the transaction is aborted.
- **Consistency** guarantees a transaction will bring the database from one valid state to another, maintaining all predefined rules.
- **Isolation** ensures transactions occur independently without interference, even if executed concurrently.
- **Durability** means once a transaction is committed, it will remain so, even in the event of a system failure.

## 25. What is the purpose of a data warehouse?

A **data warehouse** is a centralized repository that stores large volumes of historical data from various sources. It is designed for query and analysis rather than transaction processing. Data warehouses support business intelligence activities like reporting, data mining, and decision-making.

The three primary types of relationships in databases are:

1. **One-to-One**: Each record in one table corresponds to a single record in another table.
2. **One-to-Many**: A single record in one table can be associated with multiple records in another table. 
3. **Many-to-Many**: Records in one table can be related to multiple records in another table, typically managed through a junction table.

## 26. How do you monitor and improve database performance?

Database performance can be monitored and improved using techniques like:

- Regular monitoring of metrics like CPU usage, memory, disk I/O, query times
- Optimizing slow queries using execution plans, indexing, rewriting
- Creating and maintaining indexes on frequently used columns
- Configuring database parameters for specific workloads
- Upgrading hardware components like CPU, memory, storage
- Partitioning large tables to distribute data across disks
- Performing routine maintenance tasks like vacuuming, reindexing