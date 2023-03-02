<template>
    
    <div style="position:fixed;top:0;left:0;right:0;"><Header/></div>
     <top></top>
     <div id="table">
        <div class="add-module">
          <div @click="flag=true" style="background:blue;color:white;width:40px;height:25px;
         line-height:25px;margin-left:220px;border-radius:5px;
         font-size: 13px; cursor:pointer;font-weight: 700;">
           增加
        </div>
        </div>
        <div class="table"><table cellpadding="0" cellspacing="0" >
                  <thead style="background: rgba(65,89,85,0.1);">
                    <tr>
                       <th>项目名称</th>
                       <th>项目地域</th>
                       <th>公司</th>
                       <th>是否运作</th>
                       <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="v in list" :key="v.id">
                      
                        <td>{{ v.itemName }}</td>
                        <td>{{v.area }}</td>
                        <td>{{v.company }}</td>
                        <td>{{ v.itemStatus==0 ? '停运' :'运作'}}</td>
                        <td>

                            <div style="display:flex;justify-content: center;">
                                <div class="button" @click="layout(v)">删除</div>
                            <div class="button" style="background:blue;" @click="edit(v)">编辑</div>
                            </div>
                            
                        </td>
                    </tr>
                  </tbody>
            </table>
        </div>
     </div>
     <el-dialog v-model="flag" title="增加项目">
        <el-form :model="form" style="display:flex;flex-direction: column;">
          <el-form-item label="项目名称:" :label-width="80" >
            <el-input v-model="itemName" />
          </el-form-item>
          <el-form-item label="地域:" :label-width="80">
                <el-input v-model="area"/>
              </el-form-item>
              <el-form-item label="公司:" :label-width="80">
                <el-input v-model="company"/>
              </el-form-item>
              <el-form-item label="运行情况:" :label-width="80">
                <el-input v-model="itemStatus"/>
              </el-form-item>
        </el-form>
        <template #footer>;
          <span class="dialog-footer" style="displat:flex;">
            <div style="display:flex;margin-top:-50px;margin-left: 280px;">
                 <div @click="flag=false" style="background:grey;width:50px;
             border-radius: 5px;height:25px;
            color: white;font-size: 15px;font-weight: 600;
            text-align: center;cursor: pointer;">
            取消
          </div>
             <div @click="sure" style="background:#c62b26;width:50px;
                border-radius: 5px;height:25px;
                color: white;font-size: 15px;font-weight: 600;
                text-align: center;margin-left: 20px;cursor: pointer;">确定
                </div>
            </div>
           
          </span>
        </template>
      </el-dialog>
      <el-dialog v-model="flag2" title="修改项目内容">
          <el-form :model="form">
            <el-form-item label="项目名称:" :label-width="60" >
              <el-input v-model="detail.itemName" />
            </el-form-item>
            <el-form-item label="地域:" :label-width="60">
                  <el-input v-model="detail.area"/>
                </el-form-item>
                <el-form-item label="公司:" :label-width="60">
                  <el-input v-model="detail.company"/>
                </el-form-item>
                <el-form-item label="运行情况:" :label-width="80">
                  <el-input v-model="detail.itemStatus"/>
                </el-form-item>
          </el-form>
          <template #footer>;
            <span class="dialog-footer" style="displat:flex;">
              <div style="display:flex;margin-top:-50px;margin-left: 280px;">
                   <div @click="flag2 =false" style="background:grey;width:50px;
              border-radius: 5px;height:25px;
               color: white;font-size: 15px;font-weight: 600;
              text-align: center;cursor: pointer;">
              取消
             </div>
               <div @click="submit" style="background:#c62b26;width:50px;
                  border-radius: 5px;height:25px;
                  color: white;font-size: 15px;font-weight: 600;
                  text-align: center;margin-left: 20px;cursor: pointer;">确定
                  </div>
              </div>
           
            </span>
          </template>
        </el-dialog>
    <Menu style="position: fixed;top:45px; left: 0;bottom: 0;"></Menu>

</template>

<script setup>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import top from '@/components/top.vue'
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'
import {nanoid} from 'nanoid'
import {program} from '@/utils/api/buildmessage.js'
onBeforeMount(()=>{
 program().then(res=>{
   list.value=res.data
  console.log(res.data)
 })
})
let itemName=ref('')
let area=ref('')
let company=ref('')
let itemStatus =ref('')
let detail=reactive({
   itemName:'',
   area:'',
    company:'',
    itemStatus:'',
   itemId:''
})
let flag=ref(false)
let flag2=ref(false)
let list=ref([])
const sure=()=>{
   if (itemName.value ==''|| area.value == '' || company.value == '' || itemStatus.value == '') {
    alert('内容不能为空，请输入内容')
    return
  }
    list.value.push({itemId:nanoid(), itemName:itemName.value,area:area.value,company:company.value, itemStatus: itemStatus.value})
    flag.value=false
}
const layout=(v)=>{
list.value.splice(v,1)
}
const edit=(v)=>{
  flag2.value=true
detail.itemName=v.itemName
detail.area=v.area
detail.company=v.company
detail.itemStatus =v.itemStatus
detail.itemId=v.itemId
}
const submit=()=>{
  if(detail.itemName=='' || detail.area==''|| detail.company=='' || detail.itemStatus ==''){
  alert('内容不能为空，请输入内容')
    return
  }
  list.value.forEach(item=>{
if(item.itemId==detail.itemId){
  item.itemName=detail.itemName
  item.area=detail.area
  item.company=detail.company
  item.itemStatus =detail.itemStatus
  flag2.value=false
}
  })
}
</script>

<style scpoed>
.quanbu{
    background-color: #5a98de;
    background-color: #5eb95e;
    background-color: #c62b26;
}
.button{
    width:40px;height:25px;font-size:5px;
    line-height: 25px;
    color: white;
        background: red;
        margin-left: 10px;
        cursor: pointer;
        border-radius: 7px;

}
.table{
    margin-left: 140px;
  
}
tr{
    height:40px;
}
table,tr,th,td{
   width: 1200px;
    border:1px solid rgba(25, 96, 73,0.1);
}
td{
    border-left: none;
    border-right: none;
}
.content{
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    margin: 0 auto;
}
.x{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
}
</style>