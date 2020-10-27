<template>
  <div class="editor">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>



<script>
  export default {
    name: "new",
    data: function () {
      return {
        memoBody: "メモを入力してください！"
      }
    },
    methods: {
      save: function () {
        this.$store.commit("save", {
          body: this.memoBody
        });
        // 強制的にトップページに遷移する
        this.$router.push("/");
      }
    }
  }
</script>