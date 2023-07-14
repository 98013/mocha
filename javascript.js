// 4 ways to convert array to object
console.log("*****javascript*****");
let arr =['Apple','Orange',"Banana"]
let obj = Object.assign({},arr);
console.log("Type-1",obj);
console.log("Type-2",{...obj});
let temp ={};
arr.map((item,index)=> temp[index] = item);
console.log("Type-3",temp);
let temp1=Object.fromEntries([["0","Apple"],["1","Orange"],["2","Banana"]]);
console.log("Type-4",temp1);

//convert object to array
let tempArray ={};
const tempObj = {"0":"Apple","1":"Orange","2":"Banana"};
console.log("Object keys", Object.keys(tempObj));
console.log("Object values",Object.values(tempObj));
console.log("keys and values-1", Object.entries(tempObj))
console.log("keys and values-2", {...Object.entries(tempObj)})
for(let [key,value] of Object.entries(tempObj)){
    console.log(`${key}:${value}`, tempArray[key]=value)
}
console.log("converting Object to Array" , tempArray);

//we can use Array.from() to convert objec to Array.
console.log("converting Array to Object using Array.from method ", Array.from({"0":"Apple"}));

// uses of spread operator
    //creating a copy of an orignial array
const initiaArray =["Apple","Orange","Banana"];
const tempInitialArray = [...initiaArray];
console.log("creating new array from existing array",initiaArray,tempInitialArray,initiaArray === tempInitialArray);
    // we can use slice to create a new array from exising Array using slice
const slicedArray = initiaArray.slice();
console.log("slice method",initiaArray, slicedArray, initiaArray === slicedArray);
    //Array.from() used to create a shallow copy of an Array. which might be a string or having length property.
    const shallowCopyArray = Array.from(initiaArray);
    console.log("array from method",initiaArray, shallowCopyArray, initiaArray === shallowCopyArray);
    //concatenate two array
  console.log("concatenating two arrays" ,[...initiaArray,...tempInitialArray]);
   //concatenate two array and remove duplicates
   console.log("concatenating two arrays and removing duplicates ", [...new Set([...initiaArray,...tempInitialArray])]);
function cleanCode(a, b, c){
    console.log("spreading it to pass as arguments", `${a}, ${b}, ${c}`);
}
cleanCode(...initiaArray);
    //flattening an array
   const flatteningArray = [[1,2],[3,4],[5,6]];
   const concatenatedArray = [].concat(...flatteningArray);
   console.log("Concatenated Array", concatenatedArray);
   console.log("Creating Object - 1", {...flatteningArray});
   console.log("Creating Object - 1", Object.assign({},flatteningArray));
   console.log("Creating Object - 2", Object.assign([],flatteningArray));
   console.log("Creating Object - 2", Object.assign(flatteningArray));
   console.log("Creating Object - 3", {...concatenatedArray});
   console.log("Creating Object - 3", Object.assign({},concatenatedArray));
   console.log("Creating Object - 4", Object.assign([],concatenatedArray));
   console.log("Creating Object - 4", Object.assign(concatenatedArray));
   console.log("Creating Object - 5", Object.fromEntries([[1,2],[3,4],[5,6]]));

   //converting string to numbers
   const numbers = "123456789";
    let conversion = Array.from(numbers, Number);
    console.log(conversion);
    let trueStatement = Array.from(["","Apple",undefined,null,0], Boolean);
    console.log(trueStatement);
    
//conditional way of adding properties
const objConditional ={name:"Aple",age:30}; 
console.log({...objConditional, ...(Boolean(1) ? {type:"working"} : {type:"Not working"})});  


// map function 
mapper = [{name:"Apple 1"},{name:"Orange 2"},{name:"PineApple 3"},{name:"Banana 4"}]
diffmapper =  [{name:"Apple 1"},{name:"Orange 2"},{name:"PineApple 3"},{name:"Banana 4"},{name:"Mango 5"}, {name:"carrot 6"}]
newMapper = mapper.map(item => item.name.split(" ")[0]);
console.log(newMapper);
// difference between two arrays
differenceMapperUsingIncludes = Array.from(diffmapper, (x,index) => x.name !== mapper[index]?.name);
console.log("differenceMapperUsingIncludes",differenceMapperUsingIncludes);
differenceMapper = diffmapper.filter((item,index,arr) => item.name !== mapper[index]?.name);
console.log(differenceMapper);

