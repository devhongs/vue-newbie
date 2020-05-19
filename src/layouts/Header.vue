<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">GPI</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/tree">Tree</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/aggrid">Ag Grid</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/ax5grid">Ax5 Grid</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>
