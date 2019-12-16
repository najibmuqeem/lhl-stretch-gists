let talkingCalendar = function(date) {
  const year = date.substring(0, 4); //year won't change
  let month = date.substring(5, 7);
  let day = date.substring(8);
  if (month[0] === "0") {
    month = month[1];
    //so I don't have to type "0" before every single digit month number
  }
  switch (month) {
    //converts number month to word month
    case "1":
      month = "January ";
      break;
    case "2":
      month = "February ";
      break;
    case "3":
      month = "March ";
      break;
    case "4":
      month = "April ";
      break;
    case "5":
      month = "May ";
      break;
    case "6":
      month = "June ";
      break;
    case "7":
      month = "July ";
      break;
    case "8":
      month = "August ";
      break;
    case "9":
      month = "September ";
      break;
    case "10":
      month = "October ";
      break;
    case "11":
      month = "November ";
      break;
    case "12":
      month = "December ";
      break;
    default:
      return "Invalid month or month format";
  }
  if (day[0] === "0") {
    //to remove the "0" before the day so it doesn't show up like "02nd" or "08th"
    day = day[1];
  }
  if (day === "1" || day === "21" || day === "31") {
    day += "st, ";
  } else if (day === "2" || day === "22") {
    day += "nd, ";
  } else if (day === "3" || day === "23") {
    day += "rd, ";
  } else {
    day += "th, ";
  }
  return month + day + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
