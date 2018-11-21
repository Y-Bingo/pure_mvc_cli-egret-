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
    /**
     * 负责统计注册mediator
     */
    var BootstrapView = /** @class */ (function (_super) {
        __extends(BootstrapView, _super);
        function BootstrapView() {
            return _super.call(this) || this;
        }
        BootstrapView.prototype.execute = function (notification) {
            this.facade.registerMediator(new p_mvc.MainMediator());
            this.facade.registerMediator(new p_mvc.PanelMediator());
        };
        return BootstrapView;
    }(puremvc.SimpleCommand));
    p_mvc.BootstrapView = BootstrapView;
})(p_mvc || (p_mvc = {}));
