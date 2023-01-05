import webbrowser
import os
import csv
filename = 'cars.csv'
outputFile = 'output.txt'
with open(filename, 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    i = 0
    for line in csvreader:
        try:
            f = open('../../HTML/cars/car'+str(i)+'.html','x')
        except Exception as e:
            f = open('../../HTML/cars/car'+str(i)+'.html','w')

        content = """<!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>Cartegrity | Home</title>
            <link rel="stylesheet" href="https://use.typekit.net/ipa0ltn.css">
            <link rel="stylesheet" href="https://use.typekit.net/ipa0ltn.css">
            <link rel="stylesheet" href="https://use.typekit.net/ipa0ltn.css">
            <link rel="stylesheet" href="https://use.typekit.net/ipa0ltn.css">
            <link rel="stylesheet" href="../../styles/nav.css">
            <link rel="stylesheet" href="../../styles/main.css">
            <link rel="stylesheet" href="../../styles/carSpec.css">
            <link rel="stylesheet" href="../../styles/grid.css">
            <link rel="stylesheet" href="../../styles/footer.css">
            <script  src = "../../scripts/jquery-3.6.0.min.js"></script>
            <script type="text/javascript" src = ../../scripts/nav.js></script>
            <script type="text/javascript" src = ../../scripts/slides.js></script>
          </head>
          <nav id ="navBar">
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <a class="logoArea mobileLogo">
              <img src="../../imgs/logoCropped.png" alt="">
              <h1><Strong>Car</strong>tegrity</h1>
            </a>
            <div class="nav-mobile-contnet">
              <ul>
                <li class = "mobile-drop-link marginTop"><a href="javascript:;">&ensp;BUY<div class = "arrow">&#9662;</div></a>
                <div class="mobile-drop-container">
                    <ul class = "mobile-drop-content">
                      <li> <a href="#" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Financing</a> </li>
                      <li> <a href="#" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Find Your Car</a> </li>
                    </ul>
                </div>
                </li>
                <li><a href="#" class="mobile-link">&ensp;SELL</a></li>
                <li><a href="#" class="mobile-link">&ensp;ABOUT US</a></li>
              </ul>
            </div>
            <div id="nav-desktop">
              <a class="logoArea">
                <img src="../../imgs/logoCropped.png" alt="">
                <h1><Strong>Car</strong>tegrity</h1>
              </a>
              <div class="desktop-content">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">ABOUT US</a>
              </div>
              <div class="desktop-content">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">SELL</a>
              </div>
              <div class="dropdown-desktop">
                <div class="dropdown-hover">
                <a class = "dropdownLink" href="javascript:;">BUY <div class = "arrow">&#9662;</div></a>
                <ul class = "dropdown-content-desktop">
                  <li> <a href="#">FINANCING</a> </li>
                  <li> <a href="#">FIND YOUR CAR</a> </li>
                </ul>
              </div>
              </div>
            </div>

          </nav>

        <main>
        <div class="caraContainer">
          <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
              <img src="../../imgs/car.png" alt="sadan button">
            </div>

            <div class="mySlides fade">
              <img src="../../imgs/truck.png" alt="sadan button">
            </div>

            <div class="mySlides fade">
              <img src="../../imgs/car.png" alt="sadan button">
            </div>

            <div class="mySlides fade">
              <img src="../../imgs/car.png" alt="sadan button">
            </div>

            <div class="mySlides fade">
              <img src="../../imgs/car.png" alt="sadan button">
            </div>

            <!-- Next and previous buttons -->
            <div class="slideNavigation">
              <button class="scale" type="button" name="button" onclick="plusSlides(-1)">&#10094;</button>
              <a onclick="currentSlide(1)"><img src="../../imgs/car.png" alt="view 1"></a>
              <a onclick="currentSlide(2)"><img src="../../imgs/truck.png" alt="view 2"></a>
              <a onclick="currentSlide(3)"><img src="../../imgs/car.png" alt="view 3"></a>
              <a onclick="currentSlide(4)"><img src="../../imgs/car.png" alt="view 4"></a>
              <a onclick="currentSlide(5)"><img src="../../imgs/car.png" alt="view 5"></a>
              <button class="scale" type="button" name="button" onclick="plusSlides(1)">&#10095;</button>
            </div>
          </div>
        </div>
        <hr size= '4px' width= '90%' color= '#d25353'>
        <div class="gridContainer">
          <div class="info">
            <h1>Basics</h1>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Make</strong></p>
            <p class = "val">"""+ line[1] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Model</strong></p>
            <p class = "val">"""+ line[2] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Year</strong></p>
            <p class = "val">"""+ line[3] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Exterior Color</strong></p>
            <p class = "val">"""+ line[4] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Body Type</strong></p>
            <p class = "val">"""+ line[5] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Mileage</strong></p>
            <p class = "val">"""+ line[7] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Fuel Type</strong></p>
            <p class = "val">"""+ line[6] +"""</p>
            <hr size= '2px' width= '100%' color= '#013f5b'>
            <p class = "cat"><strong>Price</strong></p>
            <p class = "price val"> <strong>$12,000</strong></p>

          </div>
          <div class="contact">
            <h1>Contact Us</h1>
            <br>
            <br>
            <h2>Call (614) 830-2700</h2>
            <input id = "fname" type="text" name="" value="" placeholder=" First Name">
            <input id = "lname" type="text" name="" value="" placeholder=" Last Name">
            <input id = "email" type="text" name="" value="" placeholder=" Email">
            <input id = "phone" type="text" name="" value="" placeholder=" Phone">
            <textarea id = "message" name="name" rows="16" cols="80" placeholder="Message:"></textarea>
            <button id = "submit" class = "scale" type="button" name="button"> <h1>Submit</h1> </button>
          </div>
        </div>
        </main>

        <footer>
        <img src="../../imgs/footerimage.png" alt="illustrated side view of a car driving on a road">
          <div class="siteMap pentaGrid">
            <div class="siteSection">
              <a href="#"><h2>HOME</h2></a>
            </div>
            <div class="siteSection">
              <a href="#"><h2>BUY</h2></a>
              <ul>
                <li><a href="#">Financing</a></li>
                <br>
                <li><a href="#">Find Your Car</a></li>
              </ul>
            </div>
            <div class="siteSection">
              <a href="#"><h2>SELL</h2></a>
            </div>
            <div class="siteSection">
              <a href="#"><h2>ABOUT US</h2></a>
            </div>
            <div class="siteSection">
              <a href="#"><h2>SEARCH</h2></a>
            </div>
          </div>
          <div class="bottomBanner">
            <h1><Strong>Car</strong>tegrity</h1>
              <p>&copy; 2023 BPA Site. All rights reserved. SIte design by Cartegrity<br>Chapter #58-0136, Pickerington High School North. <a>Works Cited</a></p>
              <a><img class = "socials" src="../../imgs/instagram.png" alt="Instagram"></a>
            <a><img class = "socials" src="../../imgs/twitter.png" alt="twitter"></a>


          </div>
        </footer>



          </html>
          """
        f.write(content)
        i += 1
        f.close()
