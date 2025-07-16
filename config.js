const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IMMU-MD:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lyMm11bzIzWklKU1FiKzdObkpLL3Q3LzBicFR3a0hpZk0rK2dWbHJIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1ZURkJhQlgrMVV4QTlyK1VNZTM0aGpPVFVCM0p2dHhUOFhsbzN1UnN3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSkJsaW1BUFZjd01PREVYbUVrOXl0SjE1MnZ0NFlDKzJkWGo1LzZUSTNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlMlJjQlVVem1OTHBqdDAzOHFaemMzbDhwN2xTK1RlZ0UwY0IxVWxpT0VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDUVFIQ0ZKeld3T1NycjQ3QjBMMGo1dkY1cVQ3ZDdCcGs2b2JvUm9pa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5wdXJJelpJVDRDdnFHVmJjQ2V0bmQvZ2UvK1ZaKzU5M3JWNTEyQjVjbEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9mcGgyZXd4cHVjbEJiSHR1MzlucndnekttMjJLdlBKTzk1RmlBSEhYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlZ5WnBETjVMRzdWN1o5QmlMUStCTU5PZkVGRUNkTHd6dGx0TDZsS1pWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh4WVp5U0VSU1FMSlIyS3ZQa1VUMjY4MnRKQVdqb2h5TDlKMEJ1azYzb3NGdURjS0NwRU9HeTF6WU5VY3F1dnhmcm5wdzJsNmZ4MWpmRTRWYUd5MUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJFajltNUYyNW5COVVxRTFaME1OTW1DeHhDVnJYS0NhUGc0QkhQdndCdWRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDM1Njc4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMzVFRjdERkFFMkJBRUM0ODM1N0JCQTBEOENCRkYxQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNTA3Mjc1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDAzNTY3ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0ZGMEE5RTQ4MjA5NkJFQkRCN0RFQzI1NDI1MDQxRkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjUwNzI3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiMTRZVEtTRlQiLCJtZSI6eyJpZCI6IjkyMzMwMDM1Njc4NTo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc4NjkyNDQxOTI3OTA3OjhAbGlkIiwibmFtZSI6IvCflKXwn5SlQW5vbnltb3VzIFdhcnJpb3LigYnvuI/wn5qrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJKzk4b1lGRVBuRzFNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZUm5SMldvN3hldHJQcktJZFNxNG4wL3ZEOTgvYk5xc0x5aEU2RHd2OVV3PSIsImFjY291bnRTaWduYXR1cmUiOiJDcWtMamdidnBxNDZ4Zkllc0NONEVnZk1HRyswam8zdll6QS9KRVlGditLWE41S0FERkpQN0Z0USszay9VaGdDOXAwZU5XSnk2ejlnNVcraklyVEFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM09qR2ExWllIdURkQWNSai9Ka3hsMHdsa2tlaGsxRGxydUt1cnJkeGtkRE8yZVVWcm5zZDNiai9CYWM0QzR0MlArRzQzZGwrekJIdFVFZFVJU1ZERHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMDAzNTY3ODU6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXRVowZGxxTzhYcmF6NnlpSFVxdUo5UDd3L2ZQMnphckM4b1JPZzhML1ZNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI1MDcyNzAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVhCIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923427582273",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
