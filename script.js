// 자바스크립트의 data type
// string / integer float 


console.log(4343434);
console.log("slalalalal");

console.log(5+2);
console.log(5 *  2);
console.log(5 / 2);


// variable  값을 저장하고 나타내는 역할, 자바스크립트는 변수사이의 공백이 있다면 대문자로 처리한다. camelCase

const a = 5;
const b = 2;
console.log(a + b);
console.log(a * b);
console.log(a / b);


// 변수를 만드는 방법 const , let  차이점 const는 상수, let은 새로운 것을 생성할때 사용. 그 다음에 업데이트 가능 -> code의 의도를 쉽게 알수 있다.
// var로 변수를 선언할 수 있지만, var는 언어가 보호 받기힘듬. const와 let은 patch 된것

let myName = "unan";
myName = "yunhan";

//boolean
const amIFat = null;
const amIFat = true;
const amIFat = false;
console.log(amIFat);

//null은 비어있다는것을 의도적으로 표현하기 위해 쓰는 것이다. 자연적으로 비어있음을 나타내지않는다.
//undefiend 컴퓨터 메모리에 변수로 저장되어 있지만 값은 갖고 잊지않음.


//data 정리
//array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek) 

// Get from the array
console.log(daysOfWeek[3])

// Add one more day to the array
daysOfWeek.push("sun")

const player = {
    name : "nico",
    points : 10 ,
    fat : true,
};
console.log(player.name);
console.log(player["name"]);
player.lastNmae = "potato"; //object 추가

// 함수 : 반복해서 쓰는 코드를 편하게 하기 위한 코드 조각

function sayHello() {
    console.log("Hello!");
}

alert();
sayHello();

//
function plus(a,b) {
    console.log(a + b);
}

plus(8,60);

function divide(a,b) {
    console.log(a / b);
}

divide(98,20);

const player = {
    name : "nico",
    sayHello : function (otherPersonsName) {
        console.log("helo!" + otherPersonsName);
    },
    };

player.sayHello(otherPersonsName);

// 리스트쓸때의 문제점 : 원하는 property들을 그룹으로 붂고 싶을 때.

const player = {
    name : "Nico",
    age : 98,
};

console.log(player);
player.sexy = "soon"

console.log(player, console);

function plus(a , b) {
    console.log(a + b);
}

// function은 순소거 중요하다. a,b 위치가 바뀌면 안됨.




const age = 25;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const KrAge = calculateKrAge(age);
console.log(krAge);

