# react

# mongoose 使用

## 语法

`model.find(query,filter,options,callback(document))`

1. query 方法条件查询

-   大于或者小于：find({name:{ $lt:"2"}})   $lt 小于 &gt 大于
-   包含：find({ name: {`$in`: ["2","3"] } }) 精确匹配
-   或者：find({ `$or`: [{ age: 15 }, { name: "小明" }] })
-   【重要】嵌套对象字段查找：find({ "info.job": "教师" })
-   【模糊查询】find({ "name": /小/ })

2. filter 过滤

-   排除：当我们要对查询出来的数据排除一些不需要的字段时使用
    `find({ name: /小/ }, "-info")` 减号表示过滤掉的，不加减号表示只获取该字段数据

3. options 高级操作
   两种使用：

-   find(query,filter,options),如果没有使用 filter，需要在第二个参数的地方用一个 null 站位
-   find(query),setOptions({}),举例：`find({}).sort({})`
-   常用的高级操作:
    -   sort 排序：1 正序 -1 倒序；
    -   spik:跳过指定条数的文档数量,从上往下执行的略过。
    -   limit：指定返回结果的最大数量，从上往下返回的。

## 查询

### find

### findOne

### findMany

## 增加

### create

```js
// 插入一条
Model.create({ key: value });
// 插入多条
Model.create([{}, {}]);
```

## 删除

### remove 操作所有

有查询条件就是删除符合条件的，没有就是删除集合里所有文档

### deleteOne 删除一条

如果没有查询条件，则从顶部文档删除一条。有查询条件，则只会删除匹配到的第一条文档

### deleteMany 删除多条，一般配合查询条件

最新版的 mongoose 里推荐使用 deleteMany 逐渐的废弃掉 remove
如果没有查询条件，则全部删除。有查询条件，则删除所有匹配项

## update

### update

没有查询条件，则只更新第一条文档，有查询条件改变符合条件的第一条

### updateMany

没有查询条件，更新所有文档。有查询条件，更新所有符合条件的文档
