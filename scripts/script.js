new WOW({
    animateClass: 'animate__animated'
}).init();

$('.parallax-window').parallax({imageSrc: 'images/pizza_walp.jpg'});

$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.product-image').magnificPopup({
    type: 'image',
});

$('h1').html("Самая крутая пицца ждет <span>только в нашем ресторане</span>")

$('#products-title').css('color', '#000')

let productInput = $('#product-input')


productInput.attr('placeholder', 'Имя')

$('.rights span').text((new Date()).getFullYear())

let products = $('.product')

$('#choose-pizza').click(function () {
    $('.products')[0].scrollIntoView({behavior: "smooth"})
})

$('.btn-add-to-cart').click((e) => {
    productInput.val($(e.target).parents('.product').find('.product-title').text())
    $('order')[0].scrollIntoView({behavior: "smooth"})
})

let phoneInput = $('#phone-input')
phoneInput.inputmask({"mask": "(999) 999-9999"});

$('#creat-order').click(function () {
    let addressInput = $('#adres-input')
    if (!productInput.val()) {
        alert('Выберете пиццу')
        return
    }
    if (!addressInput.val()) {
        alert('Укажите адрес')
        return
    }
    if (!phoneInput.val()) {
        alert('Заполните номер')
        return
    }

    alert('Спасибо за заказ')
})