const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".fa-copy")
btnEl.addEventListener("click", ()=>{
    creatpassword()
})
const alertContainerEl = document.querySelector(".alert-container")

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
        alertContainerEl.classList.add("active");
    }, 2000)
})
function creatpassword(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() *chars.length);
    password += chars.substring (randomNum, randomNum +1);
    console.log(randomNum, password);
    inputEl.value = password;
        alertContainerEl.innerText= "Senha copiada!"
    }
}
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);

}