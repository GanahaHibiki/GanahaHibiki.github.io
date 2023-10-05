# MySQL

## Node.js Connection
### Knex
参考：https://juejin.cn/post/6914891222884564999

**Troubleshooting**
- Q: *"Client does not support authentication protocol requested by server; consider upgrading MySQL client"*
**A: Run script `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789'`**