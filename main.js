class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  _getName() {
    console.log(`The client name is: ${this.name}`);
  }
}

class NormalAccount extends Client {
  constructor(name, age, balance, accountNumber) {
    super(name, age);
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
    return console.log(`O saldo da conta é: ${this._balance}`);
  }
}

class SavingAccount extends NormalAccount {
  constructor(name, age, balance, accountNumber) {
    super(name, age, balance, accountNumber);
    this._yield = 1.2;
    this._accountType = "Saving Account";
  }

  newBalanceAfterOneMonth() {
    return (this._balance *= this._yield);
  }
}

console.log("----------------------------------------------------------------");
const normalAccount = new NormalAccount("Sergio", 25, 500, 123);
normalAccount._getName();
normalAccount.getBalance();
console.log("🚀 ~ file: main.js:49 ~ normalAccount:", normalAccount);

console.log("----------------------------------------------------------------");
const saving = new SavingAccount("Test", 25, 1000, 321);
saving._getName();
saving.newBalanceAfterOneMonth();
saving.getBalance();
console.log("🚀 ~ file: main.js:52 ~ saving:", saving);

console.log("----------------------------------------------------------------");
const saving2 = new SavingAccount("Test 3", 25, 1000, 111111);
saving2._getName();
saving2.getBalance();
console.log("🚀 ~ file: main.js:57 ~ saving2:", saving2);
