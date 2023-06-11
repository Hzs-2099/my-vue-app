import {defineStore} from 'pinia'
import { ref } from 'vue'

export  const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: '',
            // 用户信息
            userInfo: {},
            username:'',
            name:'',
            phone:'',
            address:'',
            level:'',
            address_inf:''
        };
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'login_user', // key的名称
                storage: localStorage, // 存储的位置，默认为 sessionStorage
                // paths: ['username'] // 可以选择哪些进入local存储，默认是全部进去存储
            }
        ]
    },

    getters: {},
    actions: {
        setToken(payload) {
            this.token = payload;
        },
        setUserInfo(payload) {
            this.userInfo = payload;
        },
        setUsername(str){
          this.username=str;
        },
        setname(str){
            this.name=str;
        },
        setphone(str){
            this.phone=str;
        },
        setaddress(str){
            this.address=str;
        },
        setlevel(str){
            this.level=str;
        },
        setaddress_inf(str){
            this.address_inf=str;
        }
    }
});