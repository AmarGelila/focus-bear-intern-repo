/*
**** Messy Code ****

function    processData(  input  ){let result=[];for(let i=0;i<input.length;i++){if(input[i]%2===0){result.push(input[i]*2)}else{result.push(input[i]+1)}}return result;}

function validateUser(user) {
if(user.age>18&&user.name!==""&&user.email.includes("@")){
return true
}
else {
return false
}
}

const   calculate  =  (a,b,  op ) => {
let r;
if(op==="add"){r=a+b}else if(op==="sub"){r=a-b}else if(op==="mul"){r=a*b}else if(op==="div"){if(b!==0){r=a/b}else{r=NaN}}return r;
}

function findDuplicates(arr) {
let duplicates = [];
let seen = {};
for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
        if (seen[arr[i]] === 1) {
            duplicates.push(arr[i]);
        }
        seen[arr[i]]++;
    } else {
        seen[arr[i]] = 1;
    }
}
return duplicates;
}
*/

// **** Clean Code ****
function processData(input) {
  let result = input.map((num) => (num % 2 === 0 ? num * 2 : num + 1));
  return result;
}

function validateUser(user) {
  return user.age > 18 && user.name !== "" && user.email.includes("@");
}

const calculate = (a, b, op) => {
  let result;
  op = op.toLowerCase().trim();
  const operations = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => (b !== 0 ? a / b : NaN),
  };
  if (op in operations) return operations.op(a, b);
  return NaN;
};

function findDuplicates(arr) {
  let duplicates = [];
  let count = new Map();
  for (let num of arr) {
    count.set((count.get(num) || 0) + 1);
  }

  for (let [num, frequency] of count) {
    if (frequency >= 2) duplicates.push(num);
  }
  return duplicates;
}
