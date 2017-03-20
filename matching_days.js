var date1 = document.getElementById("firstdate");
var date2 = document.getElementById("seconddate");

document.getElementById("firstdate").addEventListener("change", myFunction);
document.getElementById("seconddate").addEventListener("change", myFunction);

var day = document.querySelectorAll(".day");

function myFunction() {
  for (var i=0; i<day.length; i++){


        var newDate1 = newDate1 (date1.value);
        var whichDay1 = newDate1.getDay();

        var newDate2 = newDate2 (date2.value);
        var whichDay2 = newDate2.getDay();

        day[i].classList.remove("mydate1");
        day[i].clsssList.remove("mydate2");
        day[i].classList.remove("myStyle");

        if(whichDay1 === whichDay2) {
            day[whichDay1].classlist.add("mystyle");

        } else if(whichDay2 == NaN) {
            day[whichDay1].classList.add("mydate1");

        } else if(whichDay1 == NaN) {
            day[whichday2].classList.add("mydate2");
        } else {
           day[whichDay1].classList.add("mydate1");
           day[whichday2].classList.add("mydate2");


        }



    }
}
