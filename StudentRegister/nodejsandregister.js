class Teacher {
    constructor(teacherName, subject) {
        if (!teacherName) {
            throw new Error('please provide the teachers name');
        }
        if (!subject) {
            throw new Error('please provide a subject ')
        }
        this.teacherName = teacherName;
        this.subject = subject;
    }
};
class student {
    constructor(name) {
        if (!name) {
            throw new Error('please provide the student name');
        }
        this.name = name
    }
};
class lessons {
    constructor(teacher, studentRegister, lessonName) {
        if (!studentRegister) {
            throw new Error(` expected students aren't provided`)
        }
        if (!teacher) {
            throw new Error('teacher is not provided ')
        }
        this.teacher = teacher;
        this.studentRegister = studentRegister;
        this.lessonName = lessonName;
        this.OnTime = [];
        this.Late = [];
        this.absent = [];
    };
    markOnTime(studentOnTime) {
        studentOnTime.forEach(student => {
            if (this.studentRegister.includes(student)) {
                this.OnTime.push(student)
            }
        })
    }
    markLate(studentLate) {
        studentLate.forEach(student => {
            if (this.studentRegister.includes(student)) {
                this.Late.push(student)
            }
        })
    }

    markAbsent(studentAbsent) {
        studentAbsent.forEach(student => {
            if (this.studentRegister.includes(student)) {
                this.absent.push(student)
            }
        })
    }
    outputSummary() {
        console.log(`The ${this.teacher.subject} lesson was conducted by ${this.teacher.teacherName}.`)
        console.log('----------------')
        console.log('|  ATTENDANCE  |')
        console.log('----------------')
        this.OnTime.forEach(student => {
            console.log(`${student.name} was on time`)
        });
        this.Late.forEach(student => {
            console.log(`${student.name} was late`)
        }
        );
        this.absent.forEach(student => {
            console.log(`${student.name} was absent`)
        }
        );
    // if (this.OnTime.length + this.Late.length !== student.length) {
    //     console.log(`${student.name} was absent`)
    // }
}
};

const teacher = new Teacher( 'Angie','Maths');
const student1 = new student('Rob');
const student2 = new student('Charlie');
const student3 = new student('Pete');
const student4 = new student('Alfie'); 
const student5 = new student ('Sarah');
const student6 = new student ('Khan');
const mathsLesson = new lessons(teacher, [
    student1,
    student2,
    student3, 
    student4,
    student5,
    student6
]);
mathsLesson.markOnTime([
    student4,
    student1
])
mathsLesson.markLate([
    student3,
    student2
])
mathsLesson.markAbsent([
    student5
])
mathsLesson.outputSummary();