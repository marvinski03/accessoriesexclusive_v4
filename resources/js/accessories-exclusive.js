jQuery(document).ready(function() {
	function setHeader(){
		if( jQuery(document).scrollTop() > 158){
			if(!(jQuery("body").hasClass("scroll-header"))){
				jQuery("body").addClass("scroll-header");
			}
		}else{
			if(jQuery("body").hasClass("scroll-header")){
				jQuery("body").removeClass("scroll-header");
			}
		}
	}

	setHeader();

	jQuery(document).scroll(function() {
	    setHeader();
	});


	jQuery("#search-toggle").click(function(){
		jQuery("header").toggleClass("activeSearch");
		jQuery("#flAutocompleteInputText").focus();
	});

	/*jQuery(".variation-select").each(function(){
		var curselect = jQuery(this).find("select.custom-select").children("option:selected").text();
		if(curselect == "Bitte wählen"){
			jQuery(this).find("select.custom-select option:eq(1)").prop('selected', true);
			jQuery(this).find("select.custom-select option:eq(1)").click();
			jQuery(this).find("select.custom-select option:eq(1)").trigger("click");
			jQuery(this).find("select.custom-select").val(jQuery(this).find("select.custom-select option:eq(1)").val());
			jQuery(this).find("select.custom-select").trigger("click");
			jQuery(this).trigger("click");
			jQuery(this).click();
			jQuery(this).find("select.custom-select option:eq(1)").onClick();
		}
	});*/

});