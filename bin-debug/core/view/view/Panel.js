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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var p_mvc;
(function (p_mvc) {
    var Panel = /** @class */ (function (_super) {
        __extends(Panel, _super);
        function Panel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onAddToStage, _this);
            _this.skinName = "PanelSkin";
            _this.init();
            return _this;
        }
        Panel.prototype.onComplete = function () {
            // this.visible = false;
        };
        Panel.prototype.onAddToStage = function () {
        };
        Panel.prototype.init = function () {
        };
        Panel.prototype.show = function () {
            if (!p_mvc.GameLayerMrg.getInstance().panelLayer.contains(this)) {
                p_mvc.GameLayerMrg.getInstance().panelLayer.addChild(this);
            }
        };
        Panel.prototype.close = function () {
            if (p_mvc.GameLayerMrg.getInstance().panelLayer.contains(this)) {
                p_mvc.GameLayerMrg.getInstance().panelLayer.removeChild(this);
            }
        };
        __decorate([
            zui.Am.showPanel(p_mvc.GameLayerMrg.getInstance().panelLayer, true, zui.BOUNCE_EN.IN, 0, 0)
        ], Panel.prototype, "show", null);
        __decorate([
            zui.Am.closePanel(zui.BOUNCE_EX.OUT)
        ], Panel.prototype, "close", null);
        return Panel;
    }(eui.Component));
    p_mvc.Panel = Panel;
})(p_mvc || (p_mvc = {}));
