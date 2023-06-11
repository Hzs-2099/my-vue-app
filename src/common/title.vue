<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        style="height:7vh"
    >
        <el-menu-item  index="1" class="" @click="$router.push('/home')">首页</el-menu-item>
        <el-sub-menu index="2">
        <template #title>工具</template>
        <el-menu-item index="2-1" @click="$router.push('/magic')">法术列表</el-menu-item>
        <el-menu-item index="2-2" @click="$router.push('/dragon')">龙后的宝山</el-menu-item>
        <el-menu-item index="2-3" disabled>凡杜林的失落矿坑</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">论坛</el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item index="5" @click="$router.push('/person')">个人中心</el-menu-item>
    </el-menu>
</template>

<script>
export default{

}
</script>
