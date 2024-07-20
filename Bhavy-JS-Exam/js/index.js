
function addToCart(itemName, itemPrice) {
    
    if (typeof(Storage) !== "undefined") {
        
      if (localStorage.getItem("cartItems") === null) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
      
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      
      cartItems.push({ name: itemName, price: itemPrice });
      
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      
      window.location.href = "cart.html";
    } else {
        
      alert("try gain");
    }
  }