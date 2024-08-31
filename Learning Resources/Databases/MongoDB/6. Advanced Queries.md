# Complex Queries in MongoDB

## Introduction

MongoDB supports a variety of complex queries to enable powerful data retrieval and manipulation. These queries go beyond basic CRUD operations and include features like filtering, projection, aggregation, and indexing. Understanding how to construct and optimize these queries is essential for efficient data handling in MongoDB.

## Query Operators

### Comparison Operators

- **$eq**: Matches values that are equal to a specified value.
    ```js
    db.collection.find({ field: { $eq: value } })
    ```
- **$ne**: Matches values that are not equal to a specified value.
    ```js
    db.collection.find({ field: { $ne: value } })
    ```
- **$gt**: Matches values that are greater than a specified value.
    ```js
    db.collection.find({ field: { $gt: value } })
    ```
- **$gte**: Matches values that are greater than or equal to a specified value.
    ```js
    db.collection.find({ field: { $gte: value } })
    ```
- **$lt**: Matches values that are less than a specified value.
    ```js
    db.collection.find({ field: { $lt: value } })
    ```
- **$lte**: Matches values that are less than or equal to a specified value.
    ```js
    db.collection.find({ field: { $lte: value } })
    ```
- **$in**: Matches any of the values specified in an array.
    ```js
    db.collection.find({ field: { $in: [value1, value2, value3] } })
    ```
- **$nin**: Matches none of the values specified in an array.
    ```js
    db.collection.find({ field: { $nin: [value1, value2, value3] } })
    ```

### Logical Operators

- **$and**: Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
    ```js
    db.collection.find({ $and: [ { field1: value1 }, { field2: value2 } ] })
    ```
- **$or**: Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
    ```js
    db.collection.find({ $or: [ { field1: value1 }, { field2: value2 } ] })
    ```
- **$not**: Inverts the effect of a query expression and returns documents that do not match the query expression.
    ```js
    db.collection.find({ field: { $not: { $gt: value } } })
    ```
- **$nor**: Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
    ```js
    db.collection.find({ $nor: [ { field1: value1 }, { field2: value2 } ] })
    ```

### Element Operators

- **$exists**: Matches documents that have the specified field.
    ```js
    db.collection.find({ field: { $exists: true } })
    ```
- **$type**: Selects documents if a field is of the specified type.
    ```js
    db.collection.find({ field: { $type: "string" } })
    ```

### Evaluation Operators

- **$regex**: Selects documents where values match a specified regular expression.
    ```js
    db.collection.find({ field: { $regex: /pattern/ } })
    ```
- **$expr**: Allows the use of aggregation expressions within the query language.
    ```js
    db.collection.find({ $expr: { $gt: ["$field1", "$field2"] } })
    ```

### Array Operators

- **$all**: Matches arrays that contain all elements specified in the query.
    ```js
    db.collection.find({ field: { $all: [value1, value2] } })
    ```
- **$elemMatch**: Selects documents if element in the array field matches all the specified $elemMatch conditions.
    ```js
    db.collection.find({ field: { $elemMatch: { subfield1: value1, subfield2: value2 } } })
    ```
- **$size**: Selects documents if the array field is a specified size.
    ```js
    db.collection.find({ field: { $size: 2 } })
    ```

## Aggregation Framework

### Aggregation Pipeline

The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.

- **$match**: Filters the documents to pass only the documents that match the specified condition (s) to the next pipeline stage.
    ```js
    db.collection.aggregate([
      { $match: { field: value } }
    ])
    ```

- **$group**: Groups input documents by the specified _id expression and for each distinct grouping, outputs a document.
    ```js
    db.collection.aggregate([
      { $group: { _id: "$field", total: { $sum: "$amount" } } }
    ])
    ```

- **$project**: Passes along the documents with the requested fields to the next stage in the pipeline. The specified fields can be existing fields from the input documents or newly computed fields.
    ```js
    db.collection.aggregate([
      { $project: { field1: 1, field2: 1, computedField: { $add: ["$field3", "$field4"] } } }
    ])
    ```

- **$sort**: Sorts all input documents and returns them to the pipeline in sorted order.
    ```js
    db.collection.aggregate([
      { $sort: { field: 1 } } // 1 for ascending, -1 for descending
    ])
    ```

- **$limit**: Limits the number of documents passed to the next stage in the pipeline.
    ```js
    db.collection.aggregate([
      { $limit: 5 }
    ])
    ```

- **$unwind**: Deconstructs an array field from the input documents to output a document for each element.
    ```js
    db.collection.aggregate([
      { $unwind: "$arrayField" }
    ])
    ```

- **$lookup**: Performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection for processing.
    ```js
    db.collection.aggregate([
      {
        $lookup: {
          from: "otherCollection",
          localField: "localField",
          foreignField: "foreignField",
          as: "joinedField"
        }
      }
    ])
    ```

## Query Optimization

### Indexing

- **Create Index**: Improve the performance of queries by creating indexes on fields that are frequently used in query predicates.
    ```js
    db.collection.createIndex({ field: 1 })
    ```

- **Compound Index**: Create a compound index on multiple fields to optimize queries that filter on multiple fields.
    ```js
    db.collection.createIndex({ field1: 1, field2: -1 })
    ```

- **Text Index**: Create a text index to support text search queries.
    ```js
    db.collection.createIndex({ field: "text" })
    ```

- **Geospatial Index**: Create geospatial indexes to support queries that process geospatial shapes.
    ```js
    db.collection.createIndex({ location: "2dsphere" })
    ```

### Explain Plan

- **Analyze Query Performance**: Use the explain plan to understand how MongoDB processes a query and identify performance bottlenecks.
    ```js
    db.collection.find({ field: value }).explain("executionStats")
    ```

## Conclusion

Complex queries in MongoDB allow for powerful and flexible data retrieval and manipulation. By leveraging various operators, the aggregation framework, and indexing, you can optimize your MongoDB queries for performance and scalability.

For more detailed information, refer to the [MongoDB Documentation](https://docs.mongodb.com/).
