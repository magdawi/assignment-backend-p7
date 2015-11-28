$(document).ready(function() {
	$(document).on("click", "[data-hello]", function(e){
		new HelloWorld(e.target.dataset.hello).sayHello()
	})
})