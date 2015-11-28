fhs37248 Magdalena Wimmer
fhs36111 Bernhard Steger

Recipes
=======

a ruby on rails 4.1 example app
to learn about the asset pipeline.

clone this repository, then

    bundle
    rake db:migrate
    rails server

now point your browser at the homepage at http://localhost:3000/
or at http://localhost:3000/todo.html 


DOCUMENTATION:

-----------------------------------------------------------------------------------------------------------------
• Load Seed Data

What is seed data? 
	Seed data is dummy data to test the application. It fills the database.
	
Where is the actual file located?
	/db/seeds.rb

And what was that rake task to load it?
	rake db:seed
	or
	rake db:setup  (rake db:migrate + rake db:seed)		
		
-----------------------------------------------------------------------------------------------------------------
• Use rails-ujs: Unobstrusive Javascript

Look at the HTML-Code for deleting an ingredient: where does the javascript to confirm come from?
	from the file /app/views/ingredients/index.html.erb
	<%= link_to 'Destroy', ingredient, method: :delete, data: { confirm: 'Are you sure?' } %>

Try applying the same to a normal navigation link - does it also show the confirmation-popup?
	yes, if you add  "data: { confirm: 'Are you sure?' }" to a normal navigation link, the popup appears too

-----------------------------------------------------------------------------------------------------------------
• Use Ecmascript 6

Add the following two lines to the Gemfile, bundle + restart the server

	gem 'sprockets'
	gem 'sprockets-es6', require: 'sprockets/es6'

	Now save the follwing code as /app/assets/javascripts/hello_world.js.es6:

	class HelloWorld {  
	  constructor(name) {
	    this.name = name;
	  }
	 
	  sayHello() {
	    alert("Hello " + this.name);
	  }
	}

	Check if it is transpiled to javascript correctly!

	it's been transpiled to es5 correctly

	Now add code in /app/assets/javascript/main.js.es6 to use this class for the Greetings-Form on the homepage. Be unobtrusive about it!
	added code to main.js.es6
		$(document).ready(function() {
			$(document).on("click", "[data-hello]", function(e){
				new HelloWorld(e.target.attributes[0].value).sayHello()
			})
		})

	We passed parameter "e" to access the current button data value. 
	After that a new HelloWorld object is created and the method sayHello() with the actual value is triggered.

-----------------------------------------------------------------------------------------------------------------
• Switch on Turbolinks

Uncomment turbolink in the Gemfile, bundle + restart the server

Add the following to application.js:

//= require turbolinks

Can you detect a difference?
	no, we can't detect differences.
	turbolinks are a little bit faster than normal links but it's not visible for the naked eye.

Turbolinks are on by default, you have been using them in your other rails apps from the start.

-----------------------------------------------------------------------------------------------------------------
• Use AJAX with Rails

In page ingredients:
the 'edit' link should not link to another page, but load the edit-form right into the current page,
replacing the display of the ingredient name

edited ingredients/index.html.erb
	added attribute "remote: true" to edit link

edited ingredients_controller (if html is needed render edit.html.erb, if js is needed render 'edit.js.erb'):
	def edit
	    respond_to do |format|
	      format.html { render :edit }
	      format.js   { render 'edit.js.erb' }
	    end
	end

created 'edit.js.erb' with (replaces span text with input field):
	$("#ingredient_<%= @ingredient.id %>").find('span').html("<%= j render 'form' %>");

enabled protect_from_forgery in application_controller

-----------------------------------------------------------------------------------------------------------------

