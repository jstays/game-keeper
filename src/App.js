import './App.css';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <Container className='App'>
      <Navbar expand='lg' className='nav-bg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src="./game-keeper-logo.png"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;
