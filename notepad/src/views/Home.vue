<template>
  <div class="home">
    <ul v-for="memo in newest" :key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    newest: function () {
      // 新しい物から降順に表示
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>