describe('Camelize', function(){

	it('returns the empty string if given an empty string.', function(){
		expect(camelize('')).toEqual('');});

	it('returns an unmodified string if the string does not contain "_".', function(){
		expect(camelize('foo')).toEqual('foo');});

	it('returns "fooBar" if given "foo_bar".', function(){
		expect(camelize('foo_bar')).toEqual('fooBar');});

	it('returns "thisIsACamelizedString" if given "this_is_a_camelized_string".', function(){
		expect(camelize('this_is_a_camelized_string')).toEqual('thisIsACamelizedString');});
});
