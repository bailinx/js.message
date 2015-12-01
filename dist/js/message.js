/*!
 * Message Javascript Library
 * radishj - v1.0.0 (2015-11-25 14:03:58)
 * https://github.com/RadishJ | Released under MIT license
 */
var Message = function () {
    "use strict";
}
/**
 * 窗体类型
 * @type {Object}
 */
Message.prototype.TYPE = {
    ALERT   : 0,
    CONFIRM : 1
}
/**
 * 窗体图标
 * @type {Object}
 */
Message.prototype.ICON = {
    NONE    : 0,
    FAILED  : 1,
    SUCCESS : 2
}
/**
 * 遮罩层是否存在
 * @return {[type]} [description]
 */
Message.prototype.existMask = function () {
    var _mask = document.getElementsByClassName('ui-dialog-mask');
    if( !!_mask && !_mask.length ) {
        return false;
    } else {
        return true;
    }
}
/**
 * 显示遮罩层
 * @return {[type]} [description]
 */
Message.prototype.showMask = function () {
    var _self = this;
    if( !_self.existMask() ) {
        var _mask = document.createElement('div');
        _mask.className = "ui-dialog-mask";
        document.body.appendChild(_mask);
    } else {
        var _mask = document.getElementsByClassName('ui-dialog-mask');
        _mask[0].style.display = "block";
    }
}
/**
 * 窗体是否存在
 * @return {[type]}
 */
Message.prototype.existDialog = function () {
    var _dialog = document.getElementsByClassName('ui-dialog');
    if( !!_dialog && !_dialog.length ) {
        return false;
    } else {
        return true;
    }
}
/**
 * 显示窗体
 * @param  {[type]} msg      消息
 * @param  {[type]} callBack 回调方法
 * @return {[type]}          [description]
 */
Message.prototype.showDialog = function (msg, type, icon, callBack) {
    var _self = this;
    if( !_self.existDialog() ) {
        // <section class="ui-dialog">
        var _dialog = document.createElement('section');
        _dialog.className = "ui-dialog";
        //   <div class="ui-dialog-cnt">
        var _dialogCnt =  document.createElement('div');
        _dialogCnt.className = "ui-dialog-cnt";
        //      <span class="ui-dialog-close"></span>
        var _dialogClose = document.createElement('span');
        _dialogClose.className = "ui-dialog-close";
        _self.addEvent(_dialogClose, 'click', function func() {
            _self.hide();
        });
        /*if(_dialogClose.addEventListener){
            _dialogClose.addEventListener("click",function() {
                _self.hide();
            },false);
        } else if(_dialogClose.attachEvent){
            _dialogClose.attachEvent("onclick",function() {
                _self.hide();
            });
        }*/

        //      <div class="ui-dialog-bd">
        var _dialogBody = document.createElement('div');
        //          <span class="ui-dialog-icon-info">
        var _dialogIcon = document.createElement('span');
        if (_self.ICON.NONE === icon) {
            _dialogIcon.className = "ui-dialog-icon";
            _dialogIcon.style.display = "none";
        } else if (_self.ICON.FAILED === icon) {
            _dialogIcon.className = "ui-dialog-icon ui-dialog-icon-warn";
        } else if (_self.ICON.SUCCESS === icon) {
            _dialogIcon.className = "ui-dialog-icon ui-dialog-icon-success";
        }

        //          <h3 class="ui-dialog-title">
        var _dialogTitle = document.createElement('h3');
        _dialogTitle.className = "ui-dialog-title";
        _dialogTitle.innerText = msg;
        //          <div class="ui-dialog-content">
        var _dialogContent = document.createElement('div');
        _dialogContent.className = "ui-dialog-content";
        //              <div class="ui-dialog-content-in"></div>
        var _dialogContentIn = document.createElement('div');
        _dialogContentIn.className = "ui-dialog-content-in";
        _dialogContent.appendChild(_dialogContentIn);

        //          <div class="ui-dialog-ft">
        var _dialogFooter = document.createElement('div');
        _dialogFooter.className = "ui-dialog-ft";
        //              <span class="ui-btn-adapt ui-btn-adapt-basic-s">
        var _btnSure = document.createElement('div');
        _btnSure.className = "ui-btn-adapt ui-btn-adapt-basic-s";
        //                  <span>
        var _btnSureMsg = document.createElement('span');
        _btnSureMsg.innerText = "确定";
        _btnSure.appendChild(_btnSureMsg);
        // sure
        /*if(_btnSure.addEventListener){
            _btnSure.addEventListener("click", function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(true);
                }
            },false);
        } else if(_btnSure.attachEvent){
            _btnSure.attachEvent("onclick", function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(true);
                }
            });
        }*/
        _self.addEvent(_btnSure, 'click', function func() {
            _self.hide();
            callBack(true);
        });
        //              <span class="ui-btn-adapt ui-btn-adapt-basic-c">
        var _btnCancle = document.createElement('div');
        _btnCancle.className = "ui-btn-adapt ui-btn-adapt-basic-c";
        var _btnCancleMsg = document.createElement('span');
        _btnCancleMsg.innerText = "取消";
        _btnCancle.appendChild(_btnCancleMsg);
        // cancle
        /*if(_btnCancle.addEventListener){
            _btnCancle.addEventListener("click",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(false);
                }
            },false);
        } else if(_btnCancle.attachEvent){
            _btnCancle.attachEvent("onclick",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(false);
                }
            });
        }*/
        _self.addEvent(_btnCancle, 'click', function func() {
            _self.hide();
            callBack(false);
        });
        if (_self.TYPE.CONFIRM === type) {
            _btnSure.style.display = "inline-block";
            _btnCancle.style.display = "inline-block";
        } else {
            _btnSure.style.display = "inline-block";
            _btnCancle.style.display = "none";
        }

        _dialogFooter.appendChild(_btnSure);
        _dialogFooter.appendChild(_btnCancle);

        _dialogBody.appendChild(_dialogIcon);
        _dialogBody.appendChild(_dialogTitle);
        _dialogBody.appendChild(_dialogContent);
        _dialogBody.appendChild(_dialogFooter);

        // 组装
        _dialogCnt.appendChild(_dialogClose);
        _dialogCnt.appendChild(_dialogBody);
        _dialog.appendChild(_dialogCnt);
        //_dialog.style.display = "none";

        document.body.appendChild(_dialog);

    } else {
        var _dialog = document.getElementsByClassName('ui-dialog');
        var _dialogTitle = _dialog[0].getElementsByClassName("ui-dialog-title");
        _dialogTitle[0].innerText = msg;

        var _btnSure = _dialog[0].getElementsByClassName('ui-btn-adapt-basic-s');
        var _btnCancle = _dialog[0].getElementsByClassName('ui-btn-adapt-basic-c');
        var _dialogIcon = _dialog[0].getElementsByClassName('ui-dialog-icon');

        // 重置窗体
        if (_self.TYPE.CONFIRM === type) {
            _btnSure[0].style.display = "inline-block";
            _btnCancle[0].style.display = "inline-block";
            // 重置图标
            if (_self.ICON.NONE === icon) {
                _dialogIcon[0].style.display = "none";
            } else if (_self.ICON.FAILED === icon) {
                _dialogIcon[0].className = "ui-dialog-icon ui-dialog-icon-warn";
            } else if (_self.ICON.SUCCESS === icon) {
                _dialogIcon[0].className = "ui-dialog-icon ui-dialog-icon-success";
            }
            _dialogIcon[0].style.display = "inline-block";
        } else {
            _btnSure[0].style.display = "inline-block";
            _btnCancle[0].style.display = "none";
            // 重置图标
            _dialogIcon[0].style.display = "none";
        }

        // 重置事件
        // sure
        /*if(_btnSure[0].addEventListener){
            _btnSure[0].addEventListener("click", function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(true);
                }
            },false);
        } else if(_btnSure[0].attachEvent){
            _btnSure[0].attachEvent("onclick", function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack(true);
                }
            });
        }*/
        _self.removeEvent(_btnSure[0], 'click', 'func');
        _self.removeEvent(_btnCancle[0], 'click', 'func');
        _dialog[0].style.display = "block";
    }
}
/**
 * 隐藏窗体
 * @return {[type]} [description]
 */
