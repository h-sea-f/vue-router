<template>
    <div>
        <span >输入姓名</span><input type="text" v-model="userName">
        <button @click="addUserName">登录</button>
    </div>
</template>

<script>

    export default {
        name: 'Main',
        data() {
            return {
                userName: ""
            }
        },
        methods: {
            addUserName(){
                this.$store.commit('addUserName',this.userName)
                this.$router.push({path:'/home'})
            }
        }

    }
</script>

