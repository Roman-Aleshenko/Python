$(document).ready(function(){
    var form = $('#form_buying_product')
    var form_gribnoy_input = $('#form_buying_gribnoy')
    var form_borsh_input = $('#form_buying_borsh')
    var form_grecha_input = $('#form_buying_grecha')
    var form_kotleti_input = $('#form_buying_kotleti')
    var form_golupci_input = $('#form_buying_golupci')
    var form_coffee_input = $('#form_buying_coffee')
    var form_kompot_input = $('#form_buying_kompot')
    var form_chai_input = $('#form_buying_chai')


    function basketUpdating(product_id, nmb, is_delete){
        var data = {};
        data.product_id = product_id;
        data.number = nmb;
        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;

        if (is_delete){
            data["is_delete"] = true
        }
        var url = form.attr("action");
        console.log(data)
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log("OK");
                console.log(data.products_total_nmb);
                if(data.products_total_nmb || data.products_total_nmb == 0){
                    $('#basket_total_nmb').text('('+data.products_total_nmb+')');
                    console.log(data.products);
                    $('.basket-items div').html("");
                    $.each(data.products, function(k, v){
                        $('.basket-items div').append('<p>'+v.name+': ' + 'x'+ v.nmb  + ' по ' +v.price_per_item + ' ₽' +
                            '<a class="delete-item" href="" data-product_id="'+v.id+'"  style="text-decoration:none"> x</a>'+
                            '</p>');
                    });
                }
            },
            error: function(){
                console.log("error")
            }
        })
    }

    //форма для ввода горохового
    form.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number').val();
        var submit_btn = $('#submit_btn_gorohoviy');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)


    })

    //форма для ввода грибного
    form_gribnoy_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_gribnoy').val();
        var submit_btn = $('#submit_btn_gribnoy');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода борща
    form_borsh_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_borsh').val();
        var submit_btn = $('#submit_btn_borsh');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода гречки
    form_grecha_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_grecha').val();
        var submit_btn = $('#submit_btn_grecha');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода пюре с котлетами
    form_kotleti_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_kotleti').val();
        var submit_btn = $('#submit_btn_kotleti');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)

    })


    //форма для ввода голупцы
    form_golupci_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_golupci').val();
        var submit_btn = $('#submit_btn_golupci');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода кофе
    form_coffee_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_coffee').val();
        var submit_btn = $('#submit_btn_coffee');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода компот
    form_kompot_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_kompot').val();
        var submit_btn = $('#submit_btn_kompot');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //форма для ввода чай
    form_chai_input.on('submit', function(e){
        e.preventDefault();
        var nmb = $('#number_chai').val();
        var submit_btn = $('#submit_btn_chai');
        var product_id = submit_btn.data("product_id")
        var product_name = submit_btn.data("name")
        var product_price = submit_btn.data("price")
        console.log(nmb)
        console.log(product_id)
        console.log(product_name)
        console.log(product_price)

        basketUpdating(product_id, nmb, is_delete=false)
    })


    //Отображение контейнера корзины
    function showingBasket(){
        $('.basket-items').removeClass('d-none');
    }
    $('.basket-container').mouseover(function(){
        showingBasket();
    })
    $('.basket-container').mouseout(function(){
        $('.basket-items').addClass('d-none');
    });

    $(document).on('click', '.delete-item', function(e){
        e.preventDefault();
        product_id = $(this).data("product_id");
        nmb = 0;
        basketUpdating(product_id, nmb, is_delete=true)
    });

    function calculatingBasketAmount(){
        var total_order_amount = 0;
        $('.total-product-in-basket-amount').each(function(){
            total_order_amount = total_order_amount + parseFloat($(this).text());
        });
        $('#total_order_amount').text(total_order_amount.toFixed(2));
    };

    $(document).on('change', ".product-in-basket-nmb", function(){
        var current_nmb = $(this).val();
        var current_tr = $(this).closest('tr');
        var current_price = parseFloat(current_tr.find('.product-price').text()).toFixed(2);
        var total_amount = parseFloat(current_nmb*current_price).toFixed(2);
        current_tr.find('.total-product-in-basket-amount').text(total_amount);

        calculatingBasketAmount();
    });

    calculatingBasketAmount();
});