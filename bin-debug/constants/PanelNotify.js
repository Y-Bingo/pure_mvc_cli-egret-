var p_mvc;
(function (p_mvc) {
    /**
     * 场景消息
     */
    var PanelNotify = /** @class */ (function () {
        function PanelNotify() {
        }
        // 打开主场景
        PanelNotify.Panel_OPEN = "panel_open";
        // 关闭主场景
        PanelNotify.Panel_CLOSE = "panel_close";
        return PanelNotify;
    }());
    p_mvc.PanelNotify = PanelNotify;
})(p_mvc || (p_mvc = {}));
