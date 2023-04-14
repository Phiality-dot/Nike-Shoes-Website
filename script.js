var data = null;
var scart = []
cookies = sessionStorage;
cookies.setItem('cart', scart)
$.ajax({
    async: false,
    global: false,
    url: "./shoes.json",
    dataType: "json",
    success: function (response) {
        data = response.Shoes
    }
});
console.log(data[0])
$.each(data, function (indexInArray, valueOfElement) { 
    $("#main").append(`
        <div class="box" id="${data[indexInArray].shoename}">
        <img src="${data[indexInArray].shoeimageloc}">
        <div class="bottom-border">
          <a><img src="cart.png" class="atc"></a>
          <a><img src="info.png"></a>
        </div>
      </div>
      `);
      
});
$(".atc").click(function (e) { 
    console.log(e.currentTarget.parentElement.parentElement.parentElement.id);
    scart.push(e.currentTarget.parentElement.parentElement.parentElement.id)
    cookies.setItem('cart', scart)
    for (var i = 0; i < data.length; i++) {
      var shoe = data[i];
      if (shoe.shoename === e.currentTarget.parentElement.parentElement.parentElement.id) {
        if(cookies.getItem(e.currentTarget.parentElement.parentElement.parentElement.id) !=null) {
          cookies.setItem(e.currentTarget.parentElement.parentElement.parentElement.id, parseInt(cookies.getItem(e.currentTarget.parentElement.parentElement.parentElement.id)) + 1)
          break;
        } else {
        cookies.setItem(e.currentTarget.parentElement.parentElement.parentElement.id, 1)
        break;
      }
    }
  }
    
    console.log(cookies.getItem('cart').split(","))
});

function renderShoes() {
  $("#main").empty();
  var minPrice = parseInt($("#price").val());
  var nameSearch = $("#name").val().toLowerCase();

  $.each(data, function(indexInArray, valueOfElement) {
    var shoe = data[indexInArray];
    if (parseInt(shoe.shoeprice) >= minPrice && shoe.shoename.toLowerCase().includes(nameSearch)) {
      $("#main").append(`
        <div class="box" id="${shoe.shoename}">
          <img src="${shoe.shoeimageloc}">
          <div class="bottom-border">
            <a><img src="cart.png" class="atc"></a>
            <a><img src="info.png"></a>
          </div>
        </div>
      `);
    } else if(parseInt(shoe.shoeprice) >= minPrice && shoe.shoename.toLowerCase() == "") {
      $("#main").append(`
      <div class="box" id="${shoe.shoename}">
        <img src="${shoe.shoeimageloc}">
        <div class="bottom-border">
          <a><img src="cart.png" class="atc"></a>
          <a><img src="info.png"></a>
        </div>
      </div>
    `);
    }
  });
}


// Attach event listeners to filters
$("#price").on("input", function() {
  $("#price-value").text(" $" + $(this).val());
  renderShoes();
});

$("#name").on("keyup", function() {
  renderShoes();
});