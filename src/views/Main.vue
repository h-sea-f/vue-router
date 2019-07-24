<template>
    <div id="main">
        <div>
            <span>输入姓名</span><input type="text" v-model="userName">
        </div>
        <div>
            <a-button type="primary" @click="addUserName">登录</a-button>
        </div>
        <!--        <a-button type="primary">Primary</a-button>-->
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
            addUserName() {
                this.$store.commit('addUserName', this.userName)
                this.$router.push({path: '/home'})
            }
        }

    }
</script>
<style scoped>
    #main {
        text-align: center;
        margin-top: 10%;
    }
</style>

