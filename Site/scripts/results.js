function loaded(){
  var param = window.location.href.split("?")[1];
  switch (param) {
    case 'car':
      document.getElementById('resultButton').setAttribute('onclick',"window.open('filter.html?chk=Sedan','_self')");
      var img = document.createElement("img");
      img.src = "../imgs/car.png";
      img.alt = "car image";
      document.getElementById('resultImage').append(img);
      document.getElementById('resultText').innerHTML = "Car";
      break;
    case 'truck':
    document.getElementById('resultButton').setAttribute('onclick',"window.open('filter.html?chk=Truck','_self')");
    var img = document.createElement("img");
    img.src = "../imgs/truck.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    document.getElementById('resultText').innerHTML = "Truck";
    break;
    case 'suv':
    document.getElementById('resultButton').setAttribute('onclick',"window.open('filter.html?chk=SUV','_self')");
    var img = document.createElement("img");
    img.src = "../imgs/suv.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    document.getElementById('resultText').innerHTML = "SUV";
    break;
    case 'van':
    document.getElementById('resultButton').setAttribute('onclick',"window.open('filter.html?chk=Van','_self')");
    var img = document.createElement("img");
    img.src = "../imgs/van.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    document.getElementById('resultText').innerHTML = "Van";
    break;
    case 'electric':
    document.getElementById('resultButton').setAttribute('onclick',"window.open('filter.html?chk=Electric','_self')");
    var img = document.createElement("img");
    img.src = "../imgs/electric.png";
    img.alt = "car image";
    document.getElementById('resultImage').append(img);
    document.getElementById('resultText').innerHTML = "Electric";
    break;
    default:
      window.open("quiz.html",'_self');
      break;
    }
}
