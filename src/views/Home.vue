<template>
    <div>
        <a-layout>
        <a-layout-sider :trigger="null"
                        collapsible
                        v-model="collapsed" style="background: #fff; padding: 0">
            <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
<!--                <a-menu-item key="1">-->
<!--                    <a-icon type="user" />-->
<!--                    <span>姓名：{{getUserName}}</span>-->
<!--                </a-menu-item>-->
                <a-menu-item key="2">
                    <a-icon type="rollback" />
                    <span>返回</span>
                    <router-link to="/"></router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="check-square" />
                    <span>TodoList列表</span>
                    <router-link to="/to-do-list">TodoList列表</router-link>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="user" />
                    <span>我的</span>
                    <router-link to="/my">我的</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
                <div style="float:right;padding-right: 10px">Hi:{{getUserName}}</div>
            </a-layout-header>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
        </a-layout>
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
        data(){
            return {
                collapsed: false,
            }
        },
        methods: {

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

