import './layout.css'
import '../../App.css';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
//Layout sayfamız
function Layout() {
  return (
    <div className="GameApp">
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
}

export default Layout;
