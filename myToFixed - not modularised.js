/*!
 * "The Beasts of Watch And Code"
 * A twist on accounting.toFixed v0.1.0
 * Copyright 2017 whitefires0 / Rick Hallett
 *
 * Freely distributable under the creative commons license.
 *
 * Full details and documentation:
 * https://github.com/gordonmzhu/beasts/issues/7
 */
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
      
  

      /*
 * Takes a number or string `value` and rounds to `precision` number of decimal points
 * Returns a string
 */
    function myToFixed(value, precision) {
      // move decimal point to the right
      var multiplied = Number(moveDecimal(value, precision));
      var rounded = Math.round(multiplied);
      // move decimal point to the left
      return moveDecimal(rounded, -precision);
    }

/*
 * Takes a string or number `value` and moves decimal `stops` number of places to the
 * right (or to the left if `stops` is negative)
 * Returns a string
 */
    function moveDecimal(value, stops) {
      if (typeof value === 'number') {
        value = value.toString(10);
      }

      // manipulate as array of chars
      var digits = value.split('');

      // remove decimal from original location
      var decimalIndex = digits.indexOf('.');
      if (decimalIndex === -1) {
        decimalIndex = digits.length;
      } else {
        digits.splice(decimalIndex, 1);
      }

      // find new location for decimal
      var finalIndex = decimalIndex + stops;

      // add trailing zeros if needed
      if (finalIndex > digits.length) {
        var end = finalIndex - digits.length + 1;
        for (var i = 0; i <= end; i++) {
          digits.push('0');
        }
      }

      // add leading zeros if needed
      if (finalIndex <= 0) {
        for (var i = 0; i >= finalIndex; i--) {
          digits.unshift('0');
        }
        finalIndex = 1;
      }

      // add decimal if not trailing
      if (finalIndex !== digits.length) {
        digits.splice(finalIndex, 0, '.');
      }

      return digits.join('');
    

    }

      //export library for window access (where root = window object)
      root.myToFixed = myToFixed;

  })(this);