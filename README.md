# jMessage
* 一款原生js增强插件
* 重写alert和confirm

## 使用方法
引入插件地址
```javascript
<script type="text/javascript" src="js/jMessage.js"></script>
```
初始化方法如下：
```javascript
window.alert = function(msg) {
    var message = new jMessage();
    message.alert(msg);
}
function funAlert() {
    alert("操作已成功");
}
```
## 已知问题
* 组件无法阻塞页面(若用Interval模拟，太消耗内存，得不偿失，后续考虑加入回调方法)

## 更新日志
jMessage v1.0.0 - 2015/11/25
* 创建项目及完善alert逻辑
