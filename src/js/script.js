$(document).ready(function(){
    $('[data-add-to-cart]').click(function(e){
        alert('أضف الى عربة الشراء')
        e.stopPropagation();
    });
});