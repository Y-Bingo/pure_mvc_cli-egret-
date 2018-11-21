namespace p_mvc {
	
	export class MainScene extends eui.Component {
		
		btn_help: eui.Button;
		
		constructor() {
			super();
			this.addEventListener( eui.UIEvent.COMPLETE, this.onComplete, this );
			this.addEventListener( eui.UIEvent.ADDED_TO_STAGE, this.onAdd, this );
			this.skinName = "MainSceneSkin";
			this.init();
		}
		
		private onComplete(): void {
		
		}
		
		private onAdd(): void {
		
		}
		
		init(): void {
		
		}
		
		show() {
			GameLayerMrg.getInstance().mainLayer.addChild( this );
		}
		
		close() {
			GameLayerMrg.getInstance().mainLayer.removeChild( this );
		}
		
	}
	
}
