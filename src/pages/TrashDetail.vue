<script setup>
import {ref} from 'vue'

const msg = ref('回收站')
</script>
<template>
  <div>
    {{msg}}: {{$route.params.noteId}}
  </div>
</template>