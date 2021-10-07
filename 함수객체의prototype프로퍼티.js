// 19-11

// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototype'); // -> true
console.log((function () {}).hasOwnProperty('prototype'));



// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype'); // -> false
console.log(({}).hasOwnProperty('prototype'));