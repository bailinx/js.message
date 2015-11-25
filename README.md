# javascript.alert
* 一款原生js增强插件
* 重写alert和confirm

## 使用方法
引入插件地址
```javascript
<script type="text/javascript" src="js/alert.js"></script>
```
初始化方法如下：
```javascript
window.alert = function(msg) {
    var message = new Message();
    message.alert(msg);
}
function funAlert() {
    alert("操作已成功");
}
```

## 更新日志
javascript.alert v1.0.0 - 2015/11/25
* 创建项目及完善alert逻辑
