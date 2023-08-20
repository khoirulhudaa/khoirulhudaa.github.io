// Get the modal element
let modal = document.getElementById('myModal');
let modalSumatera = document.getElementById('mySumatera');
let modalJawa = document.getElementById('myJawa');
let modalKalimantan = document.getElementById('myKalimantan');
let modalSulawesi = document.getElementById('mySulawesi');
let modalPapua = document.getElementById('myPapua');

// Get the button that opens the modal
let openModalBtn = document.getElementById('openModalBtn');
let openModalBtnSumatera = document.getElementById('openModalBtnSumatera');
let openModalBtnJawa = document.getElementById('openModalBtnJawa');
let openModalBtnKalimantan = document.getElementById('openModalBtnKalimantan');
let openModalBtnSulawesi = document.getElementById('openModalBtnSulawesi');
let openModalBtnPapua = document.getElementById('openModalBtnPapua');

// Get the <span> element that closes the modal
let closeModalBtn = document.getElementById('closeModalBtn');
let closeModalBtnSumatera = document.getElementById('closeModalBtnSumatera');
let closeModalBtnJawa = document.getElementById('closeModalBtnJawa');
let closeModalBtnKalimantan = document.getElementById('closeModalBtnKalimantan');
let closeModalBtnSulawesi = document.getElementById('closeModalBtnSulawesi');
let closeModalBtnPapua = document.getElementById('closeModalBtnPapua');

// When the user clicks the button, open the modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modal.style.opacity = '0';
    setTimeout(function() {
        modal.style.opacity = '1';
    }, 100);
});
openModalBtnSumatera.addEventListener('click', function() {
    modalSumatera.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modalSumatera.style.opacity = '0';
    setTimeout(function() {
        modalSumatera.style.opacity = '1';
    }, 100);
});
openModalBtnJawa.addEventListener('click', function() {
    modalJawa.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modalJawa.style.opacity = '0';
    setTimeout(function() {
        modalJawa.style.opacity = '1';
    }, 100);
});
openModalBtnKalimantan.addEventListener('click', function() {
    modalKalimantan.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modalKalimantan.style.opacity = '0';
    setTimeout(function() {
        modalKalimantan.style.opacity = '1';
    }, 100);
});
openModalBtnSulawesi.addEventListener('click', function() {
    modalSulawesi.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modalSulawesi.style.opacity = '0';
    setTimeout(function() {
        modalSulawesi.style.opacity = '1';
    }, 100);
});
openModalBtnPapua.addEventListener('click', function() {
    modalPapua.style.display = 'block';
    // Add smooth animation here (e.g., fadeIn effect)
    modalPapua.style.opacity = '0';
    setTimeout(function() {
        modalPapua.style.opacity = '1';
    }, 100);
});

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modal.style.opacity = '0';
    setTimeout(function() {
        modal.style.display = 'none';
        modal.style.opacity = '1';
    }, 300);
});
closeModalBtnSumatera.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modalSumatera.style.opacity = '0';
    setTimeout(function() {
        modalSumatera.style.display = 'none';
        modalSumatera.style.opacity = '1';
    }, 300);
});
closeModalBtnJawa.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modalJawa.style.opacity = '0';
    setTimeout(function() {
        modalJawa.style.display = 'none';
        modalJawa.style.opacity = '1';
    }, 300);
});
closeModalBtnKalimantan.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modalKalimantan.style.opacity = '0';
    setTimeout(function() {
        modalKalimantan.style.display = 'none';
        modalKalimantan.style.opacity = '1';
    }, 300);
});
closeModalBtnSulawesi.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modalSulawesi.style.opacity = '0';
    setTimeout(function() {
        modalSulawesi.style.display = 'none';
        modalSulawesi.style.opacity = '1';
    }, 300);
});
closeModalBtnPapua.addEventListener('click', function() {
    // Add smooth animation here (e.g., fadeOut effect)
    modalPapua.style.opacity = '0';
    setTimeout(function() {
        modalPapua.style.display = 'none';
        modalPapua.style.opacity = '1';
    }, 300);
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        // Add smooth animation here (e.g., fadeOut effect)
        modal.style.opacity = '0';
        modalSumatera.style.opacity = '0';
        modalJawa.style.opacity = '0';
        modalKalimantan.style.opacity = '0';
        modalSulawesi.style.opacity = '0';
        modalPapua.style.opacity = '0';
        setTimeout(function() {
            modal.style.display = 'none';
            modal.style.opacity = '1';
            modalSumatera.style.display = 'none';
            modalSumatera.style.opacity = '1';
            modalJawa.style.display = 'none';
            modalJawa.style.opacity = '1';
            modalKalimantan.style.display = 'none';
            modalKalimantan.style.opacity = '1';
            modalSulawesi.style.display = 'none';
            modalSulawesi.style.opacity = '1';
            modalPapua.style.display = 'none';
            modalPapua.style.opacity = '1';
        }, 300);
    }
});
