//////////////////////////////////////////////////////
//================== AUTO RESTART ==================//
/////////////////////////////////////////////////////
const timerestart = 120 //tính theo phút

//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("helyt");
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json'))
    .dependencies;
const listbuiltinModules = require("module")
    .builtinModules;

global.client = new Object({
    commands: new Map()
    , events: new Map()
    , cooldowns: new Map()
    , eventRegistered: new Array()
    , handleSchedule: new Array()
    , handleReaction: new Array()
    , handleReply: new Array()
    , mainPath: process.cwd()
    , configPath: new String()
});

global.data = new Object({
    threadInfo: new Map()
    , threadData: new Map()
    , userName: new Map()
    , userBanned: new Map()
    , threadBanned: new Map()
    , commandBanned: new Map()
    , threadAllowNSFW: new Array()
    , allUserID: new Array()
    , allCurrenciesID: new Array()
    , allThreadID: new Array()
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();

//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
} catch {
    if (existsSync(global.client.configPath.replace(/\.json/g, "") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g, "") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    } else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
} catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' }))
    .split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}

try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
} catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////

function _0x2b25() { const e = ["env", "timeStart", "4dLvpCQ", "dependencies", "models", ".temp", "908246YFhcDk", "configModule", "errorFormat", "some", "/modules/commands/", "commands", "loadedPackage", "commandCategory", "finishLoadModule", "api", "nameExist", "includes", "warn", "6727170rdVjiJ", "name", "config", "ERROR", "FCAOption", "eventDisabled", "undefined", "npm --package-lock false --save install", "cantOnload", "log", "size", "1092909eUrGsM", "=== ", "endsWith", "configPath", "nodemodules", "notFoundPackage", "envConfig", "node_modules", "loadedConfig", "3833442SmEBJf", "object", "handleListen", "client", "991092HiXUCH", "type", "loader", "successLoadModule", "./includes/listen", "stringify", "listenMqtt", "mirai", "has", "21MiQZSF", "events", "now", "error", "onLoad", "hasOwnProperty", "run", "/modules/events", "languages", "\n██████╗░██████╗░░█████╗░░██████╗██╗░░░░░\n██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░░░░\n██████╦╝██████╔╝███████║╚█████╗░██║░░░░░\n██╔══██╗██╔══██╗██╔══██║░╚═══██╗██║░░░░░\n██████╦╝██║░░██║██║░░██║██████╔╝███████╗\n╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝\n", "commandDisabled", "presence", ".js", "npm ---package-lock false --save install", "filter", "version", "appState", "failLoadModule", "mainPath", "example", "5462400jDGTvt", "notFoundLanguage", "ms ===", "J-JRT", "getText", "read_receipt", "/modules/commands", "push", "cantInstallPackage", "41260320NJiAVy", "nodemodule", "1.2.15"]; return (_0x2b25 = function () { return e })() }

function _0x34ae(e, o) { const l = _0x2b25(); return (_0x34ae = function (e, o) { return l[e -= 443] })(e, o) }

