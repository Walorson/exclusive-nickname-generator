const modButton = document.getElementById("settings");
const modWindow = document.getElementById("dodatki");
let isModWindowOpen = false;

modButton.onclick = function() {
    if(isModWindowOpen == false) {
        modWindow.style.opacity = 1;
        modWindow.style.zIndex = 50;
        isModWindowOpen = true;
    }
    else {
        modWindow.style.opacity = 0;
        modWindow.style.zIndex = -5;
        isModWindowOpen = false;
    }
}
///////MODS LIST//////
class Mod {
    constructor(name, addButton, HTMLcontent) {
        this.addButton = document.getElementById(addButton);
        this.isLoad = false;
        this.name = name;
        this.HTMLcontent = HTMLcontent;
        this.addButton.addEventListener("click",() => {
            this.loadMod();
        });
    }
    modscript() {;}
    destroy() {;}
    loadMod() {
        if(this.isLoad == false) {
            this.addButton.style.backgroundColor = "red";
            this.addButton.textContent = "-";
            document.getElementById(this.name).innerHTML = this.HTMLcontent;
            this.isLoad = true;
            this.modscript()
        }
        else {
            this.addButton.style.backgroundColor = "green";
            this.addButton.textContent = "+";
            document.getElementById(this.name).innerHTML = '';
            this.isLoad = false;
            this.modscript();
        }
    }
}

///MOD 1 //Umożliwia dodawnie do losowania niestandardowych słów przed jak i po wygenerowanym nicku. Autor: MiroslawZelent.
const mod1 = new Mod(
    "mod1",
    "mod1-custom-przedrostki-przyrostki",
    '<form><legend>Używaj:</legend><label><input type="checkbox" id="mod1checkbox1">Customowego Przedrostka</label><input type="text" id="mod1textbox1" disabled><br><label><input type="checkbox" id="mod1checkbox2">Customowego Przyrostka</label><input type="text" id="mod1textbox2" disabled></form>',
) 

mod1.modscript = () => {
    if(mod1.isLoad) {
        var mod1chbox1 = document.getElementById("mod1checkbox1");
        var mod1chbox2 = document.getElementById("mod1checkbox2");
        var mod1textbox1 = document.getElementById("mod1textbox1"); 
        var mod1textbox2 = document.getElementById("mod1textbox2"); 

        if(mod1.isLoad == true) { document.getElementById("box").innerHTML = "<span id=\"mod1przedrostek\"></span><span id=\"nickname\">Sample Text</span><span id=\"mod1przyrostek\"></span>"; }

        mod1chbox1.onclick = function () { if (mod1chbox1.checked == true) mod1textbox1.removeAttribute("disabled"); else { mod1textbox1.setAttribute("disabled", ";");  mod1textbox1.value = ""; } } 
        mod1chbox2.onclick = function () { if (mod1chbox2.checked == true) mod1textbox2.removeAttribute("disabled"); else { mod1textbox2.setAttribute("disabled", ";"); mod1textbox2.value = ""; } } 
        button.onclick = function () {
            if(mod1.isLoad) { document.getElementById("mod1przedrostek").innerHTML = mod1textbox1.value; document.getElementById("mod1przyrostek").innerHTML = mod1textbox2.value; }
            else { document.getElementById("mod1przedrostek").innerHTML = ""; document.getElementById("mod1przyrostek").innerHTML = "";}
        }
    }
}
////////////////////////////////////////////////////////////////////////////////
