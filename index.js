var data = [
    {
        name: "Jordan 4 'Toro's",
        Price: 210,
        size: '8.5',
        quantity: 1,
        img: 'https://c1.staticflickr.com/4/3869/15099599532_58f9973803_b.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Jordan 11 'Gamma Blue'",
        Price: 210,
        size: '9',
        quantity: 2,
        img:
            'http://picture-cdn.wheretoget.it/3kj06b-l-610x610-shoes-jordan%20gamma%20blue%2011s-black-air%20jordans-jordans.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Jordan 13 'Playoff'",
        Price: 190,
        size: '8',
        quantity: 3,
        img:
            'https://i2.wp.com/kickssavage.com/wp-content/uploads/2017/04/jordan-13-playoff-2017-on-feet.jpg?fit=564%2C454',
        seller: "AZ's Sneakers"
    },
    {
        name: "Nmd X Pharell  'Human Race'",
        Price: 300,
        size: '11',
        quantity: 1,
        img:
            'https://cdn5.kicksonfire.com/wp-content/uploads/2016/07/PHARRELL-WILLIAMS-X-ADIDAS-NMD-3.jpg?x76107',
        seller: "AZ's Sneakers"
    },
    {
        name: "Jordan 9 'Barons'",
        Price: 205,
        size: '9.5',
        quantity: 4,
        img:
            'https://i.pinimg.com/736x/d8/e7/32/d8e732b7a19366b78489a44cda363f57--jordan-swag-jordan-.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Boost '350 v2 Beluga 2.0'",
        Price: 200,
        size: '9',
        quantity: 2,
        img:
            'https://ssli.ulximg.com/image/740x493/cover/1508946603_15b5dd32bf40ab4a93d8ba1d699b9f6c.jpg/5b75a38b9fb5b0397152c32ecc374430/1508946600_4777a9007701ad67052f745744c4808c.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Nmd 'Triple White Japan'",
        Price: 170,
        size: '11',
        quantity: 6,
        img:
            'https://www.43einhalb.com/files/image/id/123295/w/2000/h/1200/n/adidas-nmd_r1-pk-triple-white-japan-bz0221-mood-1.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Jordan 11 'Win Like 82'",
        Price: 225,
        size: '9.5',
        quantity: 8,
        img:
            'https://sneakernews.com/wp-content/uploads/2017/10/air-jordan-11-win-like-82.jpg',
        seller: "AZ's Sneakers"
    },
    {
        name: "Jordan 1 'Bred'",
        Price: 170,
        size: '10',
        quantity: 3,
        img:
            'http://www.modern-notoriety.com/wp-content/uploads/2016/07/air-jordan-1-bred_10.jpg',
        seller: "AZ's Sneakers"
    }
];

var cart = [];
function total(Cart) {
    var total = 0;
    Cart.map(function(checkout) {
        total += checkout.Price * 0.07 + checkout.Price;
    });
    return total;
}

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

function shoes(item, index) {
    var html = '<h4>';
    html +=
        '<div class="col-lg-4 col-md-4 col-sm-4 shoes">' +
        '<center>' +
        '<img src="' +
        item.img +
        '">' +
        '<h4> <b>Shoe Name:</b> ' +
        item.name +
        '</h4>' +
        '<h4> <b>Price:</b> $' +
        item.Price +
        '</h4>' +
        '<h4> <b>Shoe Size:</b> ' +
        item.size +
        '</h4>' +
        '<h4> <b>Quantity:</b> ' +
        item.quantity +
        '</h4>' +
        '<h4> <b> Seller:</b>' +
        item.seller +
        '</h4>' +
        cartbutton(item.quantity, index) +
        '</center>' +
        '</div>';
    return html;
}

function cartbutton(quantity, index) {
    if (quantity > 0) {
        return '<button class="buy" id="' + index + '">Add to Cart!</button>';
    } else {
        return (
            '<button class="buy" id="' +
            index +
            '" disabled = "disabled" ">SOLD OUT</button>'
        );
    }
}

function showshoes() {
    var inventory = data;
    var html = inventory.map(function(item, index) {
        return shoes(item, index);
    });
    $('#shoes').html(html);
}

function showcartview() {
    var inventory = cart;
    return inventory
        .map(function(checkout) {
            return cartView(checkout);
        })
        .join('');
}

function cartBadge() {
    $('.badge').html(cart.length);
}

function cartView(cart) {
    var html = '<h5>';
    html +=
        '<div class="col-lg-3 cart">' +
        '<center>' +
        '<p> <b>&#8227</b> ' +
        cart.name +
        ' $' +
        cart.Price +
        ' Size: ' +
        cart.size +
        '</p></center></div></h5>';
    return html;
}

function main() {
    showshoes();
    $('#sell-form').on('submit', function(event) {
        event.preventDefault();
        var name = $('#fullName');
        console.log(name);
        data.splice(0, 0, constructSell(name));
        $('fullName').val('');
        showshoes();
    });
    $('.buy').click(function(event) {
        event.preventDefault();
        var i = event.currentTarget.id;
        cart.push(data[i]);
        if (data[i].quantity === 0) {
            data[i].quantity = 0;
        } else {
            data[i].quantity -= 1;
        }
        cartBadge();
        main();
    });
    $('#cart').click(function(event) {
        event.preventDefault();
        showcartview();
        $('#shoes').html(
            showcartview() +
                '<div class="total">' +
                '<p> Total including 7% tax is: $' +
                total(cart).toFixed(2) +
                '</p>' +
                '</div>'
        );
    });
}

$(main);
