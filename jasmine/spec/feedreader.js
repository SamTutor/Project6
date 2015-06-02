/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {

    // Test Suite RSS FEEDS
    describe('RSS Feeds:', function() {
        
        // Test to make sure allFeeds has been defined and that it is not empty
	it('AllFeeds defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test all the feeds and makes sure each has a URL defined and URL is not empty
       	for (var x1 = 0; x1 <= allFeeds.length-1; x1++) {
	    it('Feed '+ x1 +': URL defined and not empty', function() {
	        for (var y1 = 0; y1 <= allFeeds.length-1; y1++) {
		    expect(allFeeds[y1].url).tobeDefined;
		    expect(allFeeds[y1].url.length).not.toBe(0);
		}
	    });
       	}

        // Test all the feeds and makes sure each has a Name defined and Name is not empty
        for (var x2 = 0; x2 <= allFeeds.length-1; x2++) {
            it('Feed '+ x2 +': NAME defined and not empty', function() {
  	        for (var y2 = 0; y2 <= allFeeds.length-1; y2++) {
		    expect(allFeeds[y2].name).tobeDefined;
		    expect(allFeeds[y2].name.length).not.toBe(0);
        	}
            });
    	}
    });

    // Test suite THE MENU
    describe('The menu', function() {

	// Test to ensure the menu element is hidden by default
        var menuHiddenDefault = document.body.classList.contains("menu-hidden"); //checks if the body tag has class menu-hidden

	it('element is hidden by default', function() {
	    expect(menuHiddenDefault).toBeTruthy();
	});

	// Test to ensure the menu changes visibility when the menu icon is clicked
        var menuvisible; //is menu visible or not visible
        var menuIcon = $('.menu-icon-link'); //where the mouse needs to click to open the menu
        menuIcon.click(); //simulates a mouse click on the menuicon

        // Assumes the menuIcon has been clicked and the menu is opened
        if (menuIcon.click()) {
            console.log(menuIcon.click());
            menuvisible = "true"; //menu is visible
        }

        it('is displayed When clicked', function() {
            expect(menuvisible).toBeTruthy();
        });

        // Assumes the menuIcon has been clicked again and the menu is closed
        if (!menuIcon.click()) {
            console.log(menuIcon.click());
            menuvisible = "false"; //menu is invisible as the menu Icon is click again to close it
        }

        it('is not displayed when clicked again', function() {
            expect(menuvisible).toBeTruthy();
        });
    });

    // Test Suite INITIAL ENTRIES
    describe('Initial Entries: ', function() {

        // Test to ensure when the loadFeed function is called and completes its work and
        // Test to ensure there is at least a single entry element with the feed container
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


   //Test Suite NEW FEED SELECTIONS
    describe('New Feed Selection: ', function() {

   	//Test to ensire when a new feed is loaded by the loadFeed function that the content actually changes
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
    
}());
