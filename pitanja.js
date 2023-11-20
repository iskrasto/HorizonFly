//BURGER MENI

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


console.log("Uspesno povezan JS");

$(".odgovor").hide();
$(".pitanje").on("click",function(){
    $(".odgovor").slideUp();
    $(this).next().slideToggle("fast");
});

$(".dugme").on("click", function() {
    $("#pitanjeKorisnika").val('');
    Swal.fire('Uspešno ste poslali pitanje!', 'Odgovor ćete uskoro dobiti na vašu email adresu.', 'success');
});
