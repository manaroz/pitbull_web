<script setup>
const cartItem = ref(1);
</script>

<template>
  <nav class="navbar is-dark">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-between"
    >
      <div class="navbar-left is-flex is-align-items-center">
        <a href="/" class="navbar-item">
          <span>Nasze salony</span>
        </a>
      </div>

      <div class="navbar-center is-flex has-text-white has-text-weight-bold">
        KOLEKCJA WIOSNA/LATO 2025! <br />
        POKAŻ PRODUKTY
      </div>

      <div class="navbar-right is-flex is-align-items-center">
        <a href="/" class="navbar-item">
          <span>Moje konto</span>
        </a>
        <a href="/" class="navbar-item">
          <span>Lista życzeń <span class="wishlist-count">0</span></span>
        </a>
        <a href="/" class="navbar-item cart-button nas-text-white">
          <span>Koszyk({{ cartItem }})</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.1rem 1rem;
}

.navbar-left,
.navbar-right {
  gap: 1rem;
}

.navbar-item {
  color: #fff;
}

.cart-button {
  background-color: #47b750;
  color: #fff;
  padding: 10px 15px;
}
</style>
