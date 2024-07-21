window.onload = function() {
	var left_canvas = document.getElementById('left_canvas');
	if (left_canvas) {
		var ctx = left_canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(0,0);
		var wide_ = left_canvas.width;
		var high_ = left_canvas.height;
		ctx.lineTo(0,high_);
		ctx.lineTo(wide_,high_);
		ctx.lineTo(wide_,0);
		ctx.lineTo(0,0);
		ctx.stroke();
		ctx.fillStyle = "rgba(255, 255,255, 0.5)";
		ctx.fill();
	} else {
		console.error('Element with id "left_canvas" not found.');
	}
};