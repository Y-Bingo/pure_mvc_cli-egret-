namespace p_mvc {
	
	export class MainMediator extends puremvc.Mediator implements puremvc.IMediator {
		
		public static NAME: string = "MainMediator";
		
		public mainScene: MainScene;
		
		constructor( viewComponent: any = null ) {
			super( MainMediator.NAME, viewComponent );
		}
		
		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.MAIN_CLOSE,
				SceneNotify.MAIN_OPEN,
			];
		}
		
		public handleNotification( notification: puremvc.INotification ): void {
			var data: any = notification.getBody();
			switch ( notification.getName() ) {
				case SceneNotify.MAIN_OPEN: {
					//显示角色面板
					this.showUI();
					break;
				}
				case SceneNotify.MAIN_CLOSE: {
					this.closeUI();
					break;
				}
			}
			console.log( `${ MainMediator.NAME }接收到了消息: ${ notification.getName() }` );
		}
		
		showUI() {
			if( this.mainScene == null ) {
				this.mainScene = new MainScene();
			}
			this.initUI();
			this.mainScene.show();
		}
		
		closeUI() {
			this.mainScene.close();
		}
		
		initUI() {
			this.mainScene.btn_help.addEventListener( egret.TouchEvent.TOUCH_TAP, () => {
				this.facade.sendNotification( PanelNotify.Panel_OPEN );
			}, this );
		}
		
		public onRegister(): void {
			super.onRegister();
			console.log( `${ MainMediator.NAME }已经被注册了` );
		}
		
		public onRemove(): void {
			super.onRegister();
			console.log( `${ MainMediator.NAME }已经别注销了` );
		}
		
	}
	
}
