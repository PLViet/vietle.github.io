module.exports.config = {
	name: "checktt",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra lượt tương tác trong nhóm",
	commandCategory: "system",
	usages: "[all/tag]",
	cooldowns: 5,
    envConfig: {
        "maxColumn": 10
    }
};

module.exports.languages = {
    "vi": {
        "all": "%1/ %2 với %3 tin nhắn\n",
        "mention": "%1 đứng hạng %2 với %3 tin nhắn \n📩Facebook.com/MhTuanng203",
        "myself": "✨Bạn đang đứng hạng %1 với %2 tin nhắn \n 📩Facebook.com/MhTuanng203"
    },
    "en": {
        "all": "%1/ %2 with %3 messages\n",
        "mention": "%1 on top %2 with %3 messages",
        "myself": "You are on top %1 with %2 messages "
    }
}

module.exports.run = async function ({ args, api, event, Currencies, getText }) {
    var mention = Object.keys(event.mentions);
    try {
        const data = await api.getThreadInfo(event.threadID);
        if (args[0] == "all") {
            var number = 1, msg = "", storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            for (const lastData of exp)  msg += getText("all", number++, lastData.name, lastData.exp);
            return api.sendMessage(msg, event.threadID);
        }
        else if (mention[0]) {
            var storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});

            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(mention[0])) + 1;
            const infoUser = exp[rank - 1];
            return api.sendMessage(getText("mention", infoUser.name, rank, infoUser.exp), event.threadID);
        }
        else {
            var storage = [], exp = [];
            for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
            for (const user of storage) {
                const countMess = await Currencies.getData(user.id);
                exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
            }
            exp.sort(function (a, b) { return b.exp - a.exp });

            const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;
            const infoUser = exp[rank - 1];
            return api.sendMessage(getText("myself", rank, infoUser.exp), event.threadID);
        }
    } catch (e) { return console.log(e) }
}