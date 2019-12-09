class teacher {
    constructor(teacherName, subject) {

        this.teacherName = teacherName;
        this.subject = subject;
        if (!subject)
            throw new Error('please provide a subject ')
        if (!teacherName)
            throw new Error('please provide the teachers name')

    }
};

class student {
    constructor(studentName) {
        const studentName = new Student;
        this.students = [];

        if (!studentName)
            throw new Error('please provide the student name')

    }
    
};

class lessons {
    constructor(teacherName, students) {
        if (!studentRegister)
            throw new Error(` expected students aren't provided`)
        if (!teacherName) {
            throw new Error('teacher is not provided ')

        }
    };
    markOnTime(student) {
        ontime = true;
            return student
        }
           
    markLate() {
        student.forEach(student => {
            if (!ontime) {
                return student;
               
            }
        });

    };

};


class lessons2 {
    constructor(teacher, students)
   {
       this.teacher = teacher;
       this.students = students;
   }


}
const teacher = new Teacher('Maths', 'Angie');
const student1 = new Student('Serina');
const student2 = new Student('Humaira');
const student3 = new Student('Zara');
const mathsLesson = new Lesson(teacher, [
    student1,
    student2,
    student3,
]);



