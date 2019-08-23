
export const getDays = new Promise(function(resolve){
    var days
    var d = new Date()
    if(d.getDay()==0){days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']}
    if(d.getDay()==1){days=['Monday','Tuesay','Wednesday','Thursday','Friday','Saturday']}
    if(d.getDay()==2){days=['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']}
    if(d.getDay()==3){days=['Wednesday','Thursday','Friday','Saturday','Sunday','Monday']}
    if(d.getDay()==4){days=['Thursday','Friday','Saturday','Sunday','Monday','Tuesday']}
    if(d.getDay()==5){days=['Friday','Saturday','Sunday','Monday','Tuesday','Wednesday']}
    if(d.getDay()==6){days=['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday']}
    resolve(days)


})

export const getDates = new Promise(function(resolve){

  var day1 = new Date();
  day1.setDate(day1.getDate() + 1); 
  var dd = day1.getDate();
  if(dd<10){dd='0'+dd}
  var mm = day1.getMonth() + 1;
  if(mm<10){mm='0'+mm}
  var y = day1.getFullYear();
  day1 = y + '-'+ mm + '-'+ dd;

  var day2 = new Date();
  day2.setDate(day2.getDate() + 2); 
  var dd = day2.getDate();
  if(dd<10){dd='0'+dd}
  var mm = day2.getMonth() + 1;
  if(mm<10){mm='0'+mm}
  var y = day2.getFullYear();
  day2 = y + '-'+ mm + '-'+ dd;

  var day3 = new Date();
  day3.setDate(day3.getDate() + 3); 
  var dd = day3.getDate();
  if(dd<10){dd='0'+dd}
  var mm = day3.getMonth() + 1;
  if(mm<10){mm='0'+mm}
  var y = day3.getFullYear();
  day3 = y + '-'+ mm + '-'+ dd;

  var day4 = new Date();
  day4.setDate(day4.getDate() + 4); 
  var dd = day4.getDate();
  if(dd<10){dd='0'+dd}
  var mm = day4.getMonth() + 1;
  if(mm<10){mm='0'+mm}
  var y = day4.getFullYear();
  day4 = y + '-'+ mm + '-'+ dd;

  var day5 = new Date();
  day5.setDate(day5.getDate() + 5); 
  var dd = day5.getDate();
  if(dd<10){dd='0'+dd}
  var mm = day5.getMonth() + 1;
  if(mm<10){mm='0'+mm}
  var y = day5.getFullYear();
  day5 = y + '-'+ mm + '-'+ dd;


var dates=[
  day1,
  day2,
  day3,
  day4,
  day5
]
  resolve(dates)

})
