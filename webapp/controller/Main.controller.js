sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ui5con.controller.Main", {
		onInit: function(){
			var eventBus = sap.ui.getCore().getEventBus();
			eventBus.subscribe("voicecontrolyourapp", "voiceControl", this.handleVoiceControlEvent, this);
		},

		handleVoiceControlEvent: function(channel, event, data){
			if(data.name === "hello"){
				this.getView().byId("contentCnt").setVisible(true);
			}
		}
	});

});