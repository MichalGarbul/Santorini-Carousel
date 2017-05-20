$(function(){
	var carouseList = $("#carousel ul");
	setInterval(changeSlide, 3000);
	
	function changeSlide(){
		carouseList.animate({'marginLeft':-500},1000, moveFirstSlide);
	};

	function moveFirstSlide(){
		var firstItem = carouseList.find("li:first"),
			lastItem = carouseList.find("li:last");

		lastItem.after(firstItem);
		carouseList.css({marginLeft:0});
	};
});