fetch('../assets/nav-bar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-bar').innerHTML = data;
  });