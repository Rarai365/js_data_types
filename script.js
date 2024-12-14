// this is a comment
// this is a another comment

// variable to represent h1 tag in html

// var result = document.getElementById("result");
// // result.innerText = "Dented code";

// body styling

var result = document.getElementById("body");
result.style.backgroundColor = "lightblue";
result.style.display = "flex";
result.style.flexDirection = "column";
result.style.alignItems = "center";

// title styling

document.getElementById("result").innerHTML = "JavaScript";
document.getElementById("result").style.display = "flex";
document.getElementById("result").style.justifyContent = "center";
document.getElementById("result").style.border = "6px solid black";
document.getElementById("result").style.padding = "12px";
document.getElementById("result").style.backgroundColor = "lightpink";
document.getElementById("result").style.borderRadius = "12px";

// this is for first paragraph

document.getElementById("first-paragraph").innerHTML =
  "JavaScript is a versatile programming language widely used for web development. A strong understanding of its core concepts—variables, operators, and data types—is essential for effective programming. Here's a detailed overview";

var result = document.getElementById("first-paragraph");
result.style.fontSize = "xx-large";
result.style.padding = "24px";

// this is for variables

var result = document.getElementById("variables");
result.innerText = "1. Variables in Javascript";
result.style.padding = "24px";

var result = document.getElementById("variables-desc");
result.innerText =
  "Variables store data that can be used and manipulated throughout the program. In JavaScript, you can declare variables using var, let, or const. ";

result.style.fontSize = "x-large";
result.style.padding = "12px";

document.getElementById("first").innerHTML =
  "var: Older way to declare variables; has function scope and may lead to unexpected behaviors due to its hoisting nature. ";
document.getElementById("first").style.padding = "12px";
document.getElementById("first").style.fontSize = "22px";

var result = document.getElementById("second");
result.innerHTML =
  "let: Introduced in ES6; block-scoped, meaning it is accessible only within the block where it's define s ";
document.getElementById("second").style.padding = "12px";
document.getElementById("second").style.fontSize = "22px";

var result = document.getElementById("third");
result.innerHTML =
  "const : Also introduced in ES6; used for variables whose values should not change  (constants).";
document.getElementById("third").style.padding = "12px";
document.getElementById("third").style.fontSize = "22px";

// document.getElementById("second").innerHTML =
//   " let :Introduced in ES6; block-scoped, meaning it is accessible only within the block where it's define";

// this is for operators

var result = document.getElementById("operators");
result.innerHTML = "2. Operators in Javascript";
result.style.padding = "24px";

var result = document.getElementById("arithmetic");
result.innerHTML =
  " Arithmetic Operations:  An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity). For example:   ";
result.style.padding = "12px";
result.style.fontSize = "22px";

var result = document.getElementById("middle");
result.innerHTML =
  "Comparison Operators: A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality. The following table describes the comparison operators in terms";
result.style.padding = "12px";
result.style.fontSize = "22px";
// result.style.border = "2px solid black";

var result = document.getElementById("assignment");
result.innerHTML =
  "Assignment Operators:An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x. ";
result.style.padding = "12px";
result.style.fontSize = "22px";

var result = document.getElementById("logical");
result.innerHTML =
  "Logical Operators: Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the &&, ||, and ?? operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. As such, they are more adequately called 'value selection operators'.";
result.style.padding = "12px";
result.style.fontSize = "22px";

var result = document.getElementById("Ternary");
result.innerHTML =
  "Unary and Ternary Operators: The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.";
result.style.padding = "12px";
result.style.fontSize = "22px";

// this is for Data types

var result = document.getElementById("Data");
result.innerHTML = "3. Data types in JS";
result.style.padding = "24px";

var result = document.getElementById("primitive");
result.innerHTML =
  "Primitive data types: Number / String / Boolean / Null / Undefined";
result.style.padding = "12px";
result.style.fontSize = "22px";

var result = document.getElementById("non-primitve");
result.innerHTML = "Non-Primitve data types: Object / Array / Function ";
result.style.padding = "12px";
result.style.fontSize = "22px";

// document.getElementById("js-image").src = "js.webp";

// function myFunction() {
//   document.getElementById("js-image").innerText = "heloo";
// }

var result = document.getElementById("image");
result.style.width = "50vw";
result.style.borderRadius = "12px";
// result.style.display = "none";
