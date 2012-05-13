/*!
 * JSLoop.js JavaScript Utility v1.0.0
 * http://github.com/LiamGoodacre/JSLoop.js
 * 
 * Copyright 2011, Liam Goodacre
 * 
 * Author : Liam Goodacre
 * Author URL : http://liamgoodacre.com
 * GitHub : https://github.com/LiamGoodacre/JSLoop.js
 * Date : 2012_05_13
 */
var loop = function (data, fn) {
  var recur, nextdata, result;
  //  Define recurse
  recur = function (newdata) {
    //  Store the next iteration data
    nextdata = newdata;
    //  Pass back the continuation flag
    return recur;
  };
  //  Use the initial data
  nextdata = data;
  //  Initial run, should iterate at least once
  result = recur;
  //  While the user wishes to recurse
  while (result == recur) {
    //  Execute the function, giving it recur and the next iteration data
    result = fn(recur, nextdata);
  }
  return result;
};