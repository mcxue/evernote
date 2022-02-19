<script setup>
import {ref} from 'vue'

const msg = ref('笔记详情页')
</script>
<template>
  <div>
    {{msg}}: {{$route.params.noteId}}
  </div>
</template>