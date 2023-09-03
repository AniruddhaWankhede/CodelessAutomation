$(document).ready(function(){
    	var inputBoxText;
	var script = "\n";
	
	// Handle Keyboard Events
	$("input:not([type='submit']), textarea").on("keydown", function(e) {
		// Check whether TAB key is pressed or not
		if(e.which == 9) {
			var domElement = $(this).prop("outerHTML");
			var tagName, locator;
			var xpath = "//";
			var line = "";

			line += "driver.findElement(";
			// Find Tag name
			tagName = domElement.split(" ")[0].replace("<", "");
			xpath += tagName;
			xpath += "[";
			// Find locator by ID
			if(domElement.includes("id=")) {
				line += "By.id(\"";
				xpath += "@";
				locator = "id=" + domElement.split("id=")[1].split(" ")[0].replaceAll("\"", "'");
				xpath += locator;
				xpath += "]";
			}
			line += xpath + "\")).sendKeys(\"" + $(this).val() + "\");";
			
			// Add line separator
			script += line + "\n";
			alert(script);
		}
	});

	// Handle Mouse Click Event
	$("input[type='submit'], button, a").on("click", function() {
		var domElement = $(this).prop("outerHTML");
		var tagName, locator;
		var xpath = "//";
		var line = "";

		line += "driver.findElement(";
		// Find Tag name
		tagName = domElement.split(" ")[0].replace("<", "");
		xpath += tagName;
		xpath += "[";
		// Find locator by ID
		if(domElement.includes("id=")) {
			line += "By.id(\"";
			xpath += "@";
			locator = "id=" + domElement.split("id=")[1].split(" ")[0].replaceAll("\"", "'");
			xpath += locator;
			xpath += "]";
		}
		line += xpath + "\")).click();";

		// Add line separator
		script += line + "\n";
		alert(script);
	});
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

