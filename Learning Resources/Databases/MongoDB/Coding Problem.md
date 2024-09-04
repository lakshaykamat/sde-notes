# MongoDB Coding Problems and Solutions

### 1. Insert Multiple Documents into a Collection
**Problem:** Insert multiple documents into a collection named `students` with fields `name`, `age`, and `grade`.

**Solution:**
```javascript
db.students.insertMany([
  { name: "John", age: 18, grade: "A" },
  { name: "Jane", age: 19, grade: "B" },
  { name: "Alice", age: 17, grade: "A" }
]);
```

### 2. Find Documents with a Specific Field Value
**Problem:** Find all documents in the `products` collection where the `category` field is `"electronics"`.

**Solution:**
```javascript
db.products.find({ category: "electronics" });
```

### 3. Update a Document by Adding a New Field
**Problem:** Update a document in the `users` collection to add a new field `lastLogin` with the current date.

**Solution:**
```javascript
db.users.updateOne(
  { _id: 102 },
  { $set: { lastLogin: new Date() } }
);
```

### 4. Delete Documents Based on a Condition
**Problem:** Delete all documents from the `events` collection where the `eventDate` is in the past.

**Solution:**
```javascript
db.events.deleteMany({
  eventDate: { $lt: new Date() }
});
```

### 5. Increment a Numeric Field in a Document
**Problem:** Increment the `views` field by 10 for all documents in the `articles` collection where the `status` is `"published"`.

**Solution:**
```javascript
db.articles.updateMany(
  { status: "published" },
  { $inc: { views: 10 } }
);
```

### 6. Aggregate Data Using `$group` and `$sum`
**Problem:** Create an aggregation pipeline to calculate the total sales for each `productId` in the `sales` collection.

**Solution:**
```javascript
db.sales.aggregate([
  { $group: { _id: "$productId", totalSales: { $sum: "$quantity" } } }
]);
```

### 7. Find Documents with an Array Field Matching Criteria
**Problem:** Find all documents in the `books` collection where the `authors` array contains `"John Doe"`.

**Solution:**
```javascript
db.books.find({ authors: "John Doe" });
```

### 8. Project Specific Fields from Documents
**Problem:** Find all documents in the `employees` collection and return only the `name` and `salary` fields.

**Solution:**
```javascript
db.employees.find(
  {},
  { _id: 0, name: 1, salary: 1 }
);
```

### 9. Sort Documents by a Field
**Problem:** Retrieve all documents from the `orders` collection and sort them by the `orderDate` in ascending order.

**Solution:**
```javascript
db.orders.find().sort({ orderDate: 1 });
```

### 10. Use `$lookup` to Perform a Join
**Problem:** Join the `orders` collection with the `customers` collection using the `customerId` field and return the combined details.

**Solution:**
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
]);
```

### 11. Create an Index on a Field
**Problem:** Create an index on the `username` field in the `accounts` collection to optimize query performance.

**Solution:**
```javascript
db.accounts.createIndex({ username: 1 });
```

### 12. Remove a Specific Field from All Documents
**Problem:** Remove the `temporary` field from all documents in the `sessions` collection.

**Solution:**
```javascript
db.sessions.updateMany(
  {},
  { $unset: { temporary: "" } }
);
```

### 13. Find Documents with a Range Condition
**Problem:** Find all documents in the `transactions` collection where the `amount` is between 200 and 1000.

**Solution:**
```javascript
db.transactions.find({
  amount: { $gte: 200, $lte: 1000 }
});
```

### 14. Count the Number of Documents Matching a Condition
**Problem:** Count the number of documents in the `users` collection where `isActive` is `true`.

**Solution:**
```javascript
db.users.countDocuments({ isActive: true });
```

### 15. Use `$unwind` to Flatten an Array Field
**Problem:** Write an aggregation query to unwind the `tags` array in the `posts` collection and list each tag with its associated post.

**Solution:**
```javascript
db.posts.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", posts: { $push: "$$ROOT" } } }
]);
```
