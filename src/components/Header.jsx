import myPic from "../assets/myfotomalmo.jpg"

function Header({setOption}){

  return(
    <header>
    <div class="row">
    
      <div class="top-bar">
      <img class="MyImage" src={myPic} />
      
        <nav id="main-nav-wrap">
          
          <ul class="main-navigation">
            <li class="current showing">
              <a class="smoothscroll" onClick={()=>setOption('home')} href="#intro" title="">Home</a>
            </li>
            <li><a class="smoothscroll" onClick={()=>setOption('about')}  href="#about" title="">About</a></li>
            <li>
              <a class="smoothscroll" onClick={()=>setOption('my education')} href="#myeducation" title="">My Education</a>
            </li>
            <li>
              <a class="smoothscroll" onClick={()=>setOption('My Skills')} href="#myskills" title="">My Skills</a>
            </li>
            <li>
              <a class="smoothscroll" onClick={()=>setOption('Live Demo')} href="#livedemo" title="">My Live Demo</a>
            </li>
            <li>
              <a class="smoothscroll" onClick={()=>setOption('Languages')}  href="#languages" title="">Languages</a>
            </li>
            <li>
            <a class="smoothscroll" onClick={()=>setOption('Work Experience')}  href="#Work Experience" title="">Work Experience</a>
            </li>
            <li>
              <a class="smoothscroll" onClick={()=>setOption('Contact')}  href="#contact" title="">Contact</a>
            </li>
            <li><a  onClick={()=>setOption('Additional-info')} href="#" title="">Additional-Info</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header