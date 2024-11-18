let cities = [
    // Create a new city here
    {
        arabicName: "القاهرة",
        name: "Al Qāhirah"
    },
    {
        arabicName: "أسيوط",
        name: "Asyūţ"
    },
    {
        arabicName: "الدقهلية",
        name: "Ad Daqahlīyah"
    },
    {
        arabicName: "سوهاج",
        name: "Sohag"
    },
    {
        arabicName: "دمياط",
        name: "Dumyāţ"
    }
];

let cities_select = document.getElementById("cities-select") // get select element
// for loop through the items of cities array
for (let city of cities)  {
    const content = `
                <option>${city.arabicName}</option>
    `
    cities_select.innerHTML += content;
}

cities_select.addEventListener("change",function (){
    // cities_select === this
    document.querySelector(".title").innerHTML = this.value // get the title of the city
    let cityName = ""
    for (let city of cities) {
        if (city.arabicName == this.value ) {
            cityName = city.name
        }
    }
    getPrayerTimeOfCity(cityName)
})

function getPrayerTimeOfCity(cityName) {
    // query parameters 
    let params = {
        country: 'EG',
        city: cityName   //'Asyūţ',
    }
    axios.get('http://api.aladhan.com/v1/hijriCalendarByCity', {
            params: params
        })

        .then(function (response) {
            let today = new Date().getDate(); // get current day
            let data = response.data.data[today - 3] // get data of current day from response
            
            const timings = data.timings
            fillTimeForPrayer("fajr-time", timings.Fajr)
            fillTimeForPrayer("sunrise-time", timings.Sunrise)
            fillTimeForPrayer("dhuhr-time", timings.Dhuhr)
            fillTimeForPrayer("asr-time", timings.Asr)
            fillTimeForPrayer("maghreb-time", timings.Maghrib)
            fillTimeForPrayer("isha-time", timings.Isha)
    
            const Date_en = data.date.readable // get date from response ex: 12 nov 2024
            document.getElementById("date-en").innerHTML = Date_en
    
            const Date_num_Hijri = data.date.hijri.day //get day of hijri
            document.getElementById("date-ar-day").innerHTML = Date_num_Hijri
    
            const Date_Ar_Month = data.date.hijri.month.ar //get month of hijri
            document.getElementById("date-ar-month").innerHTML = Date_Ar_Month
    
            const Day_of_Week = data.date.hijri.weekday.ar
    
            const day = document.querySelectorAll(".day") // day of the week
            day.forEach((element) => {
                element.innerHTML = Day_of_Week
            });
    
        })
        .catch(function (error) {
            console.log(error);
        })
}
getPrayerTimeOfCity("Asyūţ"); // returns the assuit as defult
// Get the current id from html file and time of praying from response api
function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time
}





















// let cities_select = document.getElementById("cities-select");
// let cities = [
//     {
//         arabicName: "القاهرة",
//         name: "Al Qāhirah"
//     },
//     {
//         arabicName: "أسيوط",
//         name: "Asyūţ"
//     },
//     {
//         arabicName: "الدقهلية",
//         name: "Ad Daqahlīyah"
//     },
//     {
//         arabicName: "سوهاج",
//         name: "Sohag"
//     },
//     {
//         arabicName: "دمياط",
//         name: "Dumyāţ"
//     }
// ];

// for (let city of cities) {
//     const content = `<option>${city.arabicName}</option>`;
//     cities_select.innerHTML += content;
// }

// cities_select.addEventListener("change", function () {
//     document.querySelector(".title").innerHTML = this.value;
//     let cityName = "";
//     for (let city of cities) {
//         if (city.arabicName == this.value) {
//             cityName = city.name;
//         }
//     }
//     console.log(this.value);
//     getPrayerTimeOfCity(cityName);
// });

// function getPrayerTimeOfCity(cityName) {
//     let params = {
//         country: 'EG',
//         city: cityName, // أسيوط أو المدينة المحددة
//     };
//     axios.get('http://api.aladhan.com/v1/hijriCalendarByCity', { params: params })

//         .then(function (response) {
//             const today = new Date().getDate(); 
//             const data = response.data.data[today - 3];
//             const timings = data.timings;
//             fillTimeForPrayer("fajr-time", timings.Fajr);
//             fillTimeForPrayer("sunrise-time", timings.Sunrise);
//             fillTimeForPrayer("dhuhr-time", timings.Dhuhr);
//             fillTimeForPrayer("asr-time", timings.Asr);
//             fillTimeForPrayer("maghreb-time", timings.Maghrib);
//             fillTimeForPrayer("isha-time", timings.Isha);

//             // console.log(response.data.data[today - 3]);
            
//             // التاريخ الميلادي والهجري
//             const readableDateEn = data.date.readable;
//             document.getElementById("date-en").innerHTML = readableDateEn;

//             const readableDateArDay = data.date.hijri.day;
//             document.getElementById("date-ar-day").innerHTML = readableDateArDay;

//             const readableDateArMonth = data.date.hijri.month.ar;
//             document.getElementById("date-ar-month").innerHTML = readableDateArMonth;

//             const readableDateArMont = data.date.hijri.weekday.ar;
//             const day = document.querySelectorAll(".day");
//             day.forEach((element) => {
//                 element.innerHTML = readableDateArMont;
//             });
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// getPrayerTimeOfCity("Asyūţ")
// function fillTimeForPrayer(id, time) {
//     document.getElementById(id).innerHTML = time;
// }

