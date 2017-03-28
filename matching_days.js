var date1 = document.getElementById("firstMatchingDate");
var date2 = document.getElementById("secondMatchingDate");

document.getElementById("firstMatchingDate").addEventListener("change", matchDays);
document.getElementById("secondMatchingDate").addEventListener("change", matchDays);

var day = document.querySelectorAll(".day");

function matchDays() {

  // to loop through the days
  for (var i=0; i < day.length; i++){

    day[i].classList.remove("mydate1");
    day[i].classList.remove("mydate2");
    day[i].classList.remove("matchDay");

  if(date1.value !== "") {
        var newDate1 = new Date (date1.value); // convert input date to js date
        var matchingDag1 = newDate1.getDay(); // to get the value of the day
  }else{
    var matchingDag1 = "";
  }

   if(date2.value !== "") {
        var newDate2 = new Date (date2.value);
        var matchingDag2 = newDate2.getDay();
} else{
  var matchingDag2 = "";
}

//If matchingDag1 is equal to matchingDag2 and or matchingDag1 is not undefined and or matchingDag2 is not undefined

        if(matchingDag1 === matchingDag2 && matchingDag1 !== "" && matchingDag2 !== "") {
            day[matchingDag1].classList.add("matchDay");

// else if matchingDag1 is not undefined and or matchingDag2 is not undefined and or  matchingDag1 is not equal to matchingDag2

        } else if(matchingDag1 !== "" && matchingDag2 !== "" && matchingDag1 !== matchingDag2) {
            day[matchingDag1].classList.add("mydate1");
            day[matchingDag2].classList.add("mydate2");

//else if matchingDag1 is not undefined and or matchingDag1 is not equal to matchingDag2 and or matchingDag2 is not undefined

        } else if(matchingDag1 !== "" && matchingDag1 !== matchingDag2 && matchingDag2 === "")  {
            day[matchingDag1].classList.add("mydate1");
        } else if(matchingDag2 !== "" && matchingDag1 !== matchingDag2 && matchingDag1 === ""){
           day[matchingDag2].classList.add("mydate2");
           //day[matchingDag2].classList.add("mydate");


        }

    }
}
