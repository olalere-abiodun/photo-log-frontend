import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-deep-green">
      {/* Hero Section with Cream Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Cream Content Area with Rounded Corners */}
        <div className="bg-cream rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Navigation */}
          <nav className="px-6 lg:px-12 py-6 border-b border-cream-dark/20">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">
                  PhotoLog
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="text-black hover:text-deep-green font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg border border-black text-black bg-cream hover:bg-cream-dark transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-6 lg:px-12 py-12 lg:py-16">
            {/* Left Side - Hero Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                Share Event Photos
                <br />
                Instantly with
                <br />
                QR Code
              </h1>
              
              <p className="text-lg sm:text-xl text-black mb-10 leading-relaxed">
                Create a shared photo gallery for your
                event in seconds. Guests scan your QR code
                and upload photos instantly—no app or
                signup required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 rounded-lg bg-deep-green text-white text-lg font-semibold hover:bg-deep-green-dark transition-colors text-center"
                >
                  Create Your Event
                </Link>
                <button className="px-8 py-4 rounded-lg border border-black text-black bg-cream hover:bg-cream-dark text-lg font-semibold transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Waiters with champagne */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Event staff serving champagne"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Top Right - Decorated entrance */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Decorated event entrance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Left - Bride and groom at archway */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Wedding couple at archway"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Right - Outdoor dining event */}
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Outdoor event dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

