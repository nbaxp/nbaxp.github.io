# JSON Schema

<https://json-schema.org/docs>

使用对象字面量语法表示

## type

type 属性指定数据类型 [null | boolean | object | array | number | string]

```json
{
  "type": "[type]"
  // ...
}
```

## properties

properties 属性指定对象属性，每个属性都有一个属性名和一个属性值,属性值是该属性类型对应的 JSON Schema

```json
{
  "type": "object",
  "properties": {
    "name": {
      // ...prop_schema
    }
  }
}
```

## items & prefixItems

items 属性指定同构数组的元素类型，属性值是 JSON Schema；prefixItems 属性指定异构数组的元素类型，属性值包含了多个不同的 JSON Schema

```json
{
  "type": "array",
  "items": {
    // ...item_schema
  }
  // items: [
  //   {
  //     // ...item_schema
  //   },
  //   {
  //     // ...item_schema
  //   }
  //   //...
  // ]
}
```

## \$ref & \$defs

$ref 属性指定引用其他 JSON Schema 对象; $defs 存放共享 JSON Schema 对象

```json
{
  "$ref": "#/$defs/ref"
  "$defs": {
    "ref": {
      // ...schema
    }
  }
}
```

## assertions

```json
{
  // ...
}
```
