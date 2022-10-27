const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === '' || studentName === undefined || studentName === null) {
        return console.log(`Please provide a valid student name`);
    }
    else if (!istudentExist(studentName)) {
        if (class07Students.length < 6 || studentName.toUpperCase() === 'QUEEN') {
            console.log(`${studentName} has been added successfully`);
            class07Students.push(studentName);
        }
        else {
            console.log(`Sorry the class is full to enroll for any more student`);
        }
    }
    else
        console.log(`${studentName} is already exists in the class`);
}

let istudentExist = studentName => class07Students.find(name => name.toLowerCase() === studentName.toLowerCase()
) === undefined ? false : true;

//traditional function definition for the above arrow function
// function istudentExist(studentName) {
//     let outPut = class07Students.find(nameCheck);
//     function nameCheck(name) {

//         if (name.toLowerCase() === studentName.toLowerCase()) {
//             return studentName;
//         }
//     }
//     if (outPut === undefined) {
//         return false;
//     }
//     else {
//         return true;
//     }
//}

addStudentToClass("Isak");
addStudentToClass("ISAK");
addStudentToClass("Jerry");
addStudentToClass('');
addStudentToClass("Thomas");
addStudentToClass("Bob");
addStudentToClass("JerRy");
addStudentToClass("THOMAS");
addStudentToClass("Jia");
addStudentToClass("Ellias");
addStudentToClass("BoB");
addStudentToClass("Liza");
addStudentToClass("leo");
addStudentToClass("Luise");
addStudentToClass("Alvar");
console.log(`Adding Denmark Queen`);
addStudentToClass(`Queen`);

console.log('The list of all students in the class is ');
console.log(class07Students);
const getNoOfStudents = class07Students => console.log(`The number of total students in the class is  ${class07Students.length}`);
getNoOfStudents(class07Students);