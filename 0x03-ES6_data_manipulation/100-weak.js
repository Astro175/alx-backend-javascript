export function queryAPI(endpoint) {
  const weakMap = new WeakMap();
  if (!endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const queryCount = weakMap.get(endpoint);
    weakMap.set(endpoint, queryCount + 1);

    if (queryCount >= 4) { // 5 or more queries (queryCount >= 5)
      throw new Error('Endpoint load is high');
    }
  }
}
