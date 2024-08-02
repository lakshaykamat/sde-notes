# Introduction to MongoDB

## What is MongoDB?

MongoDB is a NoSQL database that provides high performance, high availability, and easy scalability. It is a document-oriented database which means data is stored in flexible, JSON-like documents.

## Understanding NoSQL Databases

### Differences Between SQL and NoSQL Databases

- **Data Model**:
  - **SQL**: Uses a structured schema with tables, rows, and columns.
  - **NoSQL**: Uses flexible schemas, data can be stored in documents, key-value pairs, wide-column stores, or graphs.

- **Schema**:
  - **SQL**: Schema is predefined and rigid.
  - **NoSQL**: Schema is dynamic and flexible.

- **Scalability**:
  - **SQL**: Vertically scalable (requires increasing hardware capacity).
  - **NoSQL**: Horizontally scalable (can add more servers to handle increased load).

- **Transactions**:
  - **SQL**: Supports ACID transactions (Atomicity, Consistency, Isolation, Durability).
  - **NoSQL**: Some NoSQL databases support ACID, but many prioritize availability and partition tolerance.

- **Examples**:
  - **SQL**: MySQL, PostgreSQL, Oracle.
  - **NoSQL**: MongoDB, Cassandra, Redis, CouchDB.

## Basic Concepts

### Databases
A MongoDB server can have multiple databases. Each database has its own collections.

### Collections
Collections are analogous to tables in relational databases. A collection stores a group of documents.

### Documents
Documents are the basic unit of data in MongoDB, stored in BSON format. Each document is a set of key-value pairs.

### Fields
Fields are key-value pairs in a document. The keys are strings, and the values can be various data types (strings, numbers, arrays, objects, etc.).

## Installation

### Installing MongoDB Locally
1. **Download**: Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the appropriate version for your operating system.
2. **Install**: Follow the installation instructions for your operating system.
3. **Run MongoDB**:
    ```sh
    mongod
    ```
4. **MongoDB Shell**: Open another terminal window and start the MongoDB shell:
    ```sh
    mongo
    ```

### Using MongoDB Atlas
1. **Sign Up**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account.
2. **Create a Cluster**: Follow the instructions to create a new cluster.
3. **Connect to Cluster**: Use the connection string provided to connect to your cluster.

## Basic CRUD Operations

### Create
- **Insert a Single Document**:
    ```js
    db.collection.insertOne({ name: "Alice", age: 25, city: "New York" })
    ```
- **Insert Multiple Documents**:
    ```js
    db.collection.insertMany([
      { name: "Bob", age: 30, city: "San Francisco" },
      { name: "Charlie", age: 35, city: "Los Angeles" }
    ])
    ```

### Read
- **Find All Documents**:
    ```js
    db.collection.find()
    ```
- **Find with a Query**:
    ```js
    db.collection.find({ age: { $gt: 25 } })
    ```
- **Find One Document**:
    ```js
    db.collection.findOne({ name: "Alice" })
    ```

### Update
- **Update a Single Document**:
    ```js
    db.collection.updateOne({ name: "Alice" }, { $set: { age: 26 } })
    ```
- **Update Multiple Documents**:
    ```js
    db.collection.updateMany({ city: "New York" }, { $set: { city: "NYC" } })
    ```

### Delete
- **Delete a Single Document**:
    ```js
    db.collection.deleteOne({ name: "Alice" })
    ```
- **Delete Multiple Documents**:
    ```js
    db.collection.deleteMany({ age: { $lt: 30 } })
    ```

## Indexing

- **Create an Index**:
    ```js
    db.collection.createIndex({ name: 1 })
    ```
- **List Indexes**:
    ```js
    db.collection.getIndexes()
    ```
- **Drop an Index**:
    ```js
    db.collection.dropIndex("indexName")
    ```

## Aggregation

- **Simple Aggregation Pipeline**:
    ```js
    db.collection.aggregate([
      { $match: { status: "A" } },
      { $group: { _id: "$city", total: { $sum: "$amount" } } }
    ])
    ```

## Conclusion

MongoDB is a powerful, flexible, and scalable NoSQL database suitable for various applications. Its document-oriented nature allows for easy handling of complex data structures, making it a popular choice among developers.

For more detailed information, refer to the [MongoDB Documentation](https://docs.mongodb.com/).
