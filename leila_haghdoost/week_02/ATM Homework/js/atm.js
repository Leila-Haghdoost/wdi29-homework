
let bankAccounts = {
  checkingAccount: 0,
  savingAccount: 0
};
const depositMoney = function(account, num) {

  let checkingAccountDeposit = bankAccounts.checkingAccount + num;
  let savingAccountDeposit = bankAccounts.savingAccount + num;

  if (account === 'checkingAccount') {
    console.log(`Your Checkin account balance is $${checkingAccountDeposit}.`);
    bankAccounts.checkingAccount += num;
  } else {
    console.log(`Your Saving account balance is $${savingAccountDeposit}.`);
    bankAccounts.savingAccount += num;
  }
};

const withdrawMoney = function(account, num) {

  let checkingAccountWithdraw = bankAccounts.checkingAccount - num;
  let savingAccountWithdraw = bankAccounts.savingAccount - num;
  let totalBalance = bankAccounts.savingAccount + bankAccounts.checkingAccount;

  if (account === 'checkingAccount' && num <= bankAccounts.checkingAccount) {
    bankAccounts.checkingAccount -= num;
    console.log(`Your Checking account balance is $${bankAccounts.checkingAccount}.`);

  } else if (num > totalBalance) {
    console.log(`Sorry, Your withdrawal is more than your total balance.`);

  } else if (account === 'checkingAccount' && num > bankAccounts.checkingAccount) {
    let remain = num - bankAccounts.checkingAccount;
    bankAccounts.checkingAccount = 0;
    bankAccounts.savingAccount -= remain;
    console.log(`Your Checking account balance is $${bankAccounts.checkingAccount} and your Saving account balance is $${bankAccounts.savingAccount}.`);
    ///////////////////////////////
  } else if (account === 'savingAccount' && num <= bankAccounts.savingAccount) {
    bankAccounts.savingAccount -= num;
    console.log(`Your Saving account balance is $${bankAccounts.savingAccount}.`);

  } else {
    let remain = num - bankAccounts.savingAccount;
    bankAccounts.savingAccount = 0;
    bankAccounts.checkingAccount -= remain;
    console.log(`Your Checking account balance is $${bankAccounts.checkingAccount} and your Saving account balance is $${bankAccounts.savingAccount}.`);
  }

};



//============jQuery ===========


const checkColor = function(){

  if(parseInt(bankAccounts.checkingAccount) === 0) {
    $("#balance1").css("background-color", "red");
  } else {
    console.log(`i am not zero`);
    $("#balance1").css("background-color", "yellow");

  }
}

      $("#checkingDeposit").click(function(){
        var checkingDepositInput = $( "#checkingAmount" ).val();


         depositMoney('checkingAccount', parseInt(checkingDepositInput));
         checkColor();

      });

      $("#checkingDeposit").on('click', function(){
        $("#balance1").text(bankAccounts.checkingAccount);
        $("#balance2").text(bankAccounts.savingAccount);
        checkColor();
      });///When we click the deposit button, latest value of the Cheking account will display in checking amount display box





      $("#checkingWithdraw").click(function(){
        var checkingWithdrawInput = $( "#checkingAmount" ).val();
        return withdrawMoney('checkingAccount', parseInt(checkingWithdrawInput));
      });

      $("#checkingWithdraw").on('click', function(){
        $("#balance1").text(bankAccounts.checkingAccount);
        $("#balance2").text(bankAccounts.savingAccount);
        checkColor();
      });///When we click the withdraw button, latest value of the Cheking account will display in checking amount display box.





      $("#savingsDeposit").click(function(){
        var savingsDepositInput = $( "#savingsAmount" ).val();
        return depositMoney('savingAccount', parseInt(savingsDepositInput));

      });

      $("#savingsDeposit").on('click', function(){
        $("#balance1").text(bankAccounts.checkingAccount);
        $("#balance2").text(bankAccounts.savingAccount);
      });///When we click the deposit button, latest value of the savings account will display in checking amount display box






      $("#savingsWithdraw").click(function(){
        var savingsWithdrawInput = $( "#savingsAmount" ).val();
        return withdrawMoney('savingAccount', parseInt(savingsWithdrawInput));

      });

      $("#savingsWithdraw").on('click', function(){
        $("#balance1").text(bankAccounts.checkingAccount);
        $("#balance2").text(bankAccounts.savingAccount);
      });///When we click the withdraw button, latest value of the savings account will display in savings amount display box.



// depositMoney('checkingAccount', 50);
// withdrawMoney('checkingAccount', 20);
// depositMoney('savingAccount', 60);
// withdrawMoney('savingAccount', 10);
// depositMoney('savingAccount', 80);
// withdrawMoney('checkingAccount', 150);
// depositMoney('checkingAccount', 50);
// withdrawMoney('checkingAccount', 55);
// depositMoney('savingAccount', 60);
// depositMoney('checkingAccount', 250);
// withdrawMoney('savingAccount', 150);
