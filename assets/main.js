getGeoLcoation(function (position) {
    console.log('main', position);
    apiCallHandler('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR', mainCallbackFun);
});



function mainCallbackFun(response) {
    console.log('successCallbackFun', response);
    var listString = listGenerator(response, 'Cryptocurrency price Chart:', 4);
    $('#box1').append(listString);
}



var CONFIG = require('./api.config.json');

CONFIG.each(function (index, elem) {
    if (elem.method_type == "get") {
        var html_id = elem.html_id;
        var method_type = elem.method_type;
        var api_url = elem.api_url;
        var get_params = elem.get_params;
        var response_type = elem.response_type;
        console.log(" html_id: " + html_id + "\n method_type: " + method_type + "\n api_url: " + api_url + "\n get_params: " + get_params + "\n response_type: " + response_type);
    }
    if (elem.method_type == "post") {
        var html_id = elem.html_id;
        var method_type = elem.method_type;
        var api_url = elem.api_url;
        var post_body = elem.post_body;
        var response_type = elem.response_type;
        console.log(" html_id: " + html_id + "\n method_type: " + method_type + "\n api_url: " + api_url + "\n post_body: " + post_body + "\n response_type: " + response_type);
    }
});

// var html_id = CONFIG.html_id;
// var method_type = CONFIG.method_type;
// var api_url = CONFIG.api_url;
// var get_params = CONFIG.get_params;
// var post_body = CONFIG.post_body;
// var response_type = CONFIG.response_type;
// console.log();



// $(document).ready(function () {
//     var getObj = $('#dev1app');
//     console.log($('.dev1app'));
//     var id = getObj.attr("id");
//     var method_type = getObj.prop("method_type");
//     var get_url = getObj.get('get_url');
//     var get_params = getObj.data("get_params");
//     var response_type = getObj.prop("response_type");
//     console.log(" id: " + id + "\n method_type: " + method_type + "\n get_url: " + get_url + "\n get_params: " + get_params + "\n response_type: " + response_type);

//     // apiCallHandler(apiURL, callback);
// });

