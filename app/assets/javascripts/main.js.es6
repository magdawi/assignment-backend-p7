$(document).ready(function() {
	$(document).on("click", "[data-hello]", function(e){
		new HelloWorld(e.target.attributes[0].value).sayHello()
	})
})