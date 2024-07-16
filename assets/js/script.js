document.getElementById('about').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('contacts').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

  function project1() {
    window.open("https://github.com/Grizzzly-01/Expandable-Gallery", "_blank");
  }
  function project2() {
    window.open("https://github.com/Grizzzly-01/Calculator", "_blank");
  }
  function project3() {
    window.open("https://github.com/Grizzzly-01/Blob-Effect", "_blank");
  }