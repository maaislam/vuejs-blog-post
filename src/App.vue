<template>
  <div>
    <AppHeader></AppHeader>
    <AllPost></AllPost>
      <PostModal/>
      <AddCategoryModal/>
      
    
  </div>
</template>

<script>

  import AllPost from './components/AllPost';
  import AppHeader from './components/AppHeader';
  import PostModal from './components/PostModal';
  import AddCategoryModal from './components/AddCategoryModal'

  export default {
    name: 'App',
  components:{
    AllPost,
    AppHeader,
    PostModal,
    AddCategoryModal
    
  }
    
  }
</script>

<style scoped>

</style>