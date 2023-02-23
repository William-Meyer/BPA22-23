let cost = -1;
let length = -1;
function loanClicked(id){
  $('.buttons button').css('border-width','2px');
  $('#'+id).css('border-width','4px');
  length = parseInt(id);
}
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
function addCommas(digits){

  return parseInt(digits).toLocaleString();
}
function calc(){
  if(length>0 && parseInt(filterNums($('#dp').val()))>-1 && parseInt(filterNums($('#mp').val()))>-1 && parseInt(filterNums($('#tp').val())) > -1){
    $('#down').html('$ '+addCommas(filterNums($('#dp').val())))
    let final = -1;
    let tax = -1;
    if(parseInt(filterNums($('#trd').val()))>0){
      $('#trade').html('$ '+addCommas(filterNums($('#trd').val())))
      let totalNT = (parseInt(filterNums($('#mp').val()))*length)+parseInt(filterNums($('#dp').val()))+parseInt(filterNums($('#trd').val()));
      let totalT = totalNT * ((100 - parseInt(filterNums($('#tp').val())))/100);
      credit = (5-$('select').val()) * 200;
      tax = totalNT -totalT;
      let monthly = (totalT-credit)/length;
      final = totalT -credit;
    }
    else{
      let totalNT = (parseInt(filterNums($('#mp').val()))*length)+parseInt(filterNums($('#dp').val()));
      let totalT = totalNT * ((100 - parseInt(filterNums($('#tp').val())))/100);
      credit = (5-$('select').val()) * 200;
      tax = totalNT -totalT;
      final = totalT -credit;
    }
    if(final<0){
      final = 0;
    }
    cost = final;
    $('#amount').html('$ '+addCommas(final));
    $('#total').html('$ '+addCommas(final));
    $('#tax').html('$ '+addCommas(tax));
    $('#fee').html('$ '+addCommas(credit));
  }
  else{
    alert('Please check that you have filled out all responses that required and that the inputs provided are valid. Thanks!');
  }
}
function shop(){
  if(cost>-1)
  {
  if(cost<4001){
    window.open('filter.html?chk=0-4000','_self')
    return;
  }
  if(cost<6001){
    window.open('filter.html?chk=4001-6000','_self')
    return;
  }
  if(cost<8001){
    window.open('filter.html?chk=6001-8000','_self')
    return;
  }
  if(cost<10001){
    window.open('filter.html?chk=8001-10000','_self')
    return;
  }
  if(cost<12001){
    window.open('filter.html?chk=10001-12000','_self')
    return;
  }
  if(cost<14001){
    window.open('filter.html?chk=12001-14000','_self')
    return;
  }
  window.open('filter.html?chk=14001a','_self')
}
else{
  alert('Please calculate your budget. If you wish to see all cars go to FIND YOUR CAR under BUY. Thanks!');
}
}
