
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxybU4xVXgvRGVNUDh0MFozTVBSWnE5amhxOVFIeFYzblNKWVZzSU5XST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0d4TGx3YVdKLysxNEtqWWNnSUo2U1ZLYnVsMS9SMlU0Y0NLZ1Mydlh3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR0xpdkpmYjd5Q3d1UzRIYWQyZzI3T2xTb0xqNHBqYmU3Y0RFeGJ2OUVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWnQvVEN1TC84OTd6cHJ4YXZaQ1ppaDVBWE5ydkVmYVNiR2ZZb0F5WmdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDbWlMMkkrUHZaMytPa1NYUTNyRzdOa2J1VUxxZVhWb25yL0kzUm1kSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx3WE0vcGNpWVZ4OVQzUUo5ajdYWE9Mek0yYUYxS1M1cTFDcDFEY2xLRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY085WmtSQmFaSklWK1VBTlp0ZUJudWg4TzZORmFLUFl6aU1xcldBN0xVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkRiR1IwaW1kOUtteEQ2QTZ6bnFyRTdXblM0Y0VXOStlUm5tL3ZnWmtIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVDZ2VHSlpNRU56NXB6RlVkSXFCZnJZSXFNY0tpdE5rYlArUGE3SzJQbW51MXdwa2hhYVNZUkV6enYzU3BwVndaQU1KcmxRZ3ZYbGVacUpra3NVN2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJrbWtaSDAvTjNlcjhKZDNuMnByWk1OUW1DYzk3UjBpcGUrK0pzSzlJNWhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkZjR3cmFMZVJRbVNrWXNHRWl5OUFBIiwicGhvbmVJZCI6Ijc0YzkyNWYzLWYxMjItNDY0NS1hYmZkLThhNjBhY2YxMzE1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVGRvUjNwbitNZnBTRTFlYjlqM21VUE1uUGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVo3QUc0SGZtdk1Rd3g0QndXYjZ0VHZJdU9VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZLUTRBTTVWIiwibWUiOnsiaWQiOiIyNTQ3NTkwODQ3MTE6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKb2huIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQeUprcG9HRUtLanFMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwcVcwKzZUeEJxL3lYVDVvTDNaMEVmcjUydGhyRjJMZzA1WURsSkU3Y0ZZPSIsImFjY291bnRTaWduYXR1cmUiOiJZcDJsdzRQeTVYeUE0VDhPK3ZzcFg0NWczQXF6ZWJud2xaTGVDdmFxSVVpTHVyd2p1YXJSRUhuaHpUY283d0h0cFFLcHNJRDdtYkhPQi9xNzZxWmtCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNlNhaFBBQzBzeXRkQklkTnZKR1k5MkFKbzdtQllQcEo0cmMyZHllNy9LTm54ek9PUkMrdHJ1a3UwMGw4MWpCWU13MSszT2pKWlRvdmwxZ3VmTWdMaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTkwODQ3MTE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhYWx0UHVrOFFhdjhsMCthQzkyZEJINitkcllheGRpNE5PV0E1U1JPM0JXIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzI0NTE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVuRCJ9" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
