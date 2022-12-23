import { Linkedin,Instagram,Github } from "react-bootstrap-icons";

function Footer() { 
  return (
    <>
  
  <div class="container-fluid mt-auto">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <span class="mb-3 mb-md-0 text-muted" style={{fontSize:20}}>© 2022 Oğuzhan Çınar</span>
            </div>
            
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/ogzhn.cnrr/"><Instagram/></a></li>
              <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/ogzhncinar/"><Linkedin/></a></li>          
              <li class="ms-3"><a class="text-muted" href="https://github.com/OguzhanCnr"><Github/></a></li>
            </ul>
          </footer>
        </div>
  </>
  );
}

export default Footer;
