# ele-async-demo

该项目用来验证 async-validator 的 ReDoS 漏洞对 element-ui 的影响。

## 项目启动

```
npm install
npm run dev
```

访问：http://localhost:3000/

## 复现用例

通过 `setLongUrl()` 方法设置超长的 `url`，当点击 `设置长URL` 按钮时，页面将会耗费长时间来验证 `url` 的合法性，整个页面将会处于卡顿状态，无法进行其他操作。
