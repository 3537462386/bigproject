<template>
        <el-col :span="12" style="width:212px; background-color:rgba(238,238,238,0.98);">   
          <el-menu
            default-active="/ "
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <span>项目管理</span>
              </template>
              <el-menu-item-group >
                <el-menu-item index="1-1" @click="go">项目管理</el-menu-item>
           
              </el-menu-item-group>
            </el-sub-menu>
             <el-sub-menu index="2">
                  <template #title>
                   
                    <span>楼栋管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">楼栋管理</el-menu-item>
               </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="3">
                  <template #title>
       
                    <span>套房管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="3-1">套房管理</el-menu-item>
                    <el-menu-item index="3-2">分类管理</el-menu-item>
                    <el-menu-item index="3-3">管理管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="4">
                  <template #title>
              
                    <span>房间管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="4-1">房间列表</el-menu-item>
                    <el-menu-item index="4-2">意见反馈</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="5">
                  <template #title>
          
                    <span>铺位管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="5-1">会员列表</el-menu-item>
                    <el-menu-item index="5-2">等级管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="6">
                  <template #title>
       
                    <span>收费标准</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="6-1">角色管理</el-menu-item>
                    <el-menu-item index="6-2">权限管理 </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="7">
                  <template #title>
        
                    <span>系统统计</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="7-1">折线图</el-menu-item>
                    <el-menu-item index="7-2">曲线图</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
                 <el-sub-menu index="8">
                  <template #title>
        
                    <span>员工宿舍管理</span>
                  </template>
                  <el-menu-item-group title="">
                    <el-menu-item index="8-1">系统设置</el-menu-item>
                    <el-menu-item index="8-2">栏目管理</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu> 
          </el-menu>
        </el-col> 
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
 const go=()=>{
   router.push('/program')
 }


</script>

<style scoped>
::v-deep.el-menu{
background-color: rgba(238,238,238,0.98);
height: 100vh;
}

</style>