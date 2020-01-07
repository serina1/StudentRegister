class teacher {
    constructor(teacherName, subject) {
        if (!teacherName){
        throw new Error('please provide the teachers name');
        }
        if (!subject){
        throw new Error('please provide a subject ')
    
        }
        this.teacherName = teacherName;
        this.subject = subject;
        
    }
};



class student {
    constructor(studentName) {
    
    
        if (!studentName){
            throw new Error('please provide the student name');
        }
            this.studentName = studentName
    }
    
};

class lessons {
    constructor(teacherName, studentRegister, lessonName) {
        if (!studentRegister){
            throw new Error(` expected students aren't provided`)
        }
            if (!teacherName) {
            throw new Error('teacher is not provided ')

        }
        this.teacherName.teacherName;
        this.studentRegister = studentRegister;
        this.lessonName = lessonName;

        this.OnTime = [];
        this.Late = [];
        this.absent = [];

    };
    markOnTime(studentOnTime) {
        studentOnTime.map(student => {
            if(this.studentRegister.includes(student)){
                this.OnTime.push(...studentOnTime)
            }
        }) 
        }
           
    markLate() {
        student.forEach(student => {
            if (!ontime) {
                return student;
               
            }
        });
   
    };

    
    outputSummary(){
        console.log(`The ${this.teacher.subject} lesson was conducted by ${this.teacher.teacherName}.`)
        console.log('----------------')
        console.log('|  ATTENDANCE  |')
        console.log('----------------')
       this.OnTime.forEach(student => {
           console.log (`${student.name} was on time`)
       });
       this.Late.forEach(student => {
           console.log(`${student.name} was late`)
       });

       if(this.OnTime.length + this.Late.length !== this.studentRegister.length)
       {
           console.log(`${name} was absent`)
       }
   
    }
    

};

const teacher = new teacher('Maths', 'Angie');
const student1 = new student('Rob');
const student2 = new student('Charlie');
const student3 = new student('Pete');
const mathsLesson = new lesson(teacher, [
    student1,
    student2,
    student3,
]);

mathsLesson.markOnTime([
    student1,
    student3
])
mathsLesson.markLate([
    student2
])
mathsLesson.outputSummary();



