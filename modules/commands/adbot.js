
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Việt Lê",
  description: "Thông tin AdminBot",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/87750190_876564969432540_2903419259558297600_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=N8E5wtQR8PkAX_pIH-n&_nc_ht=scontent.fdad2-1.fna&oh=ed79e3ad6ea92f124f37903dd5823ea8&oe=617E6ABA",
  ];
  var callback = () => api.sendMessage({body:`👤 Việt Lê
📱 Facebook:https://www.facebook.com/profile.php?id=100012371343281
Này Người Đẹp Bạn Có Thể like cho tôi chứ :3✨
`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };