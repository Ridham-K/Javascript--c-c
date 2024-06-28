const accountId = 144553
let accountEmail = "rk@google.com"
var accountPassword = "12345"
accountCity = "Ahemdabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rk@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])