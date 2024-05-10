function getLocation()
{
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("location").innerHTML = `Your location of ${data.ip} is ${data.city}, ${data.region}, ${data.country_name}, ${data.postal}, ${data.latitude}, ${data.longitude}, ${data.timezone}`;
        
    })
    .catch(error => {
        console.log(error);
    });
}