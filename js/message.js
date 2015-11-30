/*!
 * Message Javascript Library
 * radishj - v1.0.0 (2015-11-25 14:03:58)
 * https://github.com/RadishJ | Released under MIT license
 */
var Message = function () {
    "use strict";
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
 * 显示Alert窗体
 * @param  {[type]} msg      消息
 * @param  {[type]} callBack 回调方法
 * @return {[type]}          [description]
 */
Message.prototype.showAlertCnt = function (msg, callBack) {
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
        if(_dialogClose.addEventListener){
            _dialogClose.addEventListener("click",function() {
                _self.hide();
            },false);
        } else if(_dialogClose.attachEvent){
            _dialogClose.attachEvent("onclick",function() {
                _self.hide();
            });
        }

        //      <div class="ui-dialog-bd">
        var _dialogBody = document.createElement('div');
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
        if(_btnSure.addEventListener){
            _btnSure.addEventListener("click",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack();
                }
            },false);
        } else if(_btnSure.attachEvent){
            _btnSure.attachEvent("onclick",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack();
                }
            });
        }
        _dialogFooter.appendChild(_btnSure);

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

        _dialog[0].style.display = "block";
    }
}
/**
 * 显示Confirm窗体<未完成.>
 * @param  {[type]} msg      消息
 * @param  {[type]} callBack 回调方法
 * @return {[type]}          [description]
 */
Message.prototype.showConfirmCnt = function (msg, callBack) {
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
        if(_dialogClose.addEventListener){
            _dialogClose.addEventListener("click",function() {
                _self.hide();
            },false);
        } else if(_dialogClose.attachEvent){
            _dialogClose.attachEvent("onclick",function() {
                _self.hide();
            });
        }

        //      <div class="ui-dialog-bd">
        var _dialogBody = document.createElement('div');
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
        //              <span class="ui-btn-adapt ui-btn-adapt-basic-c">
        var _btnCancle = document.createElement('div');
        _btnCancle.className = "ui-btn-adapt ui-btn-adapt-basic-c";
        var _btnCancleMsg = document.createElement('span');
        _btnCancleMsg.innerText = "取消";
        _btnCancle.appendChild(_btnCancleMsg);
        // sure
        if(_btnSure.addEventListener){
            _btnSure.addEventListener("click",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack();
                }
            },false);
        } else if(_btnSure.attachEvent){
            _btnSure.attachEvent("onclick",function() {
                _self.hide();
                // 回调方法
                if( typeof callBack == 'function' ) {
                    callBack();
                }
            });
        }
        // cancle
        if(_btnCancle.addEventListener){
            _btnCancle.addEventListener("click",function() {
                _self.hide();
            },false);
        } else if(_btnCancle.attachEvent){
            _btnCancle.attachEvent("onclick",function() {
                _self.hide();
            });
        }

        _dialogFooter.appendChild(_btnSure);
        _dialogFooter.appendChild(_btnCancle);

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
    _self.showAlertCnt(msg, callBack);
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
    _self.showConfirmCnt(msg, callBack);
}
