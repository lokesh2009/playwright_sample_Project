function uploadvedio(vediodata,callbackupload){

console.log("Uploading vedio");

setTimeout(() => {
    console.log("Upload Done");
    callbackupload();
},3000);

}

function publishvedio(vediodata,publishcallback){
    console.log("Publishing vedio");

    setTimeout(() =>{
        console.log("publish Done");
        publishcallback();
    },2000);

}

function notified_subscriber(vediodata){
    console.log("Notification sent to subscriber");

}

const data ={
    title :"This is call back demo",
    description:"some desc about callback"
}

uploadvedio(data,function(uploaddata){
    publishvedio(uploaddata,function(publishdata){
        notified_subscriber(publishdata);
    })
})
