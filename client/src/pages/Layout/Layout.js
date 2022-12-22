import './layout.css'
import '../../App.css';
import { Outlet } from 'react-router-dom';
//Layout sayfamız
function Layout() {
  return (
    <div className="App">
      <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
      </div>
      <Outlet></Outlet>

    </div>
  );
}

export default Layout;
