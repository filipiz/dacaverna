this["JST"] = this["JST"] || {};

this["JST"]["_assets/templates/event.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"col-md-4 event-container\">\n        <div class=\"row\">\n            <a href=\"https://www.facebook.com/events/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "/\" target=\"_blank\">\n                <div class=\"col-md-3 col-sm-3 col-xs-3\"><img class=\"event-image\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" width=\"90\"></div>\n                <div class=\"col-md-9 col-sm-9 col-xs-9\">\n                    <div class=\"event-name\" title=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n                    <div class=\"event-time\">"
    + alias4((helpers.dateTime || (depth0 && depth0.dateTime) || alias2).call(alias1,(depth0 != null ? depth0.start_time : depth0),{"name":"dateTime","hash":{},"data":data}))
    + "</div>\n                    <div class=\"event-place\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.place : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n                    <div class=\"event-city\">"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.place : depth0)) != null ? stack1.location : stack1)) != null ? stack1.city : stack1), depth0))
    + " / "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.place : depth0)) != null ? stack1.location : stack1)) != null ? stack1.state : stack1), depth0))
    + "</div>\n                </div>\n            </a>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Próximos shows</h2>\n<div class=\"row\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});