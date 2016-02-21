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
			switch (data.name) {
				case "hello":
					view.byId("helloContent").setVisible(true);
					break;
				case "whoami":
					this.navToPage2();
					break;
				case "back":
					this.navBack();
					break;
			}
		},

		navBack: function(){
			var view = this.getView();
			var app = view.byId("app");
			app.back();
		},

		navToPage2: function(){
			var view = this.getView();
			var app = view.byId("app");
			app.to(view.createId("page2"), "slide");
		},

		page1NextIconPress: function(){
			this.navToPage2();
		}
	});

});