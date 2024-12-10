let index = null;
document.addEventListener('DOMContentLoaded', () => {
    let logIn = document.querySelector("#logIn")
    let linkBtn = document.querySelector("#linkBtn")
    let loginEmail = document.querySelector("#sigEmail")
    let loginPass = document.querySelector("#sigPassword")
    let incorrect = document.querySelector("#incorrect")
    let incorrect1 = document.querySelector("#incorrect1")
    let usersx = JSON.parse(localStorage.getItem("users"));
    console.log(usersx);
    if(logIn){
        linkBtn.addEventListener("click", function(e) {
            e.preventDefault()
            if(cheacEmptyInput() && checkExist() ) {
                console.log("done");
                const email = loginEmail.value;
                try {
                    index = usersx.findIndex(user => user.email === email); console.log(index);
                if (index !== -1) {
                    localStorage.setItem("userIndex",JSON.stringify(index))
                     window.open("home.html", "_self");
                     }
                    
                } catch (error) {
                    incorrect1.classList.replace("d-none","d-block")
                    
                }
                
                
                
                
                
                
                
                
    
               
                
            }
            // console.log(x);
        });
        
    }
    
    function cheacEmptyInput(){
        if(loginEmail.value == ""|| loginPass.value == ""){
            incorrect.classList.replace("d-none","d-block")
        }else{
            incorrect.classList.replace("d-block","d-none")
            return true
            
        }
    }
    
    // check exist
    function checkExist(){
        try {
            const userExists = usersx.some(user => user.email === loginEmail.value && user.pass === loginPass.value);
        if(userExists == true){
            incorrect1.classList.replace("d-block","d-none")
            console.log("found");
            return true
        }else{
            incorrect1.classList.replace("d-none","d-block")
            console.log("not found");
            return false
        }
            
        } catch (error) {
            incorrect1.classList.replace("d-none","d-block")
            
            
        }
        
        
        
    
    }

    }
    
);








