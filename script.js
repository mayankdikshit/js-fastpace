

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const now = new Date();

const hours = now.getHours() % 12;

console.log(hours);


