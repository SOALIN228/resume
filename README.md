# resume
个人简历网站

## 开发中遇到的问题

1. ~~在form表单中监听提交按钮的点击事件来判断是否提交~~

   **问题**：点击回车无效

   **解决**：直接监听form表单的submit事件

2. ~~使用webpack后loading效果失效~~

   **原因**：js代码和css代码顺序问题

   **解决**：更改打包顺序，整理打包代码

3. webpack是将代码插入到模板中，页面会抖动

   **原因**：style-loader 会将 CSS 以 JS的方式引入，页面在加载完 DOM 后才会加载 JS中的 CSS

   **解决**：使用 MiniCssExtractPlugin 进行 CSS 代码打包生成 CSS 文件

4. webpack开发环境和生产环境分离后，dev 代码ok，prod 代码报错

   **原因**：找了半天才发现是因为没有 JS 文件导出，tree shaking 认为不需要加载，而在dev状态下 tree shaking 会加载全部代码

   **解决**：webpack是后面加的，原代码都是使用的闭包和立即执行函数，全部改成使用 ES6 导出的代码，因为这个项目只有一个页面，所以可以去掉 tree shaking 因为意义不是很大

##  学到的知识

1. 前端模块化
2. 运用MVC思想来管理代码
3. 抽取MVC中公共代码，创建MVC代码模板
4. 前端工程化，使用webpack进行管理