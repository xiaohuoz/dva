require('es6-promise').polyfill();
require('isomorphic-fetch');


export async function test(){
    return fetch('/some/path');
}

