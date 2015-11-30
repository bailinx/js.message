# js.message
* 一款原生js增强插件
* 重写alert和confirm
*

## 使用方法
引入插件地址
```javascript
<script type="text/javascript" src="js/message.js"></script>
```
初始化方法如下：
```javascript
window.alert = function(msg) {
    var message = new jMessage();
    message.alert(msg);
    /*message.alert(msg, function() {
        console.log('callback! - ' + (new Date()).valueOf());
    });*/
}
function funAlert() {
    alert("操作已成功");
}
```
## 已知问题
* ~~组件无法阻塞页面(若用Interval模拟，太消耗内存，得不偿失，后续考虑加入回调方法)~~

## 更新日志
#### Message v1.0.1 -2015/11/30
* 新增alert回调方法
* 完善confirm部分
* 考虑合并dialog dom生成(太多相似)

#### Message v1.0.0 - 2015/11/25
* 创建项目及完善alert逻辑
