// console.log("Before error")
// // test();
// try{
// // test();
// // undefined.test()
// }
// catch(err){
// // console.log(err)
// console.log(err.message);
// console.log(err.name)
// }
// finally{
//     console.log("I am inside");
// }
// console.log("After  Errror")

let a=15;
try{
    if(a>15)throw "Too big";
    else if (a<24) throw "Two smaill";
}
catch(err){
    console.log(err)

}