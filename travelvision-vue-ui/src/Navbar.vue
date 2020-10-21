<template>
<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="/">Travel Vision Navigation</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/#/menu-items">Flight Search</b-nav-item>
      <b-nav-item href="/#/employees">Country Search</b-nav-item>
      <b-nav-item href="/#/employees">Explore</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Travel Vision'
    }
  }
}
</script>
