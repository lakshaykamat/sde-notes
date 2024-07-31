Sure, here's a detailed MongoDB commands cheat sheet covering various functionalities:

### Basic Commands
- **Start MongoDB Shell**
  ```bash
  mongo
  ```

- **Show Databases**
  ```javascript
  show dbs
  ```

- **Switch or Create Database**
  ```javascript
  use database_name
  ```

- **Show Collections**
  ```javascript
  show collections
  ```

### CRUD Operations
#### Create
- **Insert One Document**
  ```javascript
  db.collection_name.insertOne({
    key1: value1,
    key2: value2,
    ...
  });
  ```

- **Insert Multiple Documents**
  ```javascript
  db.collection_name.insertMany([
    { key1: value1, key2: value2, ... },
    { key1: value1, key2: value2, ... },
    ...
  ]);
  ```

#### Read
- **Find One Document**
  ```javascript
  db.collection_name.findOne({ key: value });
  ```

- **Find All Documents**
  ```javascript
  db.collection_name.find();
  ```

- **Find with Condition**
  ```javascript
  db.collection_name.find({ key: value });
  ```

- **Find with Projection**
  ```javascript
  db.collection_name.find(
    { key: value },
    { field1: 1, field2: 1, _id: 0 }
  );
  ```

- **Find with Sorting**
  ```javascript
  db.collection_name.find().sort({ key: 1 }); // 1 for ascending, -1 for descending
  ```

- **Find with Limit**
  ```javascript
  db.collection_name.find().limit(number);
  ```

- **Count Documents**
  ```javascript
  db.collection_name.countDocuments({ key: value });
  ```

#### Update
- **Update One Document**
  ```javascript
  db.collection_name.updateOne(
    { key: value }, // filter
    { $set: { key1: value1, key2: value2, ... } } // update
  );
  ```

- **Update Multiple Documents**
  ```javascript
  db.collection_name.updateMany(
    { key: value }, // filter
    { $set: { key1: value1, key2: value2, ... } } // update
  );
  ```

- **Replace One Document**
  ```javascript
  db.collection_name.replaceOne(
    { key: value }, // filter
    { key1: value1, key2: value2, ... } // new document
  );
  ```

#### Delete
- **Delete One Document**
  ```javascript
  db.collection_name.deleteOne({ key: value });
  ```

- **Delete Multiple Documents**
  ```javascript
  db.collection_name.deleteMany({ key: value });
  ```

### Indexes
- **Create Index**
  ```javascript
  db.collection_name.createIndex({ key: 1 }); // 1 for ascending, -1 for descending
  ```

- **Show Indexes**
  ```javascript
  db.collection_name.getIndexes();
  ```

- **Drop Index**
  ```javascript
  db.collection_name.dropIndex("index_name");
  ```

### Aggregation
- **Basic Aggregation**
  ```javascript
  db.collection_name.aggregate([
    { $match: { key: value } },
    { $group: { _id: "$group_key", total: { $sum: "$value_key" } } },
    { $sort: { total: -1 } }
  ]);
  ```

### Other Commands
- **Rename Collection**
  ```javascript
  db.collection_name.renameCollection("new_collection_name");
  ```

- **Drop Collection**
  ```javascript
  db.collection_name.drop();
  ```

- **Drop Database**
  ```javascript
  db.dropDatabase();
  ```

### MongoDB Shell Helpers
- **Pretty Print Results**
  ```javascript
  db.collection_name.find().pretty();
  ```

### Data Types in MongoDB
- **String**
  ```javascript
  { "name": "John" }
  ```

- **Integer**
  ```javascript
  { "age": 30 }
  ```

- **Boolean**
  ```javascript
  { "isActive": true }
  ```

- **Array**
  ```javascript
  { "tags": ["mongodb", "database", "NoSQL"] }
  ```

- **Date**
  ```javascript
  { "created_at": new Date() }
  ```

- **Embedded Document**
  ```javascript
  { "address": { "street": "123 Main St", "city": "New York" } }
  ```

- **ObjectId**
  ```javascript
  { "_id": ObjectId("507f191e810c19729de860ea") }
  ```

### Operators in MongoDB
- **Comparison Operators**
  - `$eq`: Equal to
    ```javascript
    { key: { $eq: value } }
    ```
  - `$ne`: Not equal to
    ```javascript
    { key: { $ne: value } }
    ```
  - `$gt`: Greater than
    ```javascript
    { key: { $gt: value } }
    ```
  - `$gte`: Greater than or equal to
    ```javascript
    { key: { $gte: value } }
    ```
  - `$lt`: Less than
    ```javascript
    { key: { $lt: value } }
    ```
  - `$lte`: Less than or equal to
    ```javascript
    { key: { $lte: value } }
    ```
  - `$in`: In array
    ```javascript
    { key: { $in: [value 1, value 2, ...] } }
    ```
  - `$nin`: Not in array
    ```javascript
    { key: { $nin: [value 1, value 2, ...] } }
    ```

- **Logical Operators**
  - `$and`
    ```javascript
    { $and: [ { key 1: value 1 }, { key 2: value 2 } ] }
    ```
  - `$or`
    ```javascript
    { $or: [ { key 1: value 1 }, { key 2: value 2 } ] }
    ```
  - `$not`
    ```javascript
    { key: { $not: { operator: value } } }
    ```

- **Element Operators**
  - `$exists`: Field exists
    ```javascript
    { key: { $exists: true } }
    ```
  - `$type`: Field is of specified type
    ```javascript
    { key: { $type: "string" } }
    ```

- **Array Operators**
  - `$all`: Array contains all elements
    ```javascript
    { key: { $all: [value 1, value 2, ...] } }
    ```
  - `$elemMatch`: At least one element in array matches all conditions
    ```javascript
    { key: { $elemMatch: { sub_key: value } } }
    ```

- **Update Operators**
  - `$set`: Set field value
    ```javascript
    { $set: { key: value } }
    ```
  - `$unset`: Remove field
    ```javascript
    { $unset: { key: "" } }
    ```
  - `$inc`: Increment field value
    ```javascript
    { $inc: { key: amount } }
    ```
  - `$push`: Add value to array
    ```javascript
    { $push: { key: value } }
    ```
  - `$pull`: Remove value from array
    ```javascript
    { $pull: { key: value } }
    ```

This MongoDB commands cheat sheet provides a comprehensive overview of various operations and functions, helping you to work effectively with MongoDB databases.