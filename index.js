const inputNum = document.getElementById("input")
const convertBtn = document.getElementById("btn-convert")

const lengthConv = document.getElementById("length-conversion")
const volumeConv = document.getElementById("volume-conversion")
const massConv = document.getElementById("mass-conversion")


 convertBtn.addEventListener("click", function(){
     length()
     volume()
     mass()
     document.getElementById("input").value=""
 
})

function length(){
      const feet = 3.281
      const feetConversion = calculateUnits(feet,inputNum.value,"Feet","Meters")
      lengthConv.innerHTML = feetConversion
}

function volume(){
      const gallons = 4.546
      const gallonsConversion = calculateUnits(gallons,inputNum.value, "Gallons", "litres")
      volumeConv.innerHTML = gallonsConversion
} 


function mass(){
    const pounds = 2.204
    const kiloConversion = calculateUnits(pounds,inputNum.value, "kilo", "pounds")
    massConv.innerHTML = kiloConversion
    
    }



 function calculateUnits(unit, userInput,name1,name2) {
      const multiply = userInput * unit
      const divided = userInput/ unit
      const result =  `${userInput} ${name1} is ${multiply.toFixed(3)} in ${name2} || ${userInput } ${name2} is ${divided.toFixed(3)} ${name1} `
      return result     

    }