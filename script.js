
//create doctors objects with infos
let page1 = document.getElementById("page__1");
let page2 = document.getElementById("page__2");
let page3 = document.getElementById("page__3")
document.getElementById("page__1__button").addEventListener("click", goToNextPage);

class Doctor {
    constructor(name, type, hospital, info) {
        this.name = name;
        this.type = type;
        this.hospital = hospital;
        this.info = info;
    }
}
const doctor1 = new Doctor("Dr. Stella Kane", "Heart Surgeon", "Flower Hospital", "Dr. Stella is the top most heart surgeon in Flower Hospital. She has done over 100 successful sugeries within past 3 years. She has achieved several awards for her wonderful contribution in her own field. She’s available for private consultation for given schedules.");
const doctor2 = new Doctor("Dr. Joseph Cart", "Dental Surgeon", "Flower Hospital", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante eros, fringilla eget commodo nec, suscipit sit amet leo. Fusce mollis fringilla tellus, eget mollis urna volutpat nec. Integer consequat, tellus scelerisque efficitur accumsan, diam purus imperdiet sapien, ut cursus enim quam ut velit. Mauris quis nunc eget lacus ornare malesuada.");
const doctor3 = new Doctor("Dr. Stefani Albert", "Heart Surgeon", "Flower Hospital","Nullam velit ipsum, tempor vel leo eget, eleifend rhoncus justo. Nullam cursus eu est eget scelerisque. Maecenas condimentum commodo nibh quis accumsan. Fusce non mauris non mauris volutpat congue. Donec interdum ipsum scelerisque felis eleifend dapibus.")

const doctors = [doctor1, doctor2, doctor3];
console.log(doctors);


const backgroundColors = ["#EDF1FA", "#FAF2EA", "#F9EDEB"];

//go to the second page and populate it
function goToNextPage () {  
    
    page1.style.display = "none";
    page2.style.display = "block";
    
    //populating "top doctors" section
    for (let i=0; i < doctors.length; i++){
      let doctorBox = document.createElement("div");
      document.getElementById("page__2__top-doctors").appendChild(doctorBox);
      doctorBox.className = "doctor__box";
      doctorBox.setAttribute("id", "doctor"+[i])
        
      let doctorName = document.createElement("div");
      doctorName.className= "doctor__name";
      doctorBox.appendChild(doctorName);
      doctorName.innerHTML = doctors[i].name;

      let doctorInfos = document.createElement("div");
      doctorInfos.className= "doctor__infos";
     doctorName.appendChild(doctorInfos);
      doctorInfos.innerHTML = doctors[i].type + " " + "-" + doctors[i].hospital;
      
      doctorBox.style.background = backgroundColors[i];    

      let image = document.createElement("img");
      image.className = "doctor__image"
      image.src = "/images/doctor__" + [i+1] + ".png";
      doctorBox.insertBefore(image, doctorBox.childNodes[0]);
      
    }
    doctorDetails();    
}
console.log(doctors);

//create doctors' details and schedule page

let name = document.getElementById("doctor__info-name");
let info = document.getElementById("doctor__info-other");
let doctorImage = document.getElementById("doctor__info-image");
let doctorDescription = document.getElementById("about__doctor-text");

function doctorDetails (){
    document.getElementById("doctor0").addEventListener ("click", function prova1 () {
        page2.style.display="none";
        page3.style.display="block";
        name.innerHTML = doctors[0].name;
        info.innerHTML = doctors[0].type + " " + "-" + " " + doctors[0].hospital;
        doctorImage.src = "/images/doctor__1.png";
        doctorDescription.innerHTML = doctors[0].info;
        
    })
    document.getElementById("doctor1").addEventListener ("click", function prova2 () {
        page2.style.display="none";
        page3.style.display="block";
        name.innerHTML = doctors[1].name;
        info.innerHTML = doctors[1].type + " " + "-" + " " + doctors[1].hospital;
        doctorImage.src = "/images/doctor__2.png";
        doctorDescription.innerHTML = doctors[1].info;
    })
    document.getElementById("doctor2").addEventListener ("click", function prova3 () {
        page2.style.display="none";
        page3.style.display="block";
        name.innerHTML = doctors[2].name;
        info.innerHTML = doctors[2].type + " " + "-" + " " + doctors[2].hospital;
        doctorImage.src = "/images/doctor__3.png";
        doctorDescription.innerHTML = doctors[2].info;
    })
}

//back from details page to page 2
document.getElementById("page__3-back").addEventListener("click", backToPage2);
function backToPage2 (){
    page3.style.display = "none";
    page2.style.display = "block";
}


//filter doctors for category

let dentalSurgeon = document.getElementById("dental");
let heartSurgeon = document.getElementById ("heart");
let eyeSurgeon = document.getElementById("eye");



heartSurgeon.addEventListener("click" , heartFilter);
dentalSurgeon.addEventListener("click", dentalFilter);
eyeSurgeon.addEventListener("click", eyeFilter);
/*function heart () {
    for (let i = 0; i < Doctor[i]; i++){
     Doctor[i].type = "Heart Surgeon";
    }
    console.log(filtered);
    }*/

/*function heartFilter ()  { 
    let heartFilter = doctors.filter(function heart(el){
    return el.type === "Heart Surgeon";
    })
    console.log(heartFilter); 

} 

function eyeFilter ()  {
    let eyeFilter = doctors.filter(function eye(el){
        return el.type === "Eye Surgeon";
     })
     console.log(eyeFilter);
}

function dentalFilter (){
 let dentalFilter = doctors.filter(function dental(el){
    return el.type === "Dental Surgeon";
 })
 console.log(dentalFilter)
}*/
let resetFilter = document.createElement("button");
resetFilter.innerHTML = "Reset Filter";

function heartFilter () {
    doctorCard = document.getElementsByClassName("doctor__box");
    for (i = 0; i < doctors.length; i++) {
        if (doctors[i].type == "Heart Surgeon") {
            doctorCard[i].style.display = ""
        } else doctorCard[i].style.display = "none"
    }
    let topDoctors = document.getElementById("page__2__top-doctors");
    topDoctors.insertAdjacentElement ("afterbegin",resetFilter);
    resetFilter.addEventListener("click", reset)
    resetFilter.style.display = "block";
    resetFilter.className = "reset__button";
}

function dentalFilter () {
    doctorCard = document.getElementsByClassName("doctor__box");
    for (i = 0; i < doctors.length; i++) {
        if (doctors[i].type == "Dental Surgeon") {
            doctorCard[i].style.display = ""
        } else doctorCard[i].style.display = "none"
    }
    let topDoctors = document.getElementById("page__2__top-doctors");
    topDoctors.insertAdjacentElement ("afterbegin",resetFilter);
    resetFilter.addEventListener("click", reset)
    resetFilter.style.display = "block";
    resetFilter.className = "reset__button";
}

function eyeFilter () {
    doctorCard = document.getElementsByClassName("doctor__box");
    for (i = 0; i < doctors.length; i++) {
        if (doctors[i].type == "Eye Surgeon") {
            doctorCard[i].style.display = ""
        } else doctorCard[i].style.display = "none"
    }
    let topDoctors = document.getElementById("page__2__top-doctors");
    topDoctors.insertAdjacentElement ("afterbegin",resetFilter);
    resetFilter.addEventListener("click", reset)
    resetFilter.style.display = "block";    
    resetFilter.className = "reset__button";
}

//reset filter function

function reset() {
    doctorCard = document.getElementsByClassName("doctor__box");
    for (i = 0; i < doctors.length; i++) {
        doctorCard[i].style.display = ""
        resetFilter.style.display = "none"
    }}

//filter doctor by searchbar
function searchDoctor () {
    const searchbar = document.getElementById("search__doctor");
    let filteredDoctors = document.getElementsByClassName("doctor__box");
    
    for (i = 0; i < doctors.length; i++) {
        if (doctors[i].type.toUpperCase().includes(searchbar.value.toUpperCase()) || doctors[i].name.toUpperCase().includes(searchbar.value.toUpperCase())){
            filteredDoctors[i].style.display = ""
        } else {
            filteredDoctors[i].style.display = "none"}
    }
}

document.getElementById("search__icon").addEventListener("click", searchDoctor)

//understand what kind of device the user is using and limit the consultation only from mobile devices
    const deviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            console.log("tablet");
            alert("This is a mobile-only app. Please use a mobile device to consult this app")
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return console.log("mobile");
        }
        console.log("desktop");
        alert("This is a mobile-only app. Please use a mobile device to consult this app")
    };

    deviceType();     
