function save(){
  var email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  window.localStorage.setItem('Email',email)
  window.localStorage.setItem('Password', password)
  console.log(window.localStorage.getItem('Email'))
  window.location.href = 'profile.html'
}
