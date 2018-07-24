<!DOCTYPE html>
<html>
  <head>
  <title>Project: Country Trivia</title>
      <link rel="stylesheet" type="text/css" href="normalise.css">
  <style>
    /*  http://www.december.com/html/spec/color3.html*/
    body {
      background-image: url("https://www.homemart.co.nz/pub/media/catalog/product/cache/image/800x600/e9c3970ab036de70892d86c6d221abfe/e/7/e788d0e5-d800-ea11-24f2-456eb088d44d-12189.jpeg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    body,html {
      height: 100%;
    }
    h2.country {
      color: #507786; /* LCD dark */
      text-size: 5em;
    }
    h3.country {
      color: #607B8B; /*light skyblue4*/
      text-size: 3em;
    }
    td {
      color: ;
      text-size: 1em;
    }
    #main
    {
      margin:0px auto;
      border:1px solid #507786;
      width:600px;
      background-color: white;
      margin-top: 100px;
    }
    table {
      margin-bottom: 20px;
    }
  </style>
  <script type="text/javascript">
    function displayDetails()
    {
      var country = [];
      var capital = [];
      var currency = [];
      var language = [];

      country[0] = "Angola";
      capital[0] = "Luanda";
      currency[0] = "Kwanza";
      language[0] = "Portuguese";

      country[1] = "Australia";
      capital[1] = "Canberra";
      currency[1] = "Australian Dollar ";
      language[1] = "English";

      country[2] = "Austria";
      capital[2] = "Vienna";
      currency[2] = "Euro";
      language[2] = "German";

      country[3] = "Bahrain";
      capital[3] = "Manama";
      currency[3] = "Bahraini Dinar";
      language[3] = "Arabic";

      country[4] = "Colombia";
      capital[4] = "Bogota";
      currency[4] = "Colombian Peso";
      language[4] = "Spanish";

      country[5] = "Denmark";
      capital[5] = "Copenhagen";
      currency[5] = "Danish Krone ";
      language[5] = "Danish";

      country[6] = "France";
      capital[6] = "Paris";
      currency[6] = "Euro";
      language[6] = "French";

      country[7] = "Germany";
      capital[7] = "Berlin";
      currency[7] = "Euro";
      language[7] = "German";

      country[8] = "India";
      capital[8] = "New Delhi ";
      currency[8] = "Indian Rupee ";
      language[8] = "Hindi";

      country[9] = "Italy";
      capital[9] = "Rome";
      currency[9] = "Euro";
      language[9] = "Italian";

      country[10] = "Japan";
      capital[10] = "Tokyo";
      currency[10] = "Yen";
      language[10] = "Japanese";

      country[11] = "Nepal";
      capital[11] = "Kathmandu";
      currency[11] = "Nepalese Rupee";
      language[11] = "Nepali";

      country[12] = "Portugal";
      capital[12] = "Lisbon";
      currency[12] = "Euro";
      language[12] = "Portuguese";

      var choice = document.getElementById("countries").value;

      for(var i=0;i<country.length;i++)
      {
        if (country[i] == choice)
        {
          document.getElementById("capital").value = capital[i];
          document.getElementById("currency").value = currency[i];
          document.getElementById("language").value = language[i];
          break;
        }
        else
        {
          document.getElementById("capital").value = "";
          document.getElementById("currency").value = "";
          document.getElementById("language").value = "";
        }
      }
    }
  </script>
  <link rel="stylesheet" type="text/css" href="reset.css">
  </head>

  <body>
    <!-- Navbar -->
    <div class="topnav">
      <a href="index.html">Jen Diamond UCLA-SOC</a>
      <a href="gallery.html">Gallery</a>
      <a href="favoriteAnimals.html">Favorite Animals</a>
      <a href="brandon.html">Brandon's Birthday</a>
      <a href="glossary.html">Glossary</a>
      <a href="about.html">About</a>
      <a class="active" href="country-trivia.html">Country Trivia</a>
      <a href="digital-clock.html">Digital Clock</a>
      <a href="quote.html">Quote</a>
      <a href="game.html">Game</a>
      <a href="student_sites.html">Student Sites</a>
    </div>

  <div id="main">
    <h2 align="center" class='country'>Country Trivia</h2>
    <h3 align="center" class='country'>Select a Country Below</h3>
    <table align="center">
      <tr><td>Country:</td><td>
        <select id="countries" onchange="displayDetails();">
          <option value="empty">Select --></option>
          <option value="Angola">Angola</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Colombia">Colombia</option>
          <option value="Denmark">Denmark</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="India">India</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Nepal">Nepal</option>
          <option value="Portugal">Portugal</option>
        </select>
      </td></tr>
      <tr><td>Capital:</td><td><input id="capital" disabled /></td></tr>
      <tr><td>Currency:</td><td><input id="currency" disabled /></td></tr>
      <tr><td>Primary Language:</td><td><input id="language" disabled /></td></tr>
    </table>
  </div>
  </body>
</html>
