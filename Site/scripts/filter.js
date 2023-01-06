classes = [
  [  {name: 'Audi', tag: ['audi'], type: 'make'},
    {name: 'BMW', tag: ['bmw'], type: 'make'},
    {name: 'Buick', tag: ['buick'], type: 'make'},
    {name: 'Chevy', tag: ['chevrolet','chevy'], type: 'make'},
    {name: 'Ford', tag: ['ford'], type: 'make'},
    {name: 'Honda', tag: ['honda'], type: 'make'},
    {name: 'Hyundai', tag: ['hyundai'], type: 'make'},
    {name: 'Infiniti', tag: ['infiniti'], type: 'make'},
    {name: 'Jeep', tag: ['jeep'], type: 'make'},
    {name: 'Lexus', tag: ['lexus'], type: 'make'},
    {name: 'Subaru', tag: ['subaru'], type: 'make'},
    {name: 'Toyota', tag: ['toyota'], type: 'make'},
    {name: 'Civic', tag: ['civic'], type: 'model'},
    {name: 'Accord', tag: ['accord'], type: 'model'},
    {name: 'Pilot', tag: ['pilot'], type: 'model'},
    {name: 'CR-V', tag: ['cr-v'], type: 'model'},
    {name: '330-XI', tag: ['330','xi'], type: 'model'},
    {name: 'Corolla', tag: ['corolla'], type: 'model'},
    {name: 'Cruze', tag: ['cruze'], type: 'model'},
    {name: 'ES-350', tag: ['es','350'], type: 'model'},
    {name: 'F-150', tag: ['f-150'], type: 'model'},
    {name: 'Forester', tag: ['forester'], type: 'model'},
    {name: 'Lucerne', tag: ['lucerne'], type: 'model'},
    {name: 'Prius', tag: ['prius'], type: 'model'},
    {name: 'Q7', tag: ['q7'], type: 'model'},
    {name: 'Silverado', tag: ['silverado'], type: 'model'},
    {name: 'Venue', tag: ['venue'], type: 'model'},
    {name: 'Wrangler', tag: ['wrangler'], type: 'model'},
    {name: 'g37x', tag: ['g37x'], type: 'model'},
    {name: 'Sedan', tag: ['sedan'], type: 'body'},
    {name: 'SUV', tag: ['suv'], type: 'body'},
    {name: 'Truck', tag: ['truck'], type: 'body'},
    {name: 'Van', tag: ['van'], type: 'body'},
    {name: 'Gas', tag: ['gas'], type: 'fuel'},
    {name: 'Diesel', tag: ['diesel'], type: 'fuel'},
    {name: 'Hybrid', tag: ['hybrid'], type: 'fuel'},
    {name: 'Electric', tag: ['electric'], type: 'fuel'},
    {name: '0-30,000', tag: ['0-30000'], type: 'mileage'},
    {name: '30,001-60,000', tag: ['30001-60000'], type: 'mileage'},
    {name: '60,001-90,000', tag: ['60001-90000'], type: 'mileage'},
    {name: '90,001-120,000', tag: ['90001-120000'], type: 'mileage'},
    {name: '120,001-150,000', tag: ['120001-150000'], type: 'mileage'},
    {name: '150,001-180,000', tag: ['150001-180000'], type: 'mileage'},
    {name: '180,001-210,000', tag: ['180001-210000'], type: 'mileage'},
    {name: '210,001-240,000', tag: ['210001-240000'], type: 'mileage'},
    {name: 'Black', tag: ['black'], type: 'color'},
    {name: 'Blue', tag: ['blue'], type: 'color'},
    {name: 'Brown', tag: ['brown'], type: 'color'},
    {name: 'Gray', tag: ['gray'], type: 'color'},
    {name: 'Red', tag: ['red'], type: 'color'},
    {name: 'Green', tag: ['green'], type: 'color'},
    {name: 'Silver', tag: ['silver'], type: 'color'},
    {name: 'White', tag: ['white'], type: 'color'}
];
let searchClasses = [];
function searchTyping(){
  searchClasses = []
  input = document.getElementById('search');
  text = input.value.toLowerCase();
  let words = text.split(" ");
  for (const word of words) {
  const index = classes.findIndex(obj => obj.tag.includes(word));
  if (index !== -1) {
    searchClasses.push(index);
  }
}
}
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

let checkClasses = [];
window.onload = function(){
  document.querySelector('#sideID').onclick = function(ev) {
    if(ev.target.value && ev.target.type == "checkbox") {
      console.log('test')
      if(ev.target.checked){
        console.log(ev.target.name);
        checkClasses.push( ev.target.name);
      }
      else{
        checkClasses = removeItemOnce(checkClasses, ev.target.name);
      }
      console.log(checkClasses);
    }
  }  // your code
};
