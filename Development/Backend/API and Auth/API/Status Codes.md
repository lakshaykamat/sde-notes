# Status Codes
### **1 xx: Informational Responses**
These status codes indicate that the request has been received and the server is continuing to process it.

- **100 Continue**: The initial part of the request has been received and the client should continue with the request or ignore if it’s already completed.
- **101 Switching Protocols**: The server is switching protocols as requested by the client, such as switching from HTTP/1.1 to WebSocket.
- **102 Processing**: The server has received and is processing the request, but no response is available yet (used in WebDAV).
- **103 Early Hints**: Provides some headers before the final HTTP message. Mainly used to improve the performance of the application by sending the most important headers first.

### **2 xx: Successful Responses**
These status codes indicate that the request was successfully received, understood, and accepted.

- **200 OK**: The request was successful, and the server has returned the requested resource or processed the action.
- **201 Created**: The request has been fulfilled, and a new resource has been created. The URI of the newly created resource is usually included in the response.
- **202 Accepted**: The request has been accepted for processing, but the processing is not yet complete.
- **203 Non-Authoritative Information**: The request was successful, but the information returned may have been modified by a proxy and is not from the origin server.
- **204 No Content**: The request was successful, but there is no content to return in the response.
- **205 Reset Content**: The request was successful, and the client should reset the view (e.g., clear a form).
- **206 Partial Content**: The server is delivering only part of the resource due to a range header sent by the client (used for resuming downloads).
- **207 Multi-Status**: The message body that follows is an XML message and can contain multiple separate response codes, depending on how many sub-requests were made (used in WebDAV).
- **208 Already Reported**: The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again (used in WebDAV).
- **226 IM Used**: The server has fulfilled a request for the resource and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

### **3 xx: Redirection Responses**
These status codes indicate that further action needs to be taken by the client to complete the request.

- **300 Multiple Choices**: There are multiple options for the resource, and the user or client can select one.
- **301 Moved Permanently**: The requested resource has been moved to a new URI, which should be used in the future.
- **302 Found**: The requested resource resides temporarily under a different URI, but the original URI should still be used for future requests.
- **303 See Other**: The response to the request can be found under a different URI, and the client should use a GET method to retrieve it.
- **304 Not Modified**: The resource has not been modified since the last request, and the client can use the cached version.
- **305 Use Proxy**: The requested resource must be accessed through the proxy provided in the response.
- **306 (Unused)**: This code was used in a previous version of the HTTP protocol but is no longer in use.
- **307 Temporary Redirect**: The resource has been temporarily moved to another URI, but the client should continue to use the original URI for future requests.
- **308 Permanent Redirect**: The resource has been permanently moved to another URI, and the client should use the new URI in the future.

### **4 xx: Client Error Responses**
These status codes indicate that the client made an error in the request.

- **400 Bad Request**: The server cannot process the request due to a client error, such as malformed request syntax.
- **401 Unauthorized**: The request requires user authentication. The client must authenticate itself to get the requested response.
- **402 Payment Required**: Reserved for future use; sometimes used for experimental purposes.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The requested resource could not be found on the server.
- **405 Method Not Allowed**: The request method is known by the server but is not supported by the target resource (e.g., using GET on a resource that only supports POST).
- **406 Not Acceptable**: The server cannot produce a response matching the list of acceptable values defined in the request's headers.
- **407 Proxy Authentication Required**: The client must first authenticate itself with the proxy.
- **408 Request Timeout**: The server timed out waiting for the request from the client.
- **409 Conflict**: The request could not be processed because of a conflict with the current state of the resource (e.g., version conflicts in editing).
- **410 Gone**: The requested resource is no longer available and will not be available again.
- **411 Length Required**: The server refuses to accept the request without a defined `Content-Length` header.
- **412 Precondition Failed**: One or more conditions in the request header fields evaluated to false, so the server won't process the request.
- **413 Payload Too Large**: The request entity is larger than the server is willing or able to process.
- **414 URI Too Long**: The URI provided was too long for the server to process.
- **415 Unsupported Media Type**: The request entity has a media type that the server or resource does not support.
- **416 Range Not Satisfiable**: The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
- **417 Expectation Failed**: The server cannot meet the requirements of the `Expect` request-header field.
- **418 I'm a teapot**: A playful error code from an April Fools' joke, indicating the server refuses to brew coffee because it is a teapot.
- **421 Misdirected Request**: The request was directed at a server that is not able to produce a response.
- **422 Unprocessable Entity**: The server understands the content type of the request entity, but it was unable to process the contained instructions (used in WebDAV).
- **423 Locked**: The resource being accessed is locked (used in WebDAV).
- **424 Failed Dependency**: The request failed due to failure of a previous request (used in WebDAV).
- **425 Too Early**: Indicates that the server is unwilling to risk processing a request that might be replayed.
- **426 Upgrade Required**: The client should switch to a different protocol, such as TLS/1.0.
- **428 Precondition Required**: The origin server requires the request to be conditional to prevent the "lost update" problem.
- **429 Too Many Requests**: The client has sent too many requests in a given amount of time ("rate limiting").
- **431 Request Header Fields Too Large**: The server is unwilling to process the request because its header fields are too large.
- **451 Unavailable For Legal Reasons**: The user requests an illegal resource, such as a web page censored by the government.

### **5 xx: Server Error Responses**
These status codes indicate that the server failed to fulfill a valid request.

- **500 Internal Server Error**: A generic error message indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.
- **501 Not Implemented**: The server either does not recognize the request method, or it lacks the ability to fulfill the request.
- **502 Bad Gateway**: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is currently unable to handle the request due to temporary overload or maintenance.
- **504 Gateway Timeout**: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
- **505 HTTP Version Not Supported**: The server does not support the HTTP version used in the request.
- **506 Variant Also Negotiates**: The server has an internal configuration error: the chosen variant resource is configured to engage in content negotiation itself.
- **507 Insufficient Storage**: The server is unable to store the representation needed to complete the request (used in WebDAV).
- **508 Loop Detected**: The server detected an infinite loop while processing a request (used in WebDAV).
- **510 Not Extended**: Further extensions to the request are required for the server to fulfill it.
- **511 Network Authentication Required**: The client needs to authenticate to gain network access.
