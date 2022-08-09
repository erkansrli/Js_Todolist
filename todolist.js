

const buttonDOM = document.querySelector("#liveToastBtn")// ekle tuşu
const closedDOM = document.querySelector("#closed")// kapama butonu
const ulDOM = document.querySelector(".list")// ul list
const inputDOM = document.querySelector("#task")// input içi
const succesDOM = document.querySelector("#successToast")
const errorDOM = document.querySelector("#errorToast")

buttonDOM.addEventListener("click",newElement)

function  newElement(){
    
    let isEmpty = text => text.trim().length > 0 //? Trim ile boşlukları silebiliyoruz. Bu şekilde boşlukları silinmiş bir textin uzunluğu 0'dan büyükse demek ki bir şeyler yazılmış anlamına geliyor. 0'dan küçükse demek ki boşluk bırakılmış veya input boş. Bu değer true veya false döndürür.
    if(isEmpty(inputDOM.value)){
        let  liDOM = document.createElement("li")
        liDOM.innerHTML=inputDOM.value
        ulDOM.appendChild(liDOM)
        inputDOM.value=""
        let closeBTN = document.createElement("span")
        closeBTN.classList.add("close")
        closeBTN.textContent = "\u00D7"
        liDOM.append(closeBTN)
        closeBTN.onclick = removeButton
       
        ToastAlertSuccess()

    }else{
        
        ToastAlertDanger();
    }

}

function removeButton(){
    
    this.parentElement.remove();
    
}
function ToastAlertDanger(){
    let error = new bootstrap.Toast(errorDOM, alertOptions)
    error.show();
    
}
function ToastAlertSuccess(){
    let succes = new bootstrap.Toast(succesDOM, alertOptions)
    succes.show();
}
let alertOptions = {
    animation: true,
    delay: 3000,
}


