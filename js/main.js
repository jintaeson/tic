$('.craft_item').on('click', function() {
	$('.craft').removeClass('dropdown');
	//$('.craft .sublist').children('li').remove();
	$('.craft').children('.sublist').remove();
	$('.craft').children('.right').remove();

	$(this).parents('.craft').addClass('dropdown');
	$(this).parents('.craft').append('<ul class="sublist"><li id="craft_item1" onClick="subitem_click(this)">Information</li><li id="craft_item2" onClick="subitem_click(this)">Craft Designer</li><li id="craft_item3" onClick="subitem_click(this)">Workstation</li><li id="craft_item4" onClick="subitem_click(this)">WorkBoard</li></ul>');
	$(this).parents('.craft').append('<button class="right">icon</button>');
});

function subitem_click(el) {
	console.log("?");
	$(el).parents('ul').children('li').removeClass('seleted');
	$(el).addClass('seleted');
}

$('.applist li').on('click', function() {
	$('.applist li').removeClass('selected');
	$(this).addClass('selected');

	var appname = $(this).children('span').text();

	var appArr = appname.split('.');
	$('#app_name').text(appArr[0] + "_1.03");
});
