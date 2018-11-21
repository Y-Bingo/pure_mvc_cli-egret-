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
    var MainCommand = /** @class */ (function (_super) {
        __extends(MainCommand, _super);
        function MainCommand() {
            return _super.call(this) || this;
        }
        MainCommand.prototype.execute = function (notification) {
            console.log(MainCommand.NAME + "\u63A5\u53D7\u5230\u4E86\u6D88\u606F\uFF1A" + notification.getName());
        };
        MainCommand.prototype.register = function () {
            this.facade.registerCommand(p_mvc.SceneNotify.MAIN_OPEN, MainCommand);
            this.facade.registerCommand(p_mvc.SceneNotify.MAIN_CLOSE, MainCommand);
            // this.facade.registerCommand( PanelNotify.Panel_OPEN, MainCommand );
            // this.facade.registerCommand( PanelNotify.Panel_CLOSE, MainCommand );
        };
        MainCommand.NAME = "MainCommand";
        return MainCommand;
    }(puremvc.SimpleCommand));
    p_mvc.MainCommand = MainCommand;
})(p_mvc || (p_mvc = {}));
