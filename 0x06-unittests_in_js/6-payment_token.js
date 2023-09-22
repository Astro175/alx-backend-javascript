function getPaymentTokenFromAPI(success) {
    if (success === true) {
        return new Promise((resolve, reject) => {
            obj = {data: 'Successful response from the API'};
            resolve(obj);
        });
    }
    else {
        // Do nothing
    }
}

module.exports = getPaymentTokenFromAPI;