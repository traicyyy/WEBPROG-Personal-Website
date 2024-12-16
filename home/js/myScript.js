function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  function myFunction2() {
    const x = document.getElementsByClassName("intro");
    document.getElementById("demo").innerHTML = 'Know all about me' + x[0].innerHTML;
  }
