// EX1.
// A.
// 1.

function getData(){
    let data =  new Promise((resolve, reject) =>{
        setTimeout(function(){
            resolve('hello world');
        },2000)
    });
    return data;
}

// getData().then((value)=>console.log(value));

// 2.
// async function processData(){
//     let data = await getData();
//     data.then((resolve)=>console.log(resolve));
// }

// processData();

const processData = async () => {
    const data = await getData();
    console.log(data);
}

processData();

// B.
function myFunction(param){
    return new Promise((resolve,reject)=>{
        if(typeof param == 'number'){
            if(param%2 == 0){
                setTimeout(()=>{
                    resolve('even');
                },5000);
            } else{
                setTimeout(()=>{
                    resolve('odd');
                },1000);
            }
        } else{reject('Not a number!')}
    })
}

let data = myFunction(4);
data.then((resolve)=>console.log(resolve)).catch((error)=>console.log(error));

// EX-2

async function getAPI (){
    try{
        const res = await axios.get('https://restcountries.com/v2/all');
        resData = res.data;
        console.log(resData);
    } catch{
        console.log('err');
    }
    for(let i =0; i<100; i++){
        newDiv = document.createElement('div');
        newDiv.className = 'country-div';

        countryImg = document.createElement('img');
        countryImg.src = resData[i].flag;

        countryName = document.createElement('h3');
        countryName.innerHTML = resData[i].name;

        countryDetails = document.createElement('ul');
        countryDetails.innerHTML=`<li>Population: ${resData[i].population}</li> <li>Region: ${resData[i].region}</li> <li>Capital: ${resData[i].capital}`

        newDiv.appendChild(countryImg);
        newDiv.appendChild(countryName);
        newDiv.appendChild(countryDetails);
        page.appendChild(newDiv);
        
        
        
    }

}
let page = document.getElementById('page')
console.log(getAPI());






