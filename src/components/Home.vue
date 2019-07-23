<template>
    <div>
        <div>姓名：{{getUserName}}</div>
        <ol>
            <li><a href="/" onclick="return confirm('确认返回吗')">返回</a></li>
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
        }
    }
</script>

