function check(abs){
	var hasMine = abs.data('value');
	if (hasMine){
		var mineImg = "<img src='imgs/mine.png'/>";
		abs.html(mineImg);
		$('#myModal').modal('show')
	}else{
		abs.addClass('yay1');
	}
}

$(document).ready(function(){
	$("td.yay").each(function (index){
		if (random())
			$(this).attr('data-value', 'mine');
	});
	$(".yay").click(function(){
		check($(this));
	});
});

function random() { return (Math.random() * (1 + 10 - 0 )>9); }

function myFunction() {
	location.reload();
}
