namespace p_mvc {
	
	/**
	 * 负责统计注册mediator
	 */
	export class BootstrapView extends puremvc.SimpleCommand implements puremvc.ICommand {
		
		constructor() {
			super();
		}
		
		execute( notification: puremvc.Notification ) {
			this.facade.registerMediator( new MainMediator() );
			this.facade.registerMediator( new PanelMediator() );
		}
		
	}
	
}
