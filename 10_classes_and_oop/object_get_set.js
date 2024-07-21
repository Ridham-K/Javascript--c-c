const User = {
    _email: 'rk@gmail.com',
    _password: '123',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea._email,tea._password);

// const chai = Object.create(User)
// chai._email = 'RidhamK@'
// console.log(chai.email);