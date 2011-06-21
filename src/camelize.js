var camelize = (function(){
	var underscoreFollowedByLowercaseCharRE = /_([a-z])/g;

	function returnUpcasedCharAfterUnderscore(matchedSubstring, charAfterUnderscore){
		return charAfterUnderscore.toUpperCase();}

	return function(string){
		return string.replace(underscoreFollowedByLowercaseCharRE, returnUpcasedCharAfterUnderscore);};})();
