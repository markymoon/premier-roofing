import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainNav from './components/MainNav'
import Footer from './components/Footer'

import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Maintenance from './components/Maintenance'
import Products from './components/Products'
import References from './components/References'
import Safety from './components/Safety'
import Services from './components/Services'
import TestFarm from './components/TestFarm'
import Testimonials from './components/Testimonials'
import Sitemap from './components/Sitemap'
import './App.css'
import './media.scss'

function App() {
  return (
    <div className="App">
      <MainNav />

      <div className="container-fluid wrapper">
        <Router>
          <Route path="/" exact       component={Home} />
          <Route path="/aboutUs"      component={AboutUs} />
          <Route path="/services"     component={Services} />
          <Route path="/products"     component={Products} />
          <Route path="/testfarm"     component={TestFarm} />
          <Route path="/safety"       component={Safety} />
          <Route path="/maintenance"  component={Maintenance} />
          <Route path="/contact"      component={Contact} /> 
          <Route path="/gallery"      component={Gallery} />
          <Route path="/references"   component={References} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/index"        component={Home} />
          <Route path="/sitemap"      component={Sitemap} />
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
