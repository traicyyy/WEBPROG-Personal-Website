function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

  function myFunction2() {
    const x = document.getElementsByClassName("intro");
    document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
  }