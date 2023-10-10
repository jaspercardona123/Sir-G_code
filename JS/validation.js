function formValidation(){


    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var mname = document.getElementById("middlename").value;
  
    var correctway =/^[A-Za-z-" " ]+$/ ;

   
   

    if (fname==""){

        document.getElementById("firstnamee").innerHTML="please fill!";
        document.getElementById("firstnamee").style.fontSize = "13px";
        return false;
        
    }
    // //Capitalize the first letter
    // const str1 = fname.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    // console.log(str1);
    // if (fname !== str1) {
    //     document.getElementById('firstnamee').innerHTML = "Please capital only the first letter of your name!"
    //     return false;
    // }
    if (fname.length <2){

        document.getElementById("firstnamee").innerHTML="atleast 2 or more characters!"
        document.getElementById("firstnamee").style.fontSize = "13px";
        return false;
    }
   
    if(fname.match(correctway)){
        true;
    } else{
            document.getElementById("firstnamee").innerHTML= "only alphabets are allowed!"
            document.getElementById("firstnamee").style.fontSize = "13px";
            return false;
        }
        document.getElementById("firstnamee").innerHTML="";

    //validate lastname

        if (lname==""){
            document.getElementById("lastnamee").innerHTML="please fill!";
            document.getElementById("lastnamee").style.fontSize = "13px";
            return false;
        }
        //       //Capitalize the last letter
        //  const str2 = lname.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        //  console.log(str2);
        // if (lname !== str2) {
        //     document.getElementById('lastnamee').innerHTML = "Please capital only the first letter of your name!";
        //     return false;
        // }
        if (lname.length <2){
            document.getElementById("lastnamee").innerHTML="atleast 2 or more characters"
            document.getElementById("lastnamee").style.fontSize = "13px";
            return false;
        }
        
        if(lname.match(correctway)){
            document.getElementById("lastnamee").innerHTML="";
        } else{
                document.getElementById("lastnamee").innerHTML="only alphabets are allowed"
                document.getElementById("lastnamee").style.fontSize = "13px";
                return false;
        }
            
          



    //validate middlename

    // if (mname==""){

    //     document.getElementById("middlenamee").innerHTML="please fill!";
    //     document.getElementById("middlenamee").style.fontSize = "13px";
    //     return false;
        
    // }
    if(mname.length != 0){
        if (mname.length <2){
            document.getElementById("middlenamee").innerHTML="atleast 2 or more characters!";
            return false;
        }
        if (mname.length > 20){
            document.getElementById("middlenamee").innerHTML="lessthan 20 characters!";
            return false;
        }
        if(!mname.match(correctway)){
            document.getElementById("middlenamee").innerHTML= "only alphabets are allowed!";
            return false;
        }
        document.getElementById("middlenamee").innerHTML="";
    }

    return true; 
}
 // FOR BIRTH DATE///////////////////////////////////////////////////////////////////////////////////

var startInput = document.getElementById("birthdate");
startInput.addEventListener("change", (e)=>{
    var startDate = new Date(startInput.value)
    const today = new Date();
    const age = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 365));
    console.log(age)
    document.getElementById("age").value = age;
    if(age <= 17){
        startInput.setCustomValidity("You must 18 above!");
    }else if(age > 80){
        startInput.setCustomValidity("Too old for this")
    }else{
        startInput.setCustomValidity("")
    }
})



// no space for firstname

//*********// auto capital//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('firstname').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});

document.getElementById('lastname').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});

document.getElementById('middlename').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});


document.getElementById('street').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});


document.getElementById('municipality').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});

document.getElementById('province').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});

document.getElementById('country').addEventListener('input', function() {
    let input = this.value;
    let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

    let formattedInput = cleanedInput
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    this.value = formattedInput;
});



//no spaces

document.getElementById('firstname').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}
    

document.getElementById('lastname').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('middlename').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('email').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('passw').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('cpassword').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}


document.getElementById('street').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('municipality').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('province').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}
document.getElementById('postal').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}

document.getElementById('country').oninput = function() {
    // Remove leading spaces
    this.value = this.value.replace(/^\s+/g, '');

    this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
}


// //no space
// document.getElementById('password').addEventListener('input', function() {
//     let input = this.value;
//     let cleanedInput = input.replace(/\s{2,}/g, ' '); // Replace 2 or more spaces with one space

//     let formattedInput = cleanedInput
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');

//     this.value = formattedInput;
// });

