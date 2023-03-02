<template>
  <div class="container">
    <div class="container-main">
<top></top>
<div class="container-main-bottom">
<div class="main-bottom-top">
  <div>欢迎使用H-ui.admin v1.0后台模版！</div>
  <div>登录次数：18</div>
  <div>上次登录IP：222.35.131.79.1 上次登录时间：2022-2-12 11:19:55</div>
</div>
</div>
<div class="main-bottom-media">
  <div class="media-nth1">
    <div style="width:95%;height: 33px;background: rgba(65,89,85,0.1);line-height: 33px;"><h3>信息统计</h3></div>
<table class="table">
  <thead style="background: rgba(65,89,85,0.1)">
    <tr>
      <th>统计</th>
      <th>资讯库</th>
      <th>图片库</th>
      <th>产品库</th>
      <th>用户</th>
      <th>管理员</th>
    </tr>
  </thead>
 <tbody>
  <tr>
      <td>总数</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
        <td>今日</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>昨日</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr> 
      <tr>
        <td>本周</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>本月</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
 </tbody>
  
</table>
  </div>
  <div class="media-nth2">
<table>
  <thead style="background: rgba(65,89,85,0.1)">
    
      <th style="border-right:0;">服务器信息</th>
    <th style="border-left:0;"></th>
    
  </thead>
  <tbody>
    <tr>
      <td style="font-weight:550">服务器计算机名</td>
      <td>1</td>
    </tr>
    <tr>
      <td>服务器IP地址</td>
      <td>1</td>
    </tr>
     <tr>
        <td>服务器域名</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器端口</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器IIS版本 </td>
        <td>1</td>
      </tr>
       <tr>
        <td>本文件所在文件夹</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器操作系统</td>
        <td>1</td>
      </tr>
       <tr>
        <td>系统所在文件夹</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器脚本超时时间</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器的语言种类</td>
        <td>1</td>
      </tr>
       <tr>
        <td>.NET Framework 版本</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器当前时间</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器IE版本</td>
        <td>1</td>
      </tr>
       <tr>
        <td>服务器上次启动到现在已运行</td>
        <td>1</td>
      </tr>
       <tr>
        <td>逻辑驱动器</td>
        <td>1</td>
      </tr>
       <tr>
        <td>CPU 总数</td>
        <td>1</td>
      </tr>
       <tr>
        <td>CPU 类型</td>
        <td>1</td>
      </tr>
       <tr>
        <td>虚拟内存</td>
        <td>1</td>
      </tr>
       <tr>
        <td>当前程序占用内存</td>
        <td>1</td>
      </tr>
       <tr>
        <td>Asp.net所占内存</td>
        <td>1</td>
      </tr>
       <tr>
        <td>当前Session数量</td>
        <td>1</td>
      </tr>
       <tr>
        <td>当前SessionID</td>
        <td>1</td>
      </tr>
      <tr>
        <td style="width:20%">当前系统用户名</td>
        <td>1</td>
      </tr>
  </tbody>
</table>
  </div>
</div>
<div style="border:0.3px solid rgba(59, 66  , 23, 0.1);margin-top:50px;width:100%;"></div>
<div class="footer">
  <span> 
    感谢jQuery、layer、laypage、Validform、UEditor、My97DatePicker、iconfont、Datatables、WebUploaded、icheck、highcharts、bootstrap-Switch
  Copyright
</span>
<span>
   ©2015-2017 H-ui.admin v3.1 All Rights Reserved.
</span>
 本后台系统由H-ui前端框架提供前端技术支持
</div>
    </div>
  </div>

</template>

<script setup>
import top from '@/components/top.vue'
</script>

<style scoped>
.container{
  width: 100%;
  min-height: 100%;

}
.container-main{
  width: 1265px;
  
}

.container-main-bottom{
  width: 100%;
  background:white;
}
.main-bottom-top{
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

}
.main-bottom-media{
  margin-left: 50px;
  margin-top: 30px;
  width: 100%;
}
.main-bottom-top :nth-child(1){
font-size: 25px;
margin-left: 0px;
width: 100%;
margin-left: 0;
}
.main-bottom-top :nth-child(2){
font-size: 14px;
width: 100%;
}
.main-bottom-top :nth-child(3){
font-size: 16px;
}
.table{
  border: 1px solid #ddd;
    width: 95%;
    margin-left: 0;
    border-collapse: collapse;
}
 .table tr,th,td{
border-collapse: collapse;
  border: 1px solid #ddd;
  height: 30px;
}
.media-nth2 table{
  border: 1px solid #ddd;
  width: 95%;
  margin-top: 30px;
     border-collapse: collapse;
}
.media-nth2 tr,th,td{
  border-collapse: collapse;
  border: 1px solid #ddd;
  height: 30px;
}
.footer{
  margin-top: 30px;
  font-size: 13px;
  color: gray;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  flex-direction: column;
}
</style>