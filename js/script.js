document
  .getElementById('btn-phone-minus')
  .addEventListener('click', function () {
    updateCart(false, 'input-phone-quantity', 'phone-price', 1219);
    updateSubPrice();
  });
document
  .getElementById('btn-phone-plus')
  .addEventListener('click', function () {
    updateCart(true, 'input-phone-quantity', 'phone-price', 1219);
    updateSubPrice();
  });
document
  .getElementById('btn-case-minus')
  .addEventListener('click', function () {
    updateCart(false, 'input-case-quantity', 'case-price', 59);
    updateSubPrice();
  });
document.getElementById('btn-case-plus').addEventListener('click', function () {
  updateCart(true, 'input-case-quantity', 'case-price', 59);
  updateSubPrice();
});
