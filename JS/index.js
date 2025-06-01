let sum = 0;
let totalPrice = document.getElementById('totalPrice');
function buyNow(target) {
  // ======== Product Name Dhora Hoice ======== 
  let selectedItem = document.getElementById('selectedItem');
  let productName = target.parentNode.childNodes[3].innerText;
  let li = document.createElement('li');
  li.textContent = productName;
  selectedItem.appendChild(li)
  // ======== Product Name Dhora Hoice ========

  // ======== Product Price Dhora Hoice ========
  // console.log(target.parentNode.childNodes[5].childNodes[1].innerText);
  let productPrice = parseFloat(target.parentNode.childNodes[5].childNodes[1].innerText);
  sum += productPrice
  totalPrice.innerHTML = sum;
  // ======== Product Price Dhora Hoice ========
}

// Apply Cupon 
let couponCode = document.getElementById('couponCode');
let discountPrice = document.getElementById('discountPrice');
let finalPrice = document.getElementById('finalPrice');
function applyCupon(){
  if (couponCode.value == "SELL200") {
    let discountPriceValue = (20/100) * sum;
    let finalDiscountPrice = sum - discountPriceValue;
    discountPrice.innerHTML = discountPriceValue;
    finalPrice.innerHTML = finalDiscountPrice;
  }else if (couponCode.value == "") {
    alert("Please Enter Cupon Code!")
  }else{
    alert("This is not right discount code!")
  }
}

// Make Purchase 
function makePurchase(){
  if (couponCode.value == "SELL200") {
    alert(`After 20% discount total bill : ${finalPrice.innerHTML}`)
  }else{
    alert(`Your total bill : ${sum}`);
  }
}





