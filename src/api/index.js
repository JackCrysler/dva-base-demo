// 获取登陆信息

export const getTokenApi=(username, password)=>{
    return new Promise((resolve,reject)=>{
        fetch('/student/login', {
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify({
                student_id: username,
                student_pwd:password
            })
        }).then(res=>res.json()).then(res=>{
            setTimeout(()=>{
                resolve(res)
            },2000)
            
        })
    })
}