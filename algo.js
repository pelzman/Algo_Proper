 module.exports.fizzBuzz = function fizzBuzz(input){
    if(typeof input !=='number') throw new Error('Input should be a number')
    if((input%3 === 0) && (input%5=== 0) ) return 'FizzBuzz'
    if(input % 3 === 0) return "Buzz"
    if(input % 5 ===0) return "Fizz"
    return input
  }


  module.exports.BankAccount = class BankAccount {
    constructor(accountNumber, accountHolderName, balance ){
      this._accountNumber = accountNumber
      this._accountHolderName = accountHolderName
      this._balance = balance
    }
     showAccountDetails() {
    //  console.log(`Account Number : ${this._accountNumber}`) 
    //  console.log(`Account Hoder Name : ${this._accountHolderName}`) 
    //  console.log(`Account Balance : ${this._balance}`) 
    return {
        accountNumber : this._accountNumber,
        accountHolderName:this._accountHolderName,
        balance : this._balance
    }
    }
  
    deposit(amount){
      this._balance +=amount
     return this.showAccountDetails()
    }
    withdraw(amount){
      if(this._balance >= amount){
        this._balance -= amount
       return  this.showAccountDetails()
      }
      else{
//    console.log("Insufficient balance")
    throw new Error("Insufficient balance")
      }
    
      
    }
  
    
  }
  
//   const bankAccount = new BankAccount("123456", "pelzman", 2000)
  
//   bankAccount.withdraw(3000)
 