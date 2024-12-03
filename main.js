let cities = [
    // Create a new city here
    {arabicName: "القاهرة",name: "Al Qāhirah",country: "مصر"},
    {arabicName: "أسيوط",name: "Asyūţ",country: "مصر"},
    {arabicName: "الدقهلية",name: "Ad Daqahlīyah",country: "مصر"},
    {arabicName: "سوهاج",name: "Sohag",country: "مصر"},
    {arabicName: "دمياط",name: "Dumyāţ",country: "مصر"},
    {arabicName: "الدقهلية",name: "Ad Daqahlīyah",country: "مصر"},
    {arabicName: "البحر الأحمر",name: "Al Baḩr al Aḩmar",country: "مصر"},
    {arabicName: "البحيرة",name: "Al Buḩayrah",country: "مصر"},
    {arabicName: "الفيوم",name: "Al Fayyūm",country: "مصر"},
    {arabicName: "الغربية",name: "Al Gharbīyah",country: "مصر"},
    {arabicName: "الاسكندرية",name: "Al Iskandarīyah",country: "مصر"},
    {arabicName: "الاسماعيلية",name: "Al Ismā'īlīyah	",country: "مصر"},
    {arabicName: "الجيزة",name: "Al Jīzah",country: "مصر"},
    {arabicName: "المنيا",name: "Al Minyā",country: "مصر"},
    {arabicName: "المنوفية",name: "Al Minūfīyah",country: "مصر"},
    {arabicName: "القليوبية",name: "Al Qalyūbīyah",country: "مصر"},
    {arabicName: "الاقصر",name: "Al Uqşur",country: "مصر"},
    {arabicName: "الوادي الجديد",name: "Al Wādī al Jadīd",country: "مصر"},
    {arabicName: "السويس",name: "As Suways",country: "مصر"},
    {arabicName: "الشرقية",name: "Ash Sharqīyah",country: "مصر"},
    {arabicName: "أسوان",name: "Aswān",country: "مصر"},
    {arabicName: "بني سويف",name: "Banī Suwayf",country: "مصر"},
    {arabicName: "بور سعيد",name: "Būr Sa‘īd",country: "مصر"},
    {arabicName: "كفر الشيخ",name: "Kafr ash Shaykh",country: "مصر"},
    {arabicName: "مطروح",name: "Maţrūḩ",country: "مصر"},
    {arabicName: "قنا",name: "Qinā",country: "مصر"},
    {arabicName: "شمال سينا ",name: "Shamāl Sīnā'",country: "مصر"},
    {arabicName: "جنوب سينا",name: "Janūb Sīnā'",country: "مصر"}, // SAUDI ARABIA
    {arabicName: "المدينة المنورة",name: "Al Madīnah al Munawwarah",country: "السعودية"},
    {arabicName: "مكة المكرمة",name: "Makkah al Mukarramah",country: "السعودية"},
    {arabicName: "عسير",name: "'Asīr",country: "السعودية"},
    {arabicName: "الباحة",name: "'Al Bāḩah",country: "السعودية"},
    {arabicName: "الجوف",name: "'Al Jawf",country: "السعودية"},
    {arabicName: "القصيم",name: "Al Qaşīm",country: "السعودية"},
    {arabicName: "الحدود الشمالية",name: "Al Ḩudūd ash Shamālīyah",country: "السعودية"},
    {arabicName: "الرياض",name: "Ar Riyāḑ",country: "السعودية"},
    {arabicName: "الشرقية",name: "Ash Sharqīyah",country: "السعودية"},
    {arabicName: "جازان",name: "Jāzān",country: "السعودية"},
    {arabicName: "نجران",name: "Najrān",country: "السعودية"},
    {arabicName: "حائل",name: "	Ḩā'il",country: "السعودية"},
    {arabicName: "الكويت العاصمة",name: "Al ‘Āşimah",country: "الكويت"}, // kuwait
    {arabicName: "عمان العاصمة",name: "Al ‘A̅şimah",country: "الأردن"}, // jordan
    {arabicName: "القدس المشرف",name: "Al Quds",country: "فلسطين"}, // فلسطين
    {arabicName: "بيت لحم",name: "Bayt Laḩm",country: "فلسطين"}, 
    {arabicName: "دير البلح",name: "Deir El Balah",country: "فلسطين"}, 
    {arabicName: "غزة هاشم",name: "Gaza",country: "فلسطين"},
    {arabicName: "جنين",name: "Janīn",country: "فلسطين"},
    {arabicName: "رفح",name: "Rafaḩ",country: "فلسطين"},
    {arabicName: "رام الله",name: "Rām Allāh wal Bīrah",country: "فلسطين"},
    {arabicName: "ابو ظبي",name: "Abū Z̧aby",country: "الإمارات"}, // الإمارات
    {arabicName: "دبي",name: "Dubayy",country: "الإمارات"}, 
    {arabicName: "الشارقة",name: "Ash Shāriqah",country: "الإمارات"},
    { arabicName: "عمان", name: "Masqaţ", country: "عمان" }, // العاصمة
    { arabicName: "الدوحة", name: "Ad Dawḩah", country: "قطر" }, // العاصمة
    { arabicName: "المنامة", name: "Al ‘Āşimah", country: "البحرين" }, // العاصمة
    { arabicName: "صنعاء", name: "Şanʻā’", country: "اليمن" }, // العاصمة
    { arabicName: "الجزائر العاصمة", name: "Algiers", country: "الجزائر" }, // العاصمة
    { arabicName: "الرباط", name: "Rabat", country: "المغرب" }, // العاصمة
    { arabicName: "تونس العاصمة", name: "Tunis", country: "تونس" }, // العاصمة
    { arabicName: "طرابلس", name: "Tripoli", country: "ليبيا" }, // العاصمة
    { arabicName: "نواكشوط", name: "Nouakchott", country: "موريتانيا" }, // العاصمة
    { arabicName: "الخرطوم", name: "Al Kharţūm	", country: "السودان" }, // العاصمة
    { arabicName: "بيروت", name: "Bayrūt", country: "لبنان" }, // العاصمة
    { arabicName: "دمشق", name: "Damascus", country: "سوريا" }, // العاصمة
    { arabicName: "بغداد", name: "Baghdād", country: "العراق" }, // العاصمة
    { arabicName: "جيبوتي", name: "Djibouti", country: "جيبوتي" }, // العاصمة
    { arabicName: "موروني", name: "Moroni", country: "جزر القمر" }, // العاصمة
    { arabicName: "مقديشو", name: "Mogadishu", country: "الصومال" }, // العاصمة
];
let countries = [
    { arabicName: "مصر", name: "EG" },
    { arabicName: "السعودية", name: "SA" },
    { arabicName: "الكويت", name: "KW" },
    { arabicName: "الأردن", name: "JO" },
    { arabicName: "فلسطين", name: "PS" },
    { arabicName: "الإمارات", name: "AE" },
    { arabicName: "عمان", name: "OM" },
    { arabicName: "قطر", name: "QA" },
    { arabicName: "البحرين", name: "BH" },
    { arabicName: "اليمن", name: "YE" },
    { arabicName: "الجزائر", name: "DZ" },
    { arabicName: "المغرب", name: "MA" },
    { arabicName: "تونس", name: "TN" },
    { arabicName: "ليبيا", name: "LY" },
    { arabicName: "موريتانيا", name: "MR" },
    { arabicName: "السودان", name: "SD" },
    { arabicName: "لبنان", name: "LB" },
    { arabicName: "سوريا", name: "SY" },
    { arabicName: "العراق", name: "IQ" },
    { arabicName: "جيبوتي", name: "DJ" },
    { arabicName: "جزر القمر", name: "KM" },
    { arabicName: "الصومال", name: "SO" }
];


