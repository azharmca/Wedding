jQuery.sap.declare("sap.wed.invitation.Component");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
// jQuery.sap.includeStyleSheet("css/TimeSheet.css");
sap.ui.core.UIComponent.extend("sap.wed.invitation.Component",
		{
			metadata : {
				routing : {
					config : {
						viewType : "XML",
						viewPath : "sap.wed.invitation.view",
						targetControl : "fioriContent",
						targetAggregation : "pages",
						clearTarget : false
					},
					routes : {
						"Launch" : {
							pattern : "",
							view : "Launch"
						},
						"NusratWedding" : {
							pattern : "NusratWedding",
							view : "NusratWedding"
						},
						"Marriage_Venue" : {
							pattern : "Marriage_Venue",
							view : "Marriage_Venue"
						},
						"SwalehaWedding" : {
							pattern : "SwalehaWedding",
							view : "SwalehaWedding"
						}
					}
				}
			},
			init : function() {
				sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
				this._oRouter = this.getRouter();
				this.routeHandler = new sap.m.routing.RouteMatchedHandler(
						this._oRouter);
				this._oRouter.initialize();
			},
			createContent : function() {
				this.oView = new sap.ui.view({
					height : "100%",
					viewName : "sap.wed.invitation.view.Home",
					type : "XML",
					viewData : {
						component : this
					}
				});

				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleUrl : "i18n/messagebundleTS.properties"
				});
				sap.ui.getCore().setModel(i18nModel, "i18n");
				this.oView.setModel(i18nModel, "i18n");
				return this.oView;
			},
			destroy : function() {
				if (this.routeHandler) {
					this.routeHandler.destroy();
				}
				sap.ui.core.UIComponent.prototype.destroy
						.apply(this, arguments);
			}
		});