function onBot({ models: e }) {
    const o = _0x34ae
        , l = {};
    l[o(516)] = appState, login(l, async (l, n) => {
        const a = o;
        if (l) return logger(JSON.stringify(l), a(470));
        n.setOptions(global[a(469)][a(471)]), writeFileSync(appStateFile, JSON[a(496)](n.getAppState(), null, "\t")), global[a(469)][a(515)] = a(447), global[a(490)].timeStart = (new Date)
            .getTime()
            , function () {
                const o = a
                    , l = readdirSync(global[o(490)][o(518)] + o(526))[o(514)](e => e[o(480)](o(512)) && !e[o(465)](o(519)) && !global[o(469)][o(510)][o(465)](e));
                for (const a of l) try {
                    var r = require(global[o(490)][o(518)] + o(458) + a);
                    if (!r[o(469)] || !r[o(506)] || !r[o(469)][o(461)]) throw new Error(global[o(524)](o(498), "errorFormat"));
                    if (global[o(490)][o(459)][o(499)](r.config[o(468)] || "")) throw new Error(global[o(524)](o(498), o(464)));
                    if (r[o(508)] && typeof r[o(508)] == o(488) && 0 != Object.keys(r[o(508)])
                        .length || logger[o(493)](global[o(524)](o(498), o(521), r[o(469)].name), o(466)), r[o(469)].dependencies && typeof r[o(469)].dependencies == o(488)) {
                        for (const e in r.config[o(451)]) {
                            const l = join(__dirname, "nodemodules", o(485), e);
                            try { global[o(446)].hasOwnProperty(e) || (listPackage.hasOwnProperty(e) || listbuiltinModules[o(465)](e) ? global[o(446)][e] = require(e) : global.nodemodule[e] = require(l)) } catch {
                                var t, i = !1;
                                logger[o(493)](global[o(524)](o(498), "notFoundPackage", e, r[o(469)][o(468)]), "warn"), execSync(o(513) + " " + e + ("*" == r[o(469)].dependencies[e] || "" == r[o(469)][o(451)][e] ? "" : "@" + r[o(469)].dependencies[e]), { stdio: "inherit", env: process[o(448)], shell: !0, cwd: join(__dirname, o(482)) });
                                for (let n = 1; n <= 3; n++) { try { require.cache = {}, listPackage[o(505)](e) || listbuiltinModules[o(465)](e) ? global[o(446)][e] = require(e) : global.nodemodule[e] = require(l), i = !0; break } catch (e) { t = e } if (i || !t) break }
                                if (!i || t) throw global[o(524)]("mirai", "cantInstallPackage", e, r[o(469)].name, t)
                            }
                        }
                        logger[o(493)](global[o(524)](o(498), o(460), r.config[o(468)]))
                    }
                    if (r[o(469)].envConfig) try {
                        for (const e in r[o(469)][o(484)]) typeof global.configModule[r[o(469)][o(468)]] == o(473) && (global.configModule[r[o(469)][o(468)]] = {}), typeof global[o(469)][r[o(469)][o(468)]] == o(473) && (global[o(469)][r[o(469)][o(468)]] = {}), typeof global.config[r.config[o(468)]][e] !== o(473) ? global.configModule[r[o(469)][o(468)]][e] = global[o(469)][r[o(469)][o(468)]][e] : global[o(455)][r[o(469)][o(468)]][e] = r.config[o(484)][e] || "", typeof global[o(469)][r[o(469)][o(468)]][e] == o(473) && (global[o(469)][r.config.name][e] = r.config[o(484)][e] || "");
                        logger[o(493)](global.getText(o(498), o(486), r.config[o(468)]))
                    } catch (e) { throw new Error(global[o(524)](o(498), o(486), r.config.name, JSON[o(496)](e))) }
                    if (r[o(504)]) try {
                        const l = {};
                        l[o(463)] = n, l[o(452)] = e, r.onLoad(l)
                    } catch (e) { throw new Error(global[o(524)](o(498), o(475), r[o(469)][o(468)], JSON[o(496)](e)), "error") } r.handleEvent && global[o(490)].eventRegistered[o(443)](r[o(469)][o(468)]), global[o(490)][o(459)].set(r[o(469)][o(468)], r), logger[o(493)](global[o(524)]("mirai", "successLoadModule", r[o(469)][o(468)]))
                } catch (e) { logger.loader(global[o(524)](o(498), o(517), r[o(469)][o(468)], e), o(503)) }
            }()
            , function () {
                const o = a
                    , l = readdirSync(global[o(490)][o(518)] + o(507))
                    .filter(e => e[o(480)](".js") && !global[o(469)][o(472)].includes(e));
                for (const a of l) try {
                    var r = require(global[o(490)][o(518)] + "/modules/events/" + a);
                    if (!r.config || !r[o(506)]) throw new Error(global[o(524)](o(498), o(456)));
                    if (global.client[o(501)][o(499)](r.config[o(468)])) throw new Error(global[o(524)]("mirai", o(464)));
                    if (r[o(469)][o(451)] && "object" == typeof r.config[o(451)]) {
                        for (const e in r[o(469)].dependencies) {
                            const l = join(__dirname, o(482), "node_modules", e);
                            try { global[o(446)][o(505)](e) || (listPackage.hasOwnProperty(e) || listbuiltinModules.includes(e) ? global.nodemodule[e] = require(e) : global.nodemodule[e] = require(l)) } catch {
                                let n, a = !1;
                                logger[o(493)](global[o(524)](o(498), o(483), e, r.config[o(468)]), "warn"), execSync(o(474) + e + ("*" == r[o(469)][o(451)][e] || "" == r[o(469)].dependencies[e] ? "" : "@" + r[o(469)][o(451)][e]), { stdio: "inherit", env: process[o(448)], shell: !0, cwd: join(__dirname, "nodemodules") });
                                for (let r = 1; r <= 3; r++) {
                                    try {
                                        if (require.cache = {}, global[o(446)][o(465)](e)) break;
                                        listPackage[o(505)](e) || listbuiltinModules[o(465)](e) ? global.nodemodule[e] = require(e) : global[o(446)][e] = require(l), a = !0;
                                        break
                                    } catch (e) { n = e }
                                    if (a || !n) break
                                }
                                if (!a || n) throw global[o(524)](o(498), o(444), e, r[o(469)][o(468)])
                            }
                        }
                        logger[o(493)](global[o(524)]("mirai", o(460), r.config[o(468)]))
                    }
                    if (r[o(469)][o(484)]) try {
                        for (const e in r[o(469)].envConfig) void 0 === global[o(455)][r.config.name] && (global.configModule[r[o(469)][o(468)]] = {}), typeof global[o(469)][r[o(469)][o(468)]] == o(473) && (global.config[r[o(469)][o(468)]] = {}), typeof global[o(469)][r[o(469)][o(468)]][e] !== o(473) ? global[o(455)][r[o(469)].name][e] = global[o(469)][r.config.name][e] : global[o(455)][r.config.name][e] = r.config[o(484)][e] || "", typeof global[o(469)][r[o(469)][o(468)]][e] == o(473) && (global[o(469)][r[o(469)][o(468)]][e] = r[o(469)].envConfig[e] || "");
                        logger[o(493)](global[o(524)]("mirai", o(486), r.config.name))
                    } catch (e) { throw new Error(global[o(524)](o(498), o(486), r[o(469)].name, JSON[o(496)](e))) }
                    if (r[o(504)]) try {
                        const l = {};
                        l[o(463)] = n, l[o(452)] = e, r[o(504)](l)
                    } catch (e) { throw new Error(global.getText(o(498), "cantOnload", r[o(469)][o(468)], JSON.stringify(e)), o(503)) } global[o(490)][o(501)].set(r[o(469)][o(468)], r), logger[o(493)](global.getText(o(498), o(494), r[o(469)][o(468)]))
                } catch (e) { logger[o(493)](global[o(524)]("mirai", o(517), r[o(469)][o(468)], e), "error") }
            }(), logger[a(493)](global[a(524)](a(498), a(462), global.client[a(459)][a(477)], global[a(490)][a(501)].size)), logger.loader(a(479) + (Date[a(502)]() - global[a(490)][a(449)]) + a(522)), writeFileSync(global[a(490)].configPath, JSON.stringify(global[a(469)], null, 4), "utf8"), unlinkSync(global[a(490)][a(481)] + a(453));
        const r = {};
        r.api = n, r[a(452)] = e;
        const t = require(a(495))(r);
        global[a(489)] = n[a(497)](function (e, o) { const l = a; return e ? logger(global[l(524)](l(498), "handleListenError", JSON[l(496)](e)), "error") : [l(511), "typ", l(525)][l(457)](e => e == o[l(492)]) ? void 0 : (1 == global.config.DeveloperMode && console[l(476)](o), t(o)) }), logger(a(509), a(523)), logger("CÓ HÀNH VI THAY ĐỔI SOURCE CODE THÌ HÃY TỪ BỎ", a(523)), logger("CHÚC ANH EM CÓ MỘT NGÀY TỐT LÀNH", "J-JRT")
    })
}! function (e, o) {
    const l = _0x34ae
        , n = _0x2b25();
    for (;;) try {
        if (965636 === -parseInt(l(454)) / 1 + -parseInt(l(487)) / 2 + -parseInt(l(478)) / 3 * (-parseInt(l(450)) / 4) + -parseInt(l(467)) / 5 + parseInt(l(491)) / 6 * (-parseInt(l(500)) / 7) + parseInt(l(520)) / 8 + parseInt(l(445)) / 9) break;
        n.push(n.shift())
    } catch (e) { n.push(n.shift()) }
}();

