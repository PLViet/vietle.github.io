const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "JRT",
  description: "goibot",
  commandCategory: "Không xài lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  var { threadID, messageID } = event;
  var tl = ["Hellooo em là bot", "Cái dề", "j á", "Yêu anh nhất", "Hi người đẹp", "có rồi!", "Sử dụng callad để liên lạc với admin!", "Em là bot cute phô mai que", "Nói gì thế bây bê", "Dạ", "Yêu anh nhất", "chị là bae của mng à", "Yêu chị nhất", "gáy nx đi em ", "Sao thế chồng của em", "á á á", "okiii", "Tuyển ghệ đẹp là được", "Bê đê à", "anh buồn à?", "Sao sao sao", "Bot cute phô mai que", "anh đẹp trai ok ko", "Đừng khen em ngại quá hí hí" ,"Làm chồng em ko ạ?", "Đừng spam(chạm vào) em :3", "Cút ra", "Làm Sao bạn êi", "Gáy đi", "Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", "Spam cái j, cút :3", "Yêu em hong?", "A vợ tương lai"];
  var rand = tl[Math.floor(Math.random() * tl.length)]



   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Ừ ok", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Next", threadID);
  };

  if ((event.body.toLowerCase() == "hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("hellooo", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("ừ lô bạn", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("hiiiiiii", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("hihi dạ", threadID);
  };

  if ((event.body.toLowerCase() == "chửi thử xem") || (event.body.toLowerCase() == "chửi thử xem")) {
    return api.sendMessage("️láo quá:<", threadID);
  };

  if ((event.body.toLowerCase() == "said tuấn:cút :))") || (event.body.toLowerCase() == "said tuấn:cut :))")) {
    return api.sendMessage("cút cút cútttttt", threadID);
  };

  if ((event.body.toLowerCase() == "vãi") || (event.body.toLowerCase() == "vai")) {
    return api.sendMessage("Vãi shit", threadID);
  };

  if ((event.body.toLowerCase() == "Alo") || (event.body.toLowerCase() == "alo")) {
    return api.sendMessage("Lô bạn êi", threadID);
  };

  if ((event.body.toLowerCase() == "Aloo") || (event.body.toLowerCase() == "aloo")) {
    return api.sendMessage("looooooooooooooooooo", threadID);
  };

  if ((event.body.toLowerCase() == "cứu") || (event.body.toLowerCase() == "cuu")) {
    return api.sendMessage("nói nghe", threadID);
  };

  if ((event.body.toLowerCase() == "gây war à") || (event.body.toLowerCase() == "gay war a")) {
    return api.sendMessage("Chửi nhau đê", threadID);
  };

  if ((event.body.toLowerCase() == "đi gây war") || (event.body.toLowerCase() == "di gay war")) {
    return api.sendMessage("Đánh nhau sẽ hay hơn", threadID);
  };

  if ((event.body.toLowerCase() == "thích gây war à") || (event.body.toLowerCase() == "thich gay war a")) {
    return api.sendMessage("Em nghĩ nắm đấm sẽ giải quyết đc)", threadID);
  };  

  if ((event.body.toLowerCase() == "hát đi mng") || (event.body.toLowerCase() == "hat di mng")) {
    return api.sendMessage("Umum hát đi m.n", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi") || (event.body.toLowerCase() == "hat di")) {
    return api.sendMessage("hát đi m.n ơiiiiii", threadID);
  };  

  if ((event.body.toLowerCase() == "bot hát đi") || (event.body.toLowerCase() == "bot hat di")) {
    return api.sendMessage("Điều anh luôn giữ kín trong tim\nThương em đôi mắt ước nhòa\nĐiều anh luôn giữ kín trong tim này\nThương em ngồi đó khóc òa\nĐiều anh luôn giữ kín trong tim này\nNgày mai nắng gió sương ngâm\nCó ai thương, lắng lo cho em?", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi nào") || (event.body.toLowerCase() == "hát đi nào")) {
    return api.sendMessage("hát điiii mà", threadID);
  };

  if ((event.body.toLowerCase() == "hát đi bot") || (event.body.toLowerCase() == "hat di bot")) {
    return api.sendMessage("Chúng taaa... là áng mây trên trời vội vàng ngang qua\nChúng taaa... chẳng thể nâng niu những câu thề\nCứ như vậy thôi, không một lời lặng lẽ chia xa\nChiều mưa bên hiên vắng buồn\nCòn ai thương ai mong aiii?", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️Box flop quá", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("️Em nghĩ nà nọc nem đi", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("️Kick kick kick", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("️Mơ em nha", threadID);
  };

  if ((event.body.toLowerCase() == "m là ai vậy bot") || (event.body.toLowerCase() == "m la ai v bot")) {
    return api.sendMessage("️Admin là Việt Lê có gì dùng lệnh -ad hoặc -adm để biết thêm chi tiết", threadID);
  };
  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("️Lọc mem đeee", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop đi")) {
    return api.sendMessage("️lời khuyên của em là flop box đi=))", threadID);
  };

  if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "con cc")) {
    return api.sendMessage("️Đâu có không vạch ra xem nào", threadID);
  };

  if ((event.body.toLowerCase() == "cl") || (event.body.toLowerCase() == "cl")) {
    return api.sendMessage("️Eo ơi ghê thế", threadID);
  };

  if ((event.body.toLowerCase() == "vcl") || (event.body.toLowerCase() == "vcl")) {
    return api.sendMessage("️Eo ơi tởm thế", threadID);
  };

  if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
    return api.sendMessage("️Sao em iu", threadID);
  };

  if ((event.body.toLowerCase() == "bot ngu") || (event.body.toLowerCase() == "bot ngu")) {
    return api.sendMessage("️Ghen tị với vẻ đẹp tao chứ gì", threadID);
  };
 if ((event.body.toLowerCase() == "cười") || (event.body.toLowerCase() == "cuoi")) {
    return api.sendMessage("️cười qq nek :3", threadID);
  };
  if ((event.body.toLowerCase() == "ngáo à bot") || (event.body.toLowerCase() == "ngáo à bot")) {
    return api.sendMessage("️ns cái j :)", threadID);
  };
 if ((event.body.toLowerCase() == "tuấn") || (event.body.toLowerCase() == "Tuấn")) {
    return api.sendMessage("️Anh @Nguyễn Tuấn ơi ra đây e bảo :3", threadID);
  };
  if ((event.body.toLowerCase() == "c*c") || (event.body.toLowerCase() == "c*c")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi", threadID);
  };

  if ((event.body.toLowerCase() == "khóc") || (event.body.toLowerCase() == "khok")) {
    return api.sendMessage("️Ai, ai làm chồng em khóc!", threadID);
  };

  if ((event.body.toLowerCase() == "tuấn ơi") || (event.body.toLowerCase() == "ong tuan")) {
    return api.sendMessage("️Cha này bê đê", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("️Chuẩn mà vừa xinh,vừa cute phô mai queee", threadID);
  };

  if ((event.body.toLowerCase() == "hahaha") || (event.body.toLowerCase() == "hahah")) {
    return api.sendMessage("️Hahahahhahahahahahaaaaaa", threadID);
  };

  if ((event.body.toLowerCase() == "kkkk") || (event.body.toLowerCase() == "kkkk")) {
    return api.sendMessage("️kakakakakakaka", threadID);
  };

  if ((event.body.toLowerCase() == "con ciu") || (event.body.toLowerCase() == "con ciu")) {
    return api.sendMessage("️Đâu đưa xem :3", threadID);
  };

  if ((event.body.toLowerCase() == "cái l") || (event.body.toLowerCase() == "cai l")) {
    return api.sendMessage("️Văn minh chút đi bạn ơi :)", threadID);
  };

  if ((event.body.toLowerCase() == "mấy thk trẩu trong rank") || (event.body.toLowerCase() == "mấy thằng trẩu trong rank")) {
    return api.sendMessage("️để em đập từng thk cho chồng :3", threadID);
  };

  if ((event.body.toLowerCase() == "đm") || (event.body.toLowerCase() == "dm")) {
    return api.sendMessage("️chửi nhau đê", threadID);
  };

  if ((event.body.toLowerCase() == "đm bot") || (event.body.toLowerCase() == "dm bot")) {
    return api.sendMessage("️Chửi ai? ngon chửi lại lần nx coi!", threadID);
  };
if ((event.body.toLowerCase() == "đmm") || (event.body.toLowerCase() == "dmm")) {
    return api.sendMessage("️á à thk này đc! :)", threadID);
  };
  if ((event.body.toLowerCase() == "bot ới") || (event.body.toLowerCase() == "bot ới")) {
    return api.sendMessage("️hể,sao đấy", threadID);
  };
if ((event.body.toLowerCase() == "bot ngáo") || (event.body.toLowerCase() == "bot ngáo")) {
    return api.sendMessage("️ns ai ngáo?? :)", threadID);
  };
  if ((event.body.toLowerCase() == "clmm") || (event.body.toLowerCase() == "clmm")) {
    return api.sendMessage("️Bớt chửi thề cho nên người đi bạn", threadID);
  };

  if ((event.body.toLowerCase() == "ai khóc nỗi đau này") || (event.body.toLowerCase() == "ai khok nỗi đau này")) {
    return api.sendMessage("️cộng 1", threadID);
  };

  if ((event.body.toLowerCase() == "bot còn yêu anh không") || (event.body.toLowerCase() == "bot yeu anh khong")) {
    return api.sendMessage("Em có", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Thằng đấy bê đê yêu làm mẹ gì", threadID);
  };

  if ((event.body.toLowerCase() == "bot có ny chx") || (event.body.toLowerCase() == "bot co ny chx")) {
    return api.sendMessage("E chưa nè, yêu em đi!", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("okok, bạn là nhất", threadID);
  };
if ((event.body.toLowerCase() == "đánh thk tuấn hộ a") || (event.body.toLowerCase() == "đánh thk tuấn hộ a")) {
    return api.sendMessage("ok a, để e xử nó hihi", threadID);
  };
  if ((event.body.toLowerCase() == "đánh nó hộ a") || (event.body.toLowerCase() == "đánh nó hộ a")) {
    return api.sendMessage("ok a, để e xử nó :)", threadID);
  };
  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("k-i-c-k bé đi :3, xem giám ko", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi ai đấy") || (event.body.toLowerCase() == "bot chui ai day")) {
    return api.sendMessage("Chửi mày đấy sao nào", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Zui gần chết", threadID);
  };

  if ((event.body.toLowerCase() == "bot yêu nó à") || (event.body.toLowerCase() == "bot co yeu no a")) {
    return api.sendMessage("Không, cút cút cút", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot ngủ đi")) {
    return api.sendMessage("Em chưa bùn ngủ :3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Em chưa, mua gì ngon ngon cho em đi", threadID);
  };
if ((event.body.toLowerCase() == "mng ăn j chx") || (event.body.toLowerCase() == "mng ăn chx")) {
    return api.sendMessage("Chưa,bao đi :3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Không", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương anh ko") || (event.body.toLowerCase() == "bot co thuong anh ko")) {
    return api.sendMessage("Có, bé thương a nhất 🥰", threadID);
  };

  if ((event.body.toLowerCase() == "bot có link fb của admin ko") || (event.body.toLowerCase() == "bot co link fb của admin ko")) {
    return api.sendMessage("Dĩ nhiên rôi anh ấy là admin của em mà\nLink fb nó này: https://www.facebook.com/profile.php?id=100012371343281", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("em chịu", threadID);
  };

  if ((event.body.toLowerCase() == "vcl bot") ||  (event.body.toLowerCase() == "vcl bot")) {
    return api.sendMessage("Sao, ghen tị với vẻ đệp của bé hả?", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("Là cục shit hả?", threadID);
  };
 if ((event.body.toLowerCase() == ":)") || (event.body.toLowerCase() == ":))")) {
    return api.sendMessage("Cười đểu vcl :3", threadID);
  };
 if ((event.body.toLowerCase() == "bot vừa ns j anh đấy") || (event.body.toLowerCase() == "bot vua noi j anh day")) {
    return api.sendMessage("Dạ, em có nói j đôu🙄", threadID);
  };
  if ((event.body.toLowerCase() == "chúc a ấy đi bot") || (event.body.toLowerCase() == "chuc a ay di bot")) {
    return api.sendMessage("Chúc a sớm lên top VN, nhưng sau e 😋", threadID);
  };
  if ((event.body.toLowerCase() == "chúc anh ấy đi bot") || (event.body.toLowerCase() == "chuc bn ay di bot")) {
    return api.sendMessage("Chúc sớm bay acc", threadID);
  };
  if ((event.body.toLowerCase() == "chúc mng btvv đi bot") || (event.body.toLowerCase() == "chúc mng bsvv đi bot")) {
    return api.sendMessage("Chúc mng bưởi sáng(tối) vui vẻ ạ", threadID);
  };
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}


module.exports.run = function({ api, event, client, __GLOBAL }) { }
