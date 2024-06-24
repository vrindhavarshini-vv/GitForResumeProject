let userlist={};  
let logindata={};

let myresume={
    skills:[],
   
    personal_details:{
         languages_known:[],
         hobbies:[],
 
    },
    education:[
     {
         course_name:"",
         institution_name:"",
         percentage_scored:"",
         Year:""
     },
     {
         course_name:"",
         institution_name:"",
         percentage_scored:"",
         Year:""
     },
     {
         course_name:"",
         institution_name:"",
         percentage_scored:"",
         Year:""    
         
     }
    ],
    experience:[
     {
         company_name:"",
         role:"",
         year_of_experience:""
     },
     {
         company_name:"",
         role:"",
         year_of_experience:""
     }
 
    ],
    projects:[
     {
         title:"",
         year:"",
         role:""
     },
     {
         title:"",
         year:"",
         role:""
     }
    ],
    certifications:[
     {
         certificate_name:"",
         given_institution:""
     },
     {
         certificate_name:"",
         given_institution:""
     }
    ]
 };

function reg(ele,key){
    userlist[key]=ele.value;
   
}

function log(ele,key){
    logindata[key]=ele.value;
   
}
function signin(){
    window.location="login.html"
}



// function loginusers(){

//     if (!localStorage.getItem("loginlist")){  //to check the local storage 
//         localStorage.setItem("loginlist",JSON.stringify([])) //to create a [] in the local storage
//      }
// let existingdata=localStorage.getItem("loginlist");  // to get that created []
// let parseddata=JSON.parse(existingdata)  //to  convert the string to object
// let updateddata=[...parseddata,loginlists]  //to add the {}<-(full resume) into the [] 

// localStorage.setItem("loginlist",JSON.stringify(updateddata)); 
// window.location.reload()  
// }
 function gen(ele,key,p_key,index,c_key){
     if (p_key){
         myresume[p_key][key]=ele.value;
     }
     else if (c_key){
         myresume[key][index][c_key]=ele.value;
     }
     else{
         myresume[key]=ele.value;
     }
    
    
 


    
 }
 
 function addarrays(key,id){
     let value = document.getElementById(id).value
     myresume[key].push(value)
     document.getElementById(id).value=""
  
 }
 function getlanguage(p_key,c_key,id){
     let value=document.getElementById(id).value
     myresume[p_key][c_key].push(value)
     document.getElementById(id).value=""
    
 
 }
 function gethobbies(p_key,c_key,id){
    let value=document.getElementById(id).value
    myresume[p_key][c_key].push(value)
    document.getElementById(id).value=""
  
}

 
//  function saveresume(){
    // let name=document.getElementById("name");
    // let email=document.getElementById("email");
    // let phonenumber=document.getElementById("phonenumber");
    // let date=document.getElementById("date");
    // let objectives=document.getElementById("objectives");
    
    //  if (name.value === '' || email.value === '' || phonenumber.value === '' || date.value === ''|| objectives.value === '' ){
    //     alert("please fill all data")
    //  }

    
//     if (!localStorage.getItem("resume")){  //to check the local storage 
//         localStorage.setItem("resume",JSON.stringify([])) //to create a [] in the local storage
//     }

//     let existingdata=localStorage.getItem("resume");  // to get that created []
//     let parseddata=JSON.parse(existingdata)  //to  convert the string to object
//     let updateddata=[...parseddata,myresume]  //to add the {}<-(full resume) into the [] 

//     localStorage.setItem("resume",JSON.stringify(updateddata)); //to convert to string and to saved in local storage
//      window.location="homepage.html" 
  
// }
// function renderresume(){
//     let existingdata=localStorage.getItem("resume") //to get the resume data from local storage
//     let parseddata=JSON.parse(existingdata) //to covert string to object
   
    
// let renderhtml="";
//     for ( each in parseddata){   //in is used to get the index value(each store the index value)

    
//         renderhtml=renderhtml +  `<tr class="link">
//                                 <td><a  href="templatelist.html?index=${each}"> ${parseddata[each].title}</a></td>
//                                 <td><button class="delete"type=button onclick="cancel('${each}')">Delete</button></td>
                               
//                                 <td> <a href="edit.html?index=${each}"><button class="edit" type="button">Edit</button></td>
//                                 </tr>`

//        document.getElementById("listtable").innerHTML=renderhtml //the list id get from homepage inside ul tag
       
//     }
// }





// function update(element,edu_index,key){
//     console.log(element)
//     let params = new URLSearchParams(document.location.search);
//     let index= params.get("index");

//     let existingdata=localStorage.getItem("resume")
//     let parseddata=JSON.parse(existingdata)
    

//     let changedtitle=document.getElementById("newtitle").value
//     let changedname=document.getElementById("newname").value
    
  
//     // let changedresume=[];

//     // for (each in parseddata){
//     //     if (each==index){
//     //         parseddata[index].title=changedtitle
//     //         parseddata[index].name=changedname
//     //         // parseddata[index].skills=changedskills
          
//     //     }
//     //     changedresume.push(parseddata[each])
//     // }

//     let changedskills=document.getElementsByClassName("addskill")
    
//     newskill=[];
//     for (let skill of changedskills){
//         newskill.push(skill.value)
//     }
//     parseddata[index].title = changedtitle
//     parseddata[index].name = changedname
//     parseddata[index].skills=newskill

//     localStorage.setItem("resume",JSON.stringify(parseddata)); 
     



//     let changedlanguage=document.getElementsByClassName("addlanguage")
//     languagesknown=[];
//     for (let language of changedlanguage){

//         languagesknown.push(language.value)
    
//     }
//     parseddata[index].personal_details.languages_known=languagesknown
//     localStorage.setItem("resume",JSON.stringify(parseddata)); 


    
//     let changedhobbies=document.getElementsByClassName("addhobbies")
//     hobbies_new=[];
//     for (let hobby of changedhobbies){

//         hobbies_new.push(hobby.value)
    
//     }
//     parseddata[index].personal_details.hobbies=hobbies_new
//     localStorage.setItem("resume",JSON.stringify(parseddata)); 
   

    
//     parseddata[index].experience[edu_index][key]=element.value;
//     parseddata[index].projects[edu_index][key]=element.value;
//     parseddata[index].certifications[edu_index][key]=element.value;
//     parseddata[index].education[edu_index][key]=element.value;
    
//     localStorage.setItem("resume",JSON.stringify(parseddata));  
    

// }  


// function addeducation(element,edu_index,key){

//     let params = new URLSearchParams(document.location.search);
//     let index= params.get("index");

//     let existingdata=localStorage.getItem("resume")
//     let parseddata=JSON.parse(existingdata)

//     parseddata[index].education[edu_index][key]=element.value;
    
//     localStorage.setItem("resume",JSON.stringify(parseddata)); 
// }

  