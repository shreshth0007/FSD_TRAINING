// // console.log("Hello World");

// // Function Declaration

// function sum(a, b) {
//     return a + b;
// }

// function sqSum(a, b) {
//     return Math.sqrt(a) + Math.sqrt(b);
// }

// console.log(sum(2, 3));
// console.log(sqSum(4, 9));


// // Function as Expression

// const sumExp = function (a, b) {
//     return a + b;
// };

// console.log(sumExp(10, 20));


// // Arrow Function

// const sumArrow = (a, b) => {
//     return a + b;
// };

// console.log(sumArrow(5, 6));


// // IIFE (Immediately Invoked Function Expression)

// (() => {
//     console.log("Heyy... using IIFE");
// })();


// // Callback Function

// function showResult(callback, msg) {
//     const result = callback(40, 50);
//     console.log(msg + " Your result is: " + result);
// }

// showResult(sum, "Hi Rahul!");


// // Callback Example

// function login(error, msg) {
//     if (error) {
//         console.log("Error: " + error);
//     } else {
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, callback) {
//     if (username === "shreshth" && password === "123") {
//         callback(null, "Login Successful");
//     } else {
//         callback("Username or Password is Incorrect");
//     }
// }

// loginHandler("shreshth", "123", login);


// function ping(){
//     alert("chua kaise be");
// }

document.getElementById("buildResume").addEventListener("click", function () {

    const name = "Shreshth Mittal";
    const email = "shreshth@example.com";
    const phone = "9876543210";
    const skills = ["Java", "Python", "HTML", "CSS", "JavaScript"];

    document.getElementById("resume").innerHTML = 
     "<h1>" + name + "</h1>" +
     "<br>"+
        "<p>Email: " + email + "</p>" +
        "<p>Phone: " + phone + "</p>" +
        "<br>"+
        "<h3>Skills</h3>" +
        "<p>Java, Python, HTML, CSS, JavaScript</p>" +
        "<br>"+
        "<h3>Education</h3>" +
        "<p>B.Tech Computer Science & Engineering</p>" +
        "<br>"+
        "<h3>Projects</h3>" +
        "<p>Weather Forecast App</p>" +
        "<p>Smart Resume Viewer</p>"+
        "<p>Fake News Detector</p>"+
        "<p>SafeSphere AI</p>";
});