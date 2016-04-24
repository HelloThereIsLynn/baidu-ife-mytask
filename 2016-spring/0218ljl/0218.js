
//跨浏览器事件处理程序
function addHandler(element, type, handler){
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	}else if (element.attachEvent) {
		element.attachEvent("on" + type, handler);
	}else{
		element["on" + type] = handler;
	}
}

var text = document.getElementById("textValue");
var leftIn = document.getElementById("left-in");
var leftOut = document.getElementById("left-out");
var rightIn = document.getElementById("right-in");
var rightOut = document.getElementById("right-out");
var placeholder = document.getElementById("placeholder");
var ul = document.getElementById("myul");

var numbers = [];

function show(num){
	var li = document.createElement("li");
	for (var i = 0; i < numbers.length; i++) {
		li.innerHTML = numbers[i];
	};
		ul.appendChild(li);
}

function LeftIn(){
		numbers.push(text.value);
		show(numbers);	
	}

addHandler(leftIn, 'click', LeftIn);
addHandler(leftOut, 'click', handler);
addHandler(rightIn, 'click', handler);
addHandler(rightOut, 'click', handler);
