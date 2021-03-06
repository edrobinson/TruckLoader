/*
	File: xajax_core.js
	
	This file contains the definition of the main xajax javascript core.
	
	This is the client side code which runs on the web browser or similar 
	web enabled application.  Include this in the HEAD of each page for
	which you wish to use xajax.
	
	Title: xajax core javascript library
	
	Please see <copyright.inc.php> for a detailed description, copyright
	and license information.
*/

/*
	@package xajax
	@version $Id: xajax_core_uncompressed.js 327 2007-02-28 16:55:26Z calltoconstruct $
	@copyright Copyright (c) 2005-2007 by Jared White & J. Max Wilson
	@copyright Copyright (c) 2008-2010 by Joseph Woolley, Steffen Konerow, Jared White  & J. Max Wilson
	@license http://www.xajaxproject.org/bsd_license.txt BSD License
*/

/*
	Class: xajax.config
	
	This class contains all the default configuration settings.  These
	are application level settings; however, they can be overridden
	by including a xajax.config definition prior to including the
	<xajax_core.js> file, or by specifying the appropriate configuration
	options on a per call basis.
*/
if ('undefined' == typeof xajax)
	xajax = {};

if ('undefined' == typeof xajax.config) {
	console.log('xajax_loader config create');
	xajax.config = {};
}

xajax.default_config = {
	commonHeaders : {'If-Modified-Since': 'Sat, 1 Jan 2000 00:00:00 GMT'}
	,postHeaders : {}
	,getHeaders : {}
	,waitCursor : false
	,statusMessages : false
	,'baseDocument' : document
	,'requestURI' : document.URL
	,defaultMode : 'asynchronous'
	,defaultHttpVersion : 'HTTP/1.1'
	,defaultContentType : 'application/x-www-form-urlencoded'
	,defaultResponseDelayTime : 1000
	,defaultExpirationTime : 10000
	,defaultMethod : 'POST'
	,defaultRetry : 5
	,defaultReturnValue : false
	,maxObjectDepth : 20
	,maxObjectSize : 2000
	,responseQueueSize : 1000
	
	
};

/*
	Function: xajax.config.setDefault
	
	This function will set a default configuration option if it is 
	not already set.
	
	Parameters:
	option - (string):
		The name of the option that will be set.
		
	defaultValue - (unknown):
		The value to use if a value was not already set.
*/
xajax.config.setDefaults = function() {
  for (a in xajax.default_config) {
		if ('undefined' == typeof xajax.config[a]) {
			
			xajax.config[a] = xajax.default_config[a];
		}
		else {
			console.log('defined '+a);
		}
  }	

}


xajax.config.setDefault = function(option, defaultValue) {
	if ('undefined' == typeof xajax.config[option])
		xajax.config[option] = defaultValue;
}

xajax.isLoaded = true;


//xajax.request = function () {
//	var oDoc = xajax.config.baseDocument;
//	var objHead = oDoc.getElementsByTagName('head');
//	var objScript = oDoc.createElement('script');
//	objScript.src = xajax.config.JavaScriptURI+"xajax_js/xajax_core.js";
//	objScript.type = 'text/javascript';
//	objHead[0].appendChild(objScript);
//	xajax.isLoaded=false;
//	var args = arguments;
//	xajax.loader = window.setTimeout(function() {
//		
//		xajax.request.apply(xajax,args);
//	});
//	
//	return true;	
//	
//}

xajax.config.setDefaults();


xajax.loadCore = function() {
	
	console.log(this.callee.toString());
  var ownName = arguments.callee.toString();
  ownName = ownName.substr('function '.length);        // trim off "function "
  ownName = ownName.substr(0, ownName.indexOf('('));        // trim off everything after the function name

	console.log(ownName);

	var oDoc = xajax.config.baseDocument;
	var objHead = oDoc.getElementsByTagName('head');
	var objScript = oDoc.createElement('script');
	objScript.src = xajax.config.JavaScriptURI+"xajax_js/xajax_core.js";
	objScript.type = 'text/javascript';
	objHead[0].appendChild(objScript);
	xajax.isLoaded=false;
	var args = arguments;
	
		
	//return xajax.request.apply(xajax,args);
	

}
//
//
//xajax.request = xajax.loadCore;
//	xajax.loadCore();

	function foo() {
		
		console.log(this);
	  var ownName = arguments.callee.toString();
	  ownName = ownName.substr('function '.length);        // trim off "function "
	  ownName = ownName.substr(0, ownName.indexOf('('));        // trim off everything after the function name
		console.log(ownName);	
		var args = arguments;
		window.setTimeout(function() {
			
			console.log(args.callee.toString());
			
		});
	
}
xajax.request = foo;
function x() {
foo();
}
x();