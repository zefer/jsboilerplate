/**
 * A Class template
 */
my_namespace.SomeClass = function()
{
	var that = this;
	
	/**
	 * Constructor.
	 */
	function init(args)
	{
		attachEvents();
	};
	
	/* Public */
	
	this.something = function(arg)
	{
		log('this.something', that, arg);
		doSomething();
	}
	
	/* Private */
	
	function doSomething()
	{
	};
	
	/**
	 * Attaches events to page elements
	 */
	function attachEvents()
	{
		$('body').click(function(e) {
		    that.something(e);
		});
	};
	
	// instantiate and return
	return init(Array.prototype.slice.call(arguments));
}

$(document).ready(function(){
	// instantiate
  my_namespace.someClass = new my_namespace.SomeClass();
});