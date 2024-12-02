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
    },
    {
        arabicName: "الدقهلية",
        name: "Ad Daqahlīyah"
    },
    {
        arabicName: "البحر الأحمر",
        name: "Al Baḩr al Aḩmar"
    },
    {
        arabicName: "البحيرة",
        name: "Al Buḩayrah"
    },
    {
        arabicName: "الفيوم",
        name: "Al Fayyūm"
    },
    {
        arabicName: "الغربية",
        name: "Al Gharbīyah"
    },
    {
        arabicName: "الاسكندرية",
        name: "Al Iskandarīyah"
    },
    {
        arabicName: "الاسماعيلية",
        name: "Al Ismā'īlīyah	"
    },
    {
        arabicName: "الجيزة",
        name: "Al Jīzah"
    },
    {
        arabicName: "المنيا",
        name: "Al Minyā		"
    },
    {
        arabicName: "المنوفية",
        name: "Al Minūfīyah"
    },
    {
        arabicName: "القليوبية",
        name: "Al Qalyūbīyah"
    },
    {
        arabicName: "الاقصر",
        name: "Al Uqşur	"
    },
    {
        arabicName: "الوادي الجديد",
        name: "Al Wādī al Jadīd"
    },
    {
        arabicName: "السويس",
        name: "As Suways"
    },
    { 
        arabicName: "الشرقية",
        name: "Ash Sharqīyah"
    },
    {
        arabicName: "أسوان",
        name: "Aswān"
    },
    {
        arabicName: "بني سويف",
        name: "Banī Suwayf"
    },
    {
        arabicName: "بور سعيد",
        name: "Būr Sa‘īd"
    },
    {
        arabicName: "كفر الشيخ",
        name: "	Kafr ash Shaykh"
    },
    {
        arabicName: "مطروح",
        name: "Maţrūḩ"
    },
    {
        arabicName: "قنا",
        name: "Qinā"
    },
    {
        arabicName: "شمال سينا ",
        name: "Shamāl Sīnā'"
    },
    {
        arabicName: "جنوب سينا",
        name: "	Janūb Sīnā'"
    },
    
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
    axios.get('https://api.aladhan.com/v1/timingsByCity', {
            params: params
        })

        .then(function (response) {
            let data = response.data.data // get data of current day from response
            
            console.log(data.timings);
            // console.log(response);
            
            const timings = data.timings
            fillTimeForPrayer("fajr-time", timings.Fajr)
            fillTimeForPrayer("sunrise-time", timings.Sunrise)
            fillTimeForPrayer("dhuhr-time", timings.Dhuhr)
            fillTimeForPrayer("asr-time", timings.Asr)
            fillTimeForPrayer("maghreb-time", timings.Maghrib)
            fillTimeForPrayer("isha-time", timings.Isha)
            fillTimeForPrayer("Firstthird-time", timings.Firstthird)
            fillTimeForPrayer("Midnight-time", timings.Midnight)
            fillTimeForPrayer("Lastthird-time", timings.Lastthird)
            fillTimeForPrayer("Imsak-time", timings.Imsak)
    
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

// Get the current year
let date = new Date();
let year = date.getFullYear();

let element = document.getElementById("year");
element.innerHTML = year;

