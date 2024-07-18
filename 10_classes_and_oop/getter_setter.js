class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Ridham`
    }

    set password(value){
        this._password = value
    }
}

const Ridham = new User("r@ridham@.ai", "abc")
console.log(Ridham.email);