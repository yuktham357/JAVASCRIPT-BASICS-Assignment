function filterObjectProperties(obj, minLength) {
    const result = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string' && value.length >= minLength) {
            result[key] = value;
        }
    }
    return result;
}
const data = { 
    a: "short", 
    b: "longer string", 
    c: 123, 
    d: "very long string indeed" 
  };
  const filtered = filterObjectProperties(data, 6);
  console.log(filtered);
  // Output:
  // { b: 'longer string', d: 'very long string indeed' }