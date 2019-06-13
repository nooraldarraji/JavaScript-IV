// CODE here for your Lambda Classes
class Person {
    constructor (att){
        this.name = att.name;
        this.location = att.location;
        this.age = att.age;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor (att){
        super(Person)
        this.favLanguage = att.favLanguage;
        this.specialty = att.specialty;
        this.catchPhrase = att.catchPhrase;
    }
    demo(){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(){
        // console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

fred.speak();

class Student extends Person {
    constructor (att){
    super(Person)
    this.previousBackground = att.previousBackground;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects.forEach((x) => { console.log(x); });
    }
    PRAssignment(obj){
        console.log(`${this.name} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge(obj){
        console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`)
    }
}

class ProjectManager extends Instructor {
    constructor(att){
    super(Student)
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standup(){
        // console.log(`${this.name} announces to ${channel}, @channel standy times!`​​​​​)
    }
    debugsCode(){
        console.log(`${this.name} debugs ${student.name}'s code on ${this.favSubjects}`)
    }

}

// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
//   });