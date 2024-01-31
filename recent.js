// console.log(typeof 42n);

// Escape sequences
// windowsFontsPath =
// "C:\\Windows\\Fonts\\\\nadeem\\\\";

// console.log(windowsFontsPath);
// C:\Windows\Fonts\\nadeem\\"


// Exercise....




//Fundamental Object........

// var yesterday = new Date("October 6 2023");
// yesterday.toUTCString();

// var myGPA = String(transcript.gpa)

// Boolean(2);



//Coercion Exercise //

// function isValidName(name) {
//     if (
//         typeof name == "string" &&
//         name.trim().length >= 3
//     ) {
//         return true;
//     }
//     return false;
// }

// function hoursAttended(attended, length) {
//     if (typeof attended == "string")&&
//         attended.trim() != ""
//     {
//         attended = Number(attended)
//     }
//     if (
//         typeof length == "string" &&
//         length.trim() != ""
//     ) {
//         length = Number(length);
//     }
//     if (
//         typeof attended == "number" &&
//         typeof length == "number"
//     ) {
//         return false;
//     }

// }


// console.log(isValidName("Frank") === true);
// console.log(hoursAttended(6, 10) === true);
// console.log(hoursAttended(6, "10") === true);
// console.log(hoursAttended("6", 10) === true);
// console.log(hoursAttended("6", "10") === true);



//without Typescript Slide NO.136


// function getName(studentRec) {
//     return studentRec.name;
// }
// var firstStudent = { name: "Frank" };
// var firstStudentName = getName(firstStudent);


//without Typescript Slide NO.136

// type student = {name:string}

// function getName(studentRec: student):string{
//     return studentRec.name;
// }
// var firstStudent: student ={name:"Frank"};
// var firstStudentName: string =getName(firstStudent);


// Typescript Slide NO.137
// var studentName: string = "Frank";
// var studentCount: number = 16 - studentName;


// use Strict in scop;

// "use strict"

// var teacher = "kayle";
// var topic = "js"
// function otherClass() {
//     teacher = "Suzy";
//     topic = "React";
//     console.log("Welcome to Scop");
// }
// teacher;
// topic;

// otherClass();

// teacher;
// topic;



//Scope & function Expression

// function teacher(){}

// var myTeacher = function anotherTeacher(){
//   console.log(anotherTeacher);
// }

// console.log(teacher);
// console.log(myTeacher);
// console.log(anotherTeacher);



///Block Scoping: encapsulation//////


// var teacher = "Kylae";
// {
//   let teacher = "suzy";
//   console.log(teacher);
// }

// console.log(teacher);



// clouser

// function ask(question){
//   setTimeout(function waitASec(){
//     console.log(question);
//   }, 100);
// } 

// ask("whats is Clouser");


// Closure .. 2 ex.

// function ask(question){
//   return function holdYourQuestion() {
//     console.log(question);
//   };
// }
// var questionOne = ask("what is closure?");

// questionOne();


//lexical Scope
// var teacher = "kyle";

// function otherclass(){
//     var teacher ="suzy"
//     function ask(question){
//         console.log(teacher,question);
//     }
//     ask("why?");

// }

// otherclass();


//Moduls

// var workshop ={
//   teacher: "Kyle",
//   ask(question){
//     console.log(this.teacher,question);
//   },
// };

// workshop.ask("Is this a moddule?");


//Module pattern

// var workshop = (function Module(teacher){
//   var publicAPI = {ask, };
//   return publicAPI;
// ///***********
// function ask(question) {
//   console.log(techerr,question);
// }
// })("Kyle");

// workshop.ask("It's a module, right?");


// Q. Module - workshop.mjs:

// var teacher = "kyle";

// export default function ask(question){
//   console.log(teacher,question);
// };


// import ask from "workshop.mjs";

// ask("It's a default import,right?")

// import * as workshop from "workshop.mjs"

// workshop.ask("It's a namespace import, right?");

//************************ */

// Object
// this Keyword use  - dynamic context


// function ask(question){
//   console.log(this.teacher,question);
// }

// function otherClass(){
//     var myContext = {
//       teacher:"Suzy"
//     };
//     ask.call(myContext,"Why?");
// }

// otherClass()


//****************** */

// this.implicit binding

// var workshop = {
//   teacher: "Kyle",
//   ask(question){
//     console.log(this.teacher,question);
//   }, 
// };

// workshop.ask("What is implicit binding?");


/******************** */

//this: dynamic binding -> sharing

// function ask(question){
//   console.log(this.teacher, question);
// } 

