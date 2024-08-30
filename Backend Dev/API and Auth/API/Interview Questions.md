### 1. **What is REST, and what are its key principles?**

**REST** (Representational State Transfer) is an architectural style used for designing networked applications. It relies on a stateless, client-server communication model where requests are made using standard HTTP methods (GET, POST, PUT, DELETE, etc.).

**Key Principles of REST:**
- **Statelessness**: Each request from a client to a server must contain all the information needed to understand and process the request. The server does not store any state between requests.
- **Client-Server Architecture**: The client and server are separate entities. The client handles the user interface and user state, while the server manages the data and logic.
- **Uniform Interface**: REST uses standard HTTP methods and URIs to provide a consistent interface for accessing resources.
- **Cacheability**: Responses from the server can be marked as cacheable, allowing clients to reuse data and reduce load on the server.
- **Layered System**: The client does not know if it is connected directly to the server or through intermediaries, such as load balancers or proxies.
- **Code on Demand (optional)**: Servers can extend client functionality by transferring executable code (e.g., JavaScript) to the client.

### 2. **What are the differences between REST and SOAP?**

**REST**:
- **Simplicity**: REST is simpler and easier to implement, using standard HTTP methods and typically JSON or XML for data exchange.
- **Flexibility**: REST allows a variety of data formats (JSON, XML, HTML, etc.) and is stateless, making it more scalable.
- **Performance**: REST is more performant due to its stateless nature and ability to cache responses.
- **Use Cases**: Commonly used in web services, mobile applications, and public APIs.

**SOAP** (Simple Object Access Protocol):
- **Complexity**: SOAP is more complex, requiring strict XML formatting and adherence to the WS-* standards.
- **Protocol**: SOAP is a protocol with built-in error handling, security (WS-Security), and transaction management, making it suitable for enterprise applications.
- **Statefulness**: SOAP can be stateful, supporting operations like transactions and sessions.
- **Use Cases**: Often used in enterprise environments for operations that require ACID compliance, high security, and formal contracts (WSDL).

### 3. **How do you design a RESTful API?**

**Best Practices for Designing RESTful APIs**:
- **Use Nouns for Resource Names**: URIs should represent resources using nouns (e.g., `/users`, `/orders`), not actions or verbs.
- **Use HTTP Methods Appropriately**:
  - **GET** for retrieving resources.
  - **POST** for creating new resources.
  - **PUT** for updating existing resources or creating resources if they don’t exist (idempotent).
  - **PATCH** for partially updating resources.
  - **DELETE** for removing resources.
- **Use HTTP Status Codes**: Use appropriate status codes to communicate the result of an API request (`200 OK`, `201 Created`, `404 Not Found`, etc.).
- **Versioning**: Version your API (e.g., `/v1/users`) to handle changes without breaking existing clients.
- **Handle Pagination, Filtering, and Sorting**: Implement pagination, filtering, and sorting to manage large datasets efficiently (`/users?page=2&limit=10`).
- **Security**: Use authentication and authorization (e.g., API keys, OAuth, JWT) to secure the API.
- **Documentation**: Provide clear API documentation to help developers understand how to use your API.

### 4. **What is idempotency, and which HTTP methods are idempotent?**

**Idempotency** refers to the property of certain operations where performing the same operation multiple times yields the same result. In the context of HTTP, an idempotent method means that making multiple identical requests will not change the state of the resource beyond the initial application.

**Idempotent HTTP Methods**:
- **GET**: Retrieving the same resource multiple times does not alter the resource.
- **PUT**: Updating a resource with the same data repeatedly results in the same resource state.
- **DELETE**: Deleting a resource multiple times results in the resource being removed (if it exists) or remains removed.
- **PATCH**: Partially updating a resource multiple times with the same data results in the same state.

**Non-Idempotent HTTP Method**:
- **POST**: Sending the same data multiple times can result in multiple resources being created, making it non-idempotent.

### 5. **What are some common HTTP status codes used in RESTful APIs?**

- **200 OK**: The request was successful, and the server returned the requested resource.
- **201 Created**: A new resource was successfully created as a result of the request.
- **204 No Content**: The request was successful, but there is no content to return (often used with DELETE).
- **400 Bad Request**: The server could not understand the request due to invalid syntax or bad data.
- **401 Unauthorized**: The client must authenticate itself to get the requested resource.
- **403 Forbidden**: The client does not have access rights to the resource.
- **404 Not Found**: The server cannot find the requested resource.
- **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.

