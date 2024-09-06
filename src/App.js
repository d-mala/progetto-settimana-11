import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './store';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Player from './Components/Player';
import Library from './Components/Library';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid className="app-container p-0">
          <Row className="h-100 no-gutters">
            <Col xs={2} md={3} lg={2} className="px-0 d-none d-lg-block">
              <Sidebar />
            </Col>
            <Col xs={12} lg={10} className="px-0">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/library" element={<Library />} />
              </Routes>
            </Col>
          </Row>
          <Player />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
