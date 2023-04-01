const path = require('path')
const url=path.join('/foo', 'bar', 'baz/asdf/quux','aa','..')
console.log(url)
const pathStr= path.join('/a','/b/c','../','./d')
console.log(pathStr)
let a = 'https://segmentfault.com/write#page1?freshman=1&name=laowang'
let b = new URL(a)
console.log(b);
