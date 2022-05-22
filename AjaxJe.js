//API Restful API 


let jokes=document.getElementById('getData');
jokes.addEventListener('click',jokesload);


function jokesload (){
    let number =document.getElementById('typejokes').value;
    // console.log(number)
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onprogress= function(){
        document.getElementById("output").innerHTML="<h3>Loading.......</h3>";
    }

    xhr.onload =   function(){
        
        if(this.status === 200){
            // console.log(this.responseText);
            let jsp=JSON.parse(this.responseText)
            // document.getElementById('output').innerHTML=`<h4>${this.responseText} </h4>`;
            // console.log(jsp)
            let joke=jsp.value;
            let output =`<ol>`;
            joke.forEach(item => {
                // console.log(item.joke)
                output +=`<li>${item.joke} </li>`;
            });
            output +=`</ol>`;
            document.getElementById("output").innerHTML=output;

            // document.getElementById('output').innerText=`${joke}`
            //  console.log(jsp)

        }
    }
    xhr.send()
}