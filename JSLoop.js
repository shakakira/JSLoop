/*!
 * JSLoop.js JavaScript Utility v2.0.0
 * http://github.com/LiamGoodacre/JSLoop.js
 * 
 * Copyright 2011, Liam Goodacre
 * 
 * Author : Liam Goodacre
 * Author URL : http://liamgoodacre.com
 * GitHub : https://github.com/LiamGoodacre/JSLoop.js
 * Date : 2012_05_13
**/
var loop;
(function () {
  var slice = Array.prototype.slice;
  loop = function () {
    var recur, nextdata, result, fn, args, len;
    args = slice.call(arguments);
    //  Function to recurse is the last argument
    fn = args.pop();
    
    //  Define recurse
    recur = function () {
      //  Store the next iteration data
      nextdata = slice.call(arguments);
      //  Pass back the continuation flag
      return recur;
    };
    
    //  Use the initial data
    nextdata = args;
    //  Initial run, should iterate at least once
    result = recur;
    
    //  While the user wishes to recurse
    while (result == recur) {
      //  Execute the function
      //    giving it recur and the next iteration data
      result = fn.apply(undefined, [recur].concat(nextdata));
    }
    
    //  Return the result of the last iteration
    return result;
  };
}());