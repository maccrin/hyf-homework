const Male = "male";
const Female = "female";
let isFormal = true;

function getFullname(firstName, lastName, isFormal, gender) {
    if (firstName === ' ' || lastName === ' ' || firstName === null || lastName === null || firstName === undefined || lastName === undefined) {
        console.log(`Please provide a valid firstname/lastname for booking`);
    }
    else if (isFormal !== undefined && typeof isFormal !== "boolean") {
        console.log(`Formal type is not valid`);
    }
    else if (isFormal === true && gender === "male") {
        console.log(`User full name with formalname is  is Lord  ${firstName} ${lastName}`);
    }
    else if (isFormal === true && gender === "female") {
        console.log(`User full name with formal name is Lady  ${firstName} ${lastName}`);
    }
    else if (isFormal !== true && gender === "male") {
        console.log(`User full name without formal name  is  ${firstName} ${lastName}`);
    }
    else if (isFormal !== true && gender === "female") {
        console.log(`User full name without formal name  is  ${firstName} ${lastName}`);
    }
    else
        console.log(`User full name is  ${firstName} ${lastName}`);
}

getFullname("Benjamin", "Hughes");
getFullname("Benjamin", " ", true, Male);
getFullname(" ", "Hughes", true, Male);
getFullname("Benjamin", "Hughes", true, Male,);
getFullname("Benjamin", "Hughes", false, Male,);
getFullname("Sofia", "Anderson", true, Female);
getFullname("Sofia", "Anderson", false, Female);
getFullname("Sofia", "Anderson", 5, Female);
getFullname("Peter", "Anderson", 5, Male);
getFullname("Peter", "Anderson", ' ', Male);