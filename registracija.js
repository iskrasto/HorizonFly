//BURGER MENI

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

$(document).ready(function() {
    $(".forma").submit(function(event) {
        event.preventDefault(); // spre;i slanje forme

        var ime = $("#ime").val();
        var prezime = $("#prezime").val();
        var email = $("#email").val();
        var sifra = $("#sifra").val();
        var potvrdaSifre = $("#potvrda_sifre").val();

        // provera dužine imena
        if (ime.length > 20 || ime.length <= 3){
        alert("Prezime mora imati između 3 i 20 karaktera!");
        $("#ime").addClass("neispravno");
        return;
            }

        // provera karaktera imena
           else if (!/^[a-zA-Z]+$/.test(ime)){
            alert("Ovi karakteri nisu podržani!");
             $("#ime").addClass("neispravno");
            return;
            }

        // provera dužine prezimena
            else if (prezime.length > 20 || prezime.length <= 3){
            alert("Prezime mora imati između 3 i 20 karaktera!");
            $("#prezime").addClass("neispravno");
            return;
            }

        // provera karaktera prezimena
            if (!/^[a-zA-Z]+$/.test(ime)){
            alert("Ovi karakteri nisu podržani!");
            $("#prezime").addClass("neispravno");
            return
            }

        //provera je l šifra prazna
            else if ( sifra === ''){
            alert("Šifra ne sme biti prazna!");
            $("#sifra").addClass("neispravno");
            return;
            }

        //provera dužine šifre
             else if ( sifra.length < 6 || sifra.length > 20){
            alert("Šiframora biti između 6 i 20 karaktera!");
            $("#sifra").addClass("neispravno");
            return;
            }

        // provera ispravnosti email-a
        var validacijaEmaila = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validacijaEmaila.test(email)) {
            alert("Molimo unesite valjanu e-mail adresu!");
            $("#email").addClass("neispravno");
            return;
        }

        // provera podudaranja šifri
        if (sifra !== potvrdaSifre) {
            alert("Unesene šifre se ne podudaraju!");
            $("#sifra").addClass("neispravno");
            $("#potvrda_sifre").addClass("neispravno");
            return;
        }

        // Prikaz prikupljenih podataka u pop-up box-u 
        var podaci = "Ime: " + ime + "\nPrezime: " + prezime + "\nEmail: " + email;
        alert("Podaci iz forme:\n" + podaci);
    });
});

