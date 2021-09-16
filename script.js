const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        console.log("tablet");
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return console.log("mobile");
    }
    console.log("desktop");
    //alert("This is a mobile only app")
};
let page1 = document.getElementById("page__1");
let page2 = document.getElementById("page__2")
document.getElementById("page__1__button").addEventListener("click", goToNextPage);

class Doctor {
    constructor(name, type, hospital) {
        this.name = name;
        this.type = type;
        this.hospital = hospital;
    }
}

const doctor__1 = new Doctor("Dr. Stella Kane", "Heart Surgeon", "Flower Hospital");
const doctor__2 = new Doctor("Dr. Joseph Cart", "Dental Surgeon", "Flower Hospital");
const doctor__3 = new Doctor("Dr. Stefani Albert", "Heart Surgeon", "Flower Hospital")

const doctors = [doctor__1, doctor__2, doctor__3];

const backgroundColors = ["#EDF1FA", "#FAF2EA", "#F9EDEB"];

function goToNextPage () {
    page1.style.display = "none";
    page2.style.display = "block";
    for (let i=0; i < doctors.length; i++){
      let doctorBox = document.createElement("div");
      document.getElementById("page__2__top-doctors").appendChild(doctorBox);
      doctorBox.className = "doctor__box";

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
}
console.log(doctors);


deviceType();       


