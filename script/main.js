//IpStack

var ip = '190.17.15.209'

var access_key = '410c50ab4f7647620591adde14b3a346';

//Consiguiendo info de la API
const getData = (apiURL) => {
    return (
        fetch(apiURL)
        .then((Response) => Response.json())
        // .then((json) => {
        //   console.log("json --> ", json);
        // })
        .catch((error) => {
            console.error("error: ", error);
        })
    );
};

// get the API result via jQuery.ajax

$.ajax({
    method: "GET",
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,  
    dataType: "json",
    success: function(information) {
        console.log(information);
        $("#cardID").append(
            `<h3 class="city">${information.city}</h3>
            <h3 class="continent_code">${information.continent_code}</h3>
            <h3 class="continent_name">${information.continent_name}</h3>
            <h3 class="country_name">${information.country_name}</h3>
            <h3 class="latitude">${information.latitude}</h3>
            <h3 class="longitude">${information.longitude}</h3>
            <h3 class="ip">${information.ip}</h3>
            <h3 class="type">${information.type}</h3>`
        );
    }
});