### 6. **How do you handle pagination in a RESTful API?**

**Techniques for Implementing Pagination**:
- **Query Parameters**: Use query parameters to specify the page number and the number of items per page.
  - Example: `/users?page=2&limit=10` retrieves the second page of users with 10 users per page.
- **Link Headers**: Include links in the response headers to indicate the next, previous, first, and last pages.
  - Example: 
    ```
    Link: <https://api.example.com/users?page=1&limit=10>; rel="first",
          <https://api.example.com/users?page=3&limit=10>; rel="next",
          <https://api.example.com/users?page=10&limit=10>; rel="last"
    ```
- **Offset and Limit**: Use `offset` to indicate where the results start, and `limit` to specify the number of results to return.
  - Example: `/users?offset=20&limit=10` retrieves 10 users starting from the 21 st user.
- **Cursor-Based Pagination**: Use a cursor (a pointer to a specific record in the result set) for efficient pagination, especially with large datasets.
  - Example: `/users?cursor=xyz123&limit=10`.

### 7. **What is HATEOAS, and how is it used in RESTful APIs?**

**HATEOAS** (Hypermedia as the Engine of Application State) is a constraint of REST that requires the server to provide hyperlinks in its responses. These hyperlinks guide clients on what actions they can take next.

**Usage in RESTful APIs**:
- When a client requests a resource, the server responds with the resource's representation, along with links to related actions or resources.
- **Example**:
  ```json
  {
    "userId": 123,
    "name": "John Doe",
    "links": [
      {
        "rel": "self",
        "href": "/users/123",
        "method": "GET"
      },
      {
        "rel": "update",
        "href": "/users/123",
        "method": "PUT"
      },
      {
        "rel": "delete",
        "href": "/users/123",
        "method": "DELETE"
      }
    ]
  }
  ```
  - Here, the response includes links to view, update, or delete the user, guiding the client on what actions can be performed.

### 8. **How do you implement security in RESTful APIs?**

**Methods for Securing RESTful APIs**:
- **API Keys**: Simple method where each request must include an API key in the request header for authentication.
- **OAuth**: A widely used authorization framework that allows third-party services to exchange access tokens without exposing user credentials.
  - **OAuth 2.0** is the most common version, allowing the use of tokens to access resources on behalf of a user.
- **JWT (JSON Web Token)**: A compact, URL-safe token that represents claims between two parties. Used for stateless authentication, where the server does not need to maintain session data.
  - **Token Structure**: Consists of a header, payload, and signature.
- **HTTPS**: Always use HTTPS to encrypt data in transit, protecting it from being intercepted by attackers.
- **Rate Limiting**: Prevent abuse by limiting the number of requests a client can make in a given period.
- **CORS (Cross-Origin Resource Sharing)**: Configure CORS policies to control which domains can access your API.

### 9. **What are the advantages and disadvantages of using REST?**

**Advantages of REST**:
- **Simplicity**: REST is easy to implement and understand, using standard HTTP methods and formats like JSON.
- **Scalability**: REST’s stateless nature makes it easier to scale horizontally across multiple servers.
- **Flexibility**: REST allows for a wide variety of data formats and is not tied to any specific protocol or architecture.
- **Performance**: REST can leverage caching, reducing server load and improving response times.

**Disadvantages of REST**:
- **Lack of State**: Since REST is stateless, each request must contain all necessary information, which can

 Lead to overhead in complex interactions.
- **Over-fetching/Under-fetching**: Clients may receive more or less data than needed, as REST APIs typically return fixed data structures.
- **Limited Security**: REST relies on HTTPS and additional layers for security, which can be less robust than SOAP’s built-in security features.

### 10. **What is the difference between PUT and PATCH?**

**PUT**:
- **Purpose**: Update an entire resource with new data. If the resource does not exist, it may be created.
- **Idempotency**: PUT is idempotent, meaning multiple identical requests will produce the same result.
- **Use Case**: Replacing a user’s profile (`PUT /users/123`) with new data.

**PATCH**:
- **Purpose**: Partially update a resource with new data. It is used when only certain fields need to be updated.
- **Idempotency**: PATCH is also idempotent, but the result depends on the provided data.
- **Use Case**: Updating just the email field of a user’s profile (`PATCH /users/123`) without affecting other fields.
