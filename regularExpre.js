// /*
// // Regular Expression
// // Pattern Matching Technique
// let re;
// let str;

// re = /hello/;
// re = /Hello/;
// re = /hello/i; // i = case insensitive

// console.log(re);
// console.log(re.source);

// str = "HelLo World";
// str = "Again Hello World";
// str = "Hell World";
// str = "sdsHellosds World";
// str = "Again Hello World Hello";
// str = "World";

// // exec() - Returns result in an array or null
// let result = re.exec(str);

// // test() - true/false
// result = re.test(str);

// // match() - Returns array or null
// str = "Again Hello World Hello";

// result = str.match(re);

// // search() - Returns index of the first match or -1
// str = "World";

// result = str.search(re);

// // replace() - Return new string
// str = "Again Hello World Hello";
// let newstr = str.replace(re, "Hi");

// console.log(result);
// console.log(str);
// console.log(re.source);
// console.log(newstr);
// */


// let re;
// let str;
// re= /hello/;
// re=/Hello/;
// re=/hello/i;
// console.log(re);
// console.log(re.source)
// str= "Hello world";
// str='Again hello world'
// str="hall world";
// str="sdhelloss world"
// str="agin hello worls hello"
// str="true"
// str="agin hello worls hello"
// str="true"
// str="agin hello worls hello"
// let  result=re.exec(str);
// result=re.test(str)
// result=str.match(re)
// result=str.search(re)
// let newdtr= str.replace(re,"hi i am")


// console.log(result)
// console.log(str);
// console.log(newdtr)
 let re;
 let str;

 re=/hello/;
 re=/hello/;
 re=/hel/i;
 re=/low/i;
 re =/^hello/;
 re=/hello$/;
 re=/$rld/;
 re=/^hello$/;
 re=/^hell.o$/;
 re=/hello/;
 re=/h*llo/;
 re=/he?llo/;

 str=" Hello World";
 str="Hello   hello";
 str="hello";
 str="h llo"
 str="hello world"
 str="hillo";
 str='hilo';
 str='hegfhgfhllo';
 str='hello'
 console.log(re.exec(str));
reTest(re,str)
 function reTest(re,str){
     if(re.test(str)){
         console.log(`'${str}' match '${re.source}'`);

     }
     else {
         console.log(`'${str}' dont match '${re.source}'`)
     }
 }