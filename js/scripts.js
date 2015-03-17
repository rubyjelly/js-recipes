$(document).ready(function() {
	
	// Accordions
	function initAccordion() {
		var labels = document.getElementsByClassName("tab-label");
		for (var i=0; i<labels.length; i++) {
			var label = labels[i],
				labelLink = labels[i].childNodes[0];
			label.setAttribute("aria-expanded", "false");
			labelLink.onclick = function toggleAccordion(evt) {
				var parent = this.parentNode,
					panel = parent.nextSibling.nextSibling;
				evt.stopPropagation();
				if (panel.style.display == "block") {
					panel.style.display = "none";
				} else {
					panel.style.display = "block"
				}
				return false;
			}
		}
		
		var panels = document.getElementsByClassName("tab-panel");
		for (var j=0; j<panels.length; j++) {
			panels[j].style.display = "none";
			panels[j].setAttribute("aria-hidden", "true");
		}
	}
	
	initAccordion();
});
