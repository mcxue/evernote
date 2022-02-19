<script setup>
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>
    <router-link to="/login">Login</router-link>
    <router-link to="/notebooks">Notebooks</router-link>
    <router-link to="/note/1">Note</router-link>
    <router-link to="/trash/2">Trash</router-link>
  </p>
  <router-view></router-view>
</template>

<style>

</style>