// var workshop1 = {
//    teacher: "kyle",
//    ask: ask,
// };


// var workshop2 = {
//   teacher: "Suzy",
//   ask: ask,
// };

// workshop1.ask("How do I share a Method?");

// workshop2.ask("How do I share a Method?");


/********************* */

// this: explicit binding

// function ask(question){
//   console.log(this.teacher, question);
// } 

// var workshop1 = {
//    teacher: "kyle",
// };


// var workshop2 = {
//   teacher: "Suzy",
// };

// ask.call(workshop1,"How do I share a Method?");

// ask.call(workshop2,"How do I share a Method?");


/************************** */

//this:hard binding

// var workshop = {
//   teacher:"Kyle",
//   ask(question){
//     console.log(this.teacher,question);
//   },
// };


// setTimeout(workshop.ask.10,"Lost this?");

// setTimeout(workshop.ask.bind(workshop),10,"Lost this?");

/*********************** */

//this: new binding
// "Constructor calls"

// function ask(question){ 
//   console.log(this.teacher,question);
// };

// var newEmptyObject = new ask("what is 'new' doing here?");

/**********************************/

// this:default binding

// var teacher = "Kyle";

// function ask(question){
//   console.log(this.teacher,question);
// }

// function askAgain(question){
//   "use strict";
//   console.log(this.teacher,question)
// }

// ask("What's the non-strict-mode default?")

// askAgain("What's the strict-mode default?")

/**********************************************/


// this: binding rule precedence?

// var workshop ={
//   teacher:"kyle",
//   ask:function ask(question){
//     console.log(this.teacher,question);
//   },
// };

// new (workshop.ask.bind(workshop))("what does this do?")

/************************************** */

// this: arrow function

// var workshop = {
//   teacher:"Kyle",
//   ask(question){
//     setTimeout(()=>{
//       console.log(this.teacher,question);
//     }, 100)
//   },

// };

// workshop.ask("Is this lexical 'this'?");


/******************************/
// 2 -> this: arrow function


// var workshop = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, question);
//   },

// };

// workshop.ask("What happened to 'this'?");

// workshop.ask.call(workshop,"Still no 'this'?");

/*******************************************/
/*******************************************/

            //CLASS Keyword
/*******************************************/
/*******************************************/

// class Workshop{
//   constructor(teacher){
//     this.teacher = teacher;
//   }

//   ask(question){
//     console.log(this.teacher,question);
//   }
// }
// var deepJS = new Workshop('Kyle');
// var reactJS = new Workshop('Suzy');



// deepJS.ask("Why is there a class keyword in JavaScript?")

// reactJS.ask("How does the class keyword help us with React?")

/*******************************************/

// ES6 class: extends (inheritance)

// class Workshop{
//   constructor(teacher){
//     this.teacher = teacher;
//   }
//   ask(question){
//     console.log(this.teacher,question);
//   }
// }

// class AnotherWorkshop extends Workshop{
//   speakUp(msg){
//     this.ask(msg);
//   }
// }

// var JSRecentParts = new AnotherWorkshop("Kyle");

// JSRecentParts.speakUp("Are classes getting better")

/***********************************************/

// ES6 class: super (relative polymorphism)


// class Workshop{
//   constructor(teacher){
//     this.teacher = teacher;
//   }
//   ask(question){
//     console.log(this.teacher,question);
//   }
// }

// class AnotherWorkshop extends Workshop{
//   ask(msg){
//     super.ask(msg.toUpperCase());
//   }
// }

// var JSRecentParts = new AnotherWorkshop("Kyle");

// JSRecentParts.ask("Are classes super?");

/***********************************************/

// ES6 class: still dynamic this

// class Workshop{
//     constructor(teacher){
//       this.teacher = teacher;
//     }
//     ask(question){
//       console.log(this.teacher,question);
//     }
//   }

//   var deepJS = new Workshop("Kyle");

//   setTimeout(deepJS.ask,100,"Still losing 'this'?");
  
  /***********************************************/

//ES6 class: "fixing" this?

class Workshop{
  constructor(teacher){
    this.teacher = teacher;
    this.ask = question =>{
      console.log(this.teacher,question);
    };
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask,100,"Is 'this' fixed?");

/**********************************************/
/**********************************************/
                //Prototypes
/**********************************************/
/**********************************************/

// Prototypes: as "classes"

function Workshop(teacher){
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
  console.log(this.teacher,question);
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
reactJS.ask("Isn't 'Prototype' ugly");

 
