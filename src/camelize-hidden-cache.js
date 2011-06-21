var camelize = (function(){
	var cache = {};

	var underscoreFollowedByLowercaseCharRE = /_([a-z])/g;

	function returnUpcasedCharAfterUnderscore(matchedSubstring, charAfterUnderscore){
		return charAfterUnderscore.toUpperCase();}

	function createCacheEntryIfNecessary(string){
		if (!cache.hasOwnProperty(string)){
			cache[string] = string.replace(underscoreFollowedByLowercaseCharRE, returnUpcasedCharAfterUnderscore);}}

	return function(string){
		createCacheEntryIfNecessary(string);
		return cache[string];};})();
