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
            f = open('../../HTML/cars/car'+str(line[0])+'.html','x')
        except Exception as e:
            f = open('../../HTML/cars/car'+str(line[0])+'.html','w')
        name = ''
        if '%' in line[2]:
            name = line[2].replace('%',' ')
        else:
            name = line[2]
        content = """<!DOCTYPE html>
                <html lang="en" dir="ltr">
                  <head>
                    <meta charset="utf-8">
                    <title>Cartegrity | View Car</title>

                    <link rel="icon" type="image/x-icon" href="../../imgs/fav.ico">
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
                    <script type="text/javascript" src = ../../scripts/spec.js></script>
                  </head>
                  <body>
                  <nav id ="navBar">
                <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                <a href="../index.html" class="logoArea mobileLogo">
                  <img src="../../imgs/logoCropped.png" alt="cartegrity logo">
                  <h1><Strong>Car</strong>tegrity</h1>
                </a>
                <div class="nav-mobile-contnet">
                  <ul>
                    <li class = "mobile-drop-link marginTop"><a href="javascript:;">&ensp;BUY<div class = "arrow">&#9662;</div></a>
                    <div class="mobile-drop-container">
                        <ul class = "mobile-drop-content">
                          <li> <a href="../financing.html" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Financing</a> </li>
                          <li> <a href="../filter.html" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Find Your Car</a> </li>
                          <li> <a href="../quiz.html" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Quiz</a> </li>
                        </ul>
                    </div>
                    </li>
                    <li class = "mobile-drop-link"><a href="javascript:;">&ensp;TRADE IN<div class = "arrow">&#9662;</div></a>
                    <div class="mobile-drop-container">
                        <ul class = "mobile-drop-content">
                          <li> <a href="../trade.html" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Trade in Calculator</a> </li>
                          <li> <a href="../sell.html" class = "mobile-drop-content-link">&ensp;&ensp;&ensp;&ensp;Sell Your Car</a> </li>
                        </ul>
                    </div>
                    </li>
                    <li><a href="../about.html" class="mobile-link">&ensp;ABOUT US</a></li>
                  </ul>
                </div>
                <div id="nav-desktop">
                  <a href='../index.html' class="logoArea">
                    <img src="../../imgs/logoCropped.png" alt="">
                    <h1><Strong>Car</strong>tegrity</h1>
                  </a>
                  <div class="desktop-content">
                    <a href="../about.html">ABOUT US</a>
                  </div>
                  <div class="dropdown-desktop">
                    <div class="dropdown-hover">
                    <a class = "dropdownLink" href="javascript:;">TRADE IN<div class = "arrow">&#9662;</div></a>
                    <ul class = "dropdown-content-desktop">
                      <li> <a href="../trade.html">Trade in Calculator</a> </li>
                      <li> <a href="../sell.html">Sell Your Car</a> </li>
                    </ul>
                  </div>
                  </div>
                  <div class="dropdown-desktop">
                    <div class="dropdown-hover">
                    <a class = "dropdownLink" href="javascript:;">BUY<div class = "arrow">&#9662;</div></a>
                    <ul class = "dropdown-content-desktop">
                      <li> <a href="../financing.html">FINANCING</a> </li>
                      <li> <a href="../filter.html">FIND YOUR CAR</a> </li>
                      <li> <a href="../quiz.html">QUIZ</a> </li>
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
                      <img src="../../imgs/cars/car"""+line[0]+"""-1.jpg" alt="view 1">
                    </div>

                    <div class="mySlides fade">
                      <img src="../../imgs/cars/car"""+line[0]+"""-2.jpg" alt="view 2">
                    </div>

                    <div class="mySlides fade">
                      <img src="../../imgs/cars/car"""+line[0]+"""-3.jpg" alt="view 3">
                    </div>

                    <div class="mySlides fade">
                      <img src="../../imgs/cars/car"""+line[0]+"""-4.jpg" alt="view 4">
                    </div>

                    <div class="mySlides fade">
                      <img src="../../imgs/cars/car"""+line[0]+"""-5.jpg" alt="view 5">
                    </div>

                    <!-- Next and previous buttons -->
                    <div class="slideNavigation">
                      <button class="scale" type="button" name="button" onclick="plusSlides(-1)">&#10094;</button>
                      <a onclick="currentSlide(1)"><img src="../../imgs/cars/car"""+line[0]+"""-1.jpg" alt="view 1 button"></a>
                      <a onclick="currentSlide(2)"><img src="../../imgs/cars/car"""+line[0]+"""-2.jpg" alt="view 2 button"></a>
                      <a onclick="currentSlide(3)"><img src="../../imgs/cars/car"""+line[0]+"""-3.jpg" alt="view 3 button"></a>
                      <a onclick="currentSlide(4)"><img src="../../imgs/cars/car"""+line[0]+"""-4.jpg" alt="view 4 button"></a>
                      <a onclick="currentSlide(5)"><img src="../../imgs/cars/car"""+line[0]+"""-5.jpg" alt="view 5 button"></a>
                      <button class="scale" type="button" name="button" onclick="plusSlides(1)">&#10095;</button>
                    </div>
                  </div>
                </div>
                <hr id="hr1">
                <div class="gridContainer">
                  <div class="info">
                    <h1>Basics</h1>
                    <hr>
                    <p class = "cat"><strong>Make</strong></p>
                    <p class = "val">"""+line[1]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Model</strong></p>
                    <p class = "val">"""+name+"""</p>
                    <hr>
                    <p class = "cat"><strong>Year</strong></p>
                    <p class = "val">"""+line[3]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Exterior Color</strong></p>
                    <p class = "val">"""+line[4]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Body Type</strong></p>
                    <p class = "val">"""+line[5]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Mileage</strong></p>
                    <p class = "val">"""+line[7]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Fuel Type</strong></p>
                    <p class = "val">"""+line[6]+"""</p>
                    <hr>
                    <p class = "cat"><strong>Price</strong></p>
                    <p class = "price val"> <strong>"""+line[8]+"""</strong></p>

                  </div>
                  <div class="contact">
                    <h1>Contact Us</h1>
                    <br>
                    <br>
                    <h2>Call (614) 830-2700</h2>
                    <input id = "fname" type="text" name="fname" value="" placeholder=" First Name">
                    <input id = "lname" type="text" name="lname" value="" placeholder=" Last Name">
                    <input id = "email" type="text" name="email" value="" placeholder=" Email">
                    <input id = "phone" type="text" name="phone" value="" placeholder=" Phone">
                    <textarea id = "message" name="message" rows="16" cols="80" placeholder="Message:"></textarea>
                    <button id = "submit" class = "scale" type="button" name="button" onclick="submit()">Submit</button>
                    <div class="reveal">
                      <h2>Thank you for you interest in the</h2>
                      <br>
                      <h2 id="data">"""+line[3]+""" """+line[1]+""" """+name+"""</h2>
                      <p>We will be in touch to answer any questions you may have, or set up a test drive.</p>
                      <button onclick = "window.open('../filter.html','_self')" id = "filter" type="button" name="button">Continue Shopping</button>
                    </div>
                  </div>
                </div>
                </main>

                <footer>
                  <img src="../../imgs/footerimage.png" alt="illustrated side view of a car driving on a road">
                    <div class="siteMap pentaGrid">
                      <div class="siteSection">
                        <a href="../index.html"><h2>HOME</h2></a>
                      </div>
                      <div class="siteSection">
                        <a href="javascript:;"><h2>BUY</h2></a>
                        <ul>
                          <li class = "fLink"><a href="../financing.html">Financing</a></li>

                          <li><a href="../filter.html">Find Your Car</a></li>
                        </ul>
                      </div>
                      <div class="siteSection">
                        <a href="javascript:;"><h2>TRADE IN</h2></a>
                        <ul>
                          <li class = "fLink"><a href="../trade.html">Trade in Calculator</a></li>

                          <li><a href="../sell.html">Sell your Car</a></li>
                        </ul>
                      </div>
                      <div class="siteSection">
                        <a href="../about.html"><h2>ABOUT US</h2></a>
                      </div>
                      <div class="siteSection">
                        <a href="../filter.html"><h2>SEARCH</h2></a>
                      </div>
                    </div>
                    <div class="bottomBanner">
                      <h1><Strong>Car</strong>tegrity</h1>
                        <p>&copy; 2023 BPA Site. All rights reserved. Site design by Cartegrity<br>Chapter #58-0136, Pickerington High School North.</p>
                        <a><img class = "socials" src="../../imgs/instagram.png" alt="Instagram"></a>
                      <a><img class = "socials" src="../../imgs/twitter.png" alt="twitter"></a>


                    </div>
                  </footer>
              </body>

        </html>

          """
        f.write(content)
        i += 1
        f.close()
