module.exports = {
	imgAllLoad: function(scope, callback){
			
	},
	myScroll: function( ){
		
		Vue.directive('scroll', function (option) {
			console.log( option.el );
			
			console.log( option.config );
			if( option.scroll ){
				option.scroll = new IScroll(option.el , option.config );
			}
			console.log( option.scroll );
		})
	}
}

				//  this.el.innerHTML =
				//    'name - '       + this.name + '<br>' +
				//    'expression - ' + this.expression + '<br>' +
				//    'argument - '   + this.arg + '<br>' +
				//    'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
				//    'value - '      + value