//1)
let exercise1 = 'hello world';
function capitalizeFirstLette(str){
    const arr= str.split(' ')
for(let i=0; i<arr.length; i++){
    arr[i]= arr[i].charAt(0).toUpperCase()+ arr[i].slice(1)
}
return str = arr.join(' ');
}
console.log(capitalizeFirstLette(exercise1))


//2)
let exercise2 =['hi', '', 'wow', null, 
['I am not a string you are looking for'], 
'I am', 123 ];
function showLengthString(elem){
    let a = elem.filter(e => {
        if(typeof e === "string"){
            return e
        }
    });
    let b=a.map(w => w.length);
    return b

}
console.log(showLengthString(exercise2))


//3)
let exercise3='Hello world' 
function findVowels(str){
    let count= 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count +=1;
        }
    }
    return count
}
console.log(findVowels(exercise3))


//4)
function CreateUser(role, name) {
    this.role = role;
    this.name = name;
  }
  
let user = new CreateUser('admin','Bob');
console.log(user)


//5)
let exercise5 = 'aabbbccccd'
function qqq(aaaa){
    let sums = {};
    aaaa.split('').forEach(e =>{
        sums[e] = sums[e] ? (sums[e] +1) :1;
    });
    return  JSON.stringify(sums).replaceAll('"','').replaceAll(':','').replaceAll(',','')
}

console.log(qqq(exercise5))


//6)
let exercise6=[1,2,3,4,NaN, 0, 5, 10]
function showEvenAdd(elem){
    let b= exercise6.filter(number=>number % 2 === 0).length
    let c= exercise6.filter(number=> number % 2 !== 0).length
    let e =  `even: ${b}, odd: ${c}`;
    return e
}
console.log(showEvenAdd(exercise6))

  
//7)
function convert(valNum){
    let US = 36.6
    valNum = valNum / US
    return valNum.toFixed(2)
    
}
console.log(convert(1000))


//8)
let exercise8= 'hello world' 
function insertSpaces(aString) {
    return aString.split("").join(" ");
}

console.log(insertSpaces(exercise8))


//9)
let exercise9= '5 years'
function getSeconds(years){
    return parseInt(years)*365*24
}

console.log(getSeconds(exercise9))


//10)
let exercise10= 'hello world, 3'

function trim(text){
let sliced = text.slice(0,3);
if (sliced.length < text.length) {
    sliced += '...';
}
    return sliced
}
console.log(trim(exercise10))

