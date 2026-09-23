class University{
    students: Student[];
    teachers: Teacher[];
    constructor(students: Student[],teachers: Teacher[]){
        this.students = students;
        this.teachers = teachers;
    }
    showUniversityInfo(): void {
        console.log("University Infomation: ");
        console.log("Students: ");
        this.students.forEach(s =>{
            console.log(s.getStudentInfo());
        });
        console.log("Teacher: ");
        this.teachers.forEach(t =>{
            console.log(t.getTeacherInfo());
    });
}
}

class Student{
    constructor(private id:string, private name:string,private faculty:string){}
    getStudentInfo(): string{
        return `นักศึกษารหัส ${this.id} ชื่อ ${this.name} คณะ ${this.faculty}`;
    }
}

class Teacher{
    constructor(private name:string,private major: string){}
    getTeacherInfo(): string{
        return `อาจารย์ชื่อ ${this.name} สาขาวิชา ${this.major}`;
    }
    teach(student: Student):void{
        console.log(`${this.getTeacherInfo()} สอน ${student.getStudentInfo()}`);
    }
}

const student1 = new Student("684245043","โท","วิทยาศาสตร์");
const student2 = new Student("684245044","เอก","วิทยาศาสตร์");
const student3 = new Student("684245045","ตรี","ศึกษาศาสตร์");
const teacher1 = new Teacher("อำนวย","วิทยาการคอมพิวเตอร์");
const teacher2 = new Teacher("อวยนำ","วิทยาการคอมพิวเตอร์");
const npru = new University([student1,student2,student3],[teacher1,teacher2]);
npru.showUniversityInfo();
console.log("-------------------------------");
teacher1.teach(student1);
teacher1.teach(student2);
teacher2.teach(student3);