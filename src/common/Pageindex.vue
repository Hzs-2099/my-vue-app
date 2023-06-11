<template>
    <el-col :span="3" lg="18" class="bg-dark-900 ">
        <img src="../img/dnd/dnd.jpg" alt="" class="back" />
        <el-row :span="2" style="height:80px" class="flex items-center justify-center text-light-900 font-bold text-1xl mb-4">DND5e不全书</el-row>
        <el-row :span="2" class="flex items-center justify-center text-light-50">首页</el-row>
        <el-row :span="2" class="flex items-center justify-center text-light-50">模组</el-row>
        <el-row :span="2" class="flex items-center justify-center text-light-50">个人中心</el-row>
    </el-col>
</template>


<script>
export default{

}
</script>

<style scoped>
.el-row{
    height:60px
}
.back {
  background-repeat: no-repeat;
  /* position: fixed; */
}
</style>