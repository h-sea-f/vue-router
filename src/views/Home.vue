<template>
    <div>
        <div>姓名：{{getUserName}}</div>
        <ol>
            <li><router-link to="/">返回</router-link>
            <li><router-link to="/to-do-list">TodoList列表</router-link></li>
            <li><router-link to="/my">我的</router-link></li>
        </ol>
        <div>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Home',
        computed: {
            getUserName:function() {
                return this.$store.state.name;
            }
        },
        beforeRouteLeave(to,from,next){
            const answer = window.confirm('确认返回欢迎页面吗')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