// document.getElementById('lastname').oninput = function() {
//     // Remove leading spaces
//     this.value = this.value.replace(/^\s+/g, '');

//     this.value = this.value.replace(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, '');
// }


// alert if numbeers and symbols////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('firstname').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});
document.getElementById('lastname').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});
document.getElementById('middlename').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});

document.getElementById('municipality').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});
document.getElementById('province').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});
document.getElementById('country').addEventListener('input', function() {
    var fnameInput = this.value;
    var regex = /\d/; // Regular expression to match any digit

    if (regex.test(fnameInput)) {
        alert('Numbers are not allowed in the input field');
        this.value = this.value.replace(/\d/g, ''); // Remove any digits from the input
    }
});
// postal validation///////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('postal').addEventListener('input', function() {
    var input = this.value;
    var regex = /^\d+$/;
    if (!regex.test(input)) {
        alert("Please enter only numbers in the zipcode field.");
        this.value = input.replace(/\D/g, ''); // Remove non-digit characters
    }
});


// validate the redundant letters//////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('firstname').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});       

document.getElementById('lastname').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('middlename').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('email').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('street').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('municipality').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('province').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  

document.getElementById('country').addEventListener('input', function() {
    const inputElement = event.target;
    let inputValue = inputElement.value;

    // Remove more than 2 consecutive repeated letters
    inputValue = inputValue.replace(/([a-zA-Z])\1{2,}/gi, function(match, group) {
        return group + group; // Keep only 2 consecutive
    });

    // Update the input value if it was changed
    if (inputValue !== inputElement.value) {
        inputElement.value = inputValue;
    }
});  


//check password strength real time checker/////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('passw').addEventListener('input', (e) => {
    document.getElementById('is-valid-password').innerHTML = "";
    var password = e.target.value;
    var strengthIndicator = document.getElementById('password-strength');
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    var isStrong = regex.test(password);
    if (!password) {
        strengthIndicator.innerText = '';
        return;
    }
    if (isStrong) {
        strengthIndicator.innerText = 'Password is Strong';
        strengthIndicator.style.color = 'green';
    } else if (password.length >= 8) {
        strengthIndicator.innerText = 'Password is Medium';
        strengthIndicator.style.color = '#eeb600';
    } else {
        strengthIndicator.innerText = 'Password is Weak';
        strengthIndicator.style.color = 'red';
    }
})


//check if password match
var passwordInput = document.getElementById('passw');
var confirmPasswordInput = document.getElementById('cpassword');
passwordInput.addEventListener('input', (e) => {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (password === "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "black";
        document.getElementById("copassword").style.border = "";
        document.getElementById("cpassword").style.borderStyle = "";
        document.getElementById("password-label").style.color = "black";
        document.getElementById("passw").style.border = "";
        document.getElementById("passw").style.borderStyle = "";
    }
    if (password !== confirmPassword && confirmPassword !== "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        document.getElementById("confirmpassword-label").style.color = "red";
        document.getElementById("cpassword").style.border = "1px solid red";
        document.getElementById("cpassword").style.borderStyle = "none none solid none";
    } else {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "black";
        document.getElementById("cpassword").style.border = "";
        document.getElementById("cpassword").style.borderStyle = "";
    }
});
document.getElementById('cpassword').addEventListener('input', (e) => {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (confirmPassword === "") {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "black";
        document.getElementById("cpassword").style.border = "";
        document.getElementById("password-label").style.color = "black";
        document.getElementById("passw").style.border = "";
        document.getElementById("passw").style.borderStyle = "";
    }
    if (password !== confirmPassword) {
        document.getElementById("is-valid-confirmpassword").innerHTML = "Please make sure your passwords match.";
        document.getElementById("confirmpassword-label").style.color = "red";
        document.getElementById("cpassword").style.border = "1px solid red";
        document.getElementById("cpassword").style.borderStyle = "none none solid none";
        document.getElementById("password-label").style.color = "red";
        document.getElementById("passw").style.border = "1px solid red";
        document.getElementById("passw").style.borderStyle = "none none solid none";
    } else {
        document.getElementById("is-valid-confirmpassword").innerHTML = "";
        document.getElementById("confirmpassword-label").style.color = "black";
        document.getElementById("cpassword").style.border = "";
        document.getElementById("password-label").style.color = "black";
        document.getElementById("passw").style.border = "";
        document.getElementById("passw").style.borderStyle = "";
    }
});





   