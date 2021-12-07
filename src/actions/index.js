import { SAVE_COMMENT } from "./type";


 const saveComment(comment)=>{
    return {
        type : SAVE_COMMENT,
        payload : {
            comment
        }
    }
}

export {saveComment};