namespace p_mvc {
	
	export interface IBasicCommand extends puremvc.ICommand {
		
		// 注册该命令集合所观察的命令
		register?(): void ;
	}
	
}
