function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

let age = parseInt(prompt("Enter your age: "));

let ticketPrice = calculateTicketPrice(age);

console.log("The ticket price for your age is: $" + ticketPrice);
