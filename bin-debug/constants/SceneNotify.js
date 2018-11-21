var p_mvc;
(function (p_mvc) {
    /**
     * 场景消息
     */
    var SceneNotify = /** @class */ (function () {
        function SceneNotify() {
        }
        // 打开主场景
        SceneNotify.MAIN_OPEN = "main_open";
        // 关闭主场景
        SceneNotify.MAIN_CLOSE = "main_close";
        return SceneNotify;
    }());
    p_mvc.SceneNotify = SceneNotify;
})(p_mvc || (p_mvc = {}));
