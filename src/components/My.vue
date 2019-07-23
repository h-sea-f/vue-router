<template>
    <div>
        <p>姓名：{{getUserName}}</p>
        <p>电话号码:123</p>
    </div>
</template>

<script>

    export default {
        name: 'Main',
        computed: {
            getUserName:function() {
                return this.$store.state.name;
            }
        }

    }
</script>

