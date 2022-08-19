function updateCart(value, inputId, productPriceId, price) {
  const inputProductQuantity = document.getElementById(inputId);
  const inputProductQuantityValue = parseInt(inputProductQuantity.value);
  if (value === true) {
    let increase = inputProductQuantityValue + 1;
    productPrice(increase, productPriceId, price, inputId);
  } else if (value === false && inputProductQuantityValue > 0) {
    let decrease = inputProductQuantityValue - 1;
    productPrice(decrease, productPriceId, price, inputId);
  }
}
function productPrice(values, productPriceId, price, inputId) {
  const inputProductQuantity = document.getElementById(inputId);
  const increaseProductQuantity = values;
  inputProductQuantity.value = increaseProductQuantity;
  const productPrice = document.getElementById(productPriceId);
  const productPriceTotal = increaseProductQuantity * price;
  productPrice.innerText = productPriceTotal;
}

function updateSubPrice() {
  const product1 = getInnerValue('phone-price');
  const product2 = getInnerValue('case-price');
  const totalSubPrice = product1 + product2;
  const totalTax = +(totalSubPrice * 0.1).toFixed(2);
  const totalPrice = totalTax + totalSubPrice;

  setInnerText('sub-total', totalSubPrice);
  setInnerText('tax-amount', totalTax);
  setInnerText('total-amount', totalPrice);
}

function getInnerValue(id) {
  const productPriceId = document.getElementById(id);
  const productPrice = +productPriceId.innerText;
  return productPrice;
}
function setInnerText(id, value) {
  const textId = document.getElementById(id);
  textId.innerText = value;
}
