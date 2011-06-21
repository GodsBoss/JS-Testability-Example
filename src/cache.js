function cache(func){
	var values = {};

	return function(string){
		if (!values.hasOwnProperty(string)){
			values[string] = func(string);}
		return values[string];};}
