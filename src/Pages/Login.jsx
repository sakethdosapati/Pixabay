export default function Login (){
    let log=()=>{
        let logun=document.getElementById("lun").value
    let logpa=document.getElementById("lpa").value
    // console.log(logun,logpa);
    

    let regun=window.sessionStorage.getItem("name")
    
    let regpa=window.sessionStorage.getItem("password")
    if(logun===regun && logpa===regpa){
        window.open("/")
    }
    else{
        alert("Enter valid input")
    }

    }
    
    
    
    
    
    
    
    
    
    return(
        <div className="login-signup">
        
        <h2>Log in</h2>
        <button id="logb1">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
            Continue with Google
        </button>
        
        <button id="logb2">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" className="icon--gXsxl"><path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" fill="#283b68"></path><path d="M10.752 17.052l-.015-4.42H8.842v-1.895h1.895V9.474c0-1.705 1.056-2.527 2.577-2.527.728 0 1.354.055 1.537.079v1.781l-1.055.001c-.827 0-.987.393-.987.97v.959h2.349l-.631 1.895h-1.718v4.42h-2.057z" fill="#fff" fillRule="nonzero"></path></svg>
           Continue with Facebook
        </button>

        <div id="or"><hr/><span>or</span><hr/></div>
        <form action="">
        <label htmlFor="">Username</label>
        <input type="text" id="lun" />
        
        <label htmlFor="">Password</label>
        <input type="password" id="lpa"/>

        <button id="logbutt" onClick={log}>Log in</button>

        <span id="fp">Forgot password?</span>

        <p id="p2">This site is protected by reCAPTCHA and the Google 
            <span> Privacy Policy </span>
             and <span> Terms of Service </span>apply.
        </p>


        
        </form>
        </div>
    )
}