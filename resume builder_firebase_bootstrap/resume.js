// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore,collection,addDoc,deleteDoc,updateDoc,getDoc,getDocs,doc,query,where ,setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Hsq2GiOH1YrneWOSBAazh_pMZBoNhUQ",
  authDomain: "resumebuilder-a39bb.firebaseapp.com",
  projectId: "resumebuilder-a39bb",
  storageBucket: "resumebuilder-a39bb.appspot.com",
  messagingSenderId: "842904588733",
  appId: "1:842904588733:web:ded89179b09898e2a742d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



async function submitregister(){
    const docRef=await addDoc(collection(db,"userslist"),userlist);
    
       let name=document.getElementById("reg_name")
       let email=document.getElementById("reg_email")
       let password=document.getElementById("reg_password")
       
         if (name.value === '' || email.value === '' || password.value === '' ){
        alert("please fill all data")
        }
        else{
            
            alert("Registered")
        
            window.location="index.html"
           
        }   
    
    }
        
    getDocs(collection(db,"userslist")).then(docSnap =>{
            let userslist=[];
            docSnap.forEach((doc)=>{
                userslist.push({...doc.data(),id:doc.id})
            });
            
        }
)
window.submitregister=submitregister




//logout function
function logout(){
    localStorage.removeItem("login_credentials")
    window.location="index.html"
}
window.logout=logout









async function submitlogin(){
    getDocs(collection(db, "userslist")).then(docSnap =>{
        let user=[];
            docSnap.forEach((doc) => {
            user.push({...doc.data(),id:doc.id})
           })
    
    let datas=[];
           for (let each of user){
            datas.push(each)
           }
    
                
    
           let logemail=document.getElementById("log_email").value
           let logpassword=document.getElementById("log_password").value
           
          
    
           if (logpassword=== '' || logemail=== ''  ){
                
                window.location.reload()
    
               alert("please fill  both Email and Password")
            }
            else{
               
                
               let store_mail="";
               let store_pass="";
               let store_id="";
               let store_name="";
                    for (let each in datas){
                   
                        
                        if (logemail===datas[each]["email"] && logpassword===datas[each]["password"]){
                            store_mail=datas[each]["email"]
                            store_pass=datas[each]["password"] 
                            store_id=datas[each]["id"]
                            store_name=datas[each]["name"]

                           
                           
    
                            if (store_mail===logemail && store_pass===logpassword){
                              
                                    let local_storage={"id":store_id,
                                                    "name":store_name}
    
                                    let local=JSON.stringify(local_storage)
                                    localStorage.setItem("login_credentials",local)
                                   
                            }
                            
                          }
                          
                        
                        }
                                if (store_mail==logemail && store_pass==logpassword){
    
                                   authenticate(store_id)
                                    
                                }
                                
                                else {
    
    
                                    alert("Your data is not valid please Check")
                                    window.location.reload()
                                }    
                                
                    
                    }
            });
}
window.submitlogin=submitlogin







function authenticate(firebase_id){
    alert("autheticate")
        getDocs(collection(db, "userslist")).then(docSnap =>{
        let user=[];
            docSnap.forEach((doc) => {
            user.push({...doc.data(),id:doc.id})
        })
        let existdata=localStorage.getItem("login_credentials")
        let parsedata=JSON.parse(existdata)
        
        
            if (parsedata['id']==firebase_id){
                window.location=`myresume.html`
            }
            else{
            window.location="index.html"
            }
        
        }
        )
}
window.authenticate=authenticate






 async function saveresume(){
        alert("saved")
        let existdata=localStorage.getItem("login_credentials")
        let parsedata=JSON.parse(existdata)
        const docRef=await addDoc(collection(db,"myresumes"),{...myresume,userid:parsedata.id});
       window.location="homepage.html"
}
 window.saveresume=saveresume



   
    

