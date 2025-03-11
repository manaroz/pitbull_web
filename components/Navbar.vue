<script setup>
const searchquery = ref(" ");
</script>

<template>
  <nav class="navbar is-light">
    <div
      class="container is-flex is-align-items-center is-justify-content-space-between"
    >
      <div class="navbar-logo">
        <span class="logo-text">LOGO</span>

        <!-- Zamiast tekstu wstawiamy obraz -->
        <!-- <img 
          src="@/assets/my-logo.png" 
          alt="Moje Logo" 
          class="navbar-item" 
          style="max-height: 3rem;"
        />-->
      </div>

      <div
        class="navbar-menu is-flex is-justify-content-center has-text-weight-bold"
      >
        <a class="navbar-item">SALE UP TO -60%!</a>
        <NuxtLink to="/" class="navbar-item">NOWOŚCI</NuxtLink>
        <NuxtLink to="about" class="navbar-item">MĘSKIE</NuxtLink>
        <a class="navbar-item" href="#">DAMSKIE</a>
        <a class="navbar-item" href="#">DZIECIĘCE</a>
        <a class="navbar-item" href="#">AKCESORIA</a>
        <a class="navbar-item" href="#">PPROMOCJE</a>
      </div>

      <div class="navbar-item navbar-search">
        <div class="field has-addons search-group">
          <div class="control">
            <input class="input" type="search" placeholder="Szukaj" />
          </div>
          <div class="control">
            <button class="button">
              <span class="icon">
                <font-awesome-icon :icon="['fas', 'search']" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-item {
  transition: background-color 0.2s, color 0.2s;
}
.navbar-item:hover {
  color: #afaaaa;
}
.navbar-item:active {
  color: #afaaaa;
}

.search-group {
  display: inline-flex;
  border: 1px solid black;
  border-radius: 4px;
  background-color: inherit;
}

.search-group .input,
.search-group .button {
  border: none;
  box-shadow: none;
  background-color: inherit;
  color: black;
  outline: none;
}

.search-group .input::placeholder {
  color: black;
}

.search-group .input {
  flex: 1;
  padding: 0.5em 0.75em;
}

.search-group .icon {
  color: black;
  transition: color 0.2s;
}

.search-group .icon:hover {
  color: #777;
}

.search-group .icon:active {
  color: #555;
}

/*.navbar-logo {
  /* przykładowe dodatkowe wyrównanie czy marginesy }*/
</style>
