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
    var MainScene = /** @class */ (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onAdd, _this);
            _this.skinName = "MainSceneSkin";
            _this.init();
            return _this;
        }
        MainScene.prototype.onComplete = function () {
        };
        MainScene.prototype.onAdd = function () {
        };
        MainScene.prototype.init = function () {
        };
        MainScene.prototype.show = function () {
            p_mvc.GameLayerMrg.getInstance().mainLayer.addChild(this);
        };
        MainScene.prototype.close = function () {
            p_mvc.GameLayerMrg.getInstance().mainLayer.removeChild(this);
        };
        return MainScene;
    }(eui.Component));
    p_mvc.MainScene = MainScene;
})(p_mvc || (p_mvc = {}));
