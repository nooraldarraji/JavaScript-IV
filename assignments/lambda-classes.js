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
        super(att)
        this.favLanguage = att.favLanguage;
        this.specialty = att.specialty;
        this.catchPhrase = att.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(subject){
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor (att){
    super(att)
    this.previousBackground = att.previousBackground;
    this.className = att.className;
    this.favSubjects = att.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects.forEach((x) => { console.log(x); });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(att){
    super(att)
        this.gradClassName = att.gradClassName;
        this.favInstructor = att.favInstructor;
    }
    standup(channel){
    //  console.log(`${this.name} announces to ${channel}, @channel standy times!`​​​​​);
     console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${student.subject}`)
      }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const noor = new Student({
    name: "Noor",
    age: 28,
    location: "Texas",
    previousBackground: "Computer Tech",
    className: 'Web21',
    favSubjects: ["CyberSecurity", "Network", "Linux", "Javascript"]
});

const pat = new ProjectManager({
    name: 'Pat Palmerston',
    age: 'Infinity',
    gradClassName: 'WEB18',
    favInstructor: 'Dan Frehner',
    location: 'Earth',
    specialty: 'React',
    favLanguage: 'JavaScript, CSS, HTML',
    catchPhrase: "Great Job!",
});

fred.speak();
fred.demo('JavaScript');
fred.grade('JavaScript');
noor.listsSubjects();
noor.PRAssignment('Javascript-IV');
noor.sprintChallenge('Advanced CSS');
pat.standup('Channel Web21 - pat')
pat.debugsCode({name: 'Noor', subject: 'Python'});