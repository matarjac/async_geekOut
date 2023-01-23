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

function renderCountries(data){
    page.innerHTML='';
    for(let index in data){
        // create new div for the country
        newDiv = document.createElement('div');
        newDiv.className = 'country-div';

        // create flag img element
        countryImg = document.createElement('img');
        countryImg.src = data[index].flags.svg;

        // create title for country name
        countryName = document.createElement('h3');
        countryName.innerHTML = data[index].name.common;

        // Create list of the country details
        countryDetails = document.createElement('ul');
        countryDetails.innerHTML=`<li>Population: ${data[index].population}</li> <li>Region: ${data[index].region}</li> <li>Capital: ${data[index].capital}`

        // Add all created elements to the parent div
        newDiv.appendChild(countryImg);
        newDiv.appendChild(countryName);
        newDiv.appendChild(countryDetails);
        page.appendChild(newDiv);
        
        
    }
}

async function getAPI (){
    try{
        const res = await axios.get('https://restcountries.com/v3.1/all');
        console.log(res.data);
        const data = res.data;
        renderCountries(data);
    } catch{
        console.log('err');
    }

}

async function getAPIByRegion(region){
    console.log(region);
    try{
        const res = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        console.log(res.data);
        const data = res.data;
        renderCountries(data);
    } catch{
        console.log('err');
    }
}

async function getAPIBySearch(){
    let name = inputSearchField.value;
    console.log(name);
    try{
        const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        console.log(res.data);
        const data = res.data;
        renderCountries(data);
    } catch{
        console.log('err');
    }
    console.log(data);
}

getAPI();

const inputSearchField = document.querySelector('input');
inputSearchField.addEventListener('input', ()=>{
    getAPIBySearch();
});

let dropDownMenu = document.getElementById('menu');
let dropDownMenuBtn = document.getElementById('drop-btn');
dropDownMenuBtn.addEventListener('click', function(){
    console.log('click');
    dropDownMenu.classList.toggle('show');
});

let africaBtn = document.getElementById('africa');
africaBtn.addEventListener('click', ()=>{
    getAPIByRegion(africaBtn.id);
});

let americaBtn = document.getElementById('america');
americaBtn.addEventListener('click', ()=>{
    getAPIByRegion(americaBtn.id);
});

let asiaBtn = document.getElementById('asia');
asiaBtn.addEventListener('click', ()=>{
    getAPIByRegion(asia.id);
});

let europeBtn = document.getElementById('europe');
europeBtn.addEventListener('click', ()=>{
    getAPIByRegion(europeBtn.id);
});

let oceaniaBtn = document.getElementById('oceania');
oceaniaBtn.addEventListener('click', ()=>{
    getAPIByRegion(oceaniaBtn.id);
});



