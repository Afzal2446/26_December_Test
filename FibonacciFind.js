const fibonacci = (num = 1) => {
   const series = [1, 1];
   for (let i = 2; i < num; i++) {
      const a = series[i - 1];
      const b = series[i - 2];
      series.push(a + b);
   };
   return series[num - 1];
};
console.log(fibonacci(10));
