function signin(){
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  window.localStorage.getItem('Email')
  window.localStorage.getItem('Password')
 var infoE = window.localStorage.getItem('Email')
 var infoP = window.localStorage.getItem('Password')

 if (email !== infoE && password !== infoP) {
   alert("Account Not Found")
 } else {
   window.location.href = 'profile.html'

 }

}
