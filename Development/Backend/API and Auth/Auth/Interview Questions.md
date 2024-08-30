### **1. What is the difference between authentication and authorization?**
- **Answer**: 
  - **Authentication** is the process of verifying the identity of a user or entity. It determines "who you are." 
  - **Authorization** is the process of determining if the authenticated user has permission to access a resource or perform an action. It determines "what you are allowed to do."
  - **Example**: When you log into a system (authentication), the system then checks if you have the rights to access specific resources or perform actions like editing data (authorization).

### **2. What is JWT, and how does it work?**
- **Answer**: 
  - **JWT (JSON Web Token)** is a compact, URL-safe token used for transmitting claims between two parties. It consists of three parts: Header, Payload, and Signature.
  - **How it works**:
    - **Header**: Contains the token type (JWT) and signing algorithm (e.g., HMAC SHA 256).
    - **Payload**: Contains the claims, which are statements about an entity (usually the user) and additional metadata.
    - **Signature**: Created by encoding the header and payload and then signing it with a secret key or RSA private key.
    - **Usage**: The token is sent by the client in the `Authorization` header (`Bearer <token>`) with each request. The server verifies the signature to ensure the token’s integrity and authenticity.

### **3. What are the common methods of implementing authentication in web applications?**
- **Answer**: 
  - **Basic Authentication**: Credentials are sent in the `Authorization` header encoded in Base 64 with each request.
  - **Token-Based Authentication**: After successful login, the server issues a token (e.g., JWT) that the client uses for subsequent requests.
  - **OAuth 2.0**: A framework that allows third-party services to exchange tokens without exposing user credentials, often used in social logins.
  - **SAML (Security Assertion Markup Language)**: Used for Single Sign-On (SSO) in enterprise environments.
  - **Multi-Factor Authentication (MFA)**: Requires two or more verification factors, such as something you know (password) and something you have (mobile phone).

### **4. What is OAuth 2.0, and how does it differ from OAuth 1.0?**
- **Answer**:
  - **OAuth 2.0** is an authorization framework that allows third-party applications to access a user’s resources without exposing their credentials. It uses tokens to grant access.
  - **Differences from OAuth 1.0**:
    - **Simpler**: OAuth 2.0 is more straightforward and uses tokens instead of signatures for requests, making it easier to implement.
    - **More Secure**: OAuth 2.0 requires SSL/TLS, whereas OAuth 1.0 allowed plaintext communication, leading to potential vulnerabilities.
    - **Token Types**: OAuth 2.0 introduces access tokens, refresh tokens, and the concept of scopes, providing more granular control over permissions.

### **5. What is the principle of "least privilege," and why is it important in authorization?**
- **Answer**:
  - **Principle of Least Privilege**: This principle states that users and services should be granted the minimum level of access necessary to perform their tasks.
  - **Importance**:
    - **Security**: Reduces the attack surface by limiting what an attacker can do if they gain access.
    - **Minimizes Risk**: Prevents users from accidentally or maliciously performing unauthorized actions.
    - **Compliance**: Many regulations require enforcing least privilege to protect sensitive data.

### **6. How does Multi-Factor Authentication (MFA) improve security?**
- **Answer**:
  - **MFA** adds an additional layer of security by requiring two or more independent credentials before granting access. These factors typically include:
    - **Something you know**: A password or PIN.
    - **Something you have**: A physical token, mobile phone (for SMS codes or app-based authentication).
    - **Something you are**: Biometric verification, such as fingerprints or facial recognition.
  - **Improvement**:
    - **Reduces Reliance on Passwords**: Even if a password is compromised, the additional factor (s) provide a strong defense against unauthorized access.
    - **Mitigates Common Attacks**: Protects against phishing, password spraying, and other common attacks.

