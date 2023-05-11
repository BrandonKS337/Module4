// const today = new Date();

// function amIOld() {
//     let dateString = "1989-05-24";
//     let bDay = new Date(dateString);
//     let years = today.getFullYear() - bDay.getFullYear();
//     let months = today.getMonth() - bDay.getMonth();

//     let days = today.getDate() - bDay.getDate();
//     let x = years; 
//     let y = months;
//     let z = days;
//     console.log("I am ", +x + " years, ", +y + " months and ", +z + " days old")
// }

// amIOld()


var birthdate = moment("YYYY-MM-DD");
var today = moment();
var diffInDays = today.diff(birthdate, "days");
console.log(diffInDays);
