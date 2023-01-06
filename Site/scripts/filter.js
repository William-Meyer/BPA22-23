classes = [
{name: 'Audi', tag: ['audi']},
{name: 'BMW', tag: ['bmw']},
{name: 'Buick', tag: ['buick']},
{name: 'Chevrolet', tag: ['chevrolet']},
{name: 'Ford', tag: ['ford']},
{name: 'Honda', tag: ['honda']},
{name: 'Hyundai', tag: ['hyundai']},
{name: 'Infiniti', tag: ['infiniti']},
{name: 'Jeep', tag: ['jeep']},
{name: 'Lexus', tag: ['lexus']},
{name: 'Subaru', tag: ['subaru']},
{name: 'Toyota', tag: ['toyota']},
{name: 'Civic', tag: ['civic']},
{name: 'Accord', tag: ['accord']},
{name: 'Pilot', tag: ['pilot']},
{name: 'CR-V', tag: ['cr-v']},
{name: '330-XI', tag: ['330 xi']},
{name: 'Corolla', tag: ['corolla']},
{name: 'Cruze', tag: ['cruze']},
{name: 'ES-350', tag: ['es 350']},
{name: 'F-150', tag: ['f-150']},
{name: 'Forester', tag: ['forester']},
{name: 'Lucerne', tag: ['lucerne']},
{name: 'Prius', tag: ['prius']},
{name: 'Q7', tag: ['q7']},
{name: 'Silverado', tag: ['silverado']},
{name: 'Venue', tag: ['venue']},
{name: 'Wrangler', tag: ['wrangler']},
{name: 'g37x', tag: ['g37x']},
{name: 'Sedan', tag: ['sedan']},
{name: 'SUV', tag: ['suv']},
{name: 'Truck', tag: ['truck']},
{name: 'Van', tag: ['van']},
{name: 'Gas', tag: ['gas']},
{name: 'Diesel', tag: ['diesel']},
{name: 'Hybrid', tag: ['hybrid']},
{name: 'Electric', tag: ['electric']},
{name: '0-30,000', tag: ['0-30000']},
{name: '30,001-60,000', tag: ['30001-60000']},
{name: '60,001-90,000', tag: ['60001-90000']},
{name: '90,001-120,000', tag: ['90001-120000']},
{name: '120,001-150,000', tag: ['120001-150000']},
{name: '150,001-180,000', tag: ['150001-180000']},
{name: '180,001-210,000', tag: ['180001-210000']},
{name: '210,001-240,000', tag: ['210001-240000']},
{name: 'Black', tag: ['black']},
{name: 'Blue', tag: ['blue']},
{name: 'Brown', tag: ['brown']},
{name: 'Gray', tag: ['gray']},
{name: 'Red', tag: ['red']},
{name: 'Green', tag: ['green']},
{name: 'Silver', tag: ['silver']},
{name: 'White', tag: ['white']}
]
let searchClasses = []
function searchTyping(){
  searchClasses = []
  input = document.getElementById('search');
  text = input.value.toLowerCase();
  let words = text.split(" ");
  for (const word of words) {
  const index = classes.findIndex(obj => obj.tag.includes(word));
  if (index !== -1) {
    console.log(`The word "${word}" was found at index ${index} in the array.`);
  } else {
    console.log(`The word "${word}" was not found in the array.`);
  }
}
  console.log(words);
}
