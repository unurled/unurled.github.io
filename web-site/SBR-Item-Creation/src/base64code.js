const generateBase64Code = () => {
    if(javaCode){
        const res = btoa(javaCode);
        document.getElementById("codeGenerator").innerHTML = res;
        b64 = res;
    }else{
        document.getElementById("codeGenerator").innerHTML = "This will be more useful in the future.";
        b64 = "";
    }
}