// Mobile menu
$('#mobile-btn').click(function(){
    $('#mobile-menu').toggleClass('active');
});
$("#mobile-menu a").click(function(){
    $("#mobile-menu").remove('active');
});

// Mobile menu end

// Modals
let openModalBtn = document.getElementById('btn-modal');
let modalContent = document.getElementById('modal-content');
let closeModalBtn = document.getElementById('modal-close-btn');

openModalBtn.onclick = (function(){
    modalContent.style.display = "block";
});
closeModalBtn.onclick = (function(){
    modalContent.style.display = "none";
});
window.onclick = function(event){
    if(event.target == modalContent){
        modalContent.style.display = "none";
    }
};
// Modals end



// // Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(){
    showSlides(slideIndex += 1);
};
function minusSlide(){
    showSlides(slideIndex -= 1);
};

function currentSlide(n){
    showSlides(slideIndex = n);
};

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }   
slides[slideIndex - 1].style.display = "block";
};
// // Slider end


