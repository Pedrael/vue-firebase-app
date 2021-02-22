<template>
    Main, you are {{data}}
</template>

<script>

import firebase from 'firebase/app'
export default {
    name: 'Main',
    props: ['id'],
    data() {
        return {
            data: ""
        }
    },
    mounted() {
        if(firebase.auth().currentUser) {
            firebase.database().ref('users/'+this.id+'/role').on('value', (roleid) => {
                firebase.database().ref('roles/'+roleid.val()).on('value', (role) => {
                    this.data += role.val()
                })
            })
        }
        else {
            this.$router.push('/login')
        }
    }
}
</script>