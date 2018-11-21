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
    var StartupCommand = /** @class */ (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(p_mvc.BootstrapCommand);
            this.addSubCommand(p_mvc.BootstrapModel);
            this.addSubCommand(p_mvc.BootstrapView);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    p_mvc.StartupCommand = StartupCommand;
})(p_mvc || (p_mvc = {}));
