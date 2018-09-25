var hf;
var pA;
var pP;
var pE;
var lb;

$(document).ready(function () {
	InitHint();

	select(true);
	$("#rb1, #rb2, #rb3").change(function () {
		hf.val($(this).attr("id").replace('rb', ''));
		select(false);
	});
});

var select = function (isStart) {
	$("#rb1, #rb2, #rb3").prop('checked', false);
	$("#rb" + hf.val()).prop('checked', true);

	var pan = undefined;
	switch (hf.val()) {
		case "1":
			pan = pA;
			break;
		case "2":
			pan = pP;
			break;
		case "3":
			pan = pE;
			break;
	}

	if (!isStart) {
		lb.fadeOut(350, function () {
			lb.html("");
			lb.fadeIn(1);
		});
	}

	$("#cMain>div:visible").fadeOut(isStart ? 1 : 350, function () { pan.fadeIn(isStart ? 1 : 350); });
};

var InitHint = function () {
	$("input.tHint, textarea.tHint").each(function () {
		$(this).watermark($(this).attr("aTitle"));
		$(this).removeAttr("aTitle");
	});
};