import logo from '../../assets/images/logo.png';
import { Linkedin,Instagram,Github } from "react-bootstrap-icons";


function Home() {
  return (
      <header className="App-header">
        <h1 style={{ marginBottom: 80 }}>
          TAŞ-KAĞIT-MAKAS
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginTop: 80 }}>
          Oyunumuza Hoş Geldiniz Lütfen Kullanıcı Adınızı Giriniz:
        </p>
        <div className='container col-md-3 col-6'>
          <div class="input-group mb-3">

            <input type="text" class="form-control" required aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <button type="button" class="btn btn-outline-light mt-3">Oyuna Başla</button>
        <div class="container">
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
      </header>
  );
}

export default Home;
