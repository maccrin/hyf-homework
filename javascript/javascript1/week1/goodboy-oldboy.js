const dogYearOfBirth = 2020;
const dogYearFuture = 2030;
let shouldShowResultInDogYears = true;

if (confirm(shouldShowResultInDogYears && "Do you want to calculate Dogyear?")) {
    const dogYear = dogYearFuture - dogYearOfBirth;
    console.log(
        "Your dog will be " + dogYear + "  dog years in " + dogYearFuture
    );
}
else if
    (confirm("Do you want to calculate Dog Human Year?")) {
    const dogHumanYear = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(
        "Your dog will be " + dogHumanYear + " doghuman  years in " + dogYearFuture
    );
}

else {
    console.log("None of the Year Dogyear/Doghumanyear has been calculated  as per your choice !!");
}