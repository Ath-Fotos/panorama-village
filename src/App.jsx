import ArticlesSection from './components/ArticlesSection';
import CommunitySection from './components/CommunitySection';
import EventsNews from './components/EventsNews';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PhotoGallery from './components/PhotoGallery';
import UsefulInfo from './components/UsefulInfo';
import WeatherWidget from './components/WeatherWidget';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans selection:bg-emerald-800 selection:text-white">
      {/* Top Navigation Bar with sticky & mobile drawer */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Atmospheric Mountain Hero Section */}
        <Hero />

        {/* Real-time Simulated Village & Weather Status Strip */}
        <WeatherWidget />

        {/* Cultural Events, Gatherings & Announcements */}
        <EventsNews />

        {/* Photo Collages & Pindus Mountain Scenery */}
        <PhotoGallery />

        {/* Stories, Heritage, Traditional Architecture & Gastronomy */}
        <ArticlesSection />

        {/* Hiking Trails, Access Guide & Useful Contacts */}
        <UsefulInfo />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Newsletter & Community Material Submission */}
        <CommunitySection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
