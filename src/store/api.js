import request from './request'

export const API = {
    getAllItem(){
    return request.get('http://localhost:3001/todos');
    },
    addItem(param){
        return request.post('http://localhost:3001/todos',param)
    }
};
