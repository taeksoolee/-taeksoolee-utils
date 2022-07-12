const pipe = (initVal, ...fns) => fns.reduce((a, fn) => fn(a), initVal);

export default pipe;