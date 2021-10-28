const axios = require('axios');

/**
 * @param {string} userInput the user's input to the search bar
 * @returns {array} array of results
 */
exports.getNASAData = async (userInput) => {	
	return new Promise((resolve, reject) => {
		const config = {
			method: 'get',
			url: `https://images-api.nasa.gov/search?q=${userInput}`,
		  };

        axios(config)
        .then((response) => {
            resolve(response.data.collection.items);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        });
    });
}