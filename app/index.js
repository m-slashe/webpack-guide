import _ from 'lodash';

let teste = 5;

function myPromise(){
	return new Promise.resolve(5);
}

async function seila(){
	let myResult = await myPromise();
}

setTimeout(() => console.log(`work`));

let obj = {
	teste
}

export default obj