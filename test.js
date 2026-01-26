//手写promise.all()方法
function myPromisesAll(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            reject(new Error('promises must be ans array'))
        }
        const result=[];//用于存储resolved结果
        let completed = 0;//用于记录已成功的promise数量
        if(promises.length===0){
            return resolve(result);//如果promises为空，直接返回空数组
        }
        promises.forEach((promise,index)=>{
            //确保每一个item是一个promise
            Promise.resolve(promise).then(value=>{
                result[index]=value;//将成功的结果存入对应的索引
                completed++;//已完成数量+1

                //如果所有promise都成功了，则resolve
                if(completed===promises.length){
                    resolve(result);
                }
            }).catch(error=>{
                //只要一个promise被拒绝，调用reject
                reject(error)
            })

        })

    })
}
const promise1=Promise.resolve(3);
const promise2=42;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,100,'foo')
})
myPromisesAll([promise1,promise2,promise3]).then(values=>{
    console.log(values)
}).catch((error)=>{
    console.error(error)
})