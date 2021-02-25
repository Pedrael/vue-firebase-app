<template>
    <div class="layout light flex">
        <div class="tabs-list" v-if="tabsList.length > 0">
            <template v-for="(tab, i) in tabsList" v-bind:key="tab.name">
                <div class="tab center" 
                v-if="tab.rights == role || tab.rights == 'all'"
                v-bind:class="{ active: i === current.i }" 
                v-on:click="selectTab(i)"
                >{{tab.name}}</div>
            </template>
        </div>
        <div class="content-container">
            <component v-if="current.component" v-bind:is="current.component"></component>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase/app'
import About from '@/views/About.vue'
export default {
    name: 'Main',
    props: ['id'],
    components: {
        About
    },
    data() {
        return {
            role: "",
            current: {
                component: undefined,
                i: undefined
            },
            tabsList: []
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            firebase.database().ref('users/'+this.id+'/role').on('value', (roleid) => {
                firebase.database().ref('roles/'+roleid.val()).on('value', (role) => {
                    this.role += role.val()
                    this.tabsList = this.$store.getters.getTabsList
                    this.selectTab(0)
                })
            })
        }
        else {
            this.$router.push('/login')
        }
    },
    methods: {
        selectTab(i) {
            if(!this.tabsList[i].active) {
                this.tabsList.forEach((tab, j) => {
                    if(i == j) {
                        this.current.i = i
                        this.current.component = tab?.component
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    [v-cloak] {
        display: none;
    }
    .tabs-list {
        min-height: 100vh;
        width: 250px;
        background: #2a2a2e;

        .tab {
            width: 100%;
            height: 50px;
            color: #dedede;
            border: 1px solid #dedede;
            border-radius: 16px 0 0 16px;
            background: #2a2a2e;
            cursor: pointer;
        }

        .tab.active {
            color: #2a2a2e;
            background: #dedede;
        }
    }

    .content-container {
        min-height: 100vh;
        min-width: calc(100vw - 250px);
    }
</style>