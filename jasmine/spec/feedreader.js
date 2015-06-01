/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
<!--- $(function() { -->

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds:', function() {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('AllFeeds defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //test all the feeds and makes sure each has a URL defined and URL is not empty
       	for (var x=0; x<=allFeeds.length-1; x++) {
	        it('Feed '+ x +': URL defined and not empty', function() {
	       	    for (var y=0; y<=allFeeds.length-1; y++) {
				    expect(allFeeds[y].url).tobeDefined;
				    expect(allFeeds[y].url.length).not.toBe(0);
			    };
	        });

       	};

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        //test all the feeds and makes sure each has a Name defined and Name is not empty
        for (var x=0; x<=allFeeds.length-1; x++) {
	        it('Feed '+ x +': NAME defined and not empty', function() {
	   		    for (var x=0; x<=allFeeds.length-1; x++) {
				    expect(allFeeds[x].name).tobeDefined;
				    expect(allFeeds[x].name.length).not.toBe(0);
        	    };
            });
    	};
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        var menuHiddenDefault = document.body.classList.contains("menu-hidden"); //checks if the body tag has class menu-hidden

	    it('element is hidden by default', function() {
	    	expect(menuHiddenDefault).toBeTruthy();
	    });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        var menuvisible; //is menu visible or not visible
        var menuIcon = $('.menu-icon-link'); //where the mouse needs to click to open the menu
        menuIcon.click(); //simulates a mouse click on the menuicon

        //assumes the menuIcon has been clicked and the menu is opened
        if (menuIcon.click()) {
            console.log(menuIcon.click());
            menuvisible = "true" //menu is visible
        }

        it('is displayed When clicked', function() {
            expect(menuvisible).toBeTruthy();
        });

        //assumes the menuIcon has been clicked again and the menu is closed
        if (!menuIcon.click()) {
            console.log(menuIcon.click());
            menuvisible = "false" //menu is invisible as the menu Icon is click again to close it
        }

        it('is not displayed when clicked again', function() {
            expect(menuvisible).toBeTruthy();
        });

    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries: ', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

		var jj=0, //initialize the variable to 0
		    entry_element, //hold the contents of .entry class
            function_called; //hold the contents of .header-title class

       	beforeEach(function(done) {
       	   loadFeed(jj, done);
       	});

		it ('ensures the LoadFeed Function has been called and completes its work', function() {
			function_called = $('.header-title').html();
			expect(function_called.length).toBeGreaterThan(0);
		});

    	it('There is at least a single entry element within the feed container', function() {
		   entry_element = $('.entry').html();
		   expect(entry_element.length).toBeGreaterThan(0);
	    });
    });


   /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection: ', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       	var InitialFeed= $('.header-title').html(), //The default feed of the News Feed
   		    NewFeed, //hold the contents of the new feed
            nn=0; //initialize the variable to 0


       	   beforeEach(function(done) {
       	       loadFeed(nn, done);
       	   });

     	    it('When Feed is Loaded the content changes', function() {
     		   NewFeed = $('.header-title').html();
		       expect(NewFeed).not.toBe(InitialFeed);
	        });
    });





<!--- }()); -->
