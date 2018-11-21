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
    // 负责统计注册命令
    var BootstrapCommand = /** @class */ (function (_super) {
        __extends(BootstrapCommand, _super);
        function BootstrapCommand() {
            return _super.call(this) || this;
        }
        BootstrapCommand.prototype.execute = function (notification) {
            (new p_mvc.MainCommand()).register();
        };
        return BootstrapCommand;
    }(puremvc.SimpleCommand));
    p_mvc.BootstrapCommand = BootstrapCommand;
})(p_mvc || (p_mvc = {}));
