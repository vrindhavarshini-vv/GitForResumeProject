function navigatefromindex(){
  

   
     let existingdata=localStorage.getItem("resume")
     let parseddata=JSON.parse(existingdata)
     
 
     for  (let each in parseddata){
 
      `<nav class="collapsible-nav" id="collapsible-nav">
             <a href="index.html?index=${each}" class="nav-link active">HOME</a>
             <a href="resume.html?index=${each}" class="nav-link">RESUME</a>
             <a href="portfolio.html?index=${each}" class="nav-link">PORTFOLIO</a>
             <a href="blog.html?index=${each}" class="nav-link">BLOG</a>
             <a href="contact.html?index=${each}" class="nav-link">CONTACT</a>
             

         </nav>`
      
     }
     
}

// let params = new URLSearchParams(document.location.search);
//  let index = params.get("index");

// let existingdata=localStorage.getItem("resume")
// let parseddata=JSON.parse(existingdata)
// let resumeObj = parseddata[index];




// document.getElementById("re_name").innerHTML = resumeObj.name
// document.getElementById("re_designation").innerHTML = resumeObj.designation
// document.getElementById("re_linkedin").innerHTML ="Linkedin id: "+ resumeObj.linkedin

// document.getElementById("re_dob").innerHTML = "Birthday: " +resumeObj.personal_details.date_of_birth
// document.getElementById("re_contact").innerHTML ="Contact No: " + resumeObj.phonenumber
// document.getElementById("re_mail").innerHTML = "Mail id: " +resumeObj.email
// document.getElementById("re_address").innerHTML ="Residential Address: " + resumeObj.personal_details.address


// let edu_li = '';

// for(let each of resumeObj.education){

//     edu_li = edu_li + `
//     <li class="time-line-item">
//     <span class="badge badge-primary">${each.Year}</span>
//     <h6 class="time-line-item-title">${each.course_name}</h6>
//     <p class="time-line-item-subtitle">${each.institution_name}</p>
//     <p class="time-line-item-content">${each.percentage_scored}
        
//     </p>
// </li>
//                         `

// }
// document.getElementById('re_education').innerHTML = edu_li

// let exp_li = '';

// for(let each of resumeObj.experience){

//     exp_li = exp_li + `<li class="time-line-item">
//     <span class="badge badge-primary">${each.company_name}</span>
//     <h6 class="time-line-item-title">${each.role}</h6>
//     <p class="time-line-item-subtitle">${each.year_of_experience}</p>
// </li> `

// }
// document.getElementById('re_experience').innerHTML = exp_li

// let language_li="";
// for (let each of resumeObj.personal_details.languages_known){
//     language_li=language_li+ `<p>${each}</p>`
// }
// document.getElementById('re_languages').innerHTML = language_li


// let hobbies_li="";
// for (let each of resumeObj.personal_details.hobbies){
//     hobbies_li=hobbies_li+ `<p>${each}</p>`
// }
// document.getElementById('re_hobbies').innerHTML = hobbies_li


