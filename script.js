const button = document.querySelector("button"); //Przycisk do losowania
const radio1 = document.getElementById("a1"); //Jednoczłonowe
const radio2 = document.getElementById("a2"); //Dwuczłonowe
const radio3 = document.getElementById("a3"); //Wieloczłonowe
const checkbox1 = document.getElementById("b1"); //Używaj przyrostka "PL"
const checkbox2 = document.getElementById("b2"); //Używaj tylko liczb dwucyfrowych
const copyButton = document.getElementById("copy");

const single = ["piętro","wieżowiec","szafa","odwiert","drukarka","gościnność","klawiatura","przedłużacz","telekomunikacja","obciąganie","wentylator","wakacje","styczeń","papież","matryca","ruchanie","improwizacja","samochód","procesor","trawa","facebook","poduszka","karakan","wiolonczela","kontrabas","koparka","śmieciarka","okno","grawitacja","atmosfera","ogrodnik","gówno","szynka","ser","sofa","gruby","bluza","meister","kanister","krzesło","samotność","kobieta","mężczyzna","siekiera","autobus","dzik","suszarka","mikrofon","gej","żurek","worek","samowystarczalny", "dyktafon", "hemoglobina", "niezrozumienie", "nieufność", "hurtownia", "witraż", "ciekawość", "stodoła", "ślepota", "falsyfikacja", "irracjonalizm", "germanistyka", "alfabetycznie", "ewangelia", "romb", "egzotyczność", "kemping", "bezalkoholowy", "oligosacharyda", "akcyza", "luty", "antykatoda", "frajer","neurotransmisja",'kwantyfikacja', "homogenizacja", "elektroforeza", "kriogenika", "ekstrapolacja", "metalurgia", "małpiątko", "peryhelium", "polimer", "sacharocweloza", "kapitalizm", "socjalizm"];

const double = ["LubieSrać","WybiteOko","KrwistyBekon","NiebieskiKabel","PrzemianaMaterii","UprawianieSportu","RobertLewandowski","OtwarteDrzwi","TrzęsienieZiemii","WstrząsMózgu","DużyPenis","KośćMiedniczna","ZasłużonyUrlop","ZgrzytanieZębów","KwaśneDeszcze","GlobalneOcieplenie","KartaGraficzna","PrzegrzanieProcesora","MyjniaSamochodowa","CiężkieCzasy","WyposażenieDomu","InwazjaZombie","ZanieczyszczeniePowietrza","SkokWiary","OgrzewaniePodłogowe","OddziaływanieSłabe","PłytaChodnikowa","SchładzaczArbuzów","SpadająceLiście","PowiewającaFlaga","CyrkulacjaPowietrza","PiwonactwoElektronowe","ŻebraniePieniędzy","SyntezaBiałka","ReakcjaWybuchowa","ObgryzaniePaznokci","PotężnyWojak","ŚwiatłoNadzei","ŻółtaMorda","RozwiązanieProblemu","SzczynyPsa","GrubasPierdolony","MrElegancik","MrAgencik","AsertywnyCzłowiek","PalaczŻydów","KermitŻaba","SmoczeJaja","ZasadaKomplementarności","AlbertEinstein","AmebaUmysłowa","UpośledzonieUmysłowe","SzybaOdpowiedź",
"MyślenieSzkodzi", "DrogaMleczna", "ZaćmienieSłońca", "ZbiegOkoliczności", "KiśćWinogron", "DwaDeko", "DeserSerowy", "DalekosiężnaDecyzja",
"WydobywaćKobalt", "FiltrPowietrza", "SatelitaGeostacjonarny", "AdaptacjaFilmowa", "CenaPopcornu", "EpokaKamienia", "TwierdzenieCosinusów", "KrólestwoSaksonii", "KacprowyWierch", "PiecŁukowy", "OgniwoGalwaniczne", "RozmnażaniePłciowe", "DyskAkrecyjny", "FunkcjaPochodna", "TrudneChwile", "KwantPrzestrzeni", "MamDowna","WyśrubowaneEgo","RyjemyBanie","DobreCzasy", "MikrobiologiaŚrodowiskowa", "FizjologiaRoślin","ImmunologiaMolekularna","BiochemiaStrukturalna","TeoriaWzględności"];

const multi = ["SramCiNaKlate","TwojaStaraToKopara","LubięJeśćGówno","RozpoczęcieRokuSzkolnego","PrzyznanieSięDoWiny","KłamanieWŻyweOczy","NiePoddawajSię","CzasToPieniądz","BobowskiPatus/MłodyInwestor","NiePróbujTegoWDomu","ŚmiechNaSali","ObmawianieZaPlecami","PrzecieranieOczówZeZdumienia","CiekłeKupskoLwa","PustaSzklankaZWodą","EleganckiMłodyMężczyzna","NapadNaBank","UcieczkaPrzedPolicją","PierwszeOznakiWiosny","KluczPodWanną","GalopowaćPrzezMorze", "ZjadłemDziśObiad", "StatekDoAmeryki", "PodróżNaGapę",
"FigurkaŻołnierzaZOkresuDrugiejWojnyŚwiatowej", "WzórSkróconegoMnożenia", "ZamknijRyjNaKłódke", "DrapaczkaDoPleców", "BoliMnieGardło",
"ElektrykaPrądNieTyka","NiewyjaśnioneObiektyLatające","GiełdaPapierówWartościowych", "ZestawKlockówLEGO","AnalitycznaSpektroskopiaMas"];

function createNickname() 
{
    document.getElementById("nickname").textContent = firstCreate() + secondCreate() + thirdCreate();
}
button.addEventListener("click", createNickname);

function firstCreate() 
{
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

function secondCreate()
{ 
    if (!checkbox2.checked)
        return Math.floor(Math.random() * 19) + 4; //Losowanie liczb od 5 do 19
    else 
        return Math.floor(Math.random() * 10) + 10; //Losowanie liczb TYLKO Dwucyfrowych
}

function thirdCreate()
{
    if (checkbox1.checked == true) 
        return "PL";
    else
        return "";
}

////DARK MODE////
const darkmode = document.getElementById("darkmode"); let isDarkMode = false;
darkmode.onclick = function () 
{
    if (isDarkMode == false) {
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "#ccc";
        document.getElementById("dodatki").style.backgroundColor = "#333";
        document.getElementById("box").style.borderBottomColor = "#eee";
        button.classList.add("dark-button");
        modButton.style.filter = 'invert(95%)';
        copyButton.style.filter = 'invert(95%)';

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
        copyButton.style.filter = '';


        darkmode.style.backgroundColor = "";
        darkmode.style.color = "";
        darkmode.textContent = "Dark";

        isDarkMode = false;
    }
}

function copyToClipboard(text) {
    let textToCopy = text;

    let copyText = document.createElement("textarea");
    document.body.appendChild(copyText);
    copyText.value = textToCopy;
    copyText.select();
    document.execCommand("copy");
    document.body.removeChild(copyText);

    let info = document.createElement("div");
    info.textContent = "Skopiowano!";
    info.classList.add("info");
    document.body.appendChild(info);

    setTimeout(() => {
        document.body.removeChild(info);
    },1250);
}

copyButton.onclick = () => {
    copyToClipboard(document.getElementById("nickname").textContent);
}