classes = [
    {name: 'Audi', tag: ['audi'], type: 'make'},
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
    {name: '330%XI', tag: ['330','xi'], type: 'model'},
    {name: 'Corolla', tag: ['corolla'], type: 'model'},
    {name: 'Cruze', tag: ['cruze'], type: 'model'},
    {name: 'ES%350', tag: ['es','350'], type: 'model'},
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
    {name: '0-30000', tag: ['0-30000'], type: 'mileage'},
    {name: '30001-60000', tag: ['30001-60000'], type: 'mileage'},
    {name: '60001-90000', tag: ['60001-90000'], type: 'mileage'},
    {name: '90001-120000', tag: ['90001-120000'], type: 'mileage'},
    {name: '120001-150000', tag: ['120001-150000'], type: 'mileage'},
    {name: '150001-180000', tag: ['150001-180000'], type: 'mileage'},
    {name: '180001-210000', tag: ['180001-210000'], type: 'mileage'},
    {name: '210001-240000', tag: ['210001-240000'], type: 'mileage'},
    {name: 'Black', tag: ['black'], type: 'color'},
    {name: 'Blue', tag: ['blue'], type: 'color'},
    {name: 'Brown', tag: ['brown'], type: 'color'},
    {name: 'Gray', tag: ['gray'], type: 'color'},
    {name: 'Red', tag: ['red'], type: 'color'},
    {name: 'Green', tag: ['green'], type: 'color'},
    {name: 'Silver', tag: ['silver'], type: 'color'},
    {name: '0-4000', tag: ['0-4000'], type: 'color'},
    {name: '4001-6000', tag: ['4001-6000'], type: 'price'},
    {name: '6001-8000', tag: ['6001-8000'], type: 'price'},
    {name: '8001-10000', tag: ['8001-10000'], type: 'price'},
    {name: '10001-12000', tag: ['10001-12000'], type: 'price'},
    {name: '12001-14000', tag: ['12001-14000'], type: 'price'},
    {name: '14001a', tag: ['14001a'], type: 'price'},
    {name: 'White', tag: ['white'], type: 'color'},
    {name: '2004', tag: ['2004'], type: 'year'},
    {name: '2005', tag: ['2005'], type: 'year'},
    {name: '2006', tag: ['2006'], type: 'year'},
    {name: '2007', tag: ['2007'], type: 'year'},
    {name: '2008', tag: ['2008'], type: 'year'},
    {name: '2009', tag: ['2009'], type: 'year'},
    {name: '2010', tag: ['2010'], type: 'year'},
    {name: '2011', tag: ['2011'], type: 'year'},
    {name: '2012', tag: ['2012'], type: 'year'},
    {name: '2013', tag: ['2013'], type: 'year'},
    {name: '2014', tag: ['2014'], type: 'year'},
    {name: '2015', tag: ['2015'], type: 'year'},
    {name: '2016', tag: ['2016'], type: 'year'},
    {name: '2017', tag: ['2017'], type: 'year'},
    {name: '2018', tag: ['2018'], type: 'year'},
    {name: '2019', tag: ['2019'], type: 'year'},
    {name: '2020', tag: ['2020'], type: 'year'},
    {name: '2021', tag: ['2021'], type: 'year'},
    {name: '2022', tag: ['2022'], type: 'year'}
];
let searchClassesGlobal = [];
let checkClassesGlobal = [];
function search(){
  let checkClasses = checkClassesGlobal;
  let searchClasses = searchClassesGlobal;
  let toShow = []
  $('.card').css('display','none');
  if(searchClasses.length == 0 && checkClasses.length == 0){
    $('.card').css('display','block');
    return;
  }
  let searchTypes = []
  if(searchClasses.length>0){
    for(let i = searchClasses.length-1; i>-1; i--){
      type = searchClasses[i].type
      console.log('type: '+type)
      if(searchTypes.includes(type)){
        searchClasses.splice(i,i);
      }
      else{
        searchTypes.push(type);
      }
    }
  }
  for(let i = 0; i < checkClasses.length; i++){
    if(searchTypes.includes(checkClasses[i].type)){
      checkClasses.splice(i,i)
    }
  }
  let namesToShowCheck = [];
  let namesToShowSearch = [];
  for(let i = 0; i<checkClasses.length; i++){
    namesToShowCheck.push(checkClasses[i].name);
  }
  for(let i = 0; i<searchClasses.length; i++){
    namesToShowSearch.push(searchClasses[i].name);
  }
  console.log('check: '+namesToShowCheck);
  console.log('search: '+ namesToShowSearch);
  theCards = document.getElementsByClassName('card')
  for(let i = 0; i<theCards.length; i++){
    el = theCards[i];
    classList = el.classList;
    id = el.id
    canShowSearch = true
    canShowCheck = false
    for(let j = 0; j<namesToShowSearch.length; j++){
      searchFor = namesToShowSearch[j]
      if(!(classList.contains(searchFor))){
        canShowSearch = false;
      }
    }
    for(let j = 0; j<namesToShowCheck.length; j++){
      searchFor = namesToShowCheck[j]
      if(classList.contains(searchFor)){
        canShowCheck = true;
      }
    }
    if((canShowCheck || namesToShowCheck.length<1) && (canShowSearch || namesToShowSearch.length<1)){
      $('#'+id).css('display','block');
    }
  }
}


function searchTyping(){
  searchClassesGlobal = []
  input = document.getElementById('search');
  text = input.value.toLowerCase();
  let words = text.split(" ");
  for (const word of words) {
  const index = classes.findIndex(obj => obj.tag.includes(word));
  if (index !== -1) {
    searchClassesGlobal.push(classes[index]);
  }
}
search();
}
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
window.onload = function(){
  document.querySelector('#sideID').onclick = function(ev) {
    if(ev.target.value && ev.target.type == "checkbox") {
      if(ev.target.checked){
        for(let i = 0; i<classes.length;i++){
          if (classes[i].name == ev.target.name){
            checkClassesGlobal.push(classes[i]);
          }
        }

      }
      else if(checkClassesGlobal.length>1){
        for(let i = 0; i<checkClassesGlobal.length; i++){
          if(checkClassesGlobal[i].name == ev.target.name){
            checkClassesGlobal.splice(i,i)
          }
        }
      }
      else{
        checkClassesGlobal = [];
      }
      search();
    }
  }  // your code
};
