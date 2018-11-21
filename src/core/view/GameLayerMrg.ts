namespace p_mvc {
	/**
	 * 相当于一个根节点来使用
	 */
	export class GameLayerMrg extends eui.UILayer implements zui.IRootView {
		
		// 主场景层： 游戏的主要界面, 背景等
		public sceneLayer: eui.UILayer = new eui.UILayer();
		
		// 主UI层 如 底部功能栏
		public mainLayer: eui.UILayer = new eui.UILayer();
		
		// 弹窗层
		public panelLayer: eui.UILayer = new eui.UILayer();
		
		// 特效层
		public effectLayer: eui.UILayer = new eui.UILayer();
		
		// 通讯遮罩层 和服务器通讯UI
		public maskLayer: eui.UILayer = new eui.UILayer();
		
		// 加载遮罩层： loading界面
		public loadLayer: eui.UILayer = new eui.UILayer();
		
		public static instance: GameLayerMrg = new GameLayerMrg();
		
		private constructor() {
			super();
			this.init();
		}
		
		// 懒汉模式
		public static getInstance() {
			if ( this.instance == null )
				this.instance = new GameLayerMrg();
			return this.instance;
		}
		
		// 初始化，并规定好层级
		private init(): void {
			this.touchThrough = true;
			this.sceneLayer.touchThrough = true;
			this.mainLayer.touchThrough = true;
			this.panelLayer.touchThrough = true;
			this.effectLayer.touchThrough = true;
			this.maskLayer.touchThrough = true;
			this.loadLayer.touchThrough = true;
			this.addChild( this.sceneLayer );
			this.addChild( this.mainLayer );
			this.addChild( this.panelLayer );
			this.addChild( this.effectLayer );
			this.addChild( this.maskLayer );
			this.addChild( this.loadLayer );
		}
	}
	
}
