---
sidebar: auto
---

# cmd 中操作 mongodb

## 停止开启数据库（window PowerShell）

```js
// 该命令在window+x中的window PowerShell(管理员)中执行
net stop MongoDB // 停止数据库
net start MongoDB // 开启数据库
```

- 也可以在任务管理器中停止数据库，打开可视化工具开启数据库

## cmd 中命令

- db `查看当前所在的数据库，刚开始时是text`
- show dbs `查看所有的数据库`
- use dbname `选择||创建 数据库`
- db.users.inser({}) `插入||创建 集合，users为集合名`
- db.users.find({}) `查询集合里所有的文档，users为集合名`
- show tables `查看该数据库中有多少个集合`
- db.users.remove({}) `删除文档`
- db.users.drop({}) `删除集合`
- db.dropDatabase({}) `删除数据库`
