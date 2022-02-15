//IpStack

var ip = '201.144.237.145'

var access_key = '410c50ab4f7647620591adde14b3a346';

// get the API result via jQuery.ajax

$.ajax({

    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,  

    dataType: 'jsonp',

    success: function(json) {

        alert(json.location.capital);     

    }

});