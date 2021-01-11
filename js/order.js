var modal = document.getElementById('id01');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

var modal2 = document.getElementById('id02');

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
};

var dropdown = document.getElementById('options');
dropdown.onchange = function (event) {
  if (dropdown.value === 'Delivery') {
    var address = prompt('Enter Your Address');
    document.getElementById('address').innerHTML = address;

    const delivery = document.querySelector('.dropdown-delivery');
    var address = document.getElementById('address').innerHTML;

    const submit = document.querySelector('#submit');

    submit.addEventListener('click', function () {
      console.log(address);
      alert(
        'Your Order Will Be Delivered to Your Location' +
          ' ' +
          address +
          ' ' +
          '& Your Delivery Charge is Ksh 100'
      );
      event.preventDefault();
    });
  }
};

$(document).ready(function () {
  $(':radio').on('change', function () {
    var total = 0;
    $(':radio:checked').each(function () {
      total += Number(this.value);
    });
    $('#total1').text(total);

    $('select').on('change', function () {
      var sum = 0;
      $('select.values').each(function () {
        sum += Number($(this).val());
      });
      $('#total2').html(sum);

      var quantity = $('input[type=number][name=quant]').val();

      $('input[type=number][name=quant]').on;

      var delivery = 250;
      var grandTotal = [(sum + total) * quantity + delivery];
      document.getElementById('total3').innerHTML = grandTotal;
      console.log(sum);
      console.log(quantity);
      console.log(total);
      console.log(grandTotal);

      $('#getorder').click(function () {
        $('#grandPrice').append(address);
        $('#total3').show();
        $('#yourPrice').hide();
      });
    });
  });
});

function myFunction() {
  var checkBox = document.getElementById('beef');
  var text = document.getElementById('total7');
  if (checkBox.checked == true) {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function myOneFunction() {
  var checkBoxOne = document.getElementById('chicken');
  var textOne = document.getElementById('total6');
  if (checkBoxOne.checked == true) {
    textOne.style.display = 'block';
  } else {
    textOne.style.display = 'none';
  }
}

function myTwoFunction() {
  var checkBoxTwo = document.getElementById('pineapple');
  var textTwo = document.getElementById('total5');
  if (checkBoxTwo.checked == true) {
    textTwo.style.display = 'block';
  } else {
    textTwo.style.display = 'none';
  }
}

function myThreeFunction() {
  var checkBoxThree = document.getElementById('pepperoni');
  var textThree = document.getElementById('total4');
  if (checkBoxThree.checked == true) {
    textThree.style.display = 'block';
  } else {
    textThree.style.display = 'none';
  }
}

function refreshPage() {
  window.location.reload();
} 
