const data ={
    title:"Sample call back demo",
    description:"Sample description for callback"
}

function notificationSubscriber(vediodata){
    console.log("notification sent to subscriber"+ vediodata.title);
}

function uploadvedio(){
    return new Promise((resolve, rejects) =>{
        setTimeout(() => {
            const isuploaded = true;
            if(isuploaded = true){
                resolve("uploaded done")
            }else{
                rejects("uploaded failed")
            }
    },3000);
})
        
}

function publishvedio(){
    return new Promise((resolve, rejects) =>{
        setTimeout(() => {
            const ispublished = true;
            if(ispublished = true){
                resolve("published done")
            }else{
                rejects("published failed")
            }

    },1500);
})
        
}

async function videoUpload() 

{
    try{
      const uploadesStatus = await uploadvedio();
      console.log(uploadesStatus);
      const pubkishstatus = await publishvedio();
      console.log(pubkishstatus);
      notificationSubscriber(data);
      
    }catch (error ){
        console.log(error);
        }
    
}

videoUpload();