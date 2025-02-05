/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(e,i,l){
    if(arr[i].profession=="developer")
    {
      console.log(arr[i].name);
    }
});
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(e,i,l){
    if(arr[i].profession=="developer")
    {
      console.log(arr[i].name);
    }
});

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log({id:4,name:"susan",age:"20",profession:"intern"});
}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++)
    {
      if(arr[i].profession=="admin")
      {
        arr.splice(i,1);
      }
    }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  { id: 5, name: "luffy", age: "17", profession: "developer" },
  { id: 6, name: "zoro", age: "21", profession: "developer" },
  { id: 7, name: "nami", age: "15", profession: "intern" },
];
  arr.concat(arr2);
}
