namespace p_mvc {
	
	export class PanelMediator extends puremvc.Mediator implements puremvc.IMediator {
		
		public static NAME: string = "PanelMediator";
		public panel: Panel = new Panel();
		
		constructor( viewComponent = null ) {
			super( PanelMediator.NAME, viewComponent );
		}
		
		listNotificationInterests(): Array<any> {
			return [
				PanelNotify.Panel_OPEN,
				PanelNotify.Panel_CLOSE,
			];
		}
		
		handleNotification( notification: puremvc.Notification ): void {
			var data: any = notification.getBody();
			switch ( notification.getName() ) {
				case PanelNotify.Panel_OPEN: {
					//显示角色面板
					this.showUI();
					break;
				}
				case PanelNotify.Panel_CLOSE: {
					this.closeUI();
					break;
				}
			}
			// console.log( `${ PanelMediator.NAME } 接受到了信息：${ notification.getName() } ` );
		}
		
		initUI() {
			this.panel.btn_close.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this, false );
		}
		
		showUI(): void {
			this.initUI();
			this.panel.show();
		}
		
		onTouchTap(): void {
			this.facade.sendNotification( PanelNotify.Panel_CLOSE );
		}
		
		closeUI(): void {
			this.panel.btn_close.removeEventListener( egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this, false );
			this.panel.close();
		}
		
	}
	
}
