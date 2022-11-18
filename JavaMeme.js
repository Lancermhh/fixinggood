function memeAuHasard() {
    Url = new Array;
    Url[0] = "https://i.pinimg.com/236x/11/a8/5d/11a85d53fb27f42cfee71d1eddf6ca34--bad-memes-bad-humor.jpg";
    Url[1] = "https://media.tenor.com/pMhSj9NfCXsAAAAC/saul-goodman-better-call-saul.gif";
    Url[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-ZfUx7mnJWW_FHHJmM1Hob2PMEP-ZoJNAQ&usqp=CAU";
    Url[3] = "https://i.kym-cdn.com/photos/images/facebook/001/591/832/6d6.jpg";
    Url[4] = "https://img.ifunny.co/images/c80b64a8993044a977fc7196c7db108e0d460412d0978aac2a15cad221418759_3.jpg";
    Url[5] = "https://qph.cf2.quoracdn.net/main-qimg-d4b7cdb1959462f0f769f668f24ae674.webp";
    Url[6] = "https://media.tenor.com/l-DnRc-RhKUAAAAM/the-skeleton-appears-skeleton.gif";
    Url[7] = "https://i.ytimg.com/vi/Td2U0AymXvk/maxresdefault.jpg";
    Url[8] = "https://preview.redd.it/g7m5dp04izj81.jpg?auto=webp&s=080f532df604886164eeb36dd477abbbeb3e45ea";
    Url[9] = "https://i.ytimg.com/vi/GXBpsCcvj_A/hqdefault.jpg";
    Url[10] = "https://pbs.twimg.com/media/ESn-gcoXkAIumXs.jpg";
    Url[11] = "https://meme-gag.com/wp-content/uploads/2018/04/meme38081.jpg";
    Url[12] = "https://preview.redd.it/x085d8gvlz881.png?auto=webp&s=ad611ca3f0fa2791b03420f616fa094409c9a876";
    Url[13] = "https://c.tenor.com/bXcAZs1F-1UAAAAC/madotsuki-yume-nikki.gif";
    Url[14] = "https://i.redd.it/jp3fypfropo41.jpg";
    Url[15] = "https://preview.redd.it/qyrco79p0un61.jpg?auto=webp&s=448c339da1d32fc27281101031f29572a6c4e76a";
    Url[16] = "https://pbs.twimg.com/media/FWw_hemWYAIzSx2?format=jpg&name=900x900";
    Url[17] = "https://pbs.twimg.com/media/FcPIia8WAAATfAk.jpg";
    Url[18] = "https://pbs.twimg.com/media/FVZEZhUWAAIV_Rt.jpg";
    Url[19] = "https://c.tenor.com/T-u18saKOBYAAAAC/kirby-falling.gif";
    Url[20] = "https://i.chzbgr.com/full/9574931712/h2FD6AD64/person-hello-there-hello-there-all-hello-there";
    Url[21] = "https://i.kym-cdn.com/photos/images/original/002/392/821/02a.jpg";
    Url[22] = "https://dontgetserious.com/wp-content/uploads/2021/11/corona-undertaker-memes.jpeg";
    Url[23] = "https://img.ifunny.co/images/e55ebd683dd08cef4e5274d5bb90e6048105a96094100a45e3709a214ec36c1c_1.jpg";
    Url[24] = "https://media.tenor.com/iwKNKD8DYzAAAAAM/spinning-spin.gif";
    Url[25] = "https://media.tenor.com/FwV0AkUoidMAAAAd/backrooms-christian-bale.gif";
    Url[26] = "https://i.ytimg.com/vi/JGbWoAV1J1U/hqdefault.jpg";
    Url[27] = "https://pbs.twimg.com/media/EEt1oD8WsAAzNw6.png";
    Url[28] = "https://pics.me.me/its-a-simple-spell-but-quite-unbreakable-i-hate-it-39273529.png";
    Url[29] = "http://images3.memedroid.com/images/UPLOADED441/62988d530c574.jpeg"; 
    Url[30] = "https://static.tvtropes.org/pmwiki/pub/images/mini_butcher.png";
    ChoixLien = Math.floor(Math.random() * Url.length);
    var lien = Url[ChoixLien];
    return lien;
}
function naviguerAuHasard() {
    window.location.href = memeAuHasard();
}

function rickroll() {
    var lien = "https://juan-carlos.info/wp-content/uploads/sites/2/2021/11/Rick-Astley-Never-Gonna-Give-You-Up-Official-Music-Video.mp4?_=5" 
    return lien; 
}
function lienrick() {
    window.location.href = rickroll();
}


window.onload = function lien() {
    document.getElementById("button2").addEventListener("click", lienrick);
    document.getElementById("button1").addEventListener("click", naviguerAuHasard);
}
