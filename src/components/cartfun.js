export function addToCart(item) {
  console.log("clicked add to cart btn");

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const isAlreadyInCart = cartItems.some(
    (cartItem) => cartItem.id === item.id && cartItem.category === item.category
  );
  if (isAlreadyInCart) {
    alert("item i cart");
    return;
  }
  cartItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  console.log("Item added to cart:", item);
}

export function removeFromCart(itemId, itemCategory) {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const updatedCart = cartItems.filter(
    (item) => !(item.id === itemId && item.category === itemCategory)
  );

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  console.log("Item removed from cart:", itemId);
  return updatedCart;
}