function getresume_list(){
        let existdata=localStorage.getItem("login_credentials")
        let parsedata=JSON.parse(existdata)
    getDocs( query(collection(db,"myresumes"), where("userid", "==",parsedata.id))).then(docSnap => {
  
       
        let renderHTML="";
        docSnap.forEach((each) => {
          
   
            let eachResume=each.data();
            
            renderHTML=renderHTML+`<tr class="link">
                                <td><a  href="templatelist.html?resumeid=${each.id}"> ${eachResume.title}</a></td>
                            
                                <td><button class="btn btn-danger responsive" onclick="delete_list('${each.id}')"type="button">Delete</button></td>
                                <td> <a href="edit.html?resumeid=${each.id}"><button class="btn btn-warning" type="button">Edit</button></td>
                                </tr>`
                      
        })
        document.getElementById("listtable").innerHTML=renderHTML
    })
    
}
window.getresume_list=getresume_list








function delete_data(id){
    deleteDoc(doc(db, "myresumes",id))
    getresume_list()
   }
window.delete_list=delete_data



///view and updating in firebase



   let params = new URLSearchParams(document.location.search);
    let id= params.get("resumeid");
 
    getDoc(doc(db, "myresumes",id)).then(docSnap =>{

        updatedresume=docSnap.data();
        if (docSnap.exists()){
      
     
      
      
        document.getElementById("newtitle").value=( docSnap.data()['title'])
        document.getElementById("newname").value=( docSnap.data()['name'])
        document.getElementById("newdesignation").value=( docSnap.data()['designation'])
        document.getElementById("newobjectives").value=( docSnap.data()['objectives'])
        document.getElementById("newdate").value=( docSnap.data()['date'])
        document.getElementById("newgithubid").value=( docSnap.data()['githubid'])
        document.getElementById("newlinkedinid").value=( docSnap.data()['linkedinid'])
        document.getElementById("newemail").value=( docSnap.data()['email'])
        document.getElementById("newphonenumber").value=( docSnap.data()['phonenumber'])
        
     
        let skill="";
        for (let each of (myresume.skills) ){
             
            
             skill=skill + `<input type="text" class="addskill" value="${each}"/>`
            
         }
         document.getElementById("newskills").innerHTML=skill  


         
        let language="";
        for (let each of ( updatedresume.personal_details.languages_known)){
            language=language + `<input type="text" class="addlanguage" value="${each}"/>`
         }
        document.getElementById("newlanguage").innerHTML=language 
     
       

        let hobby="";
        for (let each of ( updatedresume.personal_details.hobbies) ){
            hobby=hobby + `<input type="text" class="addhobbies" value="${each}"/>`
         }
        document.getElementById("newhobbies").innerHTML=hobby
     
     




         let project="";
    for (let each in ( docSnap.data()['projects'])){
        project = project +
             `<tr>
              <td><input type="text"  onkeyup="update(this,'projects',${each},'title')" value=${updatedresume.projects[each].title} ></td>
              <td><input type="text"  onkeyup="update(this,'projects',${each},'year')" value=${updatedresume.projects[each].year} ></td>
              <td><input type="text"  onkeyup="update(this,'projects',${each},'role')" value=${updatedresume.projects[each].role} ></td>
              
             </tr>`
       }
      document.getElementById("project").innerHTML=project


      let educations="";
      for (let each in ( docSnap.data()['education'])){
        
        educations = educations +
               `<tr>
                <td><input type="text" onkeyup="update(this,'education',${each},'course_name')" value=${updatedresume.education[each].course_name} ></td>
                <td><input type="text" onkeyup="update(this,'education',${each},'institution_name')"  value=${updatedresume.education[each].institution_name} ></td>
                <td><input type="text" onkeyup="update(this,'education',${each},'percentage_scored_name')"  value=${updatedresume.education[each].percentage_scored} ></td>
                <td><input type="number"  onkeyup="update(this,'education',${each},'Year')" value=${updatedresume.education[each].Year} ></td>
               </tr>`
             
         }
        document.getElementById("education").innerHTML=educations


    

        let experience="";
        for (let each in  ( docSnap.data()['experience'])){
        
          experience = experience +
                 `<tr>
                  <td><input type="text"  onkeyup="update(this,'experience',${each},'company_name')" value=${updatedresume.experience[each].company_name} ></td>
                  <td><input type="text"  onkeyup="update(this,'experience',${each},'role')" value=${updatedresume.experience[each].role} ></td>
                  <td><input type="text"  onkeyup="update(this,'experience',${each},'year_of_experience')" value=${updatedresume.experience[each].year_of_experience} ></td>
                  
                 </tr>`
           }
          document.getElementById("experience").innerHTML=experience
     
     


       
     
     





        function update(ele,key,index,c_key){
    
            if(key=='education'){
                updatedresume[key][index][c_key]=ele.value
            }
            if(key=='experience'){
                updatedresume[key][index][c_key]=ele.value
            }
            if(key=='projects'){
                updatedresume[key][index][c_key]=ele.value
            }
            if(key=='certifications'){
                updatedresume[key][index][c_key]=ele.value
            }
    
          }
          window.update=update

          document.getElementById("updateexistingdata").addEventListener('click', async(e)=>{
          
           
        
             let updateddesignation=document.getElementById("newdesignation").value
             let updatedname=document.getElementById("newname").value
             let updateddate=document.getElementById("newdate").value
             let updatedemail=document.getElementById("newemail").value
             let updatedphonenumber=document.getElementById("newphonenumber").value
             let updatedobjectives=document.getElementById("newobjectives").value
             let updatedgithubid=document.getElementById("newgithubid").value
             let updatedlinkedinid=document.getElementById("newlinkedinid").value
            





             updatedresume.designation=updateddesignation
             updatedresume.name=updatedname
             updatedresume.date=updateddate
             updatedresume.email=updatedemail
             updatedresume.phonenumber=updatedphonenumber
             updatedresume.objectives=updatedobjectives
             updatedresume.githubid=updatedgithubid
             updatedresume.linkedinid=updatedlinkedinid
            
        
             let updatedskills=document.getElementsByClassName("addskill")
             let storeskills=[];
             for (let each of updatedskills){
                storeskills.push(each.value)
             }
            updatedresume.skills=storeskills
        
             let updatedhobbies=document.getElementsByClassName("addhobbies")
             let   storehobbies=[]
             for (let each of updatedhobbies){
                storehobbies.push(each.value)
             }
             updatedresume.personal_details.hobbies=storehobbies
        
        
             
             let updatedlanguages=document.getElementsByClassName("addlanguage")
             let  storelanguages=[]
                for (let each of updatedlanguages){
                storelanguages.push(each.value)
             }
             updatedresume.personal_details.languages_known=storelanguages
             
        
        
          
            
        
            
            
             updateDoc(doc(db,"myresumes",id),updatedresume)
             console.log("updated",updatedresume);
                
            }
            )

   
   
       
        }

     }); 
    


     addskills.addEventListener('click', (event) => {
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
           if (docSnap.exists()){
           let skill=""
            for (let each of ( docSnap.data()['skills']) ){
                skill=skill + `<input type="text" class="addskill" value="${each}"/>`
               
            }
             let addskill= `<input type="text" id="addskills" class="addskill" />`
            document.getElementById("newskills").innerHTML=skill+addskill
           }
        
        })
        })
        
        addskills.addEventListener('click', (event) => {
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
           if (docSnap.exists()){
           let skill=""
            for (let each of ( docSnap.data()['skills']) ){
                skill=skill + `<input type="text" class="addskill" value="${each}"/>`
        //        skill = document.createElement("INPUT");
        // skill.setAttribute("type", "text");
        // skill.setAttribute("placeholder", "Enter Skills");
        // skill.setAttribute("addskill", "addskill");
        
               
            }
             let addskill= `<input type="text" id="addskills" class="addskill" />`
            document.getElementById("newskills").innerHTML=skill+addskill
           }
        
        })
        })
        
        addlanguage.addEventListener('click', (event) => {
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
            let language="";
           for (let each of ( docSnap.data()['personal_details']["languages_known"]) ){
               language=language + `<input type="text" class="addlanguage" value="${each}"/>`
            }
         
                let addlanguage= `<input type="text" id="newlanguage" class="addlanguage" />`
        
                document.getElementById("newlanguage").innerHTML=language+addlanguage
        
        })
        })
        
        addhobby.addEventListener('click', (event) => {
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
            let hobby=""
            for (let each of ( docSnap.data()['personal_details']["hobbies"]) ){
               hobby=hobby + `<input type="text" class="addHobbies" value="${each}"/>`
            }
            let addhobby=`<input type="text" id="newhobbies" class="addhobbies"/>`
            document.getElementById("newhobbies").innerHTML=hobby+addhobby
          
        })
        })
        
        
      function addeducation(){
          
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
          
         
          let tbody=document.getElementById("education").innerHTML
            let educationlength= (updatedresume.education).length
            
            let    neweducation=`<tr>
                    <td><input type="text" onkeyup="updated(this,${educationlength},'education','course_name')" ></td>     
                    <td><input type="text" onkeyup="updated(this,${educationlength},'education','institution_name')"></td>    
                    <td><input type="text"  onkeyup="updated(this,${educationlength},'education','percentage_scored')"></td>     
                    <td><input type="text"  onkeyup="updated(this,${educationlength},'education','Year')"></td></tr>`  
                
                    document.getElementById("education").innerHTML=tbody+neweducation

                    updatedresume.education[educationlength]={
                        course_name:"",
                        institution_name:"",
                        percentage_scored:"",
                        Year:""
                    }
              
          
        })}
  
    
    window.addeducation=addeducation 




    function addexperience(){
          
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
          
         
          let tbody=document.getElementById("experience").innerHTML
            let experiencelength= (updatedresume.experience).length
            
            let    newexperience=`<tr>
                    <td><input type="text" onkeyup="updated(this,${experiencelength},'experience','company_name')" ></td>     
                    <td><input type="text" onkeyup="updated(this,${experiencelength},'experience','role')"></td>    
                       
                    <td><input type="text"  onkeyup="updated(this,${experiencelength},'experience','year_of_experience')"></td></tr>`  
                
                    document.getElementById("experience").innerHTML=tbody+newexperience

                    updatedresume.experience[experiencelength]={
                        company_name:"",
                        role:"",
                        
                        year_of_experience:""
                    }
              
          
        })}
  
    
    window.addexperience=addexperience


    function addproject(){
          
        getDoc(doc(db, "myresumes",id)).then(docSnap =>{
          
         
          let tbody=document.getElementById("project").innerHTML
            let projectlength= (updatedresume.projects).length
            
            let    newproject=`<tr>
                    <td><input type="text" onkeyup="updated(this,${projectlength},'projects','title')" ></td>     
                   
                    <td><input type="text"  onkeyup="updated(this,${projectlength},'projects','role')"></td>     
                    <td><input type="text"  onkeyup="updated(this,${projectlength},'projects','year')"></td></tr>`  
                
                    document.getElementById("project").innerHTML=tbody+newproject

                    updatedresume.projects[projectlength]={
                        title:"",
                      
                        role:"",
                        year:""
                    }
              
          
        })}
  
    
    window.addproject=addproject
        

    // function addcertification(){
          
    //     getDoc(doc(db, "myresumes",id)).then(docSnap =>{
          
         
    //       let tbody=document.getElementById("certification").innerHTML
    //         let educationlength= (updatedresume.education).length
            
    //         let    neweducation=`<tr>
    //                 <td><input type="text" onkeyup="updated(this,${educationlength},'education','course_name')" ></td>     
    //                 <td><input type="text" onkeyup="updated(this,${educationlength},'education','institution_name')"></td>    
    //                 <td><input type="text"  onkeyup="updated(this,${educationlength},'education','percentage_scored')"></td>     
    //                 <td><input type="text"  onkeyup="updated(this,${educationlength},'education','Year')"></td></tr>`  
                
    //                 document.getElementById("education").innerHTML=tbody+neweducation

    //                 updatedresume.education[educationlength]={
    //                     course_name:"",
    //                     institution_name:"",
    //                     percentage_scored:"",
    //                     Year:""
    //                 }
              
          
    //     })}
  
    
    // window.addcertification=addcertification







    



