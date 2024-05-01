// user.model.ts
export class Usuario {
    _id: number;
    _username: string;
    _email: string;
    _password: string;
    _role: string;
  
    constructor(id: number, username: string, email: string, password: string, role: string) {
      this._id = id;
      this._username = username;
      this._email = email;
      this._password = password;
      this._role = role;
    }

    get id(): number {
        return this._id;
    }
    get username(): string {
        return this._username;
    }
    get email(): string {
        return this._email;
    }
    get password(): string {
        return this._password;
    }
    get role(): string {
        return this._role;
    }
    
    set id(id: number) {
        this._id = id;
    }
    set username(username: string) {
        this._username = username;
    }
    set email(email: string) {
        this._email = email;
    }
    set password(password: string) {
        this._password = password;
    }
    set role(role: string) {
        this._role = role;
    }
}
