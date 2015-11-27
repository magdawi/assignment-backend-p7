$(document).ready(function() {
	$("[data-hello]").click(function(e){
		new HelloWorld(e.target.attributes[0].value).sayHello()
	})
})