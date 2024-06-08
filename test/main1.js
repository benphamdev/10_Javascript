export default User;

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar
    this.getName = () => `${this.firstName} ${this.lastName}`;
}

var author = new User('pham', 'duy', 'chien')

console.log(author.getName());

