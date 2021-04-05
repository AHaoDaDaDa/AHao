---
sidebar: auto
---

# nodejs 中使用 mongoose 操作 mongodb 数据库

1. 链接数据库

- 记得引入 mongoose

```js
let mon = mongoose.createConnection("mongodb://127.0.0.1:27017/仓库名", {
  // 使用最新的mongoose请求
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

2. 监听数据库反应

```js
monApp.on("open", () => console.log("数据库开启成功"));
monApp.on("err", () => console.log("数据库开启失败"));
```

3. 创建规则

```js
const Schema = new mongoose.Schema(
  {
    username: "string",
    // 规则 -- 强制要求配置
    password: {
      // 强制必须要有该字段
      required: true,
      type: mongoose.Schema.Types.Mixed, //不确定值类型：泛型
      // 默认值
      default: "默认值",
      // 将值转为小写
      lowercase: true,
      // 自定义验证
      msg: "当没有通过下面的验证时，报的一个信息",
      validate: (val) => {
        if (val.length < 6) {
          return false;
        } else {
          return true;
        }
      },
    },
    status: "number",
  },
  // 强制给集合命名
  { collection: "buses" }
);
```

4. 创建或选择集合

- 集合的名字必须加上 s，不加会自动加，导致获取不到真实的集合，，可以在规则中轻质命名

```js
const UseModel = monApp.model("buses", Schema);
```

5. 操作集合
