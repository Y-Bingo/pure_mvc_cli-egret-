namespace p_mvc
{
	
	export class Panel extends eui.Component implements zui.IPanel
	{
		
		btn_close: eui.Button;
		
		constructor ()
		{
			super();
			this.addEventListener( eui.UIEvent.COMPLETE, this.onComplete, this );
			this.addEventListener( eui.UIEvent.ADDED_TO_STAGE, this.onAddToStage, this );
			this.skinName = "PanelSkin";
			this.init();
		}
		
		private onComplete (): void
		{
			// this.visible = false;
		}
		
		private onAddToStage ()
		{
		
		}
		
		init ()
		{
		
		}
		
		@zui.Am.showPanel( GameLayerMrg.getInstance().panelLayer, true, zui.BOUNCE_EN.IN, 0, 0 )
		show ()
		{
			if ( !GameLayerMrg.getInstance().panelLayer.contains( this ) )
			{
				GameLayerMrg.getInstance().panelLayer.addChild( this );
			}
		}
		
		@zui.Am.closePanel( zui.BOUNCE_EX.OUT )
		close ()
		{
			if ( GameLayerMrg.getInstance().panelLayer.contains( this ) )
			{
				GameLayerMrg.getInstance().panelLayer.removeChild( this );
			}
		}
	}
	
}
