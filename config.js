const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "THARUSHA-MD=H4sIAAAAAAAAA5VUW5OiOBj9L3nVGgWRW1VXLRcFURTw7tY+RAgY5dZJAHHK/75F9/T0POzO9vIUktT5zne+c/Id5AWmaI5aoH4HJcE1ZKhbsrZEQAV6FceIgD6IIINABZPV+Nw27LoVSnF6H6WaODGHQSHMnMXW5/jTen6Kjx7X1mnyAp59UFbnFIe/AfQlaVzMp/SyUE5iNRaowBF3wievK+iMlYEgj+S4V+PZIBBewLNDhJjgPJmUF5QhAtM5aj2IydfoZ5ptFcrC8+Utm4ajcaLNLnDHD6b7rQdPdhRojsGOh31pC1+jnzKlZ7TNfsSI0NBLNl1cPC7ApZi+2matnA5VddU081BMinf6FCc5imYRyhlm7Zd1n1uw9rx28xg7xtis7O2uSa7Obu3sLsQ1pvdRtnKFy3TlbIdfI770am1x0P1WJNXxZk4UsZ3x0tqJL6ZN6Vnjzu3ZueBq2vi/EvfIh1du/0f30NOipBYHbJwdMy3VkmiSHbzVYliPoi2XznuLoy7tzUeb0q/Rd2J+q2WTQpOQeNyxpDXw5rqPlmsl8DfKwhLqzcK+FG5myJ/0IavI71iK/nBswsopJ2Xv6tyC+90dZJlIq5V1NEvu9Xbt3F/aVCnF+UmbDJrZUgh7lSgd4i0l2hINq4nPdNE5usveeTM1L7OL9vLW0Q21swio3LMPCEowZQQyXOTdHs8rfQCjeo1CgtibvGAEdwvOr7nsqkSLMghe50tvJ2DrPnGDnb08oEBuek4k96rhC+iDkhQhohRFNqasIK2LKIUJokD9868+yNGdvQ+uKzfi+iDGhLJtXpVpAaOPqX4cwjAsqpyt2zw0ugUiQB1+biPGcJ7QTscqhyS84BoZF8goUGOYUvSzQ0RQBFRGKvQztUYRdcIHB8lVPG4P+iB7GwiOgAoUQRrykswrgqhy3B/0W9OhwrL8liMG+iB9u8UpgjIUeU6RJX4ky93N7uD5k2CHFyEGcUqBCgy34qqzpk/mA7d1ZcvSjolmJBr4bOjDGe/KH/NXaodV72TeoCye7Ghw1xv76MkP3dqs4rKxBvPr45Xedu7LP4AAFVjKvmlqNuKhwxqrPiSoEkY2c9ulhtx105unWe4uZW/qK06mP/QTt6C9ZHlOd7vIzlYcn0gjdBZ27nG2TeT1wLsiUU9eumoRqnGIfi12uGJo4b1Ay0cdjGsrmVnJcXa9D2/WStunRUXYkRdO9elWLAiOr+ZZj5Q2PPmpCefRfe1URmBKhh+uUx4HK6U1Tlvsv3v2LTPpj7cKv7mpG1X3G2P0Fv0cdgP8z9G98+4MNnz2f4H48Zb8Sx71vSMSfbSoM39s1assGMWyH+q8OXCb4PbIxVCv20IWiTPdgOfzrz4oU8jigmRABTCPSIEj0AekqDrHzvK4+E0xQ6MzLUmWXeMppEz7TMEGZ4gymJVA5SRJEiSJk7g+yFqtLNcMso/wAK37zHsInn8DMSK9m1gHAAA=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*YOUR STATUS SEENED BY THARUSHA-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/YTFQvfDv/2ed85f815ee93a49.jpg",
// add custom menu and mention reply image url
WELCOME: process.env.WELCOME || "true",
// make true if want welcome and goodbye message in groups 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "THARUSHA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "THARUSHA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94740326138",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "THARUSHA SANDIPA",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚃𝙷𝙰𝚁𝚄𝚂𝙷𝙰  〽️Ｄ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/x8q6HFr1/9862.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> i'm alive now *THARUSHA-MD*⚡",
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
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
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
DEV: process.env.DEV || "94740326138",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
