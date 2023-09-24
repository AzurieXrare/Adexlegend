const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// validation Sign Up
const form = document.querySelector('#sign-up-form');
const username = document.querySelector('#username2');
const Fullname = document.querySelector('#fullName');
const phone = document.querySelector('#phone');
const email = document.querySelector('#Email2');
const passwordInput = document.querySelector('#Password2');
const address = document.querySelector('#Address');

form.addEventListener('submit', (event)=>{
  validateRegister();
  console.log(isFormValid());
  if(isFormValid()==true){
      form.submit();
   }else {
       event.preventDefault();
   }
});

function isFormValid(){
  const inputContainers = form.querySelectorAll('.input-field');
  let result = true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result = false;
      }
  });
  return result;
}

function validateRegister() {
  //USERNAME
  if(username.value.trim()==''){
    setError(username, 'Please Input Your Username');
  }else {
      setSuccess(username);
  }
  //NAME
  if(Fullname.value.trim()==''){
      setError(Fullname, 'Please Input Your Name');
  }else if(Fullname.value.trim().length <2){
      setError(Fullname, 'Name must be more than 2 charecters');
  }else {
      setSuccess(Fullname);
  }
  //EMAIL
  if(email.value.trim()==''){
      setError(email, 'Please Input Your Email');
  }else {
      setSuccess(email);
  }
    //PHONE
    if(phone.value.trim()==''){
      setError(phone, 'Please Input Your Phone Number');
  }else {
      setSuccess(email);
  }

  // PASSWORD
  if(passwordInput.value.trim()==''){
      setError(passwordInput, 'Please Input Your Password');
  }else {
      setSuccess(passwordInput);
  }

  // ADDRESS
  if(address.value.trim()==''){
      setError(address, 'Please Input Your Address');
  }else {
      setSuccess(address);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
      parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element){
  const parent = element.parentElement;
  if(parent.classList.contains('error')){
      parent.classList.remove('error');
  }
  parent.classList.add('success');
}


// validation Sign In
const form2 = document.querySelector('#sign-in-form');
const username2 = document.querySelector('#Username');
const passwordInput2 = document.querySelector('#Password');

form2.addEventListener('submit', (event)=>{
  validateForm();
  console.log(isFormValidLogin());
  if(isFormValidLogin()==true){
    form2.submit();
   }else {
       event.preventDefault();
   }
});

function isFormValidLogin(){
  const inputContainers = form2.querySelectorAll('.input-field');
  let result = true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result = false;
      }
  });
  return result;
}

function validateForm() {
  //USERNAME
  if(username2.value.trim()==''){
    setError(username2, 'Please Input Your Username');
  }else {
      setSuccess(username2);
  }
 
  // PASSWORD
  if(passwordInput2.value.trim()==''){
      setError(passwordInput2, 'Please Input Your Password');
  }else {
      setSuccess(passwordInput2);
  }
}

function setError(element, errorMessage) {
  const parent = element.parentElement;
  if(parent.classList.contains('success')){
      parent.classList.remove('success');
  }
  parent.classList.add('error');
  const paragraph = parent.querySelector('p');
  paragraph.textContent = errorMessage;
}

function setSuccess(element){
  const parent = element.parentElement;
  if(parent.classList.contains('error')){
      parent.classList.remove('error');
  }
  parent.classList.add('success');
}