<template>
    <img src="../img/dnd/knotside.jpg" alt="" class="back_img"/>
    <mytitle></mytitle>
    <el-row class="min-h-screen">
        <el-col :span="4"></el-col>
        <el-col :span="16" class="flex justify-center">
            <el-card class="box-card bg-light-50" style=" width: 900vh;">
                <el-row style="height:50vh">
                    <el-col :span="12">
                        <el-space direction="vertical" size="30">
                            <el-avatar size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width:300px;height:300px;border: 2xp;border-color: black;"/>
                            <span class=" text-gray-500 font-bold text-xl mb-4">头像</span>
                        </el-space>
                    </el-col>
                    <el-col :span="12">
                        <el-space direction="vertical">
                            <el-descriptions
                                class="margin-top"
                                title="用户信息"
                                :column="3"
                                :size="size"
                                border
                            >
                                <template #extra>
                                <el-button type="primary" @click="con">更新</el-button>
                                <el-dialog
                                    v-model="dialogVisible"
                                    title="Tips"
                                    width="30%"
                                    :before-close="handleClose"
                                >
                                <el-form-item label="姓名">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="电话号码">
                                    <el-input v-model="form.phone" />
                                </el-form-item>
                                <el-form-item label="地址">
                                    <el-select v-model="form.address" placeholder="please select your zone">
                                        <el-option label="杭州市" value="杭州市" />
                                        <el-option label="宁波市" value="宁波市" />
                                        <el-option label="温州市" value="温州市" />
                                        <el-option label="嘉兴市" value="嘉兴市" />
                                        <el-option label="湖州市" value="湖州市" />
                                        <el-option label="绍兴市" value="绍兴市" />
                                        <el-option label="金华市" value="金华市" />
                                        <el-option label="衢州市" value="衢州市" />
                                        <el-option label="舟山市" value="舟山市" />
                                        <el-option label="台州市" value="台州市" />
                                        <el-option label="丽水市" value="丽水市" />
                                        <el-option label="廊坊市" value="廊坊市" />
                                        <el-option label="义务市" value="义务市" />
                                        <el-option label="永康市" value="永康市" />
                                        <el-option label="瑞安市" value="瑞安市" />
                                        <el-option label="慈溪市" value="慈溪市" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="KP/DM">
                                    <el-select v-model="form.level" placeholder="please select your zone">
                                        <el-option label="KP" value="KP" />
                                        <el-option label="DM" value="DM" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="详细地址">
                                    <el-input v-model="form.address_inf" />
                                </el-form-item>
                                    <template #footer>
                                    <span class="dialog-footer">
                                        <el-button type="primary" @click="confirm">
                                        Confirm
                                        </el-button>
                                    </span>
                                    </template>
                                </el-dialog>
                                </template>
                                <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <user />
                                    </el-icon>
                                    名称
                                    </div>
                                </template>
                                {{form.name}}
                                </el-descriptions-item>
                                <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <iphone />
                                    </el-icon>
                                    电话号码
                                    </div>
                                </template>
                                {{ form.phone }}
                                </el-descriptions-item>
                                <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <location />
                                    </el-icon>
                                    地址
                                    </div>
                                </template>
                                {{form.address}}
                                </el-descriptions-item>
                                <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <tickets />
                                    </el-icon>
                                    KP/DM
                                    </div>
                                </template>
                                <el-tag size="small">{{form.level}}</el-tag>
                                </el-descriptions-item>
                                <el-descriptions-item>
                                <template #label>
                                    <div class="cell-item">
                                    <el-icon :style="iconStyle">
                                        <office-building />
                                    </el-icon>
                                    详细地址
                                    </div>
                                </template>
                                {{form.address_inf}}
                                </el-descriptions-item>
                            </el-descriptions>
                            
                        </el-space>
                    </el-col>
                </el-row>
                <div class=" flex justify-center">
                    <div style="height:50vh;width:100vh"  class="bg-yellow-100">
                        <el-empty description="还未拥有任何角色卡">
                            <el-button type="primary" @click="$router.push('/create')">点击创建角色卡</el-button>
                        </el-empty>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
import mytitle from '../common/title.vue'
export default {
    components:{
        mytitle,
    }
}
</script>

<script setup>
import axios from 'axios';
import { onMounted } from "vue";
import { reactive } from 'vue';
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';
import {useUserStore} from '../store.js';
const dialogVisible = ref(false)
const pi = useUserStore()
const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
]

const form = reactive({
        name:'',
        phone:'',
        address:'',
        level:'',
        address_inf:''
    })
/**
 * 打开信息更改页面
 */
const con=()=>{
    dialogVisible.value = true
}
const confirm =()=>{
    dialogVisible.value = false
    pi.setname(form.name);
    pi.setphone(form.phone);
    pi.setaddress(form.address);
    pi.setlevel(form.level);
    pi.setaddress_inf(form.address_inf);
    init();
}
/**
 * 实时修改信息
 */
const init=()=>{
    form.name=pi.name;
    form.phone=pi.phone;
    form.address=pi.address;
    form.level=pi.level;
    form.address_inf=pi.address_inf;
}
onMounted(()=>{
    init();
})
</script>

<style scoped>
.el-row{
    height:60px;
}
.flex-grow {
  flex-grow: 1;
}
.back_img {
  min-height: 100vh;
  background-repeat: no-repeat;
  position: fixed;
}
</style>