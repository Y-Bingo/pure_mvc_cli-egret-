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
     * 相当于一个根节点来使用
     */
    var GameLayerMrg = /** @class */ (function (_super) {
        __extends(GameLayerMrg, _super);
        function GameLayerMrg() {
            var _this = _super.call(this) || this;
            // 主场景层： 游戏的主要界面, 背景等
            _this.sceneLayer = new eui.UILayer();
            // 主UI层 如 底部功能栏
            _this.mainLayer = new eui.UILayer();
            // 弹窗层
            _this.panelLayer = new eui.UILayer();
            // 特效层
            _this.effectLayer = new eui.UILayer();
            // 通讯遮罩层 和服务器通讯UI
            _this.maskLayer = new eui.UILayer();
            // 加载遮罩层： loading界面
            _this.loadLayer = new eui.UILayer();
            _this.init();
            return _this;
        }
        // 懒汉模式
        GameLayerMrg.getInstance = function () {
            if (this.instance == null)
                this.instance = new GameLayerMrg();
            return this.instance;
        };
        // 初始化，并规定好层级
        GameLayerMrg.prototype.init = function () {
            this.touchThrough = true;
            this.sceneLayer.touchThrough = true;
            this.mainLayer.touchThrough = true;
            this.panelLayer.touchThrough = true;
            this.effectLayer.touchThrough = true;
            this.maskLayer.touchThrough = true;
            this.loadLayer.touchThrough = true;
            this.addChild(this.sceneLayer);
            this.addChild(this.mainLayer);
            this.addChild(this.panelLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.maskLayer);
            this.addChild(this.loadLayer);
        };
        GameLayerMrg.instance = new GameLayerMrg();
        return GameLayerMrg;
    }(eui.UILayer));
    p_mvc.GameLayerMrg = GameLayerMrg;
})(p_mvc || (p_mvc = {}));
