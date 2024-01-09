<template>
    <BasicLayout/>
    <h1>Estamos en Login</h1>

    <router-link to="/register">
        Crear Cuenta
    </router-link>
</template>

<script>
import BasicLayout from "../layout/BasicLayout"
    export default {
      name: "Login", 
      components: {
        BasicLayout
      } 

    }
</script>

<style lang="scss" scoped>

</style>