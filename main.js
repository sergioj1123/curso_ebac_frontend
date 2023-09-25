class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  _sayHello() {
    console.log("hello");
  }
}

class NormalAccount {
  constructor(client, balance, accountNumber) {
    this._client = client;
    this._balance = balance;
    this._accountNumber = accountNumber;
    this._accountType = "normalAccount";
  }

  drawBalance(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    this._balance += value;
    return this._balance;
  }

  getBalance() {
    return this._balance;
  }
}

class SavingAccount {
  constructor(client, balance, accountNumber) {
    this._client = client;
    this._balance = balance;
    this._yield = 1.2;
    this._accountNumber = accountNumber;
    this._accountType = "Saving Account";
  }

  newBalanceAfterOneMonth() {
    return (this._balance *= this._yield);
  }
}

const client1 = new Client("Sergio", 25);
const client2 = new Client("Test", 25);
const client3 = new Client("Test3", 25);

const normalAccount = new NormalAccount(client1, 500, 123);
console.log("🚀 ~ file: main.js:49 ~ normalAccount:", normalAccount);

const saving = new SavingAccount(client2, 1000, 321);
saving.newBalanceAfterOneMonth();
console.log("🚀 ~ file: main.js:52 ~ saving:", saving);

const saving2 = new SavingAccount(client3, 1000, 111111);
console.log("🚀 ~ file: main.js:57 ~ saving2:", saving2);
