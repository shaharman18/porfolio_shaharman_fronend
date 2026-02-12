import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Projects, TechArchitecture, Contact, Footer, CustomCursor, AdminDashboard } from './components';
import { useEffect } from 'react';

import api from './api/axios';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Wake up the Render server immediately on page load
    api.get('/health').catch(() => console.log('Server warming up...'));

    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
        <CustomCursor />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <TechArchitecture />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/portal-lockdown-shah" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
