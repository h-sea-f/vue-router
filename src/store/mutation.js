import {ADDITEM} from "./mutation-types";
import {UPDATE_ITEM} from "./mutation-types";
import {MUTATION} from "./mutation-types";

export default {
    [MUTATION[3]](state, item) {
        state.items.push(item);
    },
    [MUTATION[4]](state, updateItem) {
        state.items.filter((i) => {return i.id === parseInt(updateItem.id)})[0].content = updateItem.content;
    },
    [MUTATION[0]](state,status){
        state.status = status;
    },
    [MUTATION[1]](state,itemList) {
        state.items = itemList;
    },
    [MUTATION[2]](state,name){
      state.name = name;
    }
}