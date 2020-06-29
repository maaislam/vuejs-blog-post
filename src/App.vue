<template>
  <div>
    <AppHeader></AppHeader>
    <AllPost></AllPost>
      <PostModal/>
    
  </div>
</template>

<script>

  import AllPost from './components/AllPost';
  import AppHeader from './components/AppHeader';
  import PostModal from './components/PostModal';

  export default {
    name: 'App',
  components:{
    AllPost,
    AppHeader,
    PostModal
  }
    
  }
</script>

<style scoped>

</style>