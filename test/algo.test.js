const { BankAccount } = require("../algo");
const algo = require("../algo");

describe("BankAccount", () => {
  it("should log the account details", () => {
    const bankAccount = new BankAccount("12344", "a", 3000);
    const result = bankAccount.showAccountDetails();

    expect(result).toMatchObject({
      accountNumber: "12344",
      accountHolderName: "a",
      balance: 3000,
    });
  });

  it("should update the account details after withdraw", () => {
    const bankAccount = new BankAccount("12344", "a", 3000);
    bankAccount.withdraw(1000);
    const updatedAccount = bankAccount.showAccountDetails();
    expect(updatedAccount).toMatchObject({
      accountNumber: "12344",
      accountHolderName: "a",
      balance: 2000,
    });
  });

  it("should throw an exception if balance is less than withdraw", () => {
    const bankAccount = new BankAccount("12344", "a", 3000);
    expect(() => bankAccount.withdraw(4000)).toThrow("Insufficient balance");
  });
  it("should update the account details after deposit", () => {
    const bankAccount = new BankAccount("12344", "a", 3000);
    bankAccount.deposit(1000);
    const updatedAccount = bankAccount.showAccountDetails();
    expect(updatedAccount).toMatchObject({
      accountNumber: "12344",
      accountHolderName: "a",
      balance: 4000,
    });
  });
});

describe("FizzBuzz", () => {
  it("should throw an exception if input not a number", () => {
    expect(() => {
      algo.fizzBuzz("a");
    }).toThrow();
    expect(() => {
      algo.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      algo.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      algo.fizzBuzz();
    }).toThrow();
  });
  it("Should return  fizzBuzz if divisible by 3 & 5", () => {
    const result = algo.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("Should return  Buzz if divisible by 3", () => {
    const result = algo.fizzBuzz(3);
    expect(result).toBe("Buzz");
  });
  it("Should return  fizz if divisible by 5", () => {
    const result = algo.fizzBuzz(5);
    expect(result).toBe("Fizz");
  });

  it("Should return  input if none condition met", () => {
    const result = algo.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
