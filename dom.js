// // let val;
// // val=this;
// // val=window;
// // val=window.document;
// // val=document;
// // val=document.all;
// // val=document.all[0];
// // val=document.all.length
// // val=document.body;
// // val=document.domain;
// // val=document.characterSet;
// // val=document.contentType;
// // val=document.forms;
// // val=document.forms[0]
// // console.log(val);


// // let val;
// // val = this;
// // val = window;
// // val = window.document;
// // val = document;
// // val = document.all;
// // val = document.all[2];
// // val = document.all.length;
// // val = document.head;
// // val = document.body;
// // val = document.doctype;
// // val = document.domain;
// // val = document.URL;
// // val = document.characterSet;
// // val = document.contentType;

// // val = document.forms;
// // val = document.forms[0];
// // val = document.forms[0].method;
// // val = document.forms[0].action;

// // val = document.links;
// // val = document.links[0];
// // val = document.links[0].href;
// // val = document.links[0].className;
// // val = document.links[0].classList;

// // val = document.images;

// // val = document.scripts;
// // val = document.scripts[0];
// // val = document.scripts[0].src;
// // val = document.scripts[0].getAttribute('src');

// // links = document.links;
// // let linkArr = Array.from(links);

// // linkArr.forEach(function(link){
// //     console.log(link.getAttribute('href'));
// // });

// // console.log(links);
// // console.log(val);


// // links=document.links;
// // let linkArry=Arry.from(links)
// // // linkArry.array.forEach(links => {
// // //     console.log(links);
// // // 
// // // let val;
// // // val=document.getElementById("document-tittle");
// // // val=document.getElementsByClassName("sample-class");
// // // document.getElementById("document-tittle").style.background='#333'
// // // document.getElementById("document-tittle").style.display="block";

// // // val=document.querySelector("ol li");
// // // val.style.background="red";
// // // val.style.color="white"
// // // val=document.querySelector("li:last-child");
// // // val=document.querySelector("li:nth-child(2)");

// // // document.getElementsByClassName

// // // let








// // // console.log(val);


// // let olItem=document.createElement('li');
// // olItem.className='a new another-class'
// // olItem.id="new-element"
// // olItem.setAttribute('tittle','Atittle of gang')
// // olItem.appendChild(document.createTextNode('java script'));
// // document.querySelector('ol').appendChild(olItem);

// // console.log(olItem)

// // let ulItem=document.createElement('li');
// // let link=document.createElement('a');
// // link.appendChild(document.createTextNode('instragram'));
// // link.setAttribute('herf',"www.instragram.com");
// // ulItem.appendChild(link);
// // document.querySelector('ul').appendChild(ulItem)

// // console.log(ulItem)


// // let newHeading=document.createElement('h1');
// // newHeading.appendChild(document.createTextNode('h1 new heading'))
// // newHeading.className="simplee class";


// // let oldhead=document.querySelector('h3');
// // let parent=document.querySelector('.container')
// // // parent=oldhead.parentElement;
// // parent.replaceChild(newHeading,oldhead)
// // console.log(newHeading);
// // console.log(oldhead)
// // console.log(parent)


// // let listItem=document.querySelectorAll('li');
// // let list=document.querySelector('ul');
// // // listItem[0].remove();
// // // listItem[2].remove();
// // list.removeChild(listItem[5])
// // list.classList.add('test-new');
// // list.classList.add('test-old')
// // list.classList.remove("sample-class");
// // let val=list.hasAttribute('tittle');
// // console.log(val)
// // list.setAttribute('tittle','new tittle')
// // list.removeAttribute('tittle');
// // console.log(list)


// //even of javaScript
// // function message(){
// //     console.log("This is kanok")
// // }

// let btn=document.getElementById("butt");
// let btn=document.querySelector(".container");
// btn.style.background="red";
// btn.addEventListener('mousemove',function(e){
//     let val=e;
//     val=e.target;
//     val=e.target.id;
//     val=e.timeStamp;
//     val=e.type;
//     val=e.clientX;
//     val=e.clientY;
//     val=e.offsetY;
//     val=e.offsetX;
//     val=this;
//     this.style.background= `#${e.offsetX} `;
//     console.log(e.offsetX);
//     console.log(e.offsetY)
    
// console.log(val)
// })
















let input=document.querySelector("#name");
input.addEventListener('focus',test);
input.addEventListener("keyup",test2)

function test(e){
 this.style.background="pink"

}

function test2(e){
//   console.log(this.value)  
document.getElementById("demo").innerHTML=this.value;
}


































