class AppFacade extends puremvc.Facade implements puremvc.IFacade {
	
	constructor() {
		super();
	}
	
	public static STARTUP: string = "STARTUP";
	
	static getInstance(): AppFacade {
		if ( this.instance === null )
			this.instance = new AppFacade();
		return <AppFacade><any>( this.instance );
	}
	
	initializeController(): void {
		super.initializeController();
		this.registerCommand( AppFacade.STARTUP, p_mvc.StartupCommand )
	}
	
	starUp( rootView: egret.DisplayObjectContainer ): void {
		this.sendNotification( AppFacade.STARTUP, rootView );
		this.removeCommand( AppFacade.STARTUP );
	}
}
