import { iex } from '../config/iex.js';

export const stock = {
    latestPrice: (ticker, callback) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const formattedData = {};
            formattedData.price = data.close;
            formattedData.date = data.date;
            formattedData.label = data.label;

            callback(formattedData);
        })
        .catch(error => {
            // Handle errors here
            console.error('Error fetching latest price:', error);
            callback(null); // or any other error handling mechanism
        });
    }
};
