function setUsername(username) {
    this.username = username
    console.log('called');

}

function createUsername(username,email,password) {
    
    setUsername.call(this,username) //here you have to pass this for current contex refrence 

    this.email = email
    this.password = password
}

const chai = new createUsername('Ridham','rk@gmail.com',123) //new is important without that,
const chai2 = new createUsername('ayush','ak@gmail.com',523)  // it will give you undefined.
console.log(chai);
console.log(chai2);