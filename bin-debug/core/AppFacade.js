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
var AppFacade = /** @class */ (function (_super) {
    __extends(AppFacade, _super);
    function AppFacade() {
        return _super.call(this) || this;
    }
    AppFacade.getInstance = function () {
        if (this.instance === null)
            this.instance = new AppFacade();
        return (this.instance);
    };
    AppFacade.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
        this.registerCommand(AppFacade.STARTUP, p_mvc.StartupCommand);
    };
    AppFacade.prototype.starUp = function (rootView) {
        this.sendNotification(AppFacade.STARTUP, rootView);
        this.removeCommand(AppFacade.STARTUP);
    };
    AppFacade.STARTUP = "STARTUP";
    return AppFacade;
}(puremvc.Facade));
