// 101-misol
function namuna(son) {
  let yigindi = 0;
  for (let i = 1; i <= son; i++) {
    yigindi += i;
  }
  return yigindi;
}

console.log(namuna(3));  
console.log(namuna(10)); 
console.log(namuna(7)); 


// 102-masala

function Namuna(son, obj) {
  if (son >= obj.min && son <= obj.max) {
    return true;
  } else {
    return false;
  }
}

console.log(Namuna(4, { min: 0, max: 5 }));  
console.log(Namuna(4, { min: 4, max: 5 }));  
console.log(Namuna(4, { min: 6, max: 10 })); 

// 103-masala

function Namuna(n) {
  let kv = String(n * n);
  let s = String(n);
  
  if (kv.slice(-s.length) === s) {
    return true;
  }
  return false;
}

console.log(Namuna(1));  
console.log(Namuna(3));  
console.log(Namuna(6));  
console.log(Namuna(95)); 

// 104-masala

function Namuna(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + i);
  }
  return res;
}

console.log(Namuna([0, 0, 0, 0, 0])); 
console.log(Namuna([1, 2, 3, 4, 5])); 
console.log(Namuna([5, 4, 3, 2, 1])); 

// 105-masala

function Namuna(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "cola" && arr[i] !== "fanta") {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(Namuna(["fanta", "cola", "water"]));       
console.log(Namuna(["fanta", "cola"]));                
console.log(Namuna(["lemonade", "beer", "water"]));    

// 106-masala

function Namuna(n) {
  return String(n).length;
}

console.log(Namuna(123));         
console.log(Namuna(56));          
console.log(Namuna(7154));        
console.log(Namuna(61217311514)); 
console.log(Namuna(0));           

// 107-masala


function Namuna(n) {
  let arr = String(n).split("");
  arr.sort((a, b) => b - a);
  return Number(arr.qosh(""));
}

console.log(Namuna(123));   
console.log(Namuna("001")); 
console.log(Namuna(999));   

// 108-masala

function Namuna(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(Namuna(5, 9));
console.log(Namuna(5, 9));
console.log(Namuna(5, 9));

// 109-masala

function Namuna(n) {
  let s = String(n);
  let len = s.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += Number(s[i]) ** len;
  }

  return sum === n;
}

console.log(Namuna(153)); 
console.log(Namuna(370)); 
console.log(Namuna(123)); 

// 110-masala

function Namuna(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  return count;
}

console.log(Namuna("fvLzpxmgXSDrobbgMVrc")); 
console.log(Namuna("JMZWCneOTFLWYwBWxyFw")); 