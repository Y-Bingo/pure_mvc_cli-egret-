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
    var PanelMediator = /** @class */ (function (_super) {
        __extends(PanelMediator, _super);
        function PanelMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, PanelMediator.NAME, viewComponent) || this;
            _this.panel = new p_mvc.Panel();
            return _this;
        }
        PanelMediator.prototype.listNotificationInterests = function () {
            return [
                p_mvc.PanelNotify.Panel_OPEN,
                p_mvc.PanelNotify.Panel_CLOSE,
            ];
        };
        PanelMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case p_mvc.PanelNotify.Panel_OPEN: {
                    //显示角色面板
                    this.showUI();
                    break;
                }
                case p_mvc.PanelNotify.Panel_CLOSE: {
                    this.closeUI();
                    break;
                }
            }
            // console.log( `${ PanelMediator.NAME } 接受到了信息：${ notification.getName() } ` );
        };
        PanelMediator.prototype.initUI = function () {
            this.panel.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this, false);
        };
        PanelMediator.prototype.showUI = function () {
            this.initUI();
            this.panel.show();
        };
        PanelMediator.prototype.onTouchTap = function () {
            this.facade.sendNotification(p_mvc.PanelNotify.Panel_CLOSE);
        };
        PanelMediator.prototype.closeUI = function () {
            this.panel.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this, false);
            this.panel.close();
        };
        PanelMediator.NAME = "PanelMediator";
        return PanelMediator;
    }(puremvc.Mediator));
    p_mvc.PanelMediator = PanelMediator;
})(p_mvc || (p_mvc = {}));
