# HTTP Methods
HTTP methods (also known as HTTP verbs) define the actions that can be performed on a resource in a web service or API. Here’s a detailed explanation of each method:

### **1. GET**
- **Purpose**: Retrieve data from a server.
- **Characteristics**:
  - **Safe**: GET requests do not modify any resources on the server.
  - **Idempotent**: Multiple identical GET requests will produce the same result.
  - **Cacheable**: Responses to GET requests can be cached by the client or intermediary servers to improve performance.
- **Use Case**: Fetching data such as retrieving a list of users (`/users`) or getting the details of a specific user (`/users/{id}`).

### **2. POST**
- **Purpose**: Submit data to the server to create a new resource.
- **Characteristics**:
  - **Not Idempotent**: Multiple identical POST requests can result in multiple resources being created.
  - **Non-Safe**: POST requests modify the state of the server by creating resources.
  - **Cacheable**: POST responses are not usually cached, but they can be if explicitly indicated.
- **Use Case**: Creating a new resource such as adding a new user (`/users`) with a JSON payload containing user details.

### **3. PUT**
- **Purpose**: Update an existing resource or create a new resource if it doesn't exist.
- **Characteristics**:
  - **Idempotent**: Multiple identical PUT requests will produce the same result.
  - **Non-Safe**: PUT requests modify the state of the server.
  - **Not Cacheable**: PUT responses are not cacheable.
- **Use Case**: Updating user details (`/users/{id}`) or creating a resource at a specific URI.

### **4. PATCH**
- **Purpose**: Apply partial modifications to a resource.
- **Characteristics**:
  - **Idempotent**: Multiple identical PATCH requests will produce the same result.
  - **Non-Safe**: PATCH requests modify the state of the server.
  - **Not Cacheable**: PATCH responses are not cacheable.
- **Use Case**: Partially updating a resource, such as changing only the email address of a user (`/users/{id}`) without affecting other fields.

### **5. DELETE**
- **Purpose**: Remove a resource from the server.
- **Characteristics**:
  - **Idempotent**: Multiple identical DELETE requests will result in the same state (the resource will be deleted or already absent).
  - **Non-Safe**: DELETE requests modify the state of the server.
  - **Not Cacheable**: DELETE responses are not cacheable.
- **Use Case**: Deleting a user (`/users/{id}`) from the system.

### **6. OPTIONS**
- **Purpose**: Describe the communication options for the target resource.
- **Characteristics**:
  - **Safe**: OPTIONS requests do not modify resources on the server.
  - **Idempotent**: Multiple identical OPTIONS requests will produce the same result.
  - **Not Cacheable**: OPTIONS responses are generally not cacheable.
- **Use Case**: Determine the HTTP methods supported by a resource (`/users/{id}`) or for preflight requests in CORS (Cross-Origin Resource Sharing).

### **7. HEAD**
- **Purpose**: Similar to GET, but it only retrieves the headers, not the body, of the response.
- **Characteristics**:
  - **Safe**: HEAD requests do not modify resources on the server.
  - **Idempotent**: Multiple identical HEAD requests will produce the same result.
  - **Cacheable**: HEAD responses can be cached, similar to GET.
- **Use Case**: Checking if a resource exists or fetching metadata (like the Content-Length) before making a GET request.

### **8. TRACE**
- **Purpose**: Echoes the received request so that the client can see what is being received at the other end.
- **Characteristics**:
  - **Safe**: TRACE requests do not modify resources on the server.
  - **Idempotent**: Multiple identical TRACE requests will produce the same result.
  - **Not Cacheable**: TRACE responses are not cacheable.
- **Use Case**: Used for diagnostic purposes to see how requests are modified or handled by intermediate servers.

### **9. CONNECT**
- **Purpose**: Establishes a tunnel to the server identified by the target resource.
- **Characteristics**:
  - **Non-Safe**: CONNECT requests may establish a connection that can be used to send non-HTTP traffic.
  - **Idempotent**: Multiple identical CONNECT requests can establish the same tunnel.
  - **Not Cacheable**: CONNECT responses are not cacheable.
- **Use Case**: Used for establishing SSL/TLS connections through an HTTP proxy.

---

### **Summary of Characteristics**
- **Safe Methods**: GET, HEAD, OPTIONS, TRACE (do not modify resources on the server).
- **Idempotent Methods**: GET, PUT, DELETE, HEAD, OPTIONS, TRACE (repeating the request has the same effect as making it once).
- **Non-Idempotent Methods**: POST, PATCH (repeating the request could result in different outcomes).
- **Cacheable Methods**: GET, HEAD, POST (under specific conditions).
