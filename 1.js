const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask (){
    if(inputBox.value===''){
        // if input box is empty 
        alert("You must write something!");
    }else{
        // Hieronder wanneer er iets is ingevuld in de textbox dan wordt er een LI item aangemaakt en deze komt dan in de UI
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)
        
        //Onderstaande code is om een x toe te voegen aan elk lijn zodat de gebruiker de lijn kan verwijderen
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    // Onderstaande lijn is wanneer gebruiker iets gaat toevoegen aan de lijst dan wordt de textbox leeggemaakt
    inputBox.value="";
    saveData();
}
//onderstaand is wanneer je op een li element klikt dan zal hij hem of doorstrepen of wanneer je op het kruisje klikt dan verwijdert hij het element
listContainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false)

//Onderstaande functie is om data in onze browser op te slaan
function saveData(){
    //storage van browser zal innerhtml van onze lijst opslaan
    localStorage.setItem("data",listContainer.innerHTML);
}

//Toon data uit storage bv bij het refreshen van de pagina wilt de gebruiker dezelfde zaken terugzien
function showList() {
    listContainer.innerHTML=localStorage.getItem("data");

}
showList();