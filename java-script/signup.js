
document.addEventListener('DOMContentLoaded', () => {
    let signIN = document.querySelector("#signin")
    if(signIN){
        let userName = document.querySelector("#signupName")
        let userEmail = document.querySelector("#sigEmail");
        let userPass = document.querySelector("#sigPassword")
        let exist2 = document.querySelector("#exist2")
        let exist = document.querySelector("#exist")
        let users;
        let emailAlert = document.querySelector("#emailAlert")
        let cheakList = []
        var exist3 = document.querySelector("#exist3")
        var anc = document.querySelector(".anc")
        let signUPBtn = document.querySelector("#signUpBtn")
        if(localStorage.getItem("users")){
        
            users = JSON.parse(localStorage.getItem("users"));
                
            
               
        
        }
        else{
            users = []
        }
        
        
        signUPBtn.addEventListener("click",function(){
             if(chekEmail() & emptyInputVali() & emailVali()){
                
                var user = {
                    name:userName.value,
                    email:userEmail.value,
                    pass:userPass.value
                }
                users.push(user)
                saveInlocalStorage()
                console.log(JSON.parse(localStorage.getItem("users")))
                exist3.classList.replace("d-none","d-block")
                backToLogin()
                
                
        
            }
            else{
                console.log("error");
            }
        
        })
        // local storage
        function saveInlocalStorage(){
            localStorage.setItem("users",JSON.stringify(users))
        }
        
        // empty validation 
        function emptyInputVali(){
            if(userName.value == ""||userEmail.value == ""||userPass.value == ""){
                exist.classList.replace("d-none","d-block")
                return false
                
            }
            else{
                exist.classList.replace("d-block","d-none")
                return true
                
            }
        }
        // chek email
        function chekEmail(){
            const emailExists = users.some(user => user.email === userEmail.value);
            if(emailExists == true){
                exist2.classList.replace("d-none","d-block")
                exist3.classList.replace("d-block","d-none")
                return false
            }else{
                exist2.classList.replace("d-block","d-none")
                return true
            }
            
            
        
           
        
        }
        
        
        //  return to login
        function backToLogin(){
            setTimeout(function(){
                window.open("index.html","_self")
            },1000)
        }
        // email vali
        function emailVali(){
            let regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
                if(regex.test(userEmail.value)){
                    emailAlert.classList.replace("d-block","d-none")
                    return true
                }
                else{
                    emailAlert.classList.replace("d-none","d-block")
                }
                
            }

           
            

        }
       

    }

)






    

