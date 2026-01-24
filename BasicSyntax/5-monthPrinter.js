function solve(num){
    const  months = ["Error","January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"]
    if(num < 1 || num > 12){
        console.log('Error!');
        
    }else{
        console.log(months[num]);
    
    }
}
solve(2);