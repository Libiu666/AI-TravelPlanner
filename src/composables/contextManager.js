import {encode,decode} from 'gpt-tokenizer';

function countTokens(text){
    return encode(text).length;
}
export function trimMessagesbyTokens(messages,maxTokens){
    let total=0;
    let result=[];
    for(let i=messages.length-1;i>=0;i--){
        const m=messages[i];
        const tokens=countTokens(m.content);
        if(total+tokens>maxTokens){
            break;
        }
        total+=tokens;
        //核心改进，格式化输出，为content加入角色标识，使大模型理解对话逻辑
        const prefix=m.role==='user'?"用户：":"助手："
        result.unshift(`${prefix}${m.content}`)
    }
    return result.join('\n')
}
