	var canvas = document.querySelector('canvas');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');

	// Arc / Circle
 	c.beginPath();
 	c.arc(300, 275, 60, 0, Math.PI * 2, false);
 	c.fillStyle = "orange";
 	c.fill();


 	var mouse = {
 		downX:undefined,
 		downY:undefined,
 		upX:undefined,
 		upY:undefined,
 		downTime:undefined,
 		upTime:undefined
 	}

 	window.addEventListener('mousedown', 
 		function(event){
 			mouse.downX = event.clientX;
 			mouse.downY = event.clientY;
 			mouse.downTime = new Date().getTime();
 			console.log("Mouse Down x: " + mouse.downX + " y: " + mouse.downY + " time: " + mouse.downTime);
 		}
 	);

 	window.addEventListener('mouseup', 
 		function(event){
 			mouse.upX = event.clientX;
 			mouse.upY = event.clientY;
 			mouse.upTime = new Date().getTime();
 			console.log("Mouse Up x: " + mouse.upX + " y: " + mouse.upY + " time: " + mouse.upTime);
 			console.log("Difference x: " + (mouse.upX - mouse.downX) + " y: " + (mouse.upY - mouse.downY) + " time: " + (mouse.upTime - mouse.downTime));
 		}
 	);

