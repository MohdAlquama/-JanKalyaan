
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSchemes from './components/FeaturedSchemes';
import Categories from './components/Categories';
import SearchSection from './components/SearchSection';
import Stats from './components/Stats';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Stats />
      <SearchSection />
      <Categories />
      <FeaturedSchemes />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;