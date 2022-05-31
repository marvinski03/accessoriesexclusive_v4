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

	$(".paypalSmartButtons").prepend("<div class='per-vorkasse btn btn-primary'>Per Vorkasse zahlen</div>");

	$('body').on('click', 'body.page-singleitem .per-vorkasse', function(e) {
		e.preventDefault();
		$(".add-to-basket-container button").click();
	});

	

	jQuery(document).scroll(function() {
	    setHeader();
	});


	jQuery("#search-toggle").click(function(){
		jQuery("body").toggleClass("activeSearch");
		jQuery("#flAutocompleteInputText").focus();
	});

	jQuery("input[type='search']").attr("placeholder","Bitte Suchbegriff eingeben...").attr("name","query");
	jQuery(".search-box-shadow-frame").wrap('<form action="/search" method="get"></form>');


	/** MOBILE SEARCH TOGGLE **/

	function setSearchPosition(){
		if( jQuery(window).width() < 992 ){
			$("#search-toggle").insertBefore(".mobile-menu .toggle-basket-preview");
		}else{
			$("#search-toggle").insertAfter("#mainNavbarCollapsable > ul");
		}
	}

	setSearchPosition();

	jQuery(window).resize(function(){
		setSearchPosition();
	});


	/** VIDEO POPUP **/

	jQuery("#guertel-kuerzen").click(function(){
		window.open('https://youtu.be/_UElZGcxlDU','popup','width=700,height=500');
		return false;
	});

	/** WEITERSHOPPEN **/

	$('body').on('click', '.add-to-basket-container', function(event) {
		if( $(".go-shopping").length  < 1 ){
			setTimeout(function(){
				$("#add-item-to-basket-overlay .modal-footer").prepend("<a data-dismiss='modal' aria-label='Close' rel='nofollow' class='btn btn-outline-primary btn-medium mr-2 go-shopping'><i class='fa fa-tags' aria-hidden='true'></i> Weitershoppen</a>");
			},1000);
		}
		console.log("Go Shopping.");
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