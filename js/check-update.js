// Check to see if sketch-latest is on the latest version
var plugin = {
  checkPluginUpdate: function(){		
		try {
			var response = this.getJSONFromURL('https://raw.githubusercontent.com/paulfarino/sketch-latest/master/sketchpack.json')
			if(response && response.version){
				var rgx = new RegExp("\\d","g");
				var removeVersion = parseFloat(response.version.match(rgx).join(""))
				var installedVersion = parseFloat(this.appVersion.match(rgx).join(""))
				if (removeVersion > installedVersion) [doc showMessage:"New plugin update is available! Visit https://github.com/paulfarino/sketch-latest"]
			}		
		}catch(e){
			log(e);
		}
	}
};