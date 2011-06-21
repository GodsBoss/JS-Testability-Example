describe('Cache', function(){
	function id(string){
		return string;}

	var changeCalls;

	function change(string){
		changeCalls++;
		return 'prefix_'+string;}

	beforeEach(function(){
		changeCalls = 0;});

	it('returns results of the wrapped function.', function(){
		expect(cache(change)('foo')).toEqual('prefix_foo');
		expect(cache(change)('bar')).toEqual('prefix_bar');
		expect(cache(id)('baz')).toEqual('baz');});

	it('calls the wrapped function only once if the same argument is used several times.', function(){
		var c = cache(change);
		c('foo');
		c('foo');
		expect(changeCalls).toEqual(1);});
});
