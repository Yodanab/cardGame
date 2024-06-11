export class User {
  public email: string;
  public password: string;
  public name: string;

  constructor({ email, password, name }) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
}
