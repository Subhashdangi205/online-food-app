const toggleBtn = document.querySelector('.toggle-menu button i');
const nevMenu = document.querySelector('.nav-menu ul');


toggleBtn.addEventListener('click', function(){
    nevMenu.classList.toggle('show');
});
// ............................................end of menu bar.......................................................

const darkModetoggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

darkModetoggle.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
    updateDarkmodeicon();

});

function updateDarkmodeicon(){
    const darkModeicon = darkModetoggle.querySelector('i')
    if (body.classList.contains('dark-mode')) {
        darkModeicon.classList.remove('fa-moon');
         darkModeicon.classList.add('fa-sun');
        
    } else {
        darkModeicon.classList.add('fa-moon');
        darkModeicon.classList.remove('fa-sun');
    }
}

//................................................end of dark mode .................................................. //
//................................................ add to cart.......................................................//
document.addEventListener('DOMContentLoaded',()=>{
    const carticons = document.querySelectorAll('.section-3 .slide .imges a');
    const cartcount = document.querySelector('.nav-icons  .sp');
    const totamount = document.querySelector('.nav-icons .total .total-amount');
    const orderbutton = document.querySelector('.nav-icons .order-btn');
    carticons.forEach(icon=>{
        icon.addEventListener('click',(event) =>{
            event.preventDefault();                                                            
            let count = parseInt(cartcount.textContent);
            count++;
            cartcount.textContent= count;
            const price =parseFloat(icon.closest('.imges').dataset.price);
            let total =parseFloat(totamount.textContent);
            total+=price
            totamount.textContent=total.toFixed(2);   
         });
    });

    orderbutton.addEventListener('click', () =>{
        cartcount.textContent='0';
        totamount.textContent='0.00';
        
        alert('Thank you for your order ! Have a good day ')
         });
});

// .............................................start rating system................................................//

document.addEventListener('DOMContentLoaded',function(){
    const stars= document.querySelectorAll('.rating i');
    const modal= document.getElementById('thankyoumodal');
    const messageElement= document.getElementById('thankyoumassage');
    const closemodal= document.querySelector('.close');

    stars.forEach(star =>{
        star.addEventListener('click',function(){
            const rating = this.getAttribute('data-rating');
            const parent = this.parentNode;
            parent.setAttribute('data-rating' , rating);
            updatestars(parent, rating);
            displayThankYou(rating);

    });
    
});
function updatestars(parent, rating){
    const stars = parent.querySelectorAll('i');
    stars.forEach(star =>{
        if (star.getAttribute('data-rating') <= rating) {
            star.classList.remove('fa-regular');
            star.classList.add('fa-solid');
        } else {
            star.classList.add('fa-regular');
            star.classList.remove('fa-solid');
            
        }
    });

}
function displaythankyou(rating){
    let message ='';
    switch (rating) {
        case '5':
            message = 'thanks for giving us a 5-star rating'
            break;
            case '4':
            message = 'thanks for giving us a 4-star rating'
            break;
            case '3': 
            message = 'thanks for giving us a 3-star rating'
            break;
            case '2':
            message = 'thanks for giving us a 2-star rating'
            break;
            case '1':
            message = 'thanks for giving us a 1-star rating'
            break;
    
        default: 
        message ='';
        
    }
    messageElement.textContent = message;
    modal.style.display = 'block';
}
closemodal.addEventListener('click', function(){
    modal.style.display = "none";
});
});
// ..................................................................correct code........................................................
