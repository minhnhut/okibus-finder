const axios = require ("axios");
require("")


const okinawaBusUrl = "http://routefinder-okinawa.com";

class RouterFinderOkinawa {

    constructor() {

    }

    buildApiEndpoint(resourcePath)
    {
        console.log(okinawaBusUrl.concat(resourcePath));
        return okinawaBusUrl.concat(resourcePath);
    }

    /**
     * @returns {Promise}
     */
    getAllStations()
    {
        return new Promise((resolve, reject) => {
            axios.get(this.buildApiEndpoint("/search_stations?Lang=en"))
            .then(res => {
                resolve(res.data);     
            }).catch(error => {
                reject(error);
            });
        });
    }
};

module.exports = RouterFinderOkinawa;