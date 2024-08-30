# RESTful API
![]( https://images.ctfassets.net/vwq10xzbe6iz/5sBH4Agl614xM7exeLsTo7/9e84dce01735f155911e611c42c9793f/rest-api.png )

## 1. What is a RESTful API?
- **Definition**: REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API is an application programming interface (API) that adheres to the principles of REST, allowing communication between a client and a server.
### Characteristics:
  - **Stateless**: Each request from the client to the server must contain all the information needed to understand and process the request. The server does not store any state about the client session.
  - **Client-Server Architecture**: The client and server are separate entities that communicate over a network. The client handles the user interface, while the server manages the data and logic.
  - **Cacheable**: Responses from the server can be cached by the client to improve performance. The server must indicate whether a response can be cached.
  - **Layered System**: The client is not aware if it is directly connected to the end server or an intermediary, such as a load balancer or proxy.
  - **Uniform Interface**: REST APIs have a uniform interface, often characterized by the use of standard HTTP methods and resource-based URIs.

## 2. HTTP Methods in REST
- **GET**: Retrieve data from the server. It is idempotent (calling it multiple times does not change the result) and safe (does not alter server data).
- **POST**: Send data to the server to create a new resource. Not idempotent, as calling it multiple times may create multiple resources.
- **PUT**: Update an existing resource on the server. It is idempotent.
- **DELETE**: Remove a resource from the server. It is idempotent.
- **PATCH**: Partially update a resource. It is idempotent.

#### **3. RESTful API Design Best Practices**
- **Resource Naming**: Use nouns to represent resources (e.g., `/users`, `/posts`). The URI should not include verbs.
- **Versioning**: Version your API by including the version number in the URI (e.g., `/v1/users`).
- **Error Handling**: Use standard HTTP status codes to indicate the result of the API call (e.g., `200 OK`, `404 Not Found`, `500 Internal Server Error`).
- **HATEOAS (Hypermedia as the Engine of Application State)**: Provide links to related resources in the API responses to guide the client on possible actions.
- **Statelessness**: Ensure each request is independent and contains all necessary information.

#### **4. Authentication and Authorization in REST APIs**
- **API Keys**: Simple method where the client includes an API key in the request header.
- **OAuth**: An open standard for access delegation, commonly used for token-based authentication.
- **JWT (JSON Web Token)**: A compact, URL-safe token that represents claims between two parties and is often used in stateless authentication.

#### **5. REST vs SOAP**
- **SOAP** (Simple Object Access Protocol) is another protocol for web services, but it is more complex and requires strict XML formatting. REST is simpler and can use JSON, XML, or other formats.