let javaCode = "";
let b64 = "";
const types = ['Right Click', 'Sneak', 'Passive'];
const ability = ['Item Ability', 'Full Set Bonus', 'Piece Bonus', 'Extra Bonus', "Orb Buff", "Held Item"];
const switchCooldownType = (button) => {
    const field = button.parentNode.childNodes[14];
    const number = button.parentNode.childNodes[12];
    if(button.innerHTML === "Seconds"){
        button.style.width = "145px";
        field.style.width = "100px";
        number.style.display = "inline-block";
        field.placeholder = "Cooldown";
        button.innerHTML = "Charges";
    }else if(button.innerHTML === "Charges"){
        button.style.width = "178px";
        field.style.width = "178px";
        number.style.display = "none";
        field.placeholder = "Tickers Cooldown";
        button.innerHTML = "Tickers";
    }else if(button.innerHTML === "Tickers"){
        field.placeholder = "Ability Cooldown";
        button.innerHTML = "Seconds";
    }
}
const switchAbilityType = (button) => {
    let abil = button.innerHTML;
    let index = ability.indexOf(abil);
    button.innerHTML = ability[index + 1 >= ability.length ? 0 : index + 1];
}
const switchAbilityUsage = (button) => {
    let abil = button.innerHTML;
    let index = types.indexOf(abil);
    button.innerHTML = types[index + 1 >= types.length ? 0 : index + 1];
}
const toggleLightDarkMode = () => {
    const button = document.getElementById("toggleLightDarkMode");
    if(button.innerHTML === "Switch to Light Mode"){
        button.innerHTML = "Switch to Dark Mode";
        document.body.style.color = "#000";
        document.body.style.backgroundColor = "#FFF";
        let d = new Date();
        d.setTime(d.getTime() + (300*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "theme=light;" + expires + ";path=/";
    }else{
        button.innerHTML = "Switch to Light Mode";
        document.body.style.color = "#FFF";
        document.body.style.backgroundColor = "#121212";
        let d = new Date();
        d.setTime(d.getTime() + (300*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "theme=dark;" + expires + ";path=/";
    }
    
}
const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
const copyJavaToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = javaCode;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
const copybase64ToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = b64;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}