### **7. What is the purpose of using access tokens and refresh tokens in OAuth 2.0?**
- **Answer**:
  - **Access Token**: A short-lived token used to access protected resources. It is included in API requests to prove the identity of the client.
  - **Refresh Token**: A long-lived token that can be used to obtain a new access token without re-authenticating. This allows for continuous access without requiring the user to log in repeatedly.
  - **Purpose**:
    - **Security**: Limits the exposure of the user's credentials by not requiring them to be sent with each request.
    - **Convenience**: Allows clients to remain logged in for longer periods without asking users to re-authenticate frequently.

### **8. What are some common security vulnerabilities in authentication systems, and how can they be mitigated?**
- **Answer**:
  - **Brute Force Attacks**: Attackers attempt to guess passwords by trying many combinations.
    - **Mitigation**: Implement rate limiting, account lockout mechanisms, and use CAPTCHA after several failed attempts.
  - **Phishing Attacks**: Attackers trick users into revealing their credentials via fake login pages or deceptive emails.
    - **Mitigation**: Educate users, implement MFA, and use email filters.
  - **Session Hijacking**: Attackers steal session cookies or tokens to impersonate a user.
    - **Mitigation**: Use secure (HttpOnly, Secure) cookies, implement token expiration, and enforce HTTPS.
  - **Cross-Site Request Forgery (CSRF)**: Attackers trick users into submitting requests on their behalf.
    - **Mitigation**: Use anti-CSRF tokens and require re-authentication for sensitive actions.

### **9. What is Role-Based Access Control (RBAC), and how does it differ from Attribute-Based Access Control (ABAC)?**
- **Answer**:
  - **Role-Based Access Control (RBAC)**: Users are assigned roles, and roles are granted permissions to access resources.
    - **Example**: An "admin" role might have access to all resources, while a "user" role has limited access.
  - **Attribute-Based Access Control (ABAC)**: Access is granted based on attributes (user attributes, resource attributes, environment conditions).
    - **Example**: A user can access a document only if they are in a specific department, the document is classified as public, and it is during business hours.
  - **Differences**:
    - **RBAC** is simpler and easier to manage, suitable for environments with clear role hierarchies.
    - **ABAC** is more granular and flexible, allowing for complex access control decisions based on various attributes.

### **10. What are API keys, and how do they differ from OAuth tokens?**
- **Answer**:
  - **API Keys**: Simple tokens used to authenticate a client making API requests. They are typically sent as a query parameter or in the header of an HTTP request.
  - **OAuth Tokens**: More complex tokens that represent the identity of a user and their permissions. OAuth tokens are often JWTs and include claims that specify what actions can be performed.
  - **Differences**:
    - **API Keys**: Generally static, providing simple authentication. They do not inherently include permissions or scopes.
    - **OAuth Tokens**: Include detailed information about the user and what they are authorized to do. They are more secure and support granular access control.

### **11. How do you securely store passwords?**
- **Answer**:
  - **Hashing**: Passwords should never be stored in plain text. Instead, they should be hashed using a strong, one-way hashing algorithm like bcrypt, scrypt, or Argon 2.
  - **Salting**: A unique salt (random data) should be added to each password before hashing to protect against rainbow table attacks.
  - **Pepper**: An additional secret value known only to the server can be added to the hash, further strengthening password security.
  - **Iteration**: The hashing algorithm should be computationally intensive to slow down brute-force attacks.

### **12. What is Cross-Site Request Forgery (CSRF), and how can it be prevented?**
- **Answer**:
  - **CSRF**: An attack where an attacker tricks a user into performing actions on a web application where they are authenticated, without their consent.
  - **Prevention**:
    - **Anti-CSRF Tokens**: Include a unique token in each form submission or AJAX request that the server validates. The token ensures that the request is coming from the legitimate user.
    - **SameSite Cookies**: Set cookies with the `SameSite` attribute to ensure they are only sent with requests from the same origin.
    - **Double Submit Cookie**: Include the CSRF token in both the cookie and the request, and verify that they match.

### **13. What are the common HTTP status codes related to authentication and authorization?**
- **Answer**:
  - **401 Unauthorized**: The request requires authentication, but the client has not provided valid credentials.
  - **403 Forbidden**: The client’s credentials are valid, but they do not have