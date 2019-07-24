import axios from 'axios'
import {MUTATION} from "./mutation-types";
import {API} from "./api"
const url ="http://localhost:3001/todos";
export default {

    getItems({commit}) {
        API.getAllItem().then((response) => commit(''+[MUTATION[1]],response.data))
            .catch((error) => console.log(error))
    },
    addItem(context,item){
        API.addItem(item).then(response => context.commit('addItem',response.data))
            .catch((error) => console.log(error));
    },
    updateItem({dispatch},item){
      axios.patch(url+'/'+item.id,item).then(response => {
          console.log(response.data);
          dispatch('getItems')});
    },
    deleteItem({dispatch},id){
        axios.delete(url+'/'+id).then(response => dispatch('getItems'))
    }
}