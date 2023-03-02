<template>
   <header>
     <div class="navbar-wrapper">
    <div class="navbar-wrapper-left">
            <div class="a">业务系统</div>
            <span style="font-size:5px;margin-left: 10px;margin-top: 10px;" >v2.0</span>
            <div style="margin-left:30px;width:100px;display: flex;align-items: center;line-height: 45px; " class="change">
                <span style="font-size:25px;font-weight: 300px;">+</span>&nbsp;
                <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link" role="navigation">
          <div class="add" style="font-size:15px;font-weight: 600;">新增</div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">咨询</el-dropdown-item>
            <el-dropdown-item command="b">图片</el-dropdown-item>
            <el-dropdown-item command="c">产品</el-dropdown-item>
            <el-dropdown-item command="d">用户</el-dropdown-item>
            
          </el-dropdown-menu>
        </template>
      </el-dropdown>&nbsp;
                <el-icon><ArrowDownBold /></el-icon>
            </div>
    </div>
    <div class="navbar-wrapper-right">
<div style="margin-right:10px;font-size:14px;font-weight: 500;">超级管理员</div>
<div >
    <div style="width:50px;">
        <el-dropdown @command="handleCommand" type="">
        <span class="el-dropdown-link add add2" style="font-size: 15px; margin-top: 8px;font-weight: 700;color: white;" >
         admin
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">切换账户</el-dropdown-item>
            <el-dropdown-item command="c" @click="tuichu">退出</el-dropdown-item>
            <div class="login" @click="login">登录</div>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</div>
        </div>
    <div style="margin-top:12px;margin-left:3px;" class="xiaoshou"><el-icon><ArrowDown /></el-icon></div>  
    <div style="margin-left:20px;margin-top: 5px;font-size:18px; " class="xiaoshou"><el-icon><Message /></el-icon></div>
     <div style="margin-left:15px;margin-top: 5px;" class="xiaoshou"> <el-icon><Opportunity /></el-icon></div>
    
    </div>
   </div> 
 </header>
     
    
   
</template>

<script setup>
import { ArrowDownBold, ArrowDown, Message, Opportunity } from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import axios from 'axios'
const router=useRouter()
let isshow=ref(false)
const login=()=>{
  router.push('/login')
}
const tuichu=()=>{
  axios({
    method:'get',
    url:'http://172.22.78.237:8089/admin/logout',
    headers:{
      'Authorization': sessionStorage.getItem('token'),
    }
  }).then(res=>{
    console.log(res)
    if(res.data.code === 200){
      router.push('/login')
    }else{
      alert(res.data.code)
    }
  })
}
</script>

<style scoped>
.login{
  font-size: 14px;
  padding-left: 15px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.login:hover{
  background: rgba(0,0,255,0.2);
  color: cornflowerblue;
}
.xiaoshou{
  cursor: pointer;
}
.change:hover{
  background: grey;
  opacity: 0.5;
}
.change{
  display: flex;
  justify-content: center;
}
::v-deep.el-dropdown-link el-tooltip__trigger el-tooltip__trigger{
    border: none;
     outline: none;
    
}
::v-deep.el-dropdown{
    border: none;
    outline: none;
}
.add{color: white; cursor: pointer;}

.add:hover{
    color: skyblue;
}
header{
    width: 100%;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1600);
   
}
.navbar-wrapper{
        height: 45px!important;
        background: #222;
       display: flex;
       color: white;
width: 1500px;
box-shadow: 0 0 3px 0px rgba(53,69,22,43,);

}
.navbar-wrapper-left{
width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.navbar-wrapper-right{
display: flex;
align-items: center;
margin-left: 950px;
width: 15%;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  border: none;
  outline: none;
}
</style>