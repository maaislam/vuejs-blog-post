<template>
    <div class="ui huge menu">
        <router-link to="/" class="active item">
            Home
        </router-link>
        <router-link to="/posts" class="item">
            Articles
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style scoped>
    div{
        position: relative;
    }
</style>