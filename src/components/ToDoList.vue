<template>
    <div id="app" class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p><em>Simple Todo List with adding and filter by diff status.</em></p>
        </div>
        <div>
            <input type="text" class="input-text" name="ListItem" v-model="item">
            <div id="button" @click="addItem">Add</div>
        </div>
        <todolist></todolist>
        <foot ></foot>
    </div>
</template>

<script>
    import todolist from './List.vue'
    import foot from './Foot.vue'
    export default {
        name: 'ToDoList',
        components: {
            todolist,
            foot
        },
        data() {
            return {
                items: [],
                item: "",
                itemsCopy:[],
            }
        },
        methods: {
            addItem(){
                this.$store.dispatch('addItem',{content:this.item,completed:false,id:Date.parse(new Date())})
                // this.$store.commit('addItem',{content:this.item,isChecked:false,id:Date.parse(new Date())});
                this.item = "";

            },
        },
        mounted() {
            this.$store.dispatch('getItems');
        }
    }
</script>

<style>
    @import url('../css/app.css');
</style>
