const modals = [
  document.getElementById("javaPower"),
  document.getElementById("javaCPU"),
  document.getElementById("javaRam"),
  document.getElementById("javaRom"),
  document.getElementById("javaCmos"),
  document.getElementById("javaHdd")
];


function closeAllModals() {
  modals.forEach(modal => modal.style.display = "none");
}

const modal = document.getElementById("javaPower");
const openB = document.getElementById("powerDiv");
const closeB =document.getElementById("powerClose");

openB.onclick = function(){
    closeAllModals();
    modal.style.display = "block";
}
closeB.onclick = function(event){
    event.stopPropagation();
    modal.style.display = "none";
}

const modal2 = document.getElementById("javaCPU");
const openB2 = document.getElementById("cpuDiv");
const closeB2 =document.getElementById("cpuClose");

openB2.onclick = function(){
    closeAllModals();
    modal2.style.display = "block";
}
closeB2.onclick = function(event){
    event.stopPropagation();
    modal2.style.display = "none";
}

const modal3 = document.getElementById("javaRam");
const openB3 = document.getElementById("ramDiv");
const closeB3 =document.getElementById("ramClose");

openB3.onclick = function(){
    closeAllModals();
    modal3.style.display = "block";
}
closeB3.onclick = function(event){
    event.stopPropagation();
    modal3.style.display = "none";
}

const modal4 = document.getElementById("javaRom");
const openB4 = document.getElementById("romDiv");
const closeB4 =document.getElementById("romClose");

openB4.onclick = function(){
    closeAllModals();
    modal4.style.display = "block";
}
closeB4.onclick = function(event){
    event.stopPropagation();
    modal4.style.display = "none";
}

const modal5 = document.getElementById("javaCmos");
const openB5 = document.getElementById("cmosDiv");
const closeB5 =document.getElementById("cmosClose");

openB5.onclick = function(){
    closeAllModals();
    modal5.style.display = "block";
}
closeB5.onclick = function(event){
    event.stopPropagation();
    modal5.style.display = "none";
}

const modal6 = document.getElementById("javaHdd");
const openB6 = document.getElementById("storageDiv");
const closeB6 =document.getElementById("hddClose");

openB6.onclick = function(){
    closeAllModals();
    modal6.style.display = "block";
}
closeB6.onclick = function(event){
    event.stopPropagation();
    modal6.style.display = "none";
}


//bios
const toggleBtn = document.getElementById("toggleView");
const motherboardView = document.getElementById("main-container");
const biosView = document.getElementById("biosView");

toggleBtn.onclick = function(){

  if (biosView.style.display === "block") {
    biosView.style.display = "none";
    motherboardView.style.display = "block";
    toggleBtn.textContent = "Switch to BIOS View";
  } else {
    biosView.style.display = "block";
    motherboardView.style.display = "none";
    toggleBtn.textContent = "Switch to Motherboard View";
  }
};

