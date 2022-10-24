<script setup lang="ts">
import {} from 'vue'
import { watvUser, isSigned } from 'boot/auth'

console.log('user', watvUser)
console.log('isLogin', isSigned)
</script>
<template>
    <q-page padding>
        <q-card>
            write
        </q-card>
        <q-page-sticky
            v-if="isSigned"
            position="bottom-right"
            :offset="[28,28]"
            :expand="false"
        >
            <q-btn >write {{ watvUser?.USER_NICKNM }}</q-btn>
        </q-page-sticky>
    </q-page>
</template>
