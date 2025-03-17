const User = {
    firstName: "Gigio",
    lastName: "Toad",
    age: 6,
    location: "Mondo dei Funghi",
    
    compareAge: function (otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        }
    }
}; 

const User2 = {
    firstName: "Yoshi",
    lastName: "Luigi",
    age: 4,
    location: "Mondo dei Funghi"
};

// Comparazione tra User e User2
console.log(User.compareAge(User2)); // Output: "Gigio è più giovane di Yoshi"
