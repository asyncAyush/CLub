import { Star, MapPin, TrendingUp, Calendar } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

  
const Home = ({ featuredClubs, onBook, onExploreClick, isAuthenticated, onShowAuth }) => {
  const navigate = useNavigate();

  const handleExploreClick= () => {
    navigate('/exploreclub');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Nightclub atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Experience the
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Night</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the hottest clubs, book VIP tables, and make unforgettable memories in the city's best venues.
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            Explore Clubs
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, label: 'Premium Venues', value: '50+' },
              { icon: MapPin, label: 'Cities', value: '12' },
              { icon: Calendar, label: 'Events Monthly', value: '200+' },
              { icon: TrendingUp, label: 'Happy Customers', value: '10K+' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Venues</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Handpicked exclusive clubs offering the ultimate nightlife experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs?.slice(0, 6).map((club) => (
              <ClubCard key={club.id} club={club} onBook={handleBookClub} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onExploreClick}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-700 hover:border-purple-500"
            >
              View All Clubs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
