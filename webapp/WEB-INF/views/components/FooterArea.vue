<template>
  <div class="footer">
    <p class="mb-2">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'ⓒ Min Ki Ahn'
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  background:#eee;
  border-top: 3px solid #dee2e6;
  height: 60px;
  text-align: center;
  padding-top: 20px;
  color: #6c757d;
}
</style>
