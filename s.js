console.log(sessionStorage.getItem('cart'))
var t = ""
var total = 0;
$.ajax({
    async: false,
    global: false,
    url: "./shoes.json",
    dataType: "json",
    success: function (response) {
        data = response.Shoes
    }
});
$("#clear").click(function () {
    deleteAllCookies();
});
window.addEventListener('load', function () {
    var cartCookie = getCookie();
    if (cartCookie) {
        var cartItems = cartCookie.split(',');
        $.each(cartItems, function (indexInArray, valueOfElement) {
            for (var i = 0; i < data.length; i++) {
                var shoe = data[i];
                if (shoe.shoename === cartItems[indexInArray]) {
                    t = shoe;
                    break;
                }
            }
            console.log(t)
            $(".selitem").append(`
        <div class="item-list-template">
            <img src="${t.shoeimageloc}">
            <p id="amount">Amount: ${sessionStorage.getItem(t.shoename)}</p>
        </div>
          `);
          $(".info").append(`
          <p>${t.shoename} ${t.shoeprice} <p>
          `)
           var helper = t.shoeprice.replace("$", "");
           total = parseInt(helper) + total
          $("#total").html("Total: " + total + "$");

        });
    }
});

function getCookie() {
    return sessionStorage.getItem("cart");
}


function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
