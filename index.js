 const form=document.querySelector("form")            //selected form

 form.addEventListener("submit", function(e){                            //in case of form we use submit
e.preventDefault();
const height= parseInt(document.querySelector("#height").value) ;                                //heught selected so that the value enter by user 
const weight= parseInt(document.querySelector("#weight").value) ;                                 //weight
const result = document.querySelector("#results");                                          //parseint is used to chnage the string output into integer


if(height === "" || height  < 0 || isNaN(height)){
  result.innerHTML= ` please enter a valid number ${height}`;
}
else if(weight === "" || weight  < 0 || isNaN(weight)){
    result.innerHTML=`  please enter a valid number ${weight}`;
  }
else{
    const bmi = (weight / ((height*height ) /10000)). toFixed(2);              //tofixed function is used to decide the number of decimal digits
    result.innerHTML=`${bmi}`                   
}
 })