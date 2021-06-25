# Markdown

## 一、参考
1. [Markdown](https://daringfireball.net/projects/markdown/)
1. [CommonMark Spec](https://spec.commonmark.org/)
1. [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

## 二、简介

转义字符：

## 三、示例

以\`符号开头结尾的是内联代码，以\`\`\`开头结尾的是代码块，示例代码包含在如下的代码块中

```markdown
一级标题
=======
二级标题
-------

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

段落第一行，两个空格加换行  
段落第二行

> 单行引用

> 多行引用
> 
>> 嵌套引用

+ 无序列表项
- 无序列表项
* 无序列表项

1. 有序列表项
2. 有序列表项
3. 有序列表项
   1. 列表可嵌套

自动链接：<https://github.com>

[链接](https://github.com "链接title")

[链接索引][ref1]

[ref1]: https://github.com "链接title"

![图片](images/image.png "图片title")

[![图片链接](images/image.png "图片title")](https://github.com "链接title")

![base64图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABa0lEQVRYR+2XIUsEQRSAv/sDFsEkcmC3CFY1GQ6jFqOCYLhqVKvFIHhwoDaDVpNFf4DFoGASf8cF5ck8GWVn9u3tzHjBhQ3Hzc73zZv33ux2gA/+8OpMksBq4UDcC8+PgAg8FJJYAf4FkkZgCpgFXoxbmGwL5oETYN2Bn4Eb4KhGJInAHPAeAInEZkQiicAt0ItAtoCrwP+tBbrAW02YL4DtXALfK4hISE8JNbfWEYjtvzoNgL1cEZB5H4HFSAR2gWFOgQXgKQC4A9ZyV4HMPwOcAUvANPAKnAKXJfqAsemxAV+33xdaJ2ET+LUb7DenIgKyaoWrsEpkF6iC+xKSN2OdhgeGgyYG9yVkXKM3IoEfAvvAcSAJLPAfj1pfyRSuD/ddufmTNYZbI/AbrtAd4Nz9GAtuEQjBVUKO3FFFtlvLNJoDdXAzJDYwlANF4KEtKAavElh2pZYkvJZJ/C2QGpe76DVRH6dFV66wT/nuewHK2TMeAAAAAElFTkSuQmCC)


![图片索引][ref2]

[ref2]: images/image.png "链接title"

| 左对齐 | 右对齐 | 居中 |
| ----- | --: | :--: |
|   td  |  td |  td  |
|   td  |  td |  td  |

*斜体*  
**粗体**  
***斜体粗体*** 

三种分隔线：

***

---

___
```
一级标题
=======
二级标题
-------

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

段落第一行，两个空格加换行  
段落第二行

> 单行引用

> 多行引用
> 
>> 嵌套引用

+ 无序列表项
- 无序列表项
* 无序列表项

1. 有序列表项
2. 有序列表项
3. 有序列表项
   1. 列表可嵌套

自动链接：<https://github.com>

[链接](https://github.com "链接title")

[链接索引][ref1]

[ref1]: https://github.com "链接title"

![图片](images/image.png "图片title")

[![图片链接](images/image.png "图片title")](https://github.com "链接title")

![base64图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABa0lEQVRYR+2XIUsEQRSAv/sDFsEkcmC3CFY1GQ6jFqOCYLhqVKvFIHhwoDaDVpNFf4DFoGASf8cF5ck8GWVn9u3tzHjBhQ3Hzc73zZv33ux2gA/+8OpMksBq4UDcC8+PgAg8FJJYAf4FkkZgCpgFXoxbmGwL5oETYN2Bn4Eb4KhGJInAHPAeAInEZkQiicAt0ItAtoCrwP+tBbrAW02YL4DtXALfK4hISE8JNbfWEYjtvzoNgL1cEZB5H4HFSAR2gWFOgQXgKQC4A9ZyV4HMPwOcAUvANPAKnAKXJfqAsemxAV+33xdaJ2ET+LUb7DenIgKyaoWrsEpkF6iC+xKSN2OdhgeGgyYG9yVkXKM3IoEfAvvAcSAJLPAfj1pfyRSuD/ddufmTNYZbI/AbrtAd4Nz9GAtuEQjBVUKO3FFFtlvLNJoDdXAzJDYwlANF4KEtKAavElh2pZYkvJZJ/C2QGpe76DVRH6dFV66wT/nuewHK2TMeAAAAAElFTkSuQmCC)


![图片索引][ref2]

[ref2]: images/image.png "链接title"

| 左对齐 | 右对齐 | 居中 |
| ----- | --: | :--: |
|   td  |  td |  td  |
|   td  |  td |  td  |

*斜体*  
**粗体**  
***斜体粗体*** 

三种分隔线：

***

---

___