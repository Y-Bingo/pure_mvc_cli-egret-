var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var p_mvc;
(function (p_mvc) {
    var MainMediator = /** @class */ (function (_super) {
        __extends(MainMediator, _super);
        function MainMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            return _super.call(this, MainMediator.NAME, viewComponent) || this;
        }
        MainMediator.prototype.listNotificationInterests = function () {
            return [
                p_mvc.SceneNotify.MAIN_CLOSE,
                p_mvc.SceneNotify.MAIN_OPEN,
            ];
        };
        MainMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case p_mvc.SceneNotify.MAIN_OPEN: {
                    //显示角色面板
                    this.showUI();
                    break;
                }
                case p_mvc.SceneNotify.MAIN_CLOSE: {
                    this.closeUI();
                    break;
                }
            }
            console.log(MainMediator.NAME + "\u63A5\u6536\u5230\u4E86\u6D88\u606F: " + notification.getName());
        };
        MainMediator.prototype.showUI = function () {
            if (this.mainScene == null) {
                this.mainScene = new p_mvc.MainScene();
            }
            this.initUI();
            this.mainScene.show();
        };
        MainMediator.prototype.closeUI = function () {
            this.mainScene.close();
        };
        MainMediator.prototype.initUI = function () {
            var _this = this;
            this.mainScene.btn_help.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.facade.sendNotification(p_mvc.PanelNotify.Panel_OPEN);
            }, this);
        };
        MainMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            console.log(MainMediator.NAME + "\u5DF2\u7ECF\u88AB\u6CE8\u518C\u4E86");
        };
        MainMediator.prototype.onRemove = function () {
            _super.prototype.onRegister.call(this);
            console.log(MainMediator.NAME + "\u5DF2\u7ECF\u522B\u6CE8\u9500\u4E86");
        };
        MainMediator.NAME = "MainMediator";
        return MainMediator;
    }(puremvc.Mediator));
    p_mvc.MainMediator = MainMediator;
})(p_mvc || (p_mvc = {}));