let cities_select = document.getElementById("cities-select") // get select element
let country_select = document.getElementById("country-select");
let title = document.querySelector(".title");
let country = document.querySelector(".country");


// Fill country select dropdown
for (let country of countries) {
    const content = `
        <option>${country.arabicName}</option>
    `;
    country_select.innerHTML += content;
}

// Fill city select dropdown
for (let city of cities)  {
    const content = `
                <option>${city.arabicName}</option>
    `
    cities_select.innerHTML += content;
}

// Event listener for getting prayer times
country_select.addEventListener("change", function () {
    const selectedCountry = this.value;
    cities_select.innerHTML = "<option>اختر مدينتك</option>"; // إعادة تعيين الخيارات
    
    // تصفية المدن بناءً على البلد المختار
    const filteredCities = cities.filter(city => city.country === selectedCountry);

    for (let city of filteredCities) {
        const content = `<option>${city.arabicName}</option>`;
        cities_select.innerHTML += content;
    }
});


cities_select.addEventListener("change", function () {
    const selectedCountry = country_select.value;
    const CityName = this.value;
    country.innerHTML = country_select.value
    if (CityName) {
        title.innerHTML = CityName; // تغيير عنوان الصفحة إلى اسم المدينة
        console.log(title.innerHTML);
    } else {
        title.innerHTML = "اختر مدينة"; // إعادة تعيين العنوان إلى النص الافتراضي إذا لم يتم اختيار مدينة
    }

    // التحقق من التوافق بين المدينة والبلد
    if (selectedCountry && isCityInCountry(selectedCountry, CityName)) {
        updatePrayerTimes(selectedCountry, CityName);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "المدينة التي اخترتها لا تتبع البلد المحدد.",
        });
    }
});

function isCityInCountry(countryArabicName, cityArabicName) {
    // تحقق إذا كانت المدينة موجودة ضمن المدن التي تتبع نفس البلد
    return cities.some(
        city =>
            city.arabicName === cityArabicName &&
            city.country === countryArabicName
    );
}


// Function to update prayer times
function updatePrayerTimes(selectedCountryArabic, selectedCityArabic) {
    let countryName = "";
    let cityName = "";

    for (let country of countries) {
        if (country.arabicName === selectedCountryArabic) {
            countryName = country.name;
        }
    }

    for (let city of cities) {
        if (city.arabicName === selectedCityArabic) {
            cityName = city.name;
        }
    }

    if (countryName && cityName) {
        getPrayerTimeOfCity(countryName, cityName);
    }
}


function getPrayerTimeOfCity(countryName, cityName) {
    // query parameters 
    let params = {
        country: countryName,
        city: cityName   //'Asyūţ',
    }
    axios.get('https://api.aladhan.com/v1/timingsByCity', {
            params: params
        })
        .then(function (response) {
            let data = response.data.data // get data of current day from response
            console.log(response);
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
getPrayerTimeOfCity("EG","Asyūţ");  // returns the assuit as defult
// Get the current id from html file and time of praying from response api
function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time
}

// Get the current year
let date = new Date();
let year = date.getFullYear();

let element = document.getElementById("year");
element.innerHTML = year;

