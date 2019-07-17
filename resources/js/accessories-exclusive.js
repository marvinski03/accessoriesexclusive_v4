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
		jQuery("body").toggleClass("activeSearch");
		jQuery("#flAutocompleteInputText").focus();
	});

	jQuery(".search-box-shadow-frame input[type='search']").attr("placeholder","Bitte Suchbegriff eingeben...").attr("name","query");
	jQuery(".search-box-shadow-frame").wrap('<form action="/search" method="get"></form>');

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