/*!
 * "The Beasts of Watch And Code"
 * A twist on accounting.toFixed v0.1.0
 * Copyright 2017 whitefires0 / Rick Hallett
 *
 * Freely distributable under the creative commons license.
 *
 * Full details and documentation:
 * https://github.com/gordonmzhu/beasts/issues/7
 * 
 * //===============================================================================================================
	/* --- Project Specification --- */
//===============================================================================================================

/*Challenge: rewrite accounting.myToFixed so that it does NOT use multiplication or exponential notation. Instead, you will actually move the decimal point using string manipulation.

In AccountingJS 13, we looked at accounting.myToFixed method. We found that we could improve the function by simulating calculations like 1.005 * 100 with 1.005e2 (using exponential notation).

Your job is to rewrite accounting.myToFixed so that it does NOT use multiplication or exponential notation. Instead, you will actually move the decimal point using string manipulation.

So in the example above, instead of using 1.005e2, you'll need to figure out a way to work with the string "1.005" and then create a new string with the decimal point moved over two places to the right. In other words, you need to turn "1.005" into "100.5" using string manipulation.

Include tests that cover the weird cases we saw in the video like 0.615, 10.235, and 1.005.

This is more of a fun exercise than a practical solution since exponential notation works fine, but it's a great way to force you to learn about string manipulation. It also helps to reinforce what you've learned, so I'll take it :)

Also if you didn't know about exponential notation, this would be a great approach. So this is a good way to see how to a problem from a different angle.*/

//=============================================================================================================
    /* --- Project Implementation --- */
//=============================================================================================================
/*!
 * "The Beasts of Watch And Code"
 * A twist on accounting.toFixed v0.1.0
 * Copyright 2017 whitefire0 / Rick Hallett
 *
 * Freely distributable under the creative commons license.
 *
 * Full details and documentation:
 * http://github.com/gordonmzhu/beasts/issues/7
 */

/*
Process:


 */
  (function main(root) {
    
    //closure variables
    var finalIndex;
    var multipliedBy100;
    var roundedNum;
    var digits;
    var decimalIndex;


    /* --- Primary Function --- */
      
    function myToFixed(num, precision) {
      // move decimal point to the right
      multipliedBy100 = Number(manipulate(num, precision));
      roundedNum = Math.round(multipliedBy100);
      // move decimal point to the left
      return manipulate(roundedNum, -precision);
    }


    /* --- Helper Functions --- */

    function manipulate(num, movements) {
      var num = convertToString(num)
      // manipulate as array of chars
      digits = num.split('');
      // remove decimal from original location
      removeOriginalDecimalPoint();
      // find new location for decimal
      finalIndex = decimalIndex + movements;
      // add zeros to end if needed
      addZerosToEnd();
      // pad zeros and the start if needed
      padStartWithZeros();
      // add decimal if final index != length of digits array
      addDecimalPoint();
      return digits.join('');
    }

    function convertToString(num) {
      if (typeof num === 'number') {
        num = num.toString(10);
        return num;
      }
    }

    function removeOriginalDecimalPoint() {
      decimalIndex = digits.indexOf('.');
      if (decimalIndex === -1) {
        decimalIndex = digits.length;
      } else {
        digits.splice(decimalIndex, 1);
      }
    }

    function addDecimalPoint() {
      if (finalIndex !== digits.length) {
        digits.splice(finalIndex, 0, '.');
      }
    }

    function addZerosToEnd() {
      if (finalIndex > digits.length) {
        var end = finalIndex - digits.length + 1;
        for (var i = 0; i <= end; i++) {
          digits.push('0');
        }
      }      
    }

    function padStartWithZeros(){
      if (finalIndex <= 0) {
        for (var i = 0; i >= finalIndex; i--) {
          digits.unshift('0');
        }
        finalIndex = 1;
       
      }
    }

      //export library for window access (where root = window object)
      root.myToFixed = myToFixed;

  })(this);

  myToFixed(0.615, 2)