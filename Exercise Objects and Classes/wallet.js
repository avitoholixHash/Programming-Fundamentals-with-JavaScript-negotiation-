class Wallet {
    constructor(owner) {
        this.owner = owner;
        this.money = 0;
    }

    addMoney(amount) {
        this.money += amount;
    }
    spendMoney(amount) {
        this.money -= amount;
    }

}

let wallet = new Wallet('Peter');
wallet.addMoney(50);
wallet.addMoney(30);
wallet.spendMoney(20);
console.log(wallet.money);

// • Constructor-ът получава owner.
// • money започва от 0.
// • addMoney(amount) добавя към money, не заменя стойността.
// • spendMoney(amount) намалява money.
// • Очакван резултат: 60.