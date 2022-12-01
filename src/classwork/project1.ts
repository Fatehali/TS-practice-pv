// 5d
type Author =  {
    authorName : string
}

type Book = {
    author : Author,
    bookName: string
}

const myBook: Book = { 
    author: { authorName: "Zia" },
    bookName: "Computer Science Algorithms"         
};


// 5e

interface Student { studentId: number, studentName: string }
interface teacher { teacherId: number, teacherName: string }

type intersected = Student & teacher;

const combo1: intersected = {
    studentId: 13,
    studentName: "Hamza",
    teacherId: 31,
    teacherName: "H.M"
} 

// 5e

// unknown type
let valueX: unknown;
const myConst: unknown = valueX;  

// never type
function print(num: number) { // : never {
    console.log(num);
}