function save(){
  var email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  window.localStorage.setItem('Email',email)
  window.localStorage.setItem('Password', password)
  console.log(window.localStorage.getItem('Email'))
  window.location.href = 'file:///C:/Users/Leila%20F/Documents/Haven/HTML/profile.html'
}
