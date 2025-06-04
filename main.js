function enviar() {
    const name = document.getElementById("name").value;
    const telephone = document.getElementById("phone").value;
    const text = document.getElementById("text").value;

    const url = `https://api.whatsapp.com/send?nome=${name}&celular=${telephone}&texto=${text}`
    
    window.open(url,"");

}