Message.prototype.hide = function () {
    var _self = this;
    if( _self.existDialog() && _self.existMask()) {
        document.getElementsByClassName('ui-dialog')[0].style.display = "none";
        document.getElementsByClassName('ui-dialog-mask')[0].style.display = "none";
    }
}
/**
 * 弹出Alert窗体方法
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
Message.prototype.alert = function (msg, callBack) {
    var _self = this;
    _self.hide();
    _self.showMask();
    _self.showDialog(msg, _self.TYPE.ALERT, _self.ICON.NONE, callBack);
}
/**
 * 弹出Confirm窗体方法
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
Message.prototype.confirm = function (msg, callBack) {
    var _self = this;
    _self.hide();
    _self.showMask();
    _self.showDialog(msg, _self.TYPE.CONFIRM, _self.ICON.SUCCESS, callBack);
}

Message.prototype.addEvent = function(element, type, handler) {
    var _self = this;
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        // assign each event handler a unique ID
        if (!handler.$$guid) handler.$$guid = _self.addEvent.guid++;
        // create a hash table of event types for the element
        if (!element.events) element.events = {};
        // create a hash table of event handlers for each element/event pair
        var handlers = element.events[type];
        if (!handlers) {
            handlers = element.events[type] = {};
            // store the existing event handler (if there is one)
            if (element["on" + type]) {
                handlers[0] = element["on" + type];
            }
        }
        // store the event handler in the hash table
        handlers[handler.$$guid] = handler;
        // assign a global event handler to do all the work
        element["on" + type] = handleEvent;
    }
};
// a counter used to create unique IDs
Message.prototype.addEvent.guid = 1;

Message.prototype.removeEvent = function(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
    } else {
        // delete the event handler from the hash table
        if (element.events && element.events[type]) {
            delete element.events[type][handler.$$guid];
        }
    }
};

Message.prototype.handleEvent = function(event) {
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || window.event;
    // get a reference to the hash table of event handlers
    var handlers = this.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        this.$$handleEvent = handlers[i];
        if (this.$$handleEvent(event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};