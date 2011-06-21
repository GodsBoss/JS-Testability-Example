function camelize(string){
	return string.replace(/_([a-z])/g, function(matchedSubstring, charAfterUnderscore){
		return charAfterUnderscore.toUpperCase();});}
