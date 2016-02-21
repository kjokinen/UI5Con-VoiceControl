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
			var view = this.getView();
			var app = view.byId("app");
			switch (data.name) {
				case "hello":
					view.byId("helloContent").setVisible(true);
					break;
				case "whoami":
					app.to(view.createId("page2"), "slide");
					var myselfContent = view.byId("myselfContent");
					myselfContent.setVisible(true);
					break;
				case "back":
					app.back();
					break;
			}
		}
	});

});