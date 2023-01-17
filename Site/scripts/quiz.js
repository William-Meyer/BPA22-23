let link = ''
function submit(){
  let sedan = 0;
  let suv = 0;
  let truck = 0;
  let electric = 0;
  let van = 0;
  let j = 0
  $("input[type=radio]:checked").each(function() {
    theID = $(this).parent().parent().attr('id')
    theVal = $(this).val();
    console.log(j);
    console.log(this.checked);
    console.log('id: '+theID);
    console.log('theVal: '+theVal);
    if(!(theVal>0 && theVal<6)){
      alert('please make sure all questions have been answered')
      return;
    }
    if(theID == 'q1'){
      if(theVal == 1){
        j++;
        sedan++
        truck++
        electric++
      }
      if(theVal == 2){
        sedan++
        truck++
        electric++
      }
      if(theVal == 3){

      }
      if(theVal == 4){
        suv++
        van++
      }
      if(theVal == 5){
        suv++
        van++
      }

    }
    if(theID == 'q2'){
      if(theVal == 1){
        sedan++
        electric++
      }
      if(theVal == 2){
        sedan++
        electric++
      }
      if(theVal == 3){
        suv++
        van++
        truck++
      }
      if(theVal == 4){
        suv++
        van++
        truck++
      }
      if(theVal == 5){
        suv++
        van++
        truck++
      }

    }
    if(theID == 'q3'){
      if(theVal == 1){
        suv++
        truck++
      }
      if(theVal == 2){
        suv++
        truck++
      }
      if(theVal == 3){
        suv++
        sedan++
      }
      if(theVal == 4){
        sedan++
        electric++
      }
      if(theVal == 5){
        sedan++
        electric++
      }

    }
    if(theID == 'q4'){
      if(theVal == 1){
        sedan++
      }
      if(theVal == 2){
        sedan++
      }
      if(theVal == 3){
        suv++
        electric++
        truck++
      }
      if(theVal == 4){
        suv++
        electric++
      }
      if(theVal == 5){
        suv++
        electric++
      }

    }
    if(theID == 'q5'){
      if(theVal == 1){
        sedan++
      }
      if(theVal == 2){
        sedan++
        van++
      }
      if(theVal ==3){
        truck++
        suv++
      }
      if(theVal == 4){
        suv++
        van++
      }
      if(theVal == 5){
        suv++
        van++
        electric++
      }

    }
    aList = [sedan,truck,van,suv,electric];
    console.log(aList);
});
result = ''
theList =[sedan,truck,van,suv,electric];
let max = 0;
let index = 0;
for(let i=0; i<theList.length;i++){
  if(theList[i]>max){
    max = theList[i];
    index = i;
  }
}
$('#resultsText').css('display','block')
$('#results').css('display','block')
if(max == 1){
  $('#resultsText').html('Sedan!')
  link = 'filter.html?chk=Sedan'
}
if(max == 2){
  $('#resultsText').html('Truck!')
  link = 'filter.html?chk=Truck'
}
if(max == 3){
$('#resultsText').html('Van!')
link = 'filter.html?chk=Van'
}
if(max == 4){
$('#resultsText').html('SUV!')
link = 'filter.html?chk=SUV'
}
if(max == 5){
$('#resultsText').html('Electric!')
link = 'filter.html?chk=Electric'
}
}
function results(){
  window.open(link,'_self');
}
