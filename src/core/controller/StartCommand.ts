namespace p_mvc {
	
	export class StartupCommand extends puremvc.MacroCommand {
		
		constructor() {
			super();
		}
		
		initializeMacroCommand(): void {
			this.addSubCommand( BootstrapCommand );
			this.addSubCommand( BootstrapModel );
			this.addSubCommand( BootstrapView );
		}
	}
	
}
