<template>
    <div class="ui huge menu">
        <router-link to="/" class="item">
            Home
        </router-link>
        <router-link to="/posts" class="item">
            Articles
        </router-link>
        <div class="right menu">
            <div class="item">
                <div class="ui "><a href="https://github.com/maaislam">GitHub</a></div>
            </div>
        </div>
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