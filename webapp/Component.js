sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ui5con/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ui5con.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.startVoiceCapture();
		},

		startVoiceCapture: function() {
			if (annyang) {
				// Let's define our first command. First the text we expect, and then the function it should call
				var commands = {
					'hello': function() {
						//$('#tpsreport').animate({bottom: '-100px'});
					}
				};
				// Add our commands to annyang
				annyang.addCommands(commands);
				// Start listening. You can call this here, or attach this call to an event, button, etc.
				annyang.start();
			}
		}
	});

});