# HTTP 超文本传输协议

特点：

1. 应用层协议
2. 基于 TCP，默认端口 80
3. 请求/响应型的协议
4. 无状态
5. 可靠传输（通常基于 TPC/IP）

## HTTP 1.1

### HTTP Request

#### Method

1. OPTIONS：检查请求方式
2. GET
3. HEAD
4. POST
5. PUT
6. DELETE
7. TRACE
8. CONNECT

### HTTP Response

#### Status Code

1. 1xx：报告
2. 2xx：成功
    1. 200：OK
    2. 201：Created
    3. 204：No Content
3. 3xx：重发
    1. 301：Moved Permanently
    2. 302：Found
4. 4xx：客户端出错
    1. 400：Bad Request
    2. 401：Unauthorized
    3. 403：Forbidden
    4. 404：Not Found
5. 5xx：服务端出错
    1. 500：Internal Server Error

### HTTP headers

1. Accept：`application/json`
2. Accept-Encoding：`gzip`
3. Authorization
    1. Basic：`Basic Base64(username:password)`
    2. Bearer：`Bearer Token`
4. Location：响应头，用于重定向
5. Range：请求头，指定资源的范围
6. Referer：请求头，指定请求来源
7. Transfer-Encoding：通用头部，`chunked` 分块传输
8. Upgrade：通用头，检测协议升级
9. User-Agent：用户代理的信息
10. WWW-Authenticate：响应头，返回验证方式，通常和401状态码一起返回
