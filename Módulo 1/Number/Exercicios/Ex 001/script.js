// toString() Método

var x = 123;
x.toString(); // returns 123 from variable x
(123).toString(); // returns 123 from literal 123
(100 + 23).toString(); // returns 123 from expression 100 + 23

// toExponential() Método

var x = 9.656;
x.toExponential(2); // returns 9.66e+0
x.toExponential(4); // returns 9.6560e+0
x.toExponential(6); // returns 9.656000e+0

//toFixed() Método

var x = 9.656;
x.toFixed(0); // returns 10
x.toFixed(2); // returns 9.66
x.toFixed(4); // returns 9.6560
x.toFixed(6); // returns 9.656000

//toPrecision() Método

var x = 9.656;
x.toPrecision(); // returns 9.656
x.toPrecision(2); // returns 9.7
x.toPrecision(4); // returns 9.656
x.toPrecision(6); // returns 9.65600

//valueOf() Método

var x = 123;
x.valueOf(); // returns 123 from variable x
(123).valueOf(); // returns 123 from literal 123
(100 + 23).valueOf(); // returns 123 from expression 100 + 23

//Number() Método

x = true;
Number(x); // returns 1
x = false;
Number(x); // returns 0
x = new Date();
Number(x); // returns 1404568027739
x = "10"
Number(x); // returns 10
x = "10 20"
Number(x); // returns NaN

//parseInt() Método

parseInt("10"); // returns 10
parseInt("10.33"); // returns 10
parseInt("10 20 30"); // returns 10
parseInt("10 years"); // returns 10
parseInt("years 10"); // returns NaN

//parseFloat() Método

parseFloat("10"); // returns 10
parseFloat("10.33"); // returns 10.33
parseFloat("10 20 30"); // returns 10
parseFloat("10 years"); // returns 10
parseFloat("years 10"); // returns NaN