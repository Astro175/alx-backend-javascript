function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    let condition;
    if (condition) {
      resolve('Promise was fulfilled');
    } else {
      reject(new Error('Promise was rejected'));
    }
  });
  return promise;
}

export default getResponseFromAPI;
