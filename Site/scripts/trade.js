const numbers = ['1','2','3','4','5','6','7','8','9','0']
function filterNums(aaString){
  result='-1'
  if(aaString != undefined)
  {
  result = ''
  let aString = aaString.split('');
  for (let i = 0; i < aString.length; i++){
    if(numbers.includes(aString[i])){
      result = result+aString[i]
    }
    else if(aString[i]=='.'){
      if(aString.length>i+1){
        dec=parseInt(aString[i+1])
        if(dec>=5){
          if(i!=0){
            result = (parseInt(result) + 1).toString()
            return result;
          }
          else{
            return '1';
          }
        }
        else{
          if(i!=0){
            return result;
          }
          else{
            return '0';
          }
        }
      }
    }
  }
}
  return result;
}

function sell(){
  let year = document.getElementById('year').value;
  let make = document.getElementById('make').value;
  let model = document.getElementById('model').value;
  let miles = document.getElementById('mile').value;
  miles = filterNums(miles)
  if(miles.length>0 && model.length > 0 && make.length>0 && year.length>0){
    //do stuff
    let total=40000
    if(year == '2000+'){
      total = 10000
    }
    else{
      total = total - ((2023 - parseInt(year)) * 1350)
    }
    if(miles>300000){
      total = 0;
    }
    else{
      total = total - (mile/50000 * 1000)
    }
    if(total <= 500){
      total = 0;
    }
    //milage logic 1k per 50k miles
    //if total is less then 500 return 0
    $('.line').css('display','none');
    $('#message').css('display','none');
    $('#submit').css('display','none');
    document.getElementById('carDetail').innerHTML ='Your <strong>'+toString(year)+ ' ' + toString(make) +' '+ toString(model)+'</strong><br>is Worth:';
    document.getElementById('estimate').innerHTML = '$'+total;
    $('.reveal').css('display','block');
  }
  else{
    alert('Make sure to fill out all forms with numerical values')
  }



}
