const u1=document.querySelector(".unit1");
const d1=document.querySelector(".deg1");
const u2=document.querySelector(".unit2");
const d2=document.querySelector(".deg2");
const c1=document.querySelector("#convert");
const c2=document.querySelector("#clear");

d1.value=0;
d2.value=0;

// let ft;
// d1.addEventListener('input', function(){
//     tc =d1.value;
    
//     console.log(tc);
// })

// u1.addEventListener('input', function(){
//         // let tu1 =u1.value;
        
//         if(u1.value=="Celcius"){
//             if(u2.value=="Celcius") {
//                 d2.value=d1.value;
//             }
//             else if(u2.value=="Fehrenheit") {
//                 d2.value=((d1.value*9/5)+32);
//             }
//             else if(u2.value=="Kelvin") {
//                 d2.value=(+d1.value+273.15);
//             }
        
//     }})

    // u2.addEventListener('input', function(){
        //     let tu2 =u2.value;
        //     console.log(tu2);
        // })

c1.addEventListener("click", function() {

    if(u1.value=="Celcius"){
        if(u2.value=="Celcius") {
            d2.value=d1.value;
        }
        else if(u2.value=="Fehrenheit") {
            d2.value=((d1.value*9/5)+32);
        }
        else if(u2.value=="Kelvin") {
            d2.value=(+d1.value+273.15);
        }
    }
    else if(u1.value=="Fehrenheit"){
        if(u2.value=="Celcius") {
            d2.value=((+d1.value-32)*5/9);
        }
        else if(u2.value=="Fehrenheit") {
            d2.value=d1.value;
        }
        else if(u2.value=="Kelvin") {
            d2.value=((+d1.value-32)*5/9+273.15);
        }
    }
    else if(u1.value=="Kelvin"){
        if(u2.value=="Kelvin") {
            d2.value=d1.value;
        }
        else if(u2.value=="Fehrenheit") {
            d2.value=((+d1.value-273.15)*9/5+32);
        }
        else if(u2.value=="Celcius") {
            d2.value=(+d1.value-273.15);
        }
    }
})

c2.addEventListener("click", function(){
    u1.value="";
    u2.value="";
    d1.value=0;
    d2.value=0;
})