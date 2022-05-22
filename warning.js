var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

// var person2 = {
//     name: "Karim",
//     age: 35,
//     hometown: "Chittagong",
//     married: true
// };
// console.log(person2);
// console.log(person1)
// var person1jeson=JSON.stringify(person1);
// // var person1Jeson=JSON.parse(person1);
// var object=JSON.parse(person1jeson);
// console.log(object)

// console.log(person1.name)

// Data.jeson

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
      jesonData(data)
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jesonData(jsonObject){
// console.log(jsonObject);
let jsObj=JSON.parse(jsonObject);
// console.log(jsobj);
for(x in jsObj.persons)
// console.log(x)
var persons=jsObj.persons;
for(y in persons[x]){
console.log(persons [x] [y])
}
// console.log(persons[x])

}
 