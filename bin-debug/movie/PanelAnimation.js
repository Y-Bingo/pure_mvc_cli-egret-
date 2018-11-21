var zui;
(function (zui) {
    var BOUNCE_EN;
    (function (BOUNCE_EN) {
        BOUNCE_EN[BOUNCE_EN["NONE"] = 0] = "NONE";
        BOUNCE_EN[BOUNCE_EN["IN"] = 1] = "IN";
        BOUNCE_EN[BOUNCE_EN["IN_RUDE"] = 2] = "IN_RUDE";
        BOUNCE_EN[BOUNCE_EN["LEFT"] = 3] = "LEFT";
        BOUNCE_EN[BOUNCE_EN["RIGHT"] = 4] = "RIGHT";
        BOUNCE_EN[BOUNCE_EN["UP"] = 5] = "UP";
        BOUNCE_EN[BOUNCE_EN["DOWN"] = 6] = "DOWN";
    })(BOUNCE_EN = zui.BOUNCE_EN || (zui.BOUNCE_EN = {}));
    var BOUNCE_EX;
    (function (BOUNCE_EX) {
        BOUNCE_EX[BOUNCE_EX["NONE"] = 0] = "NONE";
        BOUNCE_EX[BOUNCE_EX["OUT"] = 1] = "OUT";
        BOUNCE_EX[BOUNCE_EX["LEFT"] = 3] = "LEFT";
        BOUNCE_EX[BOUNCE_EX["RIGHT"] = 4] = "RIGHT";
        BOUNCE_EX[BOUNCE_EX["UP"] = 5] = "UP";
        BOUNCE_EX[BOUNCE_EX["DOWN_"] = 6] = "DOWN_";
    })(BOUNCE_EX = zui.BOUNCE_EX || (zui.BOUNCE_EX = {}));
    /**
     * 动画装饰器模式
     */
    var Am = /** @class */ (function () {
        function Am() {
        }
        /**
         * @param
            {egret.DisplayObjectContainer}
            rootView                         显示的根目录
         * @param {boolean} dark             背景是否变黑
         * @param {number} popUpWidth        指定弹窗宽度，定位使用
         * @param {number} popUpHeight       指定弹窗高度，定位使用
         * @param {number} effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
         * @param {boolean} isAlert
         */
        Am.showPanel = function (rootView, dark, effectType, popUpWidth, popUpHeight, isAlert) {
            if (dark === void 0) { dark = false; }
            if (effectType === void 0) { effectType = BOUNCE_EN.NONE; }
            if (popUpWidth === void 0) { popUpWidth = 0; }
            if (popUpHeight === void 0) { popUpHeight = 0; }
            if (isAlert === void 0) { isAlert = true; }
            return function (target, key, descriptor) {
                if (key.indexOf("show") < 0) {
                    throw new Error("该装饰器动画没有应用在弹窗关闭效果上");
                }
                var oldValue = descriptor.value;
                descriptor.value = function () {
                    var panel = this;
                    if (rootView.contains(panel))
                        return oldValue;
                    // 是否添加阴影
                    if (dark) {
                        var darkSprite = new egret.Sprite();
                        darkSprite.graphics.clear();
                        darkSprite.graphics.beginFill(0x000000, 0.3);
                        darkSprite.graphics.drawRect(0, 0, rootView.width, rootView.height);
                        darkSprite.graphics.endFill();
                        darkSprite.width = rootView.width;
                        darkSprite.height = rootView.height;
                        if (!rootView.contains(darkSprite)) {
                            rootView.addChild(darkSprite);
                        }
                        darkSprite.touchEnabled = true;
                        egret.Tween.get(darkSprite).to({ alpha: 1 }, 150);
                        darkSprite.visible = true;
                        Am.darkSprite = darkSprite;
                    }
                    // 添加面版
                    oldValue.apply(panel, arguments);
                    if (popUpWidth == 0) {
                        popUpWidth = panel.width;
                        popUpHeight = panel.height;
                    }
                    // 初始化
                    panel.alpha = 1;
                    panel.scaleX = 1;
                    panel.scaleY = 1;
                    panel.x = rootView.width / 2 - popUpWidth / 2;
                    panel.y = rootView.height / 2 - popUpHeight / 2;
                    //以下是弹窗动画
                    var leftX = rootView.width / 2 - popUpWidth / 2;
                    var upY = rootView.height / 2 - popUpHeight / 2;
                    switch (effectType) {
                        case 0:
                            break;
                        case 1:
                            panel.alpha = 0;
                            panel.scaleX = 0.5;
                            panel.scaleY = 0.5;
                            panel.x = panel.x + popUpWidth / 4;
                            panel.y = panel.y + popUpHeight / 4;
                            egret.Tween.get(panel).to({
                                alpha: 1,
                                scaleX: 1,
                                scaleY: 1,
                                x: panel.x - popUpWidth / 4,
                                y: panel.y - popUpHeight / 4
                            }, 300, egret.Ease.backOut);
                            break;
                        case 2:
                            panel.alpha = 0;
                            panel.scaleX = 0.5;
                            panel.scaleY = 0.5;
                            panel.x = panel.x + popUpWidth / 4;
                            panel.y = panel.y + popUpHeight / 4;
                            egret.Tween.get(panel).to({
                                alpha: 1,
                                scaleX: 1,
                                scaleY: 1,
                                x: panel.x - popUpWidth / 4,
                                y: panel.y - popUpHeight / 4
                            }, 600, egret.Ease.elasticOut);
                            break;
                        case 3:
                            if (isAlert) {
                                panel.x = -popUpWidth;
                                egret.Tween.get(panel).to({
                                    x: leftX,
                                    alpha: 1
                                }, 500, egret.Ease.cubicOut).call(function () {
                                    console.log(panel.alpha, panel.x, panel.y, rootView.width, rootView.height);
                                });
                            }
                            else {
                                panel.x = -popUpWidth;
                                egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                            }
                            break;
                        case 4:
                            // panel.alpha = 1;
                            if (isAlert) {
                                panel.x = popUpWidth;
                                egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                            }
                            else {
                                panel.x = popUpWidth;
                                egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                            }
                            break;
                        case 5:
                            if (isAlert) {
                                panel.y = -popUpHeight;
                                egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                            }
                            else {
                                panel.y = -popUpHeight;
                                egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                            }
                            break;
                        case 6:
                            if (isAlert) {
                                panel.y = rootView.height;
                                egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                            }
                            else {
                                panel.y = popUpHeight;
                                egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                            }
                            break;
                        default:
                            break;
                    }
                    // console.log( panel.alpha, panel.x, panel.y, rootView.width, rootView.height );
                };
                return descriptor;
            };
        };
        /**
         *
         * @param effectType 0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
         */
        Am.closePanel = function (effectType) {
            if (effectType === void 0) { effectType = BOUNCE_EX.NONE; }
            return function (target, key, descriptor) {
                if (key.indexOf("close") < 0) {
                    throw new Error("该装饰器动画没有应用在弹窗关闭效果上");
                }
                var oldValue = descriptor.value;
                descriptor.value = function () {
                    var panel = this;
                    if (Am.darkSprite) {
                        egret.Tween.get(Am.darkSprite).to({ alpha: 0 }, 300).call(function () {
                            if (Am.darkSprite && Am.darkSprite.parent) {
                                Am.darkSprite.parent.removeChild(Am.darkSprite);
                                Am.darkSprite = null;
                            }
                        }, this);
                    }
                    var panelX = panel.x, panelY = panel.y, panelScaleX = panel.scaleX, panelScaleY = panel.scaleY;
                    //以下是弹窗动画
                    switch (effectType) {
                        case 0:
                            break;
                        case 1:
                            egret.Tween.get(panel).to({
                                alpha: 0,
                                scaleX: 0,
                                scaleY: 0,
                                x: panel.x + panel.width / 2,
                                y: panel.y + panel.height / 2
                            }, 300);
                            break;
                        case 2:
                            break;
                        case 3:
                            egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                            break;
                        case 4:
                            egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                            break;
                        case 5:
                            egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicOut);
                            break;
                        case 6:
                            egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                            break;
                        default:
                            break;
                    }
                    // 保存函数
                    var _arguments = arguments;
                    egret.setTimeout(function () {
                        oldValue.apply(panel, _arguments);
                    }, this, 500);
                };
            };
        };
        return Am;
    }());
    zui.Am = Am;
})(zui || (zui = {}));
