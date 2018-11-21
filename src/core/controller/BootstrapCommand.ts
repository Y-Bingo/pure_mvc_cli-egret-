namespace p_mvc {
	
	// 负责统计注册命令
	
	export class BootstrapCommand extends puremvc.SimpleCommand implements IBasicCommand {
		
		constructor() {
			super();
		}
		
		public execute( notification: puremvc.INotification ): void {
			( new MainCommand() ).register();
		}
		
		
		
	}
	
}
