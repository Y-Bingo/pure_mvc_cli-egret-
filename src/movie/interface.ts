namespace zui {
	
	export interface IRootView {
		
		// 主场景层： 游戏的主要界面, 背景等
		sceneLayer: eui.UILayer;
		
		// 主UI层 如 底部功能栏
		mainLayer: eui.UILayer;
		
		// 弹窗层
		panelLayer: eui.UILayer;
		
		// 特效层
		effectLayer: eui.UILayer;
		
		// 通讯遮罩层 和服务器通讯UI
		maskLayer: eui.UILayer;
		
		// 加载遮罩层： loading界面
		loadLayer: eui.UILayer;
		
	}
	
	export interface IPanel extends eui.Component {
		
		btn_close: eui.Button;
		
		// 显示弹窗
		show(): void ;
		
		// 关闭弹窗
		close(): void;
		
	}
}
