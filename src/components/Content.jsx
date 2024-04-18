
import myVideo from '../assets/vid1.mp4'
import myVideo2 from  '../assets/vid2.mp4'
import myVideo3 from  '../assets/vid3.mp4'


function Content({option}){

    let options = [
        {
            name: 'home', html: (<div className="col-twelve">
            <h5 className=" naugthy-children">
            Hello!Welcome to my Portofolio 
            </h5>
            
            <h1 className="naugthy-children"> 
           
            <br></br>
            <span> I'm Hala Mouqbel <br></br>I am Front-end Developer</span>
                <span>UI/UX Designer</span>
                </h1>
           
            <img src=""></img>

            <p className="intro-position">
               
            </p>

           
        </div>)
        },
        {
            name: 'about', html: (<div className="col-twelve experience">
             
                <h5 className=" naugthy-children">
                hover here to read more
                <br></br>
                <span class="span-about">Short Story about me</span>
                </h5>
               
               
               <br></br>
                <p className="intro-position">
              
                  <span class="span-p-about">  How Much I have? :)</span>
                  <br></br>
                I had skills in office package before but as i like to learn more and more about computer i chosse to follow programing course and i advanced my skills in coding throwgh HTML-CSS-JavaScript-UI-UX-React and my skills are relevant for frontend and as i like to work with design i can improve mysefl as a webdesigner and use all my experience in my work. 
                </p>
                {/* <p className="intro-position">and i advanced my skills in coding throwgh HTML-CSS-JavaScript-UI-UX-React and my skills are relevant for frontend</p> */}
                {/* <p className="intro-position">and as i like to work with design i can improve mysefl as a webdesigner and use all my experience in my work </p> */}
                <h5 className="naugthy-children">
              
                </h5>
                <p className="intro-position">
                <span class="span-p-about">     As a person :)</span>
             
                  <br></br>
                I am active, creative, positive,flexible ,punctual,social, ambitious, curious about everything new
                that can advance me.I always feel thirsty to learn more and more skills in
                programming.  I like team work and I have a big ability to solve work problems 
                and i respect both rules and colleagues. I like to give my job
               all my strength with pleasure.
</p>
            </div>)
        },
        {
          name: 'my education', html: (<div className="col-twelve experience" >
              <h5 className=" naugthy-children">
          Hover here to read 
          <br></br>
              <span class="span-education">what i have as education?</span>
              </h5>
              <h1 className="naugthy-children"> </h1>
              <p className="intro-position" >
                <br></br>
              <span class="span-p-education">  Sweden:</span>
              <br></br>
                 * My education programming course aT Sankta Maria Folk High School 2023-2024 (certificate available)
              </p>
              <p className="intro-position" > * Hotel & Service vocational coures at malmo Folk High School with 6 weeks internship as a respionidt 2023 (certificate available)</p>
              <br></br>
            
              <p className="intro-position">  
              <span class="span-p-education">Syria:</span>
              <br></br>
              * Medical Intermediate (Medical Analysis) Damascus Univercity 1995-1997 (certificate available)</p>
          </div>)
      },
      {
        name: 'My Skills', html: (<div className="col-twelve experience">
           <h5 className=" naugthy-children"> hover here to read more
           <br></br>
           <span class="span-skils2">what i have as skills?</span>
            
            </h5>
            <h1 className="naugthy-children"> </h1>
            <p className="intro-position">
           
            <span class="span-skills">Computer Skills:</span>
            <br></br>
             coding skills:HTML-CSS-JavaSCRipt-Git-UI/UX-webfundamentals-Power Point-Office package
            </p>
        </div>)
    },
    {
      name: 'Live Demo', html: (<div className="col-twelve experience">
         <h5 className=" naugthy-children">
          This is my first presentation and that is about CSS-Pseudo Elements-Classes
         <br></br>
       
         <span class="span-live">Hover here and watch my Live Demo</span>
       
         
          </h5>
          <h1 className="naugthy-children">
          
          
             </h1>
          
          <p className="intro-position">
          <iframe width="595" height="350" src={myVideo}  ></iframe>
          <iframe width="595" height="350" src={myVideo2}  ></iframe>
          <iframe width="595" height="350" src={myVideo3}  ></iframe>
         
         
           
          </p>
      </div>)
  },
    {
      name: 'Languages', html: (<div className="col-twelve experience">
          <h5 className=" naugthy-children">
              which Languages i can?
          </h5>
          <h1 className="naugthy-children"> </h1>
          <p className="intro-position">
          English-Swedish-Arabic my Mother Tongue
            English:fluent in speech and writin 
            <br></br>
            Swedish: good in speech and writing-basic level 2
          </p>
      </div>)
  },
  {
    name: 'Work Experience', html: (<div className="col-twelve experience">
        <h5 className=" naugthy-children">
       What i have as work experience?
        </h5>
        <h1 className="naugthy-children">  </h1>
        <p className="intro-position">
          <span class="span-work-exp"> Latest jobb:</span>
          <br></br>
        Marketing Assistent Manager-Kia Motors Service center-adminstrative work translation from arabic to English and vice versa,working with office package, responsible of the company Facebook page,answering the customers inquiries (customer relations), responsible for advertising,photpgraphing cars before and after maintenance and editing images with power poimt programs then posting them on the facebook page.

        </p>
        <h5  className=" naugthy-children" ></h5>
       
        <p className="intro-position">
          <span class="span-work-exp"> other Background:</span>
          <br></br>
          Customer Service agent in Lg main service center-Executive Secretary in (Mercedes-Benz and BMW-Renault-ITE Group-Syria)</p>
    </div>)
},
  {
    name: 'Contact', html: (<div className="col-twelve experience">
        <h5 className=" naugthy-children">
            Contact me
        </h5>
        <h1 className="naugthy-children"></h1>
        <p className="intro-position">
          <span class="span-contact">Mobile Nr:</span>
          +46732565650
          <br></br>
        
          <span class="span-contact-email"> | Email:</span>
          
          hala.mouqbel@gmail.com
        </p>
    </div>)
},
{
  name: 'Additional-info', html: (<div className="col-twelve experience">
      <h5 className=" naugthy-children">
      where i live?
      </h5>
      <h5 className="naugthy-children"> </h5>
      <p className="intro-position">
        
      </p>
      <p className="intro-position">
        <span class="span-address"> Address:</span>
        <br></br>
        SWeden- Malmo
        oxiestationsgata4 -post nr.23830
      </p>
  </div>)
}
        // {
        //     name: 'resume', html: (<div className="col-twelve">
        //         <img id="resume-pic" src={CvPic} />
        //     </div>)
        // }
    ]
 return(
    <section id="intro">
    <div class="intro-content">
      <div class="row">
        {options && options.map(opt=>{
            if (opt.name===option){
                return opt.html
            }
            
        })}
        
      </div>
    </div>
{/*    
    <ul class="intro-social">
      <li>
        <a href="#"><i class="fa fa-facebook"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-behance"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-twitter"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-dribbble"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </li>
    </ul> */}
  </section>
 )
}

export default Content