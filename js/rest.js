const loadContries=() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => dispalyCountries(data))
}

const dispalyCountries=countries=>{
    console.log(countries);
    const countriesHTML=countries.map(country => getCountryHTML(country));
    //console.log(countriesHTML[0])
    const constainer=document.getElementById('countries');
    constainer.innerHTML=countriesHTML.join('');

}

const getCountryHTML =({name, flags, area, region})=>{
   
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Region: ${region}</p>
        <img src="${flags.png}">
    </div>`
}

// const getCountryHTML = country => {
//     //option 1
//     const { name, flags } = country;
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>`
// }

//orginal
// const getCountryHTML =country=>{
//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>`
// }

loadContries();