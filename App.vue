<template>
  <div class="wrapper">
    <div class="haeder-wrapper">
      <haeder-area />
    </div>
    <div class="contents-wrapper">
      <router-view />
    </div>
    <div class="footer-wrapper">
      <footer-area />
    </div>
  </div>
</template>

<script>
import HaederArea from '~/webapp/WEB-INF/views/components/HaederArea'
import FooterArea from '~/webapp/WEB-INF/views/components/FooterArea'
export default {
  components: {
    // 'match-result': MatchResult
    // MatchResult: 상단의 문법과 같다. MatchResult 은 파스칼 표기법이며, 자동으로 대시 표기법으로 변경된다.
    HaederArea,
    FooterArea // 상단의 문법과 같다. 속성명과 값이 같으므로 다음과 같이 표기 가능하다.
  },
  data () {
    return {
      msg: 'Hello Vue6!'
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/webapp/WEB-INF/views//scss/style"
</style>
