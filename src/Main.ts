class Main extends eui.UILayer {
	
	private gameLayerMrg:p_mvc.GameLayerMrg;
	
	protected createChildren(): void {
		super.createChildren();
		
		egret.lifecycle.addLifecycleListener( ( context ) => {
			// custom lifecycle plugin
		} );
		
		egret.lifecycle.onPause = () => {
			egret.ticker.pause();
		};
		
		egret.lifecycle.onResume = () => {
			egret.ticker.resume();
		};
		
		//inject the custom material parser
		//注入自定义的素材解析器
		let assetAdapter = new AssetAdapter();
		egret.registerImplementation( "eui.IAssetAdapter", assetAdapter );
		egret.registerImplementation( "eui.IThemeAdapter", new ThemeAdapter() );
		
		// 添加容器管理器
		this.gameLayerMrg = p_mvc.GameLayerMrg.getInstance();
		this.addChild( this.gameLayerMrg );
		this.runGame().catch( e => {
			console.error( e );
		} );
		// this.runGame();
	}
	
	private async runGame() {
		await this.loadResource();
		this.createGameScene();
	}
	
	private async loadResource() {
		let _this = this;
		try {
			const loadingView = new LoadingUI();
			_this.gameLayerMrg.addChild( loadingView );
			await RES.loadConfig( "resource/default.res.json", "resource/" );
			await _this.loadTheme();
			await RES.loadGroup( "preload", 0, loadingView );
			_this.gameLayerMrg.removeChild( loadingView );
		}
		catch ( e ) {
			console.error( e );
		}
	}
	
	private loadTheme() {
		return new Promise( ( resolve, reject ) => {
			// load skin theme configuration file, you can manually modify the file. And replace the default skin.
			//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
			let theme = new eui.Theme( "resource/default.thm.json", this.stage );
			theme.addEventListener( eui.UIEvent.COMPLETE, () => {
				resolve();
			}, this );
		} );
	}
	
	/**
	 * 创建场景界面
	 * Create scene interface
	 */
	protected createGameScene(): void {
		AppFacade.getInstance().starUp( this.gameLayerMrg );
		AppFacade.getInstance().sendNotification( p_mvc.SceneNotify.MAIN_OPEN );
	}
	
}
