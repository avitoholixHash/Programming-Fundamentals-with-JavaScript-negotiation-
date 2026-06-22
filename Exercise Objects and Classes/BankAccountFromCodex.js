class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

let account = new BankAccount('Ivan', 100);
account.deposit(50);
account.withdraw(30);
console.log(account.balance);


// • Constructor-ът получава owner и balance.
// • deposit(amount) увеличава balance.
// • withdraw(amount) намалява balance.
// • Очакван balance: 120.