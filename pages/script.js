// INPUTS:
// LOGIN
const usrnm_login = document.getElementById('username_login');
const pwd_login = document.getElementById('password_login');
// SIGNIN
const usrnm_signin = document.getElementById('username_signin');
const email_login = document.getElementById('email_sigin');
const pwd_signin = document.getElementById('password_sigin');
const pwd2_login = document.getElementById('password2_sigin');


// buttons
const sign_btn = document.getElementById('button-1');
const login_btn = document.getElementById('button-2');

// forms
const signinform = document.getElementById('signin_form');
const logininform = document.getElementById('login_form');

function signup(){
  sign_btn.style.display = "none";
  login_btn.style.display = "block";

  logininform.classList.remove('fadein');
  logininform.classList.add('fadeout');
  
  signinform.classList.remove('fadeout');
  signinform.classList.add('fadein');
  
  logininform.style.display = 'none';
  signinform.style.display = 'block';
}

function login(){
  sign_btn.style.display = "block";
  login_btn.style.display = "none";

  logininform.classList.remove('fadeout');
  logininform.classList.add('fadein');

  signinform.classList.remove('fadein');
  signinform.classList.add('fadeout');

  logininform.style.display = 'block';
  signinform.style.display = 'none';
  
}

function makePostReq(url , data , callback){
  var xhr = new XMLHttpRequest();
  xhr.open('POST',url,true);
  xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        callback(xhr.responseText);
      }else{
        console.log("Request failed with status: ", xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}

function login_action(){
  var data = {};
  const usrnm_login = document.getElementById('username_login');
  const pwd_login = document.getElementById('password_login');

  if(usrnm_login.value != '' && pwd_login.value != ''){
    data['userEmail'] = usrnm_login.value;
    data['userPwd'] = pwd_login.value;
    console.log(data)
    makePostReq('/loginUser',data,(result)=>{
      console.log(result);
    })
  }else{
    alert("Please enter data!");
  }
}

