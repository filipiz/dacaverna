// facebook-events
// permanent token
//http://stackoverflow.com/questions/17197970/facebook-permanent-page-access-token
//graphAPI explorer
// https://developers.facebook.com/tools/explorer/239750763024256?method=GET&path=dacaverna%2Fevents%3Fsince%3D1309023710&version=v2.5

var eventsDFD = $.Deferred();
var dfd = [];

// var eventsURL = '/142914932395898/events';
var eventsURL = '/286119104755993/events';
var tokenParam = {
	//da caverna long
	// access_token : 'CAADaDVMQj4ABAFqTBZBVNnwsPe28ct29lc1rRIlX5NW44Jxc1ipMQ0awBtTt5mKmUwPkVjbs5uHDv4fqhZCQjlJTINDxTQZCDoumiy51vtbGIOKFPsmG7r59WuX9BAa7woZBQ4cQ4FQicksdnXL36RJd61jZBy52zBybIOCdNmyg7lGW2JIBIVtn3OiJXEkMZD'
	//test page
	access_token: 'CAADaDVMQj4ABALu0tUnPvvIhisVbeLa3NnLGkWJNwHPS608TQuwrMLsQraKnD0PqnZC3aMwuaZB0uWh5AB4XYYiY5ne0RQJnr5x7eRdVZBHczIO5IeriF8Samws9hiVZAXoOMc6V2dtRwD18wTZAODtqJLWi4iuEcH4MHM5uZCPfJKrax9EcIs5LOtQ88bRI4ZD'
};

var eventsParam = $.extend({ since: Math.round( (new Date()).getTime()/1000) }, tokenParam);
var imageParam = $.extend({ width: 90}, tokenParam);



var FBHandler = {
	eventsDFD : $.Deferred(),

	init : function() {
		FB.init({
			appId      : '239750763024256',
			xfbml      : false,
			version    : 'v2.5'
		});

		FBHandler.loadEvents().done(FBHandler.renderEvents);
	},

	getImage : function(event){
		var imageDFD = $.Deferred();
		FB.api('/'+event.id+'/picture', imageParam, function(resp){
			imageDFD.resolve($.extend({}, event, { image: resp.data.url}));
		});
		return imageDFD.promise();

	},

	loadEvents: function(){
		var eventsDFD = $.Deferred();
		FB.api(eventsURL, tokenParam, function (resp) {
			var imagesDFD = [];

			//TODO ordenar antes de iterar.
			if (resp.data !== undefined) {
				for (var i = 0, l = resp.data.length; ((i < l) && (i < 3)); i++) {
					var event = resp.data[i];
					imagesDFD.push(FBHandler.getImage(event));
				}
			} else {
				// no events handle             
			}

			$.when.apply(jQuery, imagesDFD).done(function(){
				eventsDFD.resolve({events: arguments});
			});
		});
		return eventsDFD.promise();
	},


	renderEvents : function(events){
		var html = JST['_assets/templates/event.hbs'](events);
		console.log(html);
		$('#events-container').html(html);
	}
};

window.fbAsyncInit = FBHandler.init;

Handlebars.registerHelper('dateTime', function(date){
	return moment(date).format('llll');
});


(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


