# Sentinel Arms International - Website

完整的 HTML 静态网站，展示 Sentinel Arms International 的产品和服务。

## 项目结构

```
sentinel-arms-website/
├── index.html           # 主入口文件
├── css/
│   └── styles.css      # 全局样式表
├── js/
│   └── script.js       # JavaScript 交互脚本
├── images/             # 图片资源目录（可选）
└── README.md           # 本文件
```

## 功能特性

### 1. 导航栏
- 公司 Logo 和品牌名称
- 导航菜单（关于、产品、理念、联系）
- 响应式设计

### 2. Hero 区域
- 大标题和副标题
- 行动按钮（查看产品、联系我们）
- 公司统计数据展示

### 3. 关于我们
- 公司简介和历史
- 发展时间线
- 战略合作伙伴展示
- 服务国家列表

### 4. 产品展示
- 6 个产品类别（弹药、枪械、爆炸物、无人机、机器人、单兵装备）
- 标签页切换功能
- 产品卡片展示

### 5. 公司理念
- 企业使命和价值观
- 4 个核心价值卡片

### 6. 联系方式
- 联系人信息
- WhatsApp 和邮箱链接
- 报价请求表单
- 地址信息

### 7. 页脚
- 快速链接
- 公司信息
- 版权声明

## 使用方法

### 本地打开
1. 解压 ZIP 文件
2. 双击 `index.html` 文件在浏览器中打开
3. 或右键选择"用浏览器打开"

### 部署到服务器
1. 将所有文件上传到 Web 服务器
2. 确保 `index.html` 在根目录
3. 访问网站 URL

### 部署到 GitHub Pages
1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 选择 main 分支作为源

## 自定义修改

### 修改公司信息
编辑 `index.html` 中的以下部分：
- 公司名称：搜索 "SENTINEL ARMS"
- 联系方式：搜索 "CONTACT PERSON"
- 地址：搜索 "REGISTERED OFFICE"

### 修改颜色主题
编辑 `css/styles.css` 中的 CSS 变量：
```css
:root {
    --primary-color: #0a1628;      /* 主色 */
    --secondary-color: #1a2a3a;    /* 次色 */
    --accent-color: #D4AF37;       /* 强调色 */
    --text-color: #ffffff;         /* 文字色 */
    --text-secondary: #b0b0b0;     /* 次文字色 */
    --border-color: #2a3a4a;       /* 边框色 */
}
```

### 添加产品
1. 在 `index.html` 中找到相应的产品类别
2. 在 `.products-grid` 中添加新的 `.product-card`
3. 更新产品名称和规格

### 添加合作伙伴
在 `.partners-grid` 中添加新的 `.partner-card`

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 响应式设计

网站在以下屏幕尺寸上进行了优化：
- 桌面：1200px 及以上
- 平板：768px - 1199px
- 手机：480px - 767px
- 小屏幕：480px 以下

## 表单功能

报价请求表单收集以下信息：
- 公司名称
- 联系人姓名
- 邮箱地址
- 电话号码
- 国家
- 产品类别
- 数量
- 特殊需求

**注意**：当前表单在浏览器中显示成功消息。要实现真正的邮件发送功能，需要：
1. 配置后端服务器
2. 使用 PHP、Node.js 或其他后端语言处理表单提交
3. 集成邮件服务（如 SendGrid、Mailgun 等）

## 性能优化

- 使用 Google Fonts CDN 加载字体
- 最小化 CSS 和 JavaScript
- 响应式图片加载
- 平滑滚动动画

## SEO 优化

- 语义化 HTML 结构
- 适当的标题标签
- Meta 描述
- 结构化数据支持

## 支持和维护

如需修改或扩展网站功能，请：
1. 查看源代码注释
2. 参考 CSS 变量和类名
3. 使用浏览器开发者工具调试

## 许可证

© 2024 Sentinel Arms International. All rights reserved.

## 更新日志

### v1.0 (2024-04-15)
- 初始版本发布
- 完整的产品展示功能
- 响应式设计
- 报价表单
- 联系方式集成
