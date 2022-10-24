<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const id = ref('kimjin0')
const pwd = ref('rkskekfk@13')
const gb = ref('vf3')
const lang = ref('ko')
const watvUser = ref<object|null>(null)
const onLogin = async () => {
  const { data } = await axios.post('http://172.17.73.66:70/login/watv', { id: id.value, pwd: pwd.value, site_gb: gb.value, language_gb_sn: lang.value })
  watvUser.value = data
  console.log(watvUser.value)
}
const onLogout = () => {
  watvUser.value = null
}
</script>
<template>
    <q-btn
        round
        color="info"
        v-if="watvUser"
    >
        <q-avatar size="32px" >
            <q-btn icon="mdi-login" label=" flat color="primary"></q-btn>

        <q-menu>
            <q-card>
                <q-list>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="mdi-account"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>이름</q-item-label>
                            <q-item-label caption>
                                김진형
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section avatar>
                            <q-icon name="mdi-email"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>이메일</q-item-label>
                            <q-item-label caption>
                                pkimjin0q@gmail.com
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-card-actions align="right">
                    <q-btn icon="mdi-logout" label="로그아웃" flat color="primary" @click="onLogout"></q-btn>
                </q-card-actions>
            </q-card>

        </q-menu>
        </q-avatar>
    </q-btn>
    <q-btn
        v-else
        round
        color="info"
        @click="onLogin"
    >
        <q-avatar
            icon="mdi-login"
            size="32px"
        />
    </q-btn>

</template>
