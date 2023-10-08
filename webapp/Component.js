sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "./model/models"],
  function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("sveltetodo.Component", {
      metadata: {
        manifest: "json",
      },

      init: function () {
        UIComponent.prototype.init.call(this); 
        this.setModel(models.createDeviceModel(), "device");
 
        sap.ui.getCore().attachThemeChanged(this.onThemeChanged, this);
        sap.ui.getCore().attachLocalizationChanged(this.onLocalizationChanged, this);
      },

      onThemeChanged: function (oEvent) {
        window["sveltetodo_onThemeChanged"](
          sap.ui.getCore().getConfiguration().getTheme()
        );
      },

      onLocalizationChanged: function (oEvent) {
        window["sveltetodo_onLocalizationChanged"](
          sap.ui.getCore().getConfiguration().getLanguage()
        );
      },

      
			render: function (oRM) {
        oRM.openStart("div");
        oRM.attr("id", 'svelte');
        oRM.attr("style", "height: 100%;");
        oRM.openEnd();
        oRM.close("div");
      },

      onAfterRendering: function () {
        var param = {
          CurrentLocale: sap.ui.getCore().getConfiguration().getLanguage(),
          Theme: sap.ui.getCore().getConfiguration().getTheme(),
          AnimationMode: sap.ui.getCore().getConfiguration().getAnimationMode(),
          DivName: 'svelte',
        };
        this.unloadApp = window["sveltetodo"](param);
      },

      destroy: function () {
        UIComponent.prototype.destroy.apply(this, arguments);
        this.unloadApp();
        sap.ui.getCore().detachThemeChanged(this.onThemeChanged, this);
        sap.ui
          .getCore()
          .detachLocalizationChanged(this.onLocalizationChanged, this);
      },
    });
  }
);
