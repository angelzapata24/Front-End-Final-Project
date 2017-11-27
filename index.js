var PAGE_DATA = {
    shoes: [
        {
            name: "Jordan 4 'Toro's",
            Price: 210,
            size: '8.5',
            quantity: 1,
            img: '../../../../../Downloads/toro.jpg'
        },
        {
            name: "Jordan 11 'Gamma Blue'",
            Price: 210,
            size: '9',
            quantity: 2,
            img: '../../../../../Downloads/gamma.png'
        },
        {
            name: "Jordan 13 'Playoff'",
            Price: 190,
            size: '8',
            quantity: 3,
            img: '../../../../../Downloads/playoff.png'
        },
        {
            name: "Nmd X Pharell  'Human Race'",
            Price: 300,
            size: '11',
            quantity: 1,
            img: '../../../../../Downloads/humanrace.jpg'
        },
        {
            name: "Jordan 9 'Barons'",
            Price: 205,
            size: '9.5',
            quantity: 4,
            img: '../../../../../Downloads/barons.jpg'
        },
        {
            name: "Adidas Yeezy 'Boost 350 v2 Beluga 2.0'",
            Price: 200,
            size: '9',
            quantity: 2,
            img: '../../../../../Downloads/yezzy.jpg'
        },
        {
            name: "Nmd 'Triple White Japan'",
            Price: 170,
            size: '11',
            quantity: 6,
            img: '../../../../../Downloads/japan_nmd.jpg'
        },
        {
            name: "Jordan 11 'Win Like 82'",
            Price: 225,
            size: '9.5',
            quantity: 8,
            img: '../../../../../Downloads/winlike82.jpg'
        },
        {
            name: "Jordan 1 'Bred'",
            Price: 170,
            size: '10',
            quantity: 3,
            img: '../../../../../Downloads/bred.jpg'
        }
    ]
};

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

// function drawItems() {
//     $('#cart').html(
//         '<i class="fa fa-shopping-cart" aria-hidden="true">' +
//             shoppingCart.length
//     );
//     html = '';
//     for (i = 0; i < INVENTORY.length; i++) {
//         addTo = '';
//         remove = 'disabled';
//         if (shoppingCart.includes(INVENTORY[i])) {
//             remove = '';
//         }
//         if (INVENTORY[i].inStock === 0) {
//             classes =
//                 ' soldout"><img id="toplayer" src="http://www.pngall.com/wp-content/uploads/2016/06/Sold-Out-PNG-HD.png"><img id="bottomlayer" src="';
//             addTo = 'disabled';
//         } else {
//             classes = '"><img src="';
//         }
//         if (i == 0) {
//             html += '<div class="row">';
//         }
//         if (i % 3 == 0) {
//             html += '</div><div class="row">';
//         }
//         html +=
//             '<div class="col-sm-4"><div class="photo' +
//             classes +
//             INVENTORY[i].picUrl +
//             '"></div><p>' +
//             INVENTORY[i].name +
//             '<br>$' +
//             INVENTORY[i].price +
//             '<br>In Stock: ' +
//             INVENTORY[i].inStock +
//             '<br><input id="quantity' +
//             i +
//             '" type="number"  value="1" max="' +
//             INVENTORY[i].inStock +
//             '"><button id="addToCart' +
//             i +
//             '" onclick="addToCart(' +
//             i +
//             '); drawItems();" ' +
//             addTo +
//             '>Add to Cart</button><br><button id="removeFromCart' +
//             i +
//             '" onclick="removeFromCart(' +
//             i +
//             '); drawItems();"' +
//             remove +
//             '>Remove from cart</button><button id="info' +
//             i +
//             '" onclick="seeInfo(' +
//             i +
//             ')">More info</button></div></p>';
//     }
//     $('#data').html(html);
// }

function main() {
    showshoes();
}

$(main);
