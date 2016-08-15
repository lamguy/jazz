function foo() {
  with(something) {
    inside(123);
  }
}

var Syntax = require('../src/syntax');
var syntax = new Syntax;

var x=5/5;
var code = '/* above */\n\nvar foo = "bar";\n\n'
  // + broken3.toString() + '\n\n'
  // + broken2.toString() + '\n\n'
  + broken.toString() + '\n\n'
  + sample.toString();

var div = document.createElement('div');
div.className = 'code';

syntax.set(code);

var offset = 125;
var html = syntax.highlight(code.slice(offset), offset);

div.innerHTML = html;

document.body.appendChild(div);


function sample(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             // ` class="${cls}"`;
  } catch (e) {
    // handle exception
  }

  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

function broken() {
// foo
// foo

/*

something comment

*/

var foo;

/*
some other comment
*/

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});
}

function broken2() {
// Generated by `tools/generate-identifier-regex.js`.

var nonASCIIidentifierStartChars = "ÂªÂµÂºÃ€-Ã–Ã˜-Ã¶Ã¸-ËË†-Ë‘Ë -Ë¤Ë¬Ë®Í°-Í´Í¶Í·Íº-Í½Í¿Î†Îˆ-ÎŠÎŒÎŽ-Î¡Î£-ÏµÏ·-ÒÒŠ-Ô¯Ô±-Õ–Õ™Õ¡-Ö‡×-×ª×°-×²Ø -ÙŠÙ®Ù¯Ù±-Û“Û•Û¥Û¦Û®Û¯Ûº-Û¼Û¿ÜÜ’-Ü¯Ý-Þ¥Þ±ßŠ-ßªß´ßµßºà €-à •à šà ¤à ¨à¡€-à¡˜à¢ -à¢²à¤„-à¤¹à¤½à¥à¥˜-à¥¡à¥±-à¦€à¦…-à¦Œà¦à¦à¦“-à¦¨à¦ª-à¦°à¦²à¦¶-à¦¹à¦½à§Žà§œà§à§Ÿ-à§¡à§°à§±à¨…-à¨Šà¨à¨à¨“-à¨¨à¨ª-à¨°à¨²à¨³à¨µà¨¶à¨¸à¨¹à©™-à©œà©žà©²-à©´àª…-àªàª-àª‘àª“-àª¨àªª-àª°àª²àª³àªµ-àª¹àª½à«à« à«¡à¬…-à¬Œà¬à¬à¬“-à¬¨à¬ª-à¬°à¬²à¬³à¬µ-à¬¹à¬½à­œà­à­Ÿ-à­¡à­±à®ƒà®…-à®Šà®Ž-à®à®’-à®•à®™à®šà®œà®žà®Ÿà®£à®¤à®¨-à®ªà®®-à®¹à¯à°…-à°Œà°Ž-à°à°’-à°¨à°ª-à°¹à°½à±˜à±™à± à±¡à²…-à²Œà²Ž-à²à²’-à²¨à²ª-à²³à²µ-à²¹à²½à³žà³ à³¡à³±à³²à´…-à´Œà´Ž-à´à´’-à´ºà´½àµŽàµ àµ¡àµº-àµ¿à¶…-à¶–à¶š-à¶±à¶³-à¶»à¶½à·€-à·†à¸-à¸°à¸²à¸³à¹€-à¹†àºàº‚àº„àº‡àºˆàºŠàºàº”-àº—àº™-àºŸàº¡-àº£àº¥àº§àºªàº«àº­-àº°àº²àº³àº½à»€-à»„à»†à»œ-à»Ÿà¼€à½€-à½‡à½‰-à½¬à¾ˆ-à¾Œá€€-á€ªá€¿á-á•áš-áá¡á¥á¦á®-á°áµ-á‚á‚Žá‚ -áƒ…áƒ‡áƒáƒ-áƒºáƒ¼-á‰ˆá‰Š-á‰á‰-á‰–á‰˜á‰š-á‰á‰ -áŠˆáŠŠ-áŠáŠ-áŠ°áŠ²-áŠµáŠ¸-áŠ¾á‹€á‹‚-á‹…á‹ˆ-á‹–á‹˜-áŒáŒ’-áŒ•áŒ˜-ášáŽ€-áŽáŽ -á´á-á™¬á™¯-á™¿áš-áššáš -á›ªá›®-á›¸áœ€-áœŒáœŽ-áœ‘áœ -áœ±á€-á‘á -á¬á®-á°áž€-áž³áŸ—áŸœá  -á¡·á¢€-á¢¨á¢ªá¢°-á£µá¤€-á¤žá¥-á¥­á¥°-á¥´á¦€-á¦«á§-á§‡á¨€-á¨–á¨ -á©”áª§á¬…-á¬³á­…-á­‹á®ƒ-á® á®®á®¯á®º-á¯¥á°€-á°£á±-á±á±š-á±½á³©-á³¬á³®-á³±á³µá³¶á´€-á¶¿á¸€-á¼•á¼˜-á¼á¼ -á½…á½ˆ-á½á½-á½—á½™á½›á½á½Ÿ-á½½á¾€-á¾´á¾¶-á¾¼á¾¾á¿‚-á¿„á¿†-á¿Œá¿-á¿“á¿–-á¿›á¿ -á¿¬á¿²-á¿´á¿¶-á¿¼â±â¿â‚-â‚œâ„‚â„‡â„Š-â„“â„•â„˜-â„â„¤â„¦â„¨â„ª-â„¹â„¼-â„¿â……-â…‰â…Žâ… -â†ˆâ°€-â°®â°°-â±žâ± -â³¤â³«-â³®â³²â³³â´€-â´¥â´§â´­â´°-âµ§âµ¯â¶€-â¶–â¶ -â¶¦â¶¨-â¶®â¶°-â¶¶â¶¸-â¶¾â·€-â·†â·ˆ-â·Žâ·-â·–â·˜-â·žã€…-ã€‡ã€¡-ã€©ã€±-ã€µã€¸-ã€¼ã-ã‚–ã‚›-ã‚Ÿã‚¡-ãƒºãƒ¼-ãƒ¿ã„…-ã„­ã„±-ã†Žã† -ã†ºã‡°-ã‡¿ã€-ä¶µä¸€-é¿Œê€€-ê’Œê“-ê“½ê”€-ê˜Œê˜-ê˜Ÿê˜ªê˜«ê™€-ê™®ê™¿-êšêš -ê›¯êœ—-êœŸêœ¢-êžˆêž‹-êžŽêž-êž­êž°êž±êŸ·-ê ê ƒ-ê …ê ‡-ê Šê Œ-ê ¢ê¡€-ê¡³ê¢‚-ê¢³ê£²-ê£·ê£»ê¤Š-ê¤¥ê¤°-ê¥†ê¥ -ê¥¼ê¦„-ê¦²ê§ê§ -ê§¤ê§¦-ê§¯ê§º-ê§¾ê¨€-ê¨¨ê©€-ê©‚ê©„-ê©‹ê© -ê©¶ê©ºê©¾-êª¯êª±êªµêª¶êª¹-êª½ê«€ê«‚ê«›-ê«ê« -ê«ªê«²-ê«´ê¬-ê¬†ê¬‰-ê¬Žê¬‘-ê¬–ê¬ -ê¬¦ê¬¨-ê¬®ê¬°-ê­šê­œ-ê­Ÿê­¤ê­¥ê¯€-ê¯¢ê°€-íž£íž°-íŸ†íŸ‹-íŸ»ï¤€-ï©­ï©°-ï«™ï¬€-ï¬†ï¬“-ï¬—ï¬ï¬Ÿ-ï¬¨ï¬ª-ï¬¶ï¬¸-ï¬¼ï¬¾ï­€ï­ï­ƒï­„ï­†-ï®±ï¯“-ï´½ïµ-ï¶ï¶’-ï·‡ï·°-ï·»ï¹°-ï¹´ï¹¶-ï»¼ï¼¡-ï¼ºï½-ï½šï½¦-ï¾¾ï¿‚-ï¿‡ï¿Š-ï¿ï¿’-ï¿—ï¿š-ï¿œ";
var nonASCIIidentifierChars = "â€Œâ€Â·Ì€-Í¯Î‡Òƒ-Ò‡Ö‘-Ö½Ö¿××‚×„×…×‡Ø-ØšÙ‹-Ù©Ù°Û–-ÛœÛŸ-Û¤Û§Û¨Ûª-Û­Û°-Û¹Ü‘Ü°-ÝŠÞ¦-Þ°ß€-ß‰ß«-ß³à –-à ™à ›-à £à ¥-à §à ©-à ­à¡™-à¡›à£¤-à¤ƒà¤º-à¤¼à¤¾-à¥à¥‘-à¥—à¥¢à¥£à¥¦-à¥¯à¦-à¦ƒà¦¼à¦¾-à§„à§‡à§ˆà§‹-à§à§—à§¢à§£à§¦-à§¯à¨-à¨ƒà¨¼à¨¾-à©‚à©‡à©ˆà©‹-à©à©‘à©¦-à©±à©µàª-àªƒàª¼àª¾-à«…à«‡-à«‰à«‹-à«à«¢à«£à«¦-à«¯à¬-à¬ƒà¬¼à¬¾-à­„à­‡à­ˆà­‹-à­à­–à­—à­¢à­£à­¦-à­¯à®‚à®¾-à¯‚à¯†-à¯ˆà¯Š-à¯à¯—à¯¦-à¯¯à°€-à°ƒà°¾-à±„à±†-à±ˆà±Š-à±à±•à±–à±¢à±£à±¦-à±¯à²-à²ƒà²¼à²¾-à³„à³†-à³ˆà³Š-à³à³•à³–à³¢à³£à³¦-à³¯à´-à´ƒà´¾-àµ„àµ†-àµˆàµŠ-àµàµ—àµ¢àµ£àµ¦-àµ¯à¶‚à¶ƒà·Šà·-à·”à·–à·˜-à·Ÿà·¦-à·¯à·²à·³à¸±à¸´-à¸ºà¹‡-à¹Žà¹-à¹™àº±àº´-àº¹àº»àº¼à»ˆ-à»à»-à»™à¼˜à¼™à¼ -à¼©à¼µà¼·à¼¹à¼¾à¼¿à½±-à¾„à¾†à¾‡à¾-à¾—à¾™-à¾¼à¿†á€«-á€¾á€-á‰á–-á™áž-á á¢-á¤á§-á­á±-á´á‚‚-á‚á‚-á‚á-áŸá©-á±áœ’-áœ”áœ²-áœ´á’á“á²á³áž´-áŸ“áŸáŸ -áŸ©á ‹-á á -á ™á¢©á¤ -á¤«á¤°-á¤»á¥†-á¥á¦°-á§€á§ˆá§‰á§-á§šá¨—-á¨›á©•-á©žá© -á©¼á©¿-áª‰áª-áª™áª°-áª½á¬€-á¬„á¬´-á­„á­-á­™á­«-á­³á®€-á®‚á®¡-á®­á®°-á®¹á¯¦-á¯³á°¤-á°·á±€-á±‰á±-á±™á³-á³’á³”-á³¨á³­á³²-á³´á³¸á³¹á·€-á·µá·¼-á·¿â€¿â€â”âƒ-âƒœâƒ¡âƒ¥-âƒ°â³¯-â³±âµ¿â· -â·¿ã€ª-ã€¯ã‚™ã‚šê˜ -ê˜©ê™¯ê™´-ê™½êšŸê›°ê›±ê ‚ê †ê ‹ê £-ê §ê¢€ê¢ê¢´-ê£„ê£-ê£™ê£ -ê£±ê¤€-ê¤‰ê¤¦-ê¤­ê¥‡-ê¥“ê¦€-ê¦ƒê¦³-ê§€ê§-ê§™ê§¥ê§°-ê§¹ê¨©-ê¨¶ê©ƒê©Œê©ê©-ê©™ê©»-ê©½êª°êª²-êª´êª·êª¸êª¾êª¿ê«ê««-ê«¯ê«µê«¶ê¯£-ê¯ªê¯¬ê¯­ê¯°-ê¯¹ï¬žï¸€-ï¸ï¸ -ï¸­ï¸³ï¸´ï¹-ï¹ï¼-ï¼™ï¼¿";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
}

function broken3() {
{
  if (e.find.isOpen) {
    e.onFindValue(e.findValue, true);
  }
/*
  if ((!editShift) && textBefore) {
    if (textAfter) textBefore += textAfter;
    for (var i = 0; i < SPECIAL_SEGMENTS.length; i++) {
      if (~textBefore.indexOf(SPECIAL_SEGMENTS[i])) {
        this.views.code.clearBelow(e.editLine);
        this.buffer.updateRaw();
        break;
      }
    }
  }
*/
  // this.history.save();
  this.render();
};

}