//filter to arrays
filterArray = ["Apple 1","Orange 2","PineApple 3","Banana 4"]
diffFilterArray = ["Apple 1","Orange 2","PineApple 3","Banana 4","Mango 5","Carrot 6"]
console.log("the difference of two arrays using filter ", diffFilterArray.filter((x,index) => !filterArray.includes(x)));
console.log("the difference of two arrays using map ", diffFilterArray.map((x,index) => !filterArray.includes(x)));
console.log("the difference of two arrays using foreach ", diffFilterArray.forEach((x,index) => !filterArray.includes(x)));

 //remove duplicates using reduce function.
const cleanArray = [];
const cleanArray1 = [];
const reduceRemoveDuplicates = [1,1,2,6,7,8,9,9,70,70,1,1,1,9]
console.time();
reduceRemoveDuplicates.reduce((preValue,currentValues) => { !cleanArray.includes(currentValues) && cleanArray.push(currentValues)},[]);
console.timeEnd()
console.time()
reduceRemoveDuplicates.reduce((preValue,currentValues) => { preValue < currentValues || !cleanArray1.includes(currentValues) && cleanArray1.push(currentValues)},[]);
console.timeEnd()
console.log(cleanArray);
console.log(cleanArray1);

    //  Map returns an Array
    //   where as forEach returns undefined
 
// return number
 const filteredArrays =[1,null,undefined,100,200,300,400,0];
 console.log(filteredArrays.filter(Boolean))

 // remove duplicates from an object in an array
 const cleanObject = {};
 const cleanarray = [];
 const duplicateObject =[{name:"jhon"},{name:"Orange"},{name:"Brinjal"},{name:"jhon"},{name:"jhon"}];
 duplicateObject.reduce((previous,current) =>  cleanObject[current?.name] || (cleanObject[current?.name]=true && cleanarray.push(current)),[]); 
 console.log("removed duplicates from the object", cleanarray);

let myString = "Elephant";
console.log(myString[0]); //E
console.log(myString.split("")); //['E','l','e','p','h','a','n','t']
console.log([...myString]); //['E','l','e','p','h','a','n','t']
console.log(Array.from(myString));
console.log(Object.assign({}, myString)); //{"0": "E","1": "l","2": "e","3": "p","4": "h","5": "a","6": "n","7": "t"}
console.log(myString.slice()); // create a shallow copy both  refers to same memory locations.
console.log([...myString]) // creates a deep copy where both refers to different memory locations

const numbersToBeSliced = [0,1,2,3,4,5];
const numberToBeSpliced = [100,200,300,400,500];

const silcedArray = numbersToBeSliced.slice(0,4);
console.log(`Actual Array [0,1,2,3,4,5] Post slice of Original Array ${numbersToBeSliced} Slice of (0,4) ${silcedArray}`);

const splicedArray = numberToBeSpliced.splice(1,3);
console.log(`Actual Array [100,200,300,400,500] Post slice of Original Array ${numberToBeSpliced} Splice of (1,3) ${splicedArray}`);


//Array.from converts an iteriable string or iteriable object to Array.
//Array.fromEntries converts array of key value variables [[key, value]] or Map into object.
// 

const val = Array.from({length:10}, (_,value) => value*2);
console.log(val); //[0,2,4,6,8,10,12,14,16,18]

const NumberInSeries = Array.from({length:10}, (_,value) => (value*1)+1);
console.log(NumberInSeries); //[1,2,3,4,5,6,7,8,9,10]


console.log(Array.apply(null, Array(5)).map(function (x, i) { return (i*1)+1; }));
console.log(Array.from(Array(5)).map((x,i) => {return (i*1)+1}));
console.log(Array.from('abcd')); //['a','b','c','d']
console.log('x'.repeat(5)) // 'xxxxx'
console.log(Array.from('x'.repeat(5)).map( function(x,i){ return (i*1)+1}));

// Function Borrowing, replacing this keyword with null also give use the same output 60.
function functionBorrowing(x,y,z) {
    return x+y+z;
  }
  
  console.log(functionBorrowing.call(this,10,20,30)); // functionBorrowing.call(null,10,20,30)
  console.log(functionBorrowing.apply(this,[10,20,30])); // functionBorrowing.apply(null,[10,20,30])
  var bindingFunction  = functionBorrowing.bind(this,10,20,30); // functionBorrowing.bind(null,10,20,30)
  console.log(bindingFunction());