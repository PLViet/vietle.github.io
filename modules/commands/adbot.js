module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MhTuanng",
  description: "Thông tin AdminBot",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
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
"https://i.postimg.cc/L8gNDk7N/Nguyen-Manh-Tuan.jpg",
  ];
  var callback = () => api.sendMessage({body:`👤 Nguyễn Mạnh Tuấn
📍 Kiến Xương-Thái Bình
📱 Facebook:https://www.facebook.com/MhTuanng203
Này Người Đẹp Bạn Có Thể Donate cho Tôi Chứ?:3✨
💳Techcombank: 19037112966015
`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };