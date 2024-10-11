// let obj= {
//        name: "love",
//        age:25,
//        weight:90,
//        height:"6ft lin",
//        greet: function() {
//               console.log("nikhil shukla");
//        }
// };
// 
// console.log(obj)
// obj.greet();
// 
// 
// console.log(typeof(obj))
// 
// let obj2=obj;
// 
// 
// //creation of array
// let arr=[1,2,3,4,5];
// //array constructor
// let brr=new Array('love', 1, true);
// 
// // console.log(arr[3]);
// // console.log(brr[2]);
// 
// //push,pop.
// brr.push('babbar');
// brr.pop();
// brr.push('10');
// brr.push('30');
// brr.push('20');
// brr.push('49');
// brr.push('33');
// 
//  
//    //sift
// brr.shift();
//      //unsift
// brr.unshift(8);
// //splice
// brr.slice(1,2,'nikhil')
// 
// 
// 
// console.log(arr.slice(2,4));
// console.log(brr);
// 




//console.log(typeof(arr));


       //map

// let arr=[10,22,30,44,66,43,90];
// 
// // arr.map((number) => {
// //        console.log(number+1);
// // })
// 
// let ansarray = arr.map((number) => {
//        return number+number;
// })
// 
// console.log(ansarray)




      ///filter

// let arr=[10,33,20,4,2,3,220,45,78,0];
// 
//  let evenarray= arr.filter((number) => {
//        if(number %2 ===0) {
//               return true;
//        }
//        else{
//               return false;
//        }
// })
 
// console.log(evenarray)


    
         ///reduce
// 
// let arr=[10,33,20,];
// let ans=arr.reduce((acc,curr) => {
//       return acc+ curr;
// },0);
// 
// console.log(ans);


//      //sort
// 
// let arr=[10,33,20,4,2,3,220,45,78,0];
// arr.sort();
// 
// console.log(arr);

//find 
// 
// let arr=[10,33,20,4,2,3,220,45,78,0];
// arr.find(5);
// 
// console.log(arr);
// 



    // foreach
// let arr=[10,33,20,4,2,3];
// let length= arr.length;
// console.log("length:", length);

     //tranditonal loop
// for(let index=0; index < length; index++) {
//        console.log(arr[index]);
// }

    //for-in

                                          //ptactise=practise.

                        // at method.            
               // 0      1         2       3
const fruits=["banana","orange","apple","mango"]
let fruit=fruits.at(2);

console.log(fruit);


                        //length method.

                        const fruits=["banana","orange","apple","mango"]
                        let fruit=fruits.at(2);
                        
                        
                        console.log(fruit);
