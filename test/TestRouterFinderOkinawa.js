const RouterFinderOkinawa = require("../src/api/RouterFinderOkinawa");

const api = new RouterFinderOkinawa();

api.getAllStations()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })