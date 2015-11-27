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
1. Load Seed Data
	What is seed data? 
		Seed data is dummy data to test the application. It fills the database.
	
	Where is the actual file located?
		/db/seeds.rb

	And what was that rake task to load it?
		rake db:seed
			or
		rake db:setup  (rake db:migrate + rake db:seed)		
		
-----------------------------------------------------------------------------------------------------------------
2. Use rails-ujs: Unobstrusive Javascript
	Look at the HTML-Code for deleting an ingredient: where does the javascript to confirm come from?
		from the file /app/views/ingredients/index.html.erb
			<%= link_to 'Destroy', ingredient, method: :delete, data: { confirm: 'Are you sure?' } %>

	Try applying the same to a normal navigation link - does it also show the confirmation-popup?
-----------------------------------------------------------------------------------------------------------------
3. Use Ecmascript 6
	Add the following two lines to the Gemfile, bundle + restart the server

		gem 'sprockets'
		gem 'sprockets-es6', require: 'sprockets/es6'

		No save the follwing code as /app/assets/javascript/hello_world.js.es6:

		class HelloWorld {  
		  constructor(name) {
		    this.name = name;
		  }
		 
		  sayHello() {
		    alert("Hello " + this.name);
		  }
		}

	Check if it is transpiled to javascript correctly!

	Now add code in /app/assets/javascript/main.js.es6 to use this class for the Greetings-Form on the homepage. Be unobstrusive about it!
-----------------------------------------------------------------------------------------------------------------
4. Switch on Turbolinks

-----------------------------------------------------------------------------------------------------------------
5. Use AJAX with Rails

-----------------------------------------------------------------------------------------------------------------

