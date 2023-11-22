import "bootstrap/dist/css/bootstrap.css";
import SearchIcon from '@mui/icons-material/Search';
export function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <div class="main-menu">
            <div class="logo-left">
              <img
                src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg?w=740&t=st=1700482431~exp=1700483031~hmac=641fc48d04e711e954199a50adf30b651797226555aea1e62442c1f24e8253a2"
                alt=""
              />
            </div>
            <div class="contain-menu">
              <ul>
                <li class="active">
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Employee</a>
                </li>
                <li>
                  <a href="">Customer</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Contract</a>
                </li>
              </ul>
            </div>
            <div class="search-menu">
              <input type="text" placeholder="search" />
              <button class="btn-search">
                <SearchIcon></SearchIcon>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}