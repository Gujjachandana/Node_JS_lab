const LoginForm=
                document.getElementById("loginform");
LoginForm.addEventListener(
    "submit",
    function(event){
        event.preventDefault();
        const email=
                    document.getElementById("email").value.trim();
        const password=
                        document.getElementById("password").value;
        if (email ===""){
            alert("Please enter your email.");
            return;
        }
        if (email.includes(" ") ){
            alert("Email should not contain spaces");
            return;
        }
        if (!email.includes("@") ){
            alert("Email must contain @ symbol");
            return;
        }
        if (!email.includes(".") ){
            alert("Email must contain a dot(.).");
            return;
        }
        if (password ==="" ){
            alert("Please enter your password.");
            return;
        }
        if (password.length<6){
            alert("Password must contain atleast 6 characters.");
            return;
        }
        if (password.length>20){
            alert("Password cannot exceed 20 characters.");
            return;
        }
        if (password.includes(" ") ){
            alert("Password should not contain spaces");
            return;
        }
        if (!/[A-Z]/.test(password)){
            alert("Password must contain atleast one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)){
            alert("Password must contain atleast one lowercase letter.");
            return;
        }
        if (!/[0-9]/.test(password)){
            alert("Password must contain atleast one number.");
            return;
        }
        if (!/[!@#$%^&*]/.test(password)){
            alert("Password must contain atleast one special character.");
            return;
        }
    }
);