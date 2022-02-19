<script setup>
import {ref} from 'vue'

const msg = ref('笔记本列表')

</script>
<template>
  <h1>{{ msg }}</h1>
  <div>
    <router-link to="/note/1">笔记本1</router-link>
    <router-link to="/note/2">笔记本2</router-link>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
</style>