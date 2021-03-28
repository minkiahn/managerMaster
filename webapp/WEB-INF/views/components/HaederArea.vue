<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand  @click="goPage('/')" style="cursor: pointer; margin-right: 60px;"><b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact exact-active-class="active" @click="goPage('/')">Dashboard</b-nav-item>
          <b-nav-item exact exact-active-class="active" @click="goPage('/matchResult')">Match</b-nav-item>
          <b-nav-item exact exact-active-class="active" @click="goPage('/matchResult')">Team</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em active>안민기 님</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    goPage (path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  },
  data () {
    return {
      msg: 'Haeder!'
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  $color:blue;
  color: $color;
  display : flex;
}

</style>
