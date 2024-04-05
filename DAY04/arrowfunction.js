const msg=()=>{
    console.log("Welcome to Arrow Function");
}
msg();

const sum=(num1,num2)=>console.log("sum=",(num1+num2));
sum(23,56);

//using without return
const mul=(num1,num2)=>num1*num2;
console.log("Multiply=",mul(23,56));

//using return
const mult=(num1,num2)=>{return(num1*num2)};
console.log("Multiply=",mul(23,56));

const msgs=()=>{
    console.log("Welcome to Arrow Function");
    console.log("Welcome to Arrow Function Again");

};