//////////////////////////////////////////////
//========= Connecting to Database =========//
//////////////////////////////////////////////

function _0xbce0(e, t) { const n = _0x200f(); return (_0xbce0 = function (e, t) { return n[e -= 332] })(e, t) }

function _0x200f() { const e = ["sequelize", "stringify", "successConnectDatabase", "5881379hWITvR", "6MhEeyL", "443658PPsqKi", "./includes/database/model", "mirai", "1176560CVWpJj", "8MEliXQ", "getText", "2702364IpijdA", "Sequelize", "4915265UPfuFy", "876807NBnzPD", "15689313ndwBUD"]; return (_0x200f = function () { return e })() }(function (e, t) {
    const n = _0xbce0
        , s = _0x200f();
    for (;;) try {
        if (495938 === parseInt(n(334)) / 1 + parseInt(n(340)) / 2 * (parseInt(n(341)) / 3) + -parseInt(n(344)) / 4 + -parseInt(n(333)) / 5 + -parseInt(n(347)) / 6 + parseInt(n(339)) / 7 * (-parseInt(n(345)) / 8) + parseInt(n(335)) / 9) break;
        s.push(s.shift())
    } catch (e) { s.push(s.shift()) }
})(), (async () => {
    const e = _0xbce0;
    try {
        await sequelize.authenticate();
        const t = {};
        t[e(332)] = Sequelize, t[e(336)] = sequelize;
        const n = require(e(342))(t);
        logger(global.getText(e(343), e(338)), "DATABASE");
        const s = {};
        s.models = n, onBot(s)
    } catch (t) { logger(global[e(346)](e(343), e(338), JSON[e(337)](t)), "DATABASE") }
})();
