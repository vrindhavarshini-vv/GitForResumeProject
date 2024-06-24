let params = new URLSearchParams(document.location.search);
let index = params.get("index");

let existingdata=localStorage.getItem("resume")
let parseddata=JSON.parse(existingdata)
let resumeObj = parseddata[index];
console.log(resumeObj.personal_details.date_of_birth)



document.getElementById("re_name").innerHTML = resumeObj.name
document.getElementById("re_designation").innerHTML = resumeObj.designation
document.getElementById("re_linkedin").innerHTML ="Linkedin id: "+ resumeObj.linkedin
document.getElementById("re_dob").innerHTML = "Birthday: " +resumeObj.personal_details.date_of_birth
document.getElementById("re_contact").innerHTML ="Contact No: " + resumeObj.phonenumber
document.getElementById("re_mail").innerHTML = "Mail id: " +resumeObj.email
document.getElementById("re_address").innerHTML ="Residential Address: " + resumeObj.personal_details.address


let language_li="";
for (let each of resumeObj.personal_details.languages_known){
    language_li=language_li+ `<p>${each}</p>`
}
document.getElementById('re_languages').innerHTML = language_li


let hobbies_li="";
for (let each of resumeObj.personal_details.hobbies){
    hobbies_li=hobbies_li+ `<p>${each}</p>`
}
document.getElementById('re_hobbies').innerHTML = hobbies_li

