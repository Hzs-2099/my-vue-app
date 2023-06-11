<template>
    <mytitle></mytitle>
    <div class="common-layout">
    <el-container>
        <el-aside width="200px" style="height:93vh;" class="bg-gray-200">
            <div>
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >角色
                </el-button>
            </div>
            <div>
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >主要情况
                </el-button>
            </div>
            <div>
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >背包
                </el-button>
            </div>
            <div>
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >施法
                </el-button>
            </div>
            <div class="bg-green-200">
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >保存
                </el-button>
            </div>
            <div class="bg-yellow-300">
                <el-button
                    :key="info"
                    :type="info"
                    text
                    style="width:200px;height:50px"
                    >导入
                </el-button>
            </div>
        </el-aside>
      <el-main style="display: block" class="" id="角色">
        <div class="common-layout">
            <el-container>
            <el-aside width="400px" style="height:88vh; padding: 20px;" class=" bg-gray-200">
                <el-form-item label="角色名" class="text-dark-900 font-bold">
                    <el-input v-model="form.pc_name" placeholder=" " />
                </el-form-item>
                <el-form-item label="玩家名" class="text-dark-900 font-bold">
                    <el-input v-model="form.pl_name" placeholder=" " />
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="种族" class="text-dark-900 font-bold">
                            <el-select v-model="form.race"  placeholder=" " style="width:100px">
                                <el-option label="矮人" value="矮人" />
                                <el-option label="精灵" value="精灵" />
                                <el-option label="半身人" value="半身人" />
                                <el-option label="人类" value="人类" />
                                <el-option label="龙裔" value="龙裔" />
                                <el-option label="侏儒" value="侏儒" />
                                <el-option label="半精灵" value="半精灵" />
                                <el-option label="半兽人" value="半兽人" />
                                <el-option label="提夫林" value="提夫林" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="阵营" class="text-dark-900 font-bold">
                            <el-select v-model="form.group" placeholder=" " style="width:150px">
                                <el-option label="守序善良" value="守序善良" />
                                <el-option label="守序中立" value="守序中立" />
                                <el-option label="守序邪恶" value="守序邪恶" />
                                <el-option label="中立善良" value="中立善良" />
                                <el-option label="绝对中立" value="绝对中立" />
                                <el-option label="中立邪恶" value="中立邪恶" />
                                <el-option label="混乱善良" value="混乱善良" />
                                <el-option label="混乱中立" value="混乱中立" />
                                <el-option label="混乱邪恶" value="混乱邪恶" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="性别" class="text-dark-900 font-bold">
                            <el-select v-model="form.gender"  placeholder=" " style="width:100px">
                                <el-option label="男" value="男" />
                                <el-option label="女" value="女" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="年龄" class="text-dark-900 font-bold">
                            <el-input v-model="form.age" placeholder=" " />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="亚种" class="text-dark-900 font-bold">
                            <el-select v-model="form.s_race"  placeholder=" " style="width:100px">
                                <el-option label="变体人类" value="变体人类"  style="display: none"/>
                                <el-option label="施工中" value=" " />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="信仰" class="text-dark-900 font-bold">
                            <el-input v-model="form.religion" placeholder=" " />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="背景" class="text-dark-900 font-bold">
                            <el-select v-model="form.background"  placeholder=" " style="width:100px">
                                <el-option label="侍僧" value="变体人类"  style="display: none"/>
                                <el-option label="施工中" value=" " />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="发色" class="text-dark-900 font-bold">
                            <el-input v-model="form.haircolor" placeholder=" " />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="身高" class="text-dark-900 font-bold">
                            <el-input v-model="form.height" placeholder=" " style="width:100px"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="肤色" class="text-dark-900 font-bold">
                            <el-input v-model="form.skin" placeholder=" " style="width:100px"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="体重" class="text-dark-900 font-bold">
                            <el-input v-model="form.weight" placeholder=" " style="width:100px"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" style="">
                        <el-form-item label="瞳色" class="text-dark-900 font-bold">
                            <el-input v-model="form.eyecolor" placeholder=" " style="width:100px"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="m-4 " >
                    <p class="text-dark-900 font-bold">角色外貌</p>
                    <el-input
                        v-model="form.appearance"
                        :autosize="{ minRows: 2, maxRows: 4 }"
                        type="textarea"
                        placeholder=""
                    />
                </div>
            </el-aside>
            <el-main class="bg-gray-300 ">施工中</el-main>
            </el-container>
        </div>
      </el-main>
    </el-container>
  </div>
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
    import { reactive } from 'vue'
    const form = reactive({
        pc_name:'',
        pl_name:'',
        race:'',
        s_race:'',
        group:'',
        gender:'',
        age:'',
        religion:'',
        background:'',
        haircolor:'',
        height:'',
        skin:'',
        weight:'',
        eyecolor:'',
        appearance:'',
    })
    </script>