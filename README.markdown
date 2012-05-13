# JSLoop
Optimised JavaScript Tail-call Recursion and Looping.

# Use
<pre class='JavaScript'>
    loop({n: 5, acc: 1}, function (recur, data) {
      if (data.n > 0) {
        return recur({n: data.n - 1, acc: data.acc * data.n});
      }
      return data.acc;
    });
</pre>
