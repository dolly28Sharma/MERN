const msg=()=>console.log("Arrow Function");
let data=[10,20,30,60.56,70.2,"KIET",msg];
console.log(data);
data[6]();//calling 
data.foreach(value=>console.log(`value of Array =${value}`));

// for(let value of data){
//     console.log(`value of Array =${value}`);
// }

// for(let index in data){
//     console.log(`value of ${index} is ${data[index]}`);
// }

// for(let i=0;i<data.length;i++) {
//     console.log(`value of ${i} is ${data[i]}`);
// }