document.addEventListener('DOMContentLoaded', function() {
  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days*24*60*60*1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
  function eraseCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999;';
  }
  function showLoginForm() {
      var loginForm = document.getElementById('id01');
      loginForm.style.display = 'block';
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          var username = document.getElementsByName('uname')[0].value;
          var password = document.getElementsByName('psw')[0].value;
          var users = [
              { username: 'FarruQureshi', password: 'Farru@@786' },
          ];
          var isValidUser = users.some(function(user) {
              return user.username === username && user.password === password;
          });
          if (isValidUser) {
              setCookie('loggedInUser', username, 7);
              loginForm.style.display = 'none';
              showContent();
          } else {
              var errorDiv = document.getElementById('errorDiv');
              errorDiv.style.color = 'red';
              errorDiv.style.display = "block";
          }
      });
  }
  function showContent() {
      var doMod = document.getElementById('whh');
      doMod.style.display = "block";
  }
  function checkLogin() {
      var loggedInUser = getCookie('loggedInUser');
      if (loggedInUser) {
          showContent();
      } else {
          showLoginForm();
      }
  }
  checkLogin();
});
document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const query = document.getElementById('query').value.trim();
  if (query) {
    const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = '';
    const searchUrls = [
      `https://katmoviehd.foo/?s=${encodeURIComponent(query)}`,
      `https://bollyflix.band/search/${encodeURIComponent(query)}`,
      `https://mkvcinemas.bet/?s=${encodeURIComponent(query)}`,
      `https://uhdmovies.tel/search/${encodeURIComponent(query)}`,
      `https://topmovies.tel/search/${encodeURIComponent(query)}`,
      `https://katdrama.com/?s=${encodeURIComponent(query)}`,
      `https://pikahd.com/?s=${encodeURIComponent(query)}`,
      `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    ];
    searchUrls.forEach(url => {
      if (url.includes('youtube.com')) {
        window.open(url, '_blank');
      } else {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframeContainer.appendChild(iframe);
      }
    });
  }
});
function ResetB(){
  document.getElementById('query').value = '';
  const iframeContainer = document.getElementById('iframe-container');
    iframeContainer.innerHTML = '';
}
