<template>
<div class="bodyall">
<div class="login-main">
 
 <div style="width:100%;height: 100%;">
  <div class="kuang">
    <div style="display:flex;align-items: center;position: relative;"> 
      <div style="left: 40px; position: absolute;width:70px;height: 30px;line-height:30px;
      font-size: 14px;margin-top: 20px;font-weight: 600;" >
      账号：
    </div>
         <div class="heng"><input type="text" style="margin-top:25px;" v-model="loginword.username">
        </div>
        </div>
    <div style="display:flex;position: relative;"> 
      <div style="left: 40px; position: absolute;width:70px;height: 30px;font-size: 12px;line-height:30px;margin-top: 22px;
       font-size: 14px;font-weight: 600;">
       密码：
       </div>
       <div class="heng"><input type="password" style="margin-top:25px;" v-model="loginword.password">
      </div>
    </div>
  </div>
  <div class="btn" @click="loginn">登录</div>
</div>
 

</div>
</div>
</template>

<script setup>
import axios from 'axios'
import {login} from '@/utils/api/login.js'
import {useRouter} from 'vue-router'
const router =useRouter()
const loginword=reactive({
  username:'',
  password:'',
})
const loginn=()=>{
// axios({
//   method:'get',
//   url:'http://172.22.78.237:8089/admin/login',
//   changeOrigin:true,
//   params:{
// name:loginword.username,
// password:loginword.password
//   }
// }).then((res)=>{
//   console.log(res)
// })
login({
  name: loginword.username,
 password:loginword.password
}).then((res)=>{  
console.log(res)

var token = res.data.uid+'/'+res.data.time+'=='+res.data.sign
sessionStorage.setItem('token',token)
})
router.push('/')
}
</script>

<style scoped>
.btn{
  width: 100px;
  height: 40px;
 line-height: 40px;
 border-radius: 5px;
 font-size: 18px;
 font-weight: 600;
 position: absolute;
 bottom: 40px;
 left:188px;
   background-color: rgba(96,97,101,0.4);
   color: white;
   cursor: pointer;
}
.kuang{
  
margin-top: 80px;
width: 100%;
height: 100%;
}
input{
  width: 280px;
  height: 20px;
 color: white;
 font-size: 18px;
  outline: none;
  border:transparent;
background: #409EFF;

}
.bodyall{
  display: flex;
position: fixed;
left: 0;
bottom: 0;
right: 0;
top: 0;
background: #F0F2F5;
}
.heng{
  width: 300px;
  height: 50px;

  margin: 0 auto;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid gray;
  margin-top: 2px;
}
.login-main{
  position: absolute;
  top: 180px;
  left: 460px;
  width: 500px;
  height:300px ;
  background: red;
  border-radius: 10px;
  background: #409EFF;
  box-shadow:0px 2px 3px 3px rgba(0,0,59,0.2);
  position: relative;
}
</style>