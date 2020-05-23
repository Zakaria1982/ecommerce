$(document).ready(function(){
     $('[data-add-to-cart]').click(function(e){
            alert('أضف الى عربة الشراء')
            e.stopPropagation();
        });

    $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });
    $('[data-product-quantity]').change(function(){
        var newQuantity=$(this).val();
        var $parent = $(this).parents('[data-product-info]');
        var pricePerUnit= $parent.attr('data-product-price');
        var totalPriceForProduct= newQuantity * pricePerUnit;
        $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');
        
        calculateTotalPrice();

    }); 

    function calculateTotalPrice(){
        let TotalPriceForAllProducts=0

        $('[data-product-info]').each(function(){
        TotalPriceForAllProducts += $(this).attr('data-product-price') * $(this).find('[data-product-quantity]').val()

    })
    
    $('#total-price-for-all-products').text(TotalPriceForAllProducts +'$')

    }    
    calculateTotalPrice();
                              
    $('[data-remove-from-cart]').click(function(){
         $(this).parents('[data-product-info]').remove();
         calculateTotalPrice();

    });    
}); 