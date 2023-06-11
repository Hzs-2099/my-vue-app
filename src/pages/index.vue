<template>
    <mytitle></mytitle>
    <el-row class="left min-h-screen bg-dark-50 min-h-screen">
        <el-col :span="24" class=" bg-light-100 flex justify-center" >
             <el-space direction="vertical" size="30" style="margin-bottom:0">
                <div class="block text-center" style="margin-top: 20px;">
                    <el-carousel style="min-width: 100vh;">
                        <el-carousel-item class="flex items-center justify-center">
                            <img src="../img/dnd/dnd.jpg" alt="" class="back" />
                        </el-carousel-item >
                        <el-carousel-item class="flex items-center justify-center">
                            <img src="../img/dnd/dnd1.jpg" alt="" class="back" />
                        </el-carousel-item>
                        <el-carousel-item class="flex items-center justify-center">
                            <img src="../img/dnd/dnd2.jpg" alt="" class="back" />
                        </el-carousel-item>
                        <el-carousel-item class="flex items-center justify-center">
                            <img src="../img/dnd/dnd3.jpg" alt="" class="back" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-space alignment="start" :size="30">
                    <el-card class="box-card" style="width: 70vh;height: 500px;">
                        <template #header>
                            <div class="card-header">
                                <span class=" text-red-800 font-bold text-5xl mb-4">凡杜林的失落矿坑</span>
                                <el-button class="button" text style="margin-left:10px" @click="$router.push('/mine')">查看详情</el-button>
                            </div>
                        </template>
                        <div class="text item">
                            <span>  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp五百年前，矮⼈⽒族和侏儒⽒族签订了着名的凡戴尔协定，这纸合约让他们共同分享在回浪洞⽳下的富矿资源，同时该矿藏也因富含强⼤的魔法⼒量⽽知名。⼀些和矮⼈以及侏儒结盟的⼈类施法者将这股魔法⼒量链接转化成为⼀个强⼤的魔法物品⼯⼚（称为法术⼯⼚），在这⾥魔法物品能够轻易地制造出来。在矿坑的⻩⾦时代，附近的⼈类城镇凡度林也因此⽽发展壮⼤。但在兽⼈横扫整个费伦⼤陆北⾯和剑湾的时候，这座矿坑并未幸免于难。<br>
                            </span>
                            <span>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp⼀个强⼤⽽唯利是图的兽⼈法师企图攻占回浪洞⽳的矿坑来占据那⾥的⼤量魔法财宝，⽽⼈类法师和他们的矮⼈、侏儒盟友为了守卫法术⼯⼚⽽与兽⼈展开了⾎腥厮杀。这场战⽃摧毁了⼤部分的矿坑，只有很少的⼈或者逃了出来，从此回浪洞⽳的位置就失落了。<br>
                            </span>
                            <span>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp⼏百年来，被埋藏的珍宝吸引着宝藏猎⼈们来到凡度林，但没有⼈能成功的找到失落的矿脉。在最近，⼈类重新在这个地⽅定居，凡度林再次兴盛。更重要的是，寻⽯者兄弟——三个矮⼈——已经找到了通往回浪洞⽳的⼊⼝，他们淮备重新开启这个矿坑。
                            </span>
                        </div>
                    </el-card>
                    <el-card class="box-card" style="width: 70vh;height: 500px;">
                        <template #header>
                            <div class="card-header">
                                <span class=" text-red-800 font-bold text-5xl mb-4">巨龙僭政</span>
                                <el-button class="button" text style="margin-left:10px" @click="$router.push('/dragon')">查看详情</el-button>
                            </div>
                        </template>
                        <div class="text item">
                            <video src="../viedo/732552637-1-16.mp4" controls></video>
                        </div>
                    </el-card>
                </el-space>
                
             </el-space>
        </el-col>
    </el-row>
</template>

<script>
import mytitle from '../common/title.vue'
export default {
    components:{
        mytitle
    }
}
</script>

<script setup>
import { reactive } from "vue";
import { ref } from 'vue'
</script>

<style scoped>
.el-row{
    height:60px;
}
.flex-grow {
  flex-grow: 1;
}
</style>