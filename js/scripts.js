function sprawdzPole(pole_id,obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true);
}

function sprawdz_przyciski_wyboru(nazwa_grupy_przycisków){
    var obiekt=document.getElementsByName(nazwa_grupy_przycisków);
    for (i=0;i<obiekt.length;i++){   
        wybrany=obiekt[i].checked;
        if (wybrany) return true; 
    }
    return false;
}

function sprawdz(){
    var dane_poprawne = true;
    regImie = /^[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20}(\s[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20})*$/;
    regNazwisko = /^[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20}(-[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20})*$/;
    regEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    regTelefon = /[0-9]{9}/;
    
    if(!sprawdzPole("imie",regImie)){ 
        dane_poprawne=false;
        document.getElementById("imie_error").innerHTML=
        "Imię zostało wprowadzone niepoprawnie! Powinno rozpoczynać się wielką literą, w przypadku dwóch imion rozdzielić je spacją.";
    }else{
        document.getElementById("imie_error").innerHTML="";
    }
    
    if(!sprawdzPole("nazwisko",regNazwisko)){ 
        dane_poprawne=false;
        document.getElementById("nazwisko_error").innerHTML=
        "Nazwisko zostało wprowadzone niepoprawnie! Powinno rozpoczynać się wielką literą, w przypadku dwóch nazwisk rozdzielić je myślnikiem.";
    }else{
        document.getElementById("nazwisko_error").innerHTML="";
    }
    
    if(!sprawdzPole("email",regEmail)){ 
        dane_poprawne=false;
        document.getElementById("email_error").innerHTML=
        "Email został wprowadzony niepoprawnie! Przykład poprawnego adresu email: xxx@yyy.zzz";
    }else{
        document.getElementById("email_error").innerHTML="";
    }
    
    if(!sprawdzPole("numertel",regTelefon)){ 
        dane_poprawne=false;
        document.getElementById("numertel_error").innerHTML=
        "Numer telefonu został wprowadzony niepoprawnie! Numer musi składać się z 9 cyfr zapisanych bez odstępu.";
    }else{
        document.getElementById("numertel_error").innerHTML="";
    }
    
    var data = document.getElementById('data').value;
    if(data===""){
        dane_poprawne=false;
        document.getElementById("data_error").innerHTML=
        "Nie wybrano daty!"; 
    }else{
        document.getElementById("data_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("ocena")){ 
        dane_poprawne=false;
        document.getElementById("ocena_error").innerHTML=
        "Wybierz swoją ocene!";
    }else{
        document.getElementById("ocena_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("pozytywnie")){ 
        dane_poprawne=false;
        document.getElementById("pozytywne_error").innerHTML=
        "Wybierz co oceniasz pozytywnie!";
    }else{
        document.getElementById("pozytywne_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("negatywnie")){ 
        dane_poprawne=false;
        document.getElementById("negatywne_error").innerHTML=
        "Wybierz co oceniasz negatywnie!";
    }else{
        document.getElementById("negatywne_error").innerHTML="";
    }
    
    var komentarz = document.getElementById('komentarz').value;
    if(komentarz===""){
        dane_poprawne=false;
        document.getElementById("komentarz_error").innerHTML=
        "Napisz komentarz!"; 
    }else{
        document.getElementById("komentarz_error").innerHTML="";
    }
    
    if(dane_poprawne){
        var dane="Czy napewno chcesz dodać opinię:\n";
        dane+="Imię i nazwisko: "+document.getElementById('imie').value+" "+document.getElementById('nazwisko').value+"\n";
        dane+="Email: "+document.getElementById('email').value+"\n";
        dane+="Numer telefonu: "+document.getElementById('numertel').value+"\n";
        dane+="Data: "+document.getElementById('data').value+"\n";
        dane+="Miasto: "+document.getElementById('miasto').value+"\n";
        
        var tabOcena=document.getElementsByName('ocena');
        var ocena="";
        for(let i=0;i<tabOcena.length;i++){
            if(tabOcena[i].checked){ocena+=tabOcena[i].value; break;}
        }
        dane+="Twoja ocena: "+ocena+"\n";
        
        var tabPozytywnie=document.getElementsByName('pozytywnie');
        var pozytywnie="";
        for(let i=0;i<tabPozytywnie.length;i++){
            if(tabPozytywnie[i].checked){pozytywnie+=tabPozytywnie[i].value+" ";}
        }
        dane+="Pozytywnie oceniasz: "+pozytywnie+"\n";
        
        var tabNegatywnie=document.getElementsByName('negatywnie');
        var negatywnie="";
        for(let i=0;i<tabNegatywnie.length;i++){
            if(tabNegatywnie[i].checked){negatywnie+=tabNegatywnie[i].value+" ";}
        }
        dane+="Negatywnie oceniasz: "+negatywnie+"\n";
        
        dane+="Twój komentarz: "+document.getElementById('komentarz').value+"\n";
        
        if (window.confirm(dane)){
            alert("Pomyślnie dodano opinie.");
            return true;
        }else return false;
    }else{
        alert("Wprowadzono niepoprawne dane!");
        return false;
    }
}

function dodaj(){
    if(sprawdz()){
        var opinia = {};
        opinia.imie = document.getElementById('imie').value;
        opinia.nazwisko = document.getElementById('nazwisko').value;
        opinia.email = document.getElementById('email').value;
        opinia.numertel = document.getElementById('numertel').value;
        opinia.data = document.getElementById('data').value;
        opinia.miasto = document.getElementById('miasto').value;
        opinia.komentarz = document.getElementById('komentarz').value;
        
        var tabOcena=document.getElementsByName('ocena');
        var ocena="";
        for(let i=0;i<tabOcena.length;i++){
            if(tabOcena[i].checked){ocena+=tabOcena[i].value; break;}
        }
        opinia.ocena = ocena;
        
        var tabPozytywnie=document.getElementsByName('pozytywnie');
        var pozytywnie="";
        for(let i=0;i<tabPozytywnie.length;i++){
            if(tabPozytywnie[i].checked){pozytywnie+=tabPozytywnie[i].value+" ";}
        }
        opinia.pozytywnie = pozytywnie;
        
        var tabNegatywnie=document.getElementsByName('negatywnie');
        var negatywnie="";
        for(let i=0;i<tabNegatywnie.length;i++){
            if(tabNegatywnie[i].checked){negatywnie+=tabNegatywnie[i].value+" ";}
        }
        opinia.negatywnie = negatywnie;
        
        //odczyt listy obiektow z localstorage (jesli istnieja)
        var lista = JSON.parse(localStorage.getItem('lista'));
        if (lista===null) lista=[]; //jesli lista jest pusta tworzymy tablice obiektow
        //dodanie przedmiotu do listy
        lista.push(opinia);
        //zapisanie nowej listy
        localStorage.setItem('lista', JSON.stringify(lista));
    }else return false;
}

function pokazOpinie(){
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('miejsceNaOpinie');
    var str="<div class='text-center'><br/><p class='text-center'>Wybierz miasto, dla którego chcesz znaleźć opinie:</p>";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='krakow' value='Kraków' />Kraków</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='wroclaw' value='Wrocław' />Wrocław</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='torun' value='Toruń' />Toruń</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='lublin' value='Lublin' />Lublin</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='gdansk' value='Gdańsk' />Gdańsk</p><br/>";
    str+="<button class='btn btn-primary' onclick='wyszukaj()' >Wyszukaj </button>  ";
    str+="<button class='btn btn-primary' onclick='pokazOpinie()' >Wyświetl wszystkie </button></div><br />";
    str+="<div id='edycjaOpinii'></div>";
    str+="<h2>Twoje opinie:</h2>";
    if (lista===null) el.innerHTML=str+"<p>Nie dodaleś jeszcze żadnych opinii!</p>";
    else {
        for(i=0;i<lista.length;i++){
            str+="<button class='btn btn-danger' onclick='usunOpinie("+i+")' >Usuń </button>  ";
            str+="<button class='btn btn-success' onclick='edytujOpinie("+i+")' >Edytuj </button>";
            str+=" "+lista[i].imie+" "+lista[i].nazwisko+", email: "+lista[i].email+", numer tel.: "+lista[i].numertel+", data wizyty w mieście: "+lista[i].data;
            str+=", odwiedzone miasto: "+lista[i].miasto+", ocena: "+lista[i].ocena+"<br />";
            str+="Pozytywnie ocenione: "+lista[i].pozytywnie+"<br /> Negatywnie ocenione: "+lista[i].negatywnie+"<br />";
            str+="Komentarz: "+lista[i].komentarz+"<br /><br />";
        }
        str+="<div class='text-center'><button class='btn btn-outline-dark' onclick='usunWszystkie()' >Usuń wszystkie opinie</button> ";
        str+="<button class='btn btn-outline-dark' onclick='ukryj()' >Ukryj opinie</button></div>";
        el.innerHTML=str;
    }
}

function edytujOpinie(i){
    var el=document.getElementById('edycjaOpinii');
    var str= "<div class='text-center'><h2>Wprowadz nowe dane dla opinii:</h2></div>";
        str+= "<div class='row gx-5 justify-content-center'>";
        str += "<div class='col-lg-8 col-xl-6'>";
        str += "<div class='form-floating mb-3'>";
        str += "<input class='form-control' id='imieed' type='text' />";
        str += "<label for='imieed'>Imię</label>";
        str += "<p id='imieed_error' style='color:red'></p></div>";
        str += "<div class='form-floating mb-3'><input class='form-control' id='nazwiskoed' type='text' />";
        str += "<label for='nazwiskoed'>Nazwisko</label><p id='nazwiskoed_error' style='color:red'></p></div>";                            
        str += "<div class='form-floating mb-3'><input class='form-control' id='emailed' type='email' /><label for='emailed'>Email</label><p id='emailed_error' style='color:red'></p></div>";                            
        str += "<div class='form-floating mb-3'><input class='form-control' id='numerteled' type='tel' /><label for='numerteled'>Numer telefonu</label><p id='numerteled_error' style='color:red'></p></div>";
        str += "<div class='form-floating mb-3'><input class='form-control' id='dataed' type='month' /><label for='dataed'>Data</label><p id='dataed_error' style='color:red'></p></div>";       
        str += "<div class='text-center'><br/><label for='miastoed'>Wybierz miasto, które odwiedziłeś:</label><select size='1' name='miastoed' id='miastoed'><option value='Kraków' selected>Kraków</option><option value='Wrocław'>Wrocław</option><option value='Toruń'>Toruń</option><option value='Lublin'>Lublin</option><option value='Gdańsk'>Gdańsk</option></select></div>";                                  
        str += "<div class='text-center'><br/><p class='text-center'>Jak oceniasz swój pobyt w tym mieście:</p><p class='btn btn-outline-primary'> <input type='radio' name='ocenaed' id='zero' value='0' />0</p><p class='btn btn-outline-primary'><input type='radio' name='ocenaed' id='jeden' value='1' />1</p><p class='btn btn-outline-primary'><input type='radio' name='ocenaed' id='dwa' value='2' />2</p><p class='btn btn-outline-primary'><input type='radio' name='ocenaed' id='trzy' value='3' />3</p><p class='btn btn-outline-primary'><input type='radio' name='ocenaed' id='cztery' value='4' />4</p><p class='btn btn-outline-primary'><input type='radio' name='ocenaed' id='pięć' value='5' />5</p><p id='ocenaed_error' style='color:red'></p></div>";   
        str += "<div class='text-center'><br/><p class='text-center'>Co oceniasz pozytywnie:</p><p class='btn btn-outline-primary'><input name='pozytywnieed' type='checkbox' value='Nic' /> Nic </p><p class='btn btn-outline-primary'><input name='pozytywnieed' type='checkbox' value='Zabytki' /> Zabytki</p><p class='btn btn-outline-primary'><input name='pozytywnieed' type='checkbox' value='Zieleń' /> Zieleń</p><p class='btn btn-outline-primary'><input name='pozytywnieed' type='checkbox' value='Ceny' /> Ceny</p><p class='btn btn-outline-primary'><input name='pozytywnieed' type='checkbox' value='Czystość' /> Czystość</p><p id='pozytywneed_error' style='color:red'></p></div>";     
        str += "<div class='text-center'><br/><p class='text-center'>Co oceniasz negatywnie:</p><p class='btn btn-outline-primary'><input name='negatywnieed' type='checkbox' value='Nic' /> Nic </p><p class='btn btn-outline-primary'><input name='negatywnieed' type='checkbox' value='Zabytki' /> Zabytki</p><p class='btn btn-outline-primary'><input name='negatywnieed' type='checkbox' value='Zieleń' /> Zieleń</p><p class='btn btn-outline-primary'><input name='negatywnieed' type='checkbox' value='Ceny' /> Ceny</p><p class='btn btn-outline-primary'><input name='negatywnieed' type='checkbox' value='Czystość' /> Czystość</p> <p id='negatywneed_error' style='color:red'></p></div>";    
        str += "<div class='text-center'><br /><label for='komentarzed'>Komentarz:</label><textarea class='form-control' id='komentarzed' rows='3'></textarea><p id='komentarzed_error' style='color:red'></p></div>";                             
        str += "<div class='text-center'> <br /><button class='btn btn-success' onclick='edytujDane("+i+")' >Edytuj </button> <button class='btn btn-danger' onclick='ukryjEdycje()' >Anuluj </button>";
    el.innerHTML=str;
}

function ukryjEdycje(){
    var el=document.getElementById('edycjaOpinii');
    el.innerHTML="";
}

function usunOpinie(i){ 
    var lista = JSON.parse(localStorage.getItem('lista'));
    //usuń i-ty element z listy zadań:
    if (confirm("Usunąć opinie?")) lista.splice(i,1);
    //zapisz zaktualizowaną listę w localStorage:
    localStorage.setItem('lista', JSON.stringify(lista)); //zapisz listę
    pokazOpinie(); //zaktualizuj widok na stronie
}

function usunWszystkie(){
    localStorage.removeItem('lista');
    pokazOpinie();
}

function ukryj(){
    var el=document.getElementById('miejsceNaOpinie');
    el.innerHTML="";
}

function wyszukaj(){
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el=document.getElementById('miejsceNaOpinie');
    var str="<div class='text-center'><br/><p class='text-center'>Wybierz miasto, dla którego chcesz znaleźć opinię:</p>";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='krakow' value='Kraków' />Kraków</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='wroclaw' value='Wrocław' />Wrocław</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='torun' value='Toruń' />Toruń</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='lublin' value='Lublin' />Lublin</p> ";
    str+="<p class='btn btn-outline-primary'><input type='radio' name='wybor' id='gdansk' value='Gdańsk' />Gdańsk</p><br/>";
    str+="<button class='btn btn-primary' onclick='wyszukaj()' >Wyszukaj </button>  "; 
    str+="<button class='btn btn-primary' onclick='pokazOpinie()' >Wyświetl wszystkie </button></div><br />";
    str+="<div id='edycjaOpinii'></div>";
    str+="<h2>Twoje opinie:</h2>";
    
    if (!sprawdz_przyciski_wyboru("wybor")){ 
        alert("Nie wybrano miasta!");       
    }else{
        var tabWybor=document.getElementsByName('wybor');
        var wybor="";
        var ok = false;
        for(let i=0;i<tabWybor.length;i++){
            if(tabWybor[i].checked){wybor+=tabWybor[i].value; break;}
        }
        for(i=0;i<lista.length;i++){
            if(wybor === lista[i].miasto){
                str+="<button class='btn btn-danger' onclick='usunOpinie("+i+")' >Usuń </button>  ";
                str+="<button class='btn btn-success' onclick='edytujOpinie("+i+")' >Edytuj </button>";
                str+=" "+lista[i].imie+" "+lista[i].nazwisko+", email: "+lista[i].email+", numer tel.: "+lista[i].numertel+", data wizyty w mieście: "+lista[i].data;
                str+=", odwiedzone miasto: "+lista[i].miasto+", ocena: "+lista[i].ocena+"<br />";
                str+="Pozytywnie ocenione: "+lista[i].pozytywnie+"<br /> Negatywnie ocenione: "+lista[i].negatywnie+"<br />";
                str+="Komentarz: "+lista[i].komentarz+"<br /><br />";  
                ok = true;
            }
        }
        if(ok === false){
            str+="<p>Nie znaleziono opinii o danym mieście.</p >";
            str+="<div class='text-center'><button class='btn btn-outline-dark' onclick='usunWszystkie()' >Usuń wszystkie opinie</button> ";
            str+="<button class='btn btn-outline-dark' onclick='ukryj()' >Ukryj opinie</button></div>";
            el.innerHTML=str;  
        }else{
            str+="<div class='text-center'><button class='btn btn-outline-dark' onclick='usunWszystkie()' >Usuń wszystkie opinie</button> ";
            str+="<button class='btn btn-outline-dark' onclick='ukryj()' >Ukryj opinie</button></div>";
            el.innerHTML=str;
        }
    }
} 

function sprawdzEdycje(){
    var dane_poprawne = true;
    regImie = /^[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20}(\s[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20})*$/;
    regNazwisko = /^[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20}(-[A-ZŁŚŻŃ][a-ząęćśżźó]{1,20})*$/;
    regEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    regTelefon = /[0-9]{9}/;
    
    if(!sprawdzPole("imieed",regImie)){ 
        dane_poprawne=false;
        document.getElementById("imieed_error").innerHTML=
        "Imię zostało wprowadzone niepoprawnie! Powinno rozpoczynać się wielką literą, w przypadku dwóch imion rozdzielić je spacją.";
    }else{
        document.getElementById("imieed_error").innerHTML="";
    }
    
    if(!sprawdzPole("nazwiskoed",regNazwisko)){ 
        dane_poprawne=false;
        document.getElementById("nazwiskoed_error").innerHTML=
        "Nazwisko zostało wprowadzone niepoprawnie! Powinno rozpoczynać się wielką literą, w przypadku dwóch nazwisk rozdzielić je myślnikiem.";
    }else{
        document.getElementById("nazwiskoed_error").innerHTML="";
    }
    
    if(!sprawdzPole("emailed",regEmail)){ 
        dane_poprawne=false;
        document.getElementById("emailed_error").innerHTML=
        "Email został wprowadzony niepoprawnie! Przykład poprawnego adresu email: xxx@yyy.zzz";
    }else{
        document.getElementById("emailed_error").innerHTML="";
    }
    
    if(!sprawdzPole("numerteled",regTelefon)){ 
        dane_poprawne=false;
        document.getElementById("numerteled_error").innerHTML=
        "Numer telefonu został wprowadzony niepoprawnie! Numer musi składać się z 9 cyfr zapisanych bez odstępu.";
    }else{
        document.getElementById("numerteled_error").innerHTML="";
    }
    
    var data = document.getElementById('dataed').value;
    if(data===""){
        dane_poprawne=false;
        document.getElementById("dataed_error").innerHTML=
        "Nie wybrano daty!"; 
    }else{
        document.getElementById("dataed_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("ocenaed")){ 
        dane_poprawne=false;
        document.getElementById("ocenaed_error").innerHTML=
        "Wybierz swoją ocene!";
    }else{
        document.getElementById("ocenaed_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("pozytywnieed")){ 
        dane_poprawne=false;
        document.getElementById("pozytywneed_error").innerHTML=
        "Wybierz co oceniasz pozytywnie!";
    }else{
        document.getElementById("pozytywneed_error").innerHTML="";
    }
    
    if (!sprawdz_przyciski_wyboru("negatywnieed")){ 
        dane_poprawne=false;
        document.getElementById("negatywneed_error").innerHTML=
        "Wybierz co oceniasz negatywnie!";
    }else{
        document.getElementById("negatywneed_error").innerHTML="";
    }
    
    var komentarz = document.getElementById('komentarzed').value;
    if(komentarz===""){
        dane_poprawne=false;
        document.getElementById("komentarzed_error").innerHTML=
        "Napisz komentarz!"; 
    }else{
        document.getElementById("komentarzed_error").innerHTML="";
    }
    
    if(dane_poprawne){
        var dane="Czy napewno chcesz edytować opinię? Nowe dane:\n";
        dane+="Imię i nazwisko: "+document.getElementById('imieed').value+" "+document.getElementById('nazwiskoed').value+"\n";
        dane+="Email: "+document.getElementById('emailed').value+"\n";
        dane+="Numer telefonu: "+document.getElementById('numerteled').value+"\n";
        dane+="Data: "+document.getElementById('dataed').value+"\n";
        dane+="Miasto: "+document.getElementById('miastoed').value+"\n";
        
        var tabOcenaed=document.getElementsByName('ocenaed');
        var ocenaed="";
        for(let i=0;i<tabOcenaed.length;i++){
            if(tabOcenaed[i].checked){ocenaed+=tabOcenaed[i].value; break;}
        }
        dane+="Twoja ocena: "+ocenaed+"\n";
        
        var tabPozytywnieed=document.getElementsByName('pozytywnieed');
        var pozytywnieed="";
        for(let i=0;i<tabPozytywnieed.length;i++){
            if(tabPozytywnieed[i].checked){pozytywnieed+=tabPozytywnieed[i].value+" ";}
        }
        dane+="Pozytywnie oceniasz: "+pozytywnieed+"\n";
        
        var tabNegatywnieed=document.getElementsByName('negatywnieed');
        var negatywnieed="";
        for(let i=0;i<tabNegatywnieed.length;i++){
            if(tabNegatywnieed[i].checked){negatywnieed+=tabNegatywnieed[i].value+" ";}
        }
        dane+="Negatywnie oceniasz: "+negatywnieed+"\n";
        
        dane+="Twój komentarz: "+document.getElementById('komentarzed').value+"\n";
        
        if (window.confirm(dane)){
            alert("Pomyślnie edytowano opinie.");
            return true;
        }
        else return false;
    }else{
        alert("Wprowadzono niepoprawne dane!");
        return false;
    }
}

function edytujDane(i){
    if(sprawdzEdycje()){
        var lista = JSON.parse(localStorage.getItem('lista'));
        var imie = document.getElementById('imieed').value;
        var nazwisko = document.getElementById('nazwiskoed').value;
        var email = document.getElementById('emailed').value;
        var numertel = document.getElementById('numerteled').value;
        var data = document.getElementById('dataed').value;
        var miasto = document.getElementById('miastoed').value;
        var komentarz = document.getElementById('komentarzed').value;
        
        var tabOcena=document.getElementsByName('ocenaed');
        var ocena="";
        for(let i=0;i<tabOcena.length;i++){
            if(tabOcena[i].checked){ocena+=tabOcena[i].value; break;}
        }

        
        var tabPozytywnie=document.getElementsByName('pozytywnieed');
        var pozytywnie="";
        for(let i=0;i<tabPozytywnie.length;i++){
            if(tabPozytywnie[i].checked){pozytywnie+=tabPozytywnie[i].value+" ";}
        }

        
        var tabNegatywnie=document.getElementsByName('negatywnieed');
        var negatywnie="";
        for(let i=0;i<tabNegatywnie.length;i++){
            if(tabNegatywnie[i].checked){negatywnie+=tabNegatywnie[i].value+" ";}
        }
        lista[i].imie=imie;
        lista[i].nazwisko=nazwisko;
        lista[i].email=email;
        lista[i].numertel=numertel;
        lista[i].data=data;
        lista[i].miasto=miasto;
        lista[i].ocena=ocena;
        lista[i].komentarz=komentarz;
        lista[i].pozytywnie=pozytywnie;
        lista[i].negatywnie=negatywnie;
        localStorage.setItem('lista', JSON.stringify(lista));
        pokazOpinie();
    }else return false;
}