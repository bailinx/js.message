window.alert = function(msg) {


}

var Message = function () {}
Message.prototype.getMaskDiv = function () {
    var _mask = document.getElementById('ui-dialog-mask');
    if( _mask == undefined ) {
        _mask = document.createElement('div');
        _mask.id = "ui-dialog-mask";
    }
    return _mask;
}
Message.prototype.getAlertDialog = function (type, msg) {
    var _dialog = document.getElementById('ui-dialog');
    if( _dialog == undefined ) {
        _dialog = document.createElement('section');
        _dialog.id = "ui-dialog";
    }
    return _dialog;
}
