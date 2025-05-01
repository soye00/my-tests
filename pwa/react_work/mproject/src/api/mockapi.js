import axios from "axios";

export const todosReq = {
    async delete(id) {
        const res = await axios.delete(`https://6809e0811f1a52874cde2bd6.mockapi.io/todos/${id}`);
        // console.log(res);
        return res.status;
    }
}