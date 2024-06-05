class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Успешен депозит од ${amount} ден. Ново салдо: ${this.balance} ден.`);
        } else {
            console.log("Неважечки износ на депозит. Ве молиме изберете позитивен износ.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Успешно повлекување на ${amount} ден. Ново салдо: ${this.balance} ден.`);
            } else {
                console.log("Недоволно средства. Повлекувањето не е обработено.");
            }
        } else {
            console.log("Неважечки износ за повлекување. Ве молиме изберете позитивен износ.");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount
console.log("Почетна состојба:", account1.getBalance(), "ден.");

account1.deposit(3500)
account1.deposit(-500)
account1.withdraw(1000)
account1.withdraw(1200)
console.log("Моментална состојба:", account1.getBalance(), "ден.");

