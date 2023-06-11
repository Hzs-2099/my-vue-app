<template>
  <div class="back">
    <el-row class="min-h-screen">
      <img src="../img/img1.jpg" alt="" class="back_img" id="img_01" />
      <!-- <img src="../img/img3.jpg" alt="" class="back_img" id="img_02"> -->
      <el-col :lg="18" class="flex items-center justify-center">
        <div>
        </div>
      </el-col>
      <el-col
        :lg="6"
        class="bg-dark-900 flex items-center justify-center flex-col">
        <h2 class="text-light-900 font-bold text-5xl mb-4">欢迎回来</h2>
        <div class="flex items-center justify-center flex-col mb-4">
          <span class="text-light-900">————————</span>
          <span class="text-light-900">账号密码登录</span>
          <span class="text-light-900">————————</span>
        </div>
        <el-form :model="form" class="w-[250px]">
          <el-form-item>
            <el-input v-model="form.username" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-row>
            <el-form-item style="width: 138px;
    marrgin-right: 10px;
    margin-right: 10px;">
              <el-input v-model="form.code" placeholder="请输入验证码" />
            </el-form-item>
            <el-button @click="SendApi" type="primary">
              获取验证码
            </el-button>
          </el-row>


          <el-form-item>
            <!-- <el-button type="primary" @click="onSubmit" class="flex items-center justify-center w-[250px]">登录</el-button> -->
            <el-button
              type="primary"
              @click="LoginApi"
              class="flex items-center justify-center w-[250px]">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="RegisterApi"
              class="flex items-center justify-center w-[250px]"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.back {
  min-height: 100vh;
  background-color: black;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 0;
}
.back_img {
  min-height: 100vh;
  background-repeat: no-repeat;
  position: fixed;
}
.flex {
  z-index: 9999;
}

</style>

<script>
// @ts-ignore
import { reactive } from "vue";

var num = Math.floor(Math.random() * 7 + 1);
var count = 0;
var LastNum = 1;
/**
 * 用于背景图变换
 */
function change() {
  while (num == LastNum) {
    num = Math.floor(Math.random() * 7 + 1);
  }
  LastNum = num;
  // console.log(count);
  // @ts-ignore
  $("#img_01").fadeOut(200);
  setTimeout(() => {
    // @ts-ignore
    $("#img_01").attr("src", "src/img/img" + num + ".jpg");
  }, 200);
  // @ts-ignore
  $("#img_01").fadeIn(200);
  count = count + 1;
}

function init() {
  setInterval(change, 5000);
}
init();
</script>

<script setup>
// @ts-ignore
import { reactive } from "vue";
import axios from 'axios';
// @ts-ignore
import { onMounted } from "vue";
import router from '../router';
import {useUserStore} from '../store.js'
const pi = useUserStore()
// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
  email: "",
  code: "",
});
/**
 * 判断表单输入是否为空
 */
const isNull=()=>{
  if(form.username==""){
    alert("请输入账号");
    return true;
  }else if(form.password==""){
    alert("请输入密码");
    return true;
  }
  return false;
}
/**
 * 调用后台发送验证码接口
 */
const SendApi=async()=>{
  if(form.email==""){alert("请输入邮箱");}
  await axios({
    method:'get',
    url:'/dev/test-emailSend',
    params:{to:form.email}
  }).then((res)=>{
    if(res.data.date){
      alert("发送成功")
    }
    else{
      alert("发送失败");
    }
  })
}

/**
 * 调用后台登录接口
 */
const LoginApi=async()=>{
  if(isNull()){return}
  await axios({
    method:'get',
    url:'/dev/test-login',
    params:{
      username:form.username,
      password:form.password,
      to:form.email,
      code:form.code
    }
  }).then((res)=>{
    if(res.data.date){
      pi.setUsername(form.username)
      router.push('/home')
    }else{
      alert("密码错误");
    }
  })
}
/**
 * 调用后台注册接口
 */
const RegisterApi = async()=>{
  if(isNull()){return}
  await axios({
    method:'get',
    url:'/dev/test-Register',
    params:{username:form.username,password:form.password}
  }).then((res)=>{
    console.log(res);
    if(res.data.date){
      alert("注册成功");
    }else{
      alert("用户已存在");
    }
  })
}


// $router.push('/home')
</script>