<template>
<div style="position:fixed;top:0;left:0;right:0;"><Header/></div>

<Menu style="position: fixed;top:45px; left: 0;bottom: 0;"></Menu>
 <div style="margin-left:115px;"><Contentone></Contentone></div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'
import Contentone from "@/views/content/Contentone.vue"
</script>

<style scoped>

</style>