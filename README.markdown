# JSLoop
Optimised JavaScript Tail-call Recursion and Looping.

# Example Use, Calculating the Factorial of 5:
<pre class='js'>
/// Uses variadic arguments:
loop(5, 1, function (recur, n, acc) {
  if (n > 0) return recur(n - 1, acc * n);
  return acc;
});
</pre>
