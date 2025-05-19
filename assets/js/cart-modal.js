function openCartModal() {
    const myModal = new bootstrap.Modal(document.getElementById('cartModal'));
    myModal.show();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const cartForm = document.getElementById("cartForm");
  
    if (cartForm) {
      cartForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const branch = document.getElementById("branch").value;
  
        // Example: Log or process data
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Branch:", branch);
  
        alert("Item added to cart with your preferences!");
  
        // Close modal
        bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
  
        // Optional: Redirect
        // window.location.href = "cart.html";
      });
    }
  });