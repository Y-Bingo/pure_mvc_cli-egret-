namespace p_mvc {
	
	export class MainCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
		
		constructor() {
			super();
		}
		
		static NAME: string = "MainCommand";
		
		execute( notification: puremvc.INotification ): void {
			console.log( `${ MainCommand.NAME }接受到了消息：${ notification.getName() }` );
		}
		
		register():void {
			this.facade.registerCommand( SceneNotify.MAIN_OPEN, MainCommand );
			this.facade.registerCommand( SceneNotify.MAIN_CLOSE, MainCommand );
			// this.facade.registerCommand( PanelNotify.Panel_OPEN, MainCommand );
			// this.facade.registerCommand( PanelNotify.Panel_CLOSE, MainCommand );
		}
		
	}

}
