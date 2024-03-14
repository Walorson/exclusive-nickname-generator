const button = document.querySelector("button"); //Przycisk do losowania
const radio1 = document.getElementById("a1"); //Jednoczłonowe
const radio2 = document.getElementById("a2"); //Dwuczłonowe
const radio3 = document.getElementById("a3"); //Wieloczłonowe
const checkbox1 = document.getElementById("b1"); //Używaj przyrostka "PL"
const checkbox2 = document.getElementById("b2"); //Używaj tylko liczb dwucyfrowych

const createNickname = function () {
    const single = ["piętro","wieżowiec","szafa","odwiert","drukarka","gościnność","klawiatura","przedłużacz","telekomunikacja","obciąganie","wentylator","wakacje","styczeń","papież","matryca","ruchanie","improwizacja","samochód","procesor","trawa","facebook","poduszka","karakan","wiolonczela","kontrabas","koparka","śmieciarka","okno","grawitacja","atmosfera","ogrodnik","gówno","szynka","ser","sofa","gruby","bluza","meister","kanister","krzesło","samotność","kobieta","mężczyzna","siekiera","autobus","dzik","suszarka","mikrofon","gej","żurek","worek"];

    const double = ["LubieSrać","WybiteOko","KrwistyBekon","NiebieskiKabel","PrzemianaMaterii","UprawianieSportu","MateuszMierzwa","OtwarteDrzwi","TrzęsienieZiemii","WstrząsMózgu","DużyPenis","KośćMiedniczna","ZasłużonyUrlop","ZgrzytanieZębów","KwaśneDeszcze","GlobalneOcieplenie","KartaGraficzna","PrzegrzanieProcesora","MyjniaSamochodowa","CiężkieCzasy","WyposażenieDomu","InwazjaZombie","ZanieczyszczeniePowietrza","SkokWiary","OgrzewaniePodłogowe","OddziaływanieSłabe","PłytaChodnikowa","SchładzaczArbuzów","SpadająceLiście","PowiewającaFlaga","CyrkulacjaPowietrza","PiwonactwoElektronowe","ŻebraniePieniędzy","SyntezaBiałka","ReakcjaWybuchowa","ObgryzaniePaznokci","PotężnyWojak","ŚwiatłoNadzei","ŻółtaMorda","RozwiązanieProblemu","SzczynyPsa","GrubasPierdolony","MrElegancik","MrAgencik","AsertywnyCzłowiek","PalaczŻydów","KermitŻaba","SmoczeJaja","ZasadaKomplementarności","AlbertEinstein","AmebaUmysłowa","UpośledzonieUmysłowe","SzybaOdpowiedź"];

    const multi = ["SramCiNaKlate","TwojaStaraToKopara","LubięJeśćGówno","RozpoczęcieRokuSzkolnego","PrzyznanieSięDoWiny","KłamanieWŻyweOczy","NiePoddawajSię","CzasToPieniądz","BobowskiPatus/MłodyInwestor","NiePróbujTegoWDomu","ŚmiechNaSali","ObmawianieZaPlecami","PrzecieranieOczówZeZdumienia","CiekłeKupskoLwa","PustaSzklankaZWodą","EleganckiMłodyMężczyzna","NapadNaBank","UcieczkaPrzedPolicją","PierwszeOznakiWiosny","KluczPodWanną"];
    let secondRand; 
    if (!checkbox2.checked)
        secondRand = Math.floor(Math.random() * 16) + 4; //Losowanie liczb od 5 do 16
    else 
        secondRand = Math.floor(Math.random() * 10) + 10; //Losowanie liczb TYLKO Dwucyfrowych

    function firstCreate() {
        if (radio1.checked) {
            return single[Math.floor(Math.random() * single.length)];
        }
        else if (radio2.checked) {
            return double[Math.floor(Math.random() * double.length)];
        }
        else if (radio3.checked) {
            return multi[Math.floor(Math.random() * multi.length)];
        }
    }
    function secondCreate() { return secondRand; }

    let first = firstCreate();
    let second = secondCreate();
    let third = ""; if (checkbox1.checked == true) third = "PL";
    document.getElementById("nickname").innerHTML = first + second + third;
}
button.addEventListener("click", createNickname);

////DARK MODE////
const darkmode = document.getElementById("darkmode"); let isDarkMode = false;
darkmode.onclick = function () {
    if (isDarkMode == false) {
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "#ccc";
        document.getElementById("dodatki").style.backgroundColor = "#333";
        document.getElementById("box").style.borderBottomColor = "#eee";
        button.classList.add("dark-button");
        modButton.style.filter = 'invert(100%)';

        darkmode.style.backgroundColor = "#eee";
        darkmode.style.color = "#000";
        darkmode.textContent = "Light";

        isDarkMode = true;
    }
    else if (isDarkMode == true) {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.getElementById("dodatki").style.backgroundColor = "";
        document.getElementById("box").style.borderBottomColor = "";
        button.classList.remove("dark-button");
        modButton.style.filter = '';


        darkmode.style.backgroundColor = "";
        darkmode.style.color = "";
        darkmode.textContent = "Dark";

        isDarkMode = false;
    }
}