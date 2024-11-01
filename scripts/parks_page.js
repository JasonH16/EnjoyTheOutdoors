function addPark(parkTypeName, parkTypeSelect){
parkTypeSelect.appendChild(new Option(parkTypeName));
}
function onContent(){
    const parkTypeSelect = document.getElementById("parkTypeSelect");
    parkTypesArray.foreach(parkTypeName => addPark(parkTypeName, parkTypeSelect));
    
}


document.addEventListener("DOMContentLoaded", onContent);
