function loaded(){
  var param = window.location.href.split("?")[1];
  switch (param) {
    case 'car':
      var img = document.createElement("img");
      img.src = "../imgs/car.png";
      img.alt = "car image";
      document.getElementById('resultImage').append(img);
      break;
    case 'truck':
    var img = document.createElement("img");
    img.src = "../imgs/truck.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    break;
    case 'suv':
    var img = document.createElement("img");
    img.src = "../imgs/suv.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    break;
    case 'van':
    var img = document.createElement("img");
    img.src = "../imgs/van.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    break;
    case 'electric':
    var img = document.createElement("img");
    img.src = "../imgs/electric.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    break;
    default:
      window.open("quiz.html",'_self');
      break;
    }
}
