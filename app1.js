//Lab 1
//Problem 1
const numbers = [5, 7, 2];
numbers.push(3);
console.log(numbers);
numbers.pop(3);
console.log(numbers);
//numbers = [7,8,9];
//console.log(numbers);

//problem 2
let r;
let area_of_circle = (r=1)=>{
    return (2*3.14*r) 
  }
  console.log(area_of_circle(5));

 //Lab2
 //Problem 1
 let average = (...x)=>{
  let total =0;
    for(let el of x){
        total+=el;
    }
    return total/x.length;


}
console.log(average(1,2,3,4));
//Lab 3
//problem 1
const person = { name: "john",age: 34, city: "jaipur" };
const {name:Name,age:Age,city:City} = person;
console.log(Name,Age,City);
var superhero = {...person, superpower: "thenderstrom"};
console.log(superhero);

//Lab 4
// Problem 1

class Animals {
  constructor(voice ='talk') {
       
    this.voice = voice;
    
      }
      setVoice() {
        return this.voice;
      }
      getVoice() {
       // console.log(this.voice);
       return this.voice;
      }
  }
   const lnt = new Animals("howl");
    console.log(lnt.getVoice()); 
  //voice.setVoice('bark');
  //  voice.getVoice(); 
  export {Animals};