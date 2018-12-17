/*Geometry Function Lab
Part 1, Rectangle

Given a rectangle object like the one below, write the following functions:

isSquare(rect) - Returns whether the rectangle is a square or not
area(rect) - Returns the area of the rectangle
perimeter(rect) - Returns the perimeter of the rectangle
In other words, these functions should take as their only argument a single
object with the same keys (length, width) as the rectangle object above,
and use that object to make the calculations.*/

/*

const rectangle = {
  length: 4,
  width: 4
  square : function() {
  return (this.length === this.width);
},
area: function (){
return this.length*this.width
},
primeter: function(){
return (this.length === this.width)*2
}
};
console.log(${rectangle.square});
*/

/*
The Cash Register
Write a function called cashRegister that takes a shopping cart object.
 The object contains item names and prices (itemName: itemPrice).
 The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55 */

  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"

  };
const cashRegister = function(cart) {
  let  totalPrice = 0;
  // for (let i = 0; i < cartForParty.keys().length; i++)
  for(var key in cartForParty){
      console.log(key, cartForParty[key] );
      totalPrice += cartForParty[key];

  }
  return totalPrice;
};

console.log( cashRegister(cartForParty) );



// JavaScript Bank

let bank = {
accountName: 'Leila Haghdoost',
accountNum: '7546743',
depositAmount: '$20000'
};
  // { accountName: 'Ben Marandi', accountNum: '7546732', depositAmount: '$56000' },
  // { accountName: 'Jhon Smith', accountNum: 'J7546776', depositAmount: '$878900' }


 getTotal: function(){
  // let  total = 0;
  //
  // for (var i = 0; i < Bank.length; i++) {
    console.log(`hey` );
    // totalPrice += cartForParty[i];
  }
  }
};

console.log(sumOfMoney());
