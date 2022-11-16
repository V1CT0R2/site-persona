function showmenu(){
    let menumobile = document.querySelector(".menumobile");
    if (menumobile.classList.contains("aberto")){
        menumobile.classList.remove("aberto");
        document.querySelector(".icon").src = "assets/img/icon1.png"

    }else{
        menumobile.classList.add("aberto")
        document.querySelector(".icon").src = "assets/img/icon2.png"
    }

}