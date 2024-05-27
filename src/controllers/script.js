import Car from "../models/Car.js";
import { bst } from "./dependencies.js"
let registerBtn =document.getElementById("register-btn");

registerBtn.addEventListener("click",()=>{
    let name=document.getElementById("nameCar").value
    let model=document.getElementById("modelCar").value
    let age=document.getElementById("ageCar").value
    

    let car = new Car(name,model,age)
   if(bst.add(car)) {
    Swal.fire({
        icon: "succes",
        title: "Exito...",
        text: "Registro Exitoso!",
      });
   }else{

    Swal.fire("Falló el registro");
   }
document.getElementById("nameCar").value=""
document.getElementById("modelCar").value=""
document.getElementById("ageCar").value=""
   

})
let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click",()=>
{

    let modelSearch = document.getElementById("modelSearch").value
    let busquedaRealizada = bst.search(modelSearch);
    if(busquedaRealizada == null){
        Swal.fire("No encontrado");
        
    } else{
        Swal.fire(`El auto es ${busquedaRealizada.value.name}`);
    }
    document.getElementById("lastNameSearch").value = "";
})
let searchMinValueBtn = document.getElementById("searchMin");
searchMinValueBtn.addEventListener("click", () => {
    let minCar = bst.searchMin();
    if (minCar == null) {
        Swal.fire("El árbol está vacío.");
    } else {
        Swal.fire(`Coche con el modelo mínimo: ${minCar.name} - ${minCar.model} - ${minCar.age}`);
    }
});
let searchMaxValueBtn = document.getElementById("searchMax");
searchMaxValueBtn.addEventListener("click", () => {
    let maxCar = bst.searchMax();
    if (maxCar == null) {
        Swal.fire("El árbol está vacío.");
    } else {
        Swal.fire(`Coche con el modelo máximo: ${maxCar.name} - ${maxCar.model} - ${maxCar.age}`);
    }
});


let inOrderBtn = document.getElementById("printList");
inOrderBtn.addEventListener("click", () => {
    let resultString = "";
    bst.inOrder(value => {
        resultString += `${value.name} - ${value.model} - ${value.age}\n`;
    });
    Swal.fire(resultString);
});