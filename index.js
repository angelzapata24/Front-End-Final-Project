var PAGE_DATA = {
    shoes: [
        {
            name: "Jordan 4 'Toro's",
            Price: 210,
            size: '8.5',
            quantity: 1,
            img: '../../../../../Downloads/toro.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Jordan 11 'Gamma Blue'",
            Price: 210,
            size: '9',
            quantity: 2,
            img: '../../../../../Downloads/gamma.png',
            seller: "AZ's Sneakers"
        },
        {
            name: "Jordan 13 'Playoff'",
            Price: 190,
            size: '8',
            quantity: 3,
            img: '../../../../../Downloads/playoff.png',
            seller: "AZ's Sneakers"
        },
        {
            name: "Nmd X Pharell  'Human Race'",
            Price: 300,
            size: '11',
            quantity: 1,
            img: '../../../../../Downloads/humanrace.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Jordan 9 'Barons'",
            Price: 205,
            size: '9.5',
            quantity: 4,
            img: '../../../../../Downloads/barons.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Adidas Yeezy 'Boost 350 v2 Beluga 2.0'",
            Price: 200,
            size: '9',
            quantity: 2,
            img: '../../../../../Downloads/yezzy.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Nmd 'Triple White Japan'",
            Price: 170,
            size: '11',
            quantity: 6,
            img: '../../../../../Downloads/japan_nmd.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Jordan 11 'Win Like 82'",
            Price: 225,
            size: '9.5',
            quantity: 8,
            img: '../../../../../Downloads/winlike82.jpg',
            seller: "AZ's Sneakers"
        },
        {
            name: "Jordan 1 'Bred'",
            Price: 170,
            size: '10',
            quantity: 3,
            img: '../../../../../Downloads/bred.jpg',
            seller: "AZ's Sneakers"
        }
    ]
};

function constructSell(item) {
    return {
        name: $('#product').val(),
        Price: $('#Price').val(),
        size: $('#size').val(),
        quantity: $('#quantity').val(),
        img: $('#img').val(),
        seller: $('#fullName').val()
    };
}

function shoes(inventory) {
    var html = '<h4>';
    html +=
        '<div class="col-lg-4 col-md-4 col-sm-4 shoes">' +
        '<center>' +
        '<img src="' +
        inventory.img +
        '">' +
        '<h4> <b>Shoe Name:</b> ' +
        inventory.name +
        '</h4>' +
        '<h4> <b>Price:</b> $' +
        inventory.Price +
        '</h4>' +
        '<h4> <b>Shoe Size:</b> ' +
        inventory.size +
        '</h4>' +
        '<h4> <b>Quantity:</b> ' +
        inventory.quantity +
        '</h4>' +
        '<h4> <b> Seller:</b>' +
        inventory.seller +
        '</h4>' +
        '<a class="getstarted-button">Add to Cart!</a>' +
        '</center';
    ('</div>');
    return html;
}

function showshoes() {
    var inventory = PAGE_DATA.shoes;
    var html = inventory.map(function(inventory) {
        return shoes(inventory);
    });
    $('#shoes').html(html);
}

$('#addit').click(function() {
    var productId = $('#productId').val();
    var productName = $('#productName').val();
    var productQuantity = $('#productQuantity').val();
    var data = {
        product_id: inventory.name,
        product_name: inventory.Price,
        quantity: inventory.quantity
    };

    $.post('/cart/add', data, showDone);
});

var showDone = function() {
    console.log('hi');
};

function main() {
    showshoes();
    $('#sell-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#fullName');
        console.log(name);
        PAGE_DATA.shoes.splice(0, 0, constructSell(name));
        $('fullName').val('');
        showshoes();
    });
}

$(main);
