function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        for (const mark of marks) {
            this.marks.push(mark);
        }
    }
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;
      }
  
    let sumOfMarks = this.marks.reduce((acc, number) => acc + number);
    return sumOfMarks / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
