// =======================
// Task 1: Modify an Array Element
// =======================
document.writeln("<h2>Task 1: Modify an Array Element</h2>");

let fruits = ["Apple", "Banana", "Mango"];
document.writeln("Original Fruits: " + fruits + "<br>");

// Change the second fruit
fruits[1] = "Orange";
document.writeln("After Changing Second Fruit: " + fruits + "<br><br>");

// =======================
// Task 2: Try Changing a Character in a String
// =======================
document.writeln("<h2>Task 2: Try Changing a Character in a String</h2>");

let myName = "Fardeen";
document.writeln("Original Name: " + myName + "<br>");

// Attempt to change first character (will not work because strings are immutable)
myName[0] = "A";
document.writeln("After Trying to Change First Character: " + myName + " (unchanged)<br><br>");

// =======================
// Task 3: Replace the Whole String
// =======================
document.writeln("<h2>Task 3: Replace the Whole String</h2>");

// Assign a completely new string
myName = "Ali";
document.writeln("After Replacing Whole String: " + myName + "<br><br>");

// =======================
// Task 4: Use pop(), unshift(), and shift() on an Array
// =======================
document.writeln("<h2>Task 4: Array Methods pop(), unshift(), shift()</h2>");

let colors = ["Red", "Green", "Blue"];
document.writeln("Original Colors: " + colors + "<br>");

// pop() removes last item
colors.pop();
document.writeln("After pop(): " + colors + "<br>");

// unshift() adds item at beginning
colors.unshift("Yellow");
document.writeln("After unshift('Yellow'): " + colors + "<br>");

// shift() removes first item
colors.shift();
document.writeln("After shift(): " + colors + "<br>");
