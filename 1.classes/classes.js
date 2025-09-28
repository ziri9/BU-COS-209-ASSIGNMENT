export class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}


fullName() {
return `${this.firstName} ${this.lastName}`;
}


static fromObject(obj) {
return new Person(obj.firstName, obj.lastName);
}
}

//Supports constructor, instance methods, static methods, and extends for inheritance.

//Easier and cleaner way to create objects and handle inheritance