console.log("DEMO JS About Banking Management System 2025");
// Banking Management System in js 2025
// base class
class BankAccount{
    constructor(accountNumber,accountName, balance=0){
        this.accountNumber=accountNumber;
        this.accountName=accountName;
        this.balance=balance;
    }

    // Deposit Balance
    deposit(amount){
        if(amount>0){
            console.log("Deposit Money balance ${amount} was succesfully !");
        }else{
                    console.log("Deposit Money balance not completed ! insufficient balance !");
        }
    }

        // withdrawing money
        withdraw(amount){
            if(amount>0 && amount<=this.balance){
                console.log("Withdrawing with balance ${this.amount} was succesfully !");
            }else{
                console.log("Withdrawing money with ${amount} was not succesfully ! Insufficient !");
            }
        }

        checkBalance(){
            console.log("For accounting : ${this.accountName} is having balance ${this.balance} !");
        }

    }

    // Devide class --> SavingAccounting

class SavingAccounting extends BankAccount{
    constructor(accountNumber,accountName,balance, interestRate){
        super(accountNumber,accountName,balance);
        this.interestRate=interestRate;
    }

    addInterest(){
        const interest = this.balance *(this.interestRate / 100);
        this.balance+=this.interest;
        console.log("Interest Add balance sucesfully !");
    }
}


class CurrentAccount extends BankAccount{
    constructor(accountNumber,accountName, balance, overdraflimit){
        super(accountNumber,accountName,balance, overdraflimit);
        this.overdraflimit=overdraflimit;
    }

    withdraw(amount){
        if(amount>0 && amount<=this.balance + this.overdraflimit){
            this.balance-=amount;
            console.log("Withdrawing balance current of balance sucesfully!");
        }else{
            console.log("Current balance of withdrawing not sucesfully !");
        }
    }
};

const saving = new SavingAccounting(101,"Daroth",3000,100);
saving.deposit(400);
saving.withdraw(100);
saving.addInterest(500);
saving.checkBalance(300);

console.log("------------------------------------------------\n");


const current = new CurrentAccount(102,"Phal",4000,300,100);
current.checkBalance();
current.withdraw(400);
current.checkBalance();

console.log("=============Thank you for sharing Coding JS Of DOM ===============\n");


