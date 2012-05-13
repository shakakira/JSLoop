# JSLoop
Optimised JavaScript Tail-call Recursion and Looping.

# Example Use, Calculating the Factorial of 5:
<pre class='js'>
loop({n: 5, acc: 1}, function (recur, data) {
  if (data.n > 0) {
    return recur({n: data.n - 1, acc: data.acc * data.n});
  }
  return data.acc;
});
</pre>
