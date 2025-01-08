class User {
  constructor(email, password) {
    this._email = email;
    this.password = password
  }

  get email() {
    console.log("Hello");
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value
  }

  get password() {
    return `${this._password}hitesh`
  }

  set password(value) {
    this._password = value
  }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);