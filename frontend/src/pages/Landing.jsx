import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-deep-green">
      {/* Hero Section with Cream Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Cream Content Area with Rounded Corners */}
        <div className="bg-cream rounded-3xl overflow-hidden">
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
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Event staff serving champagne"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Top Right - Decorated entrance */}
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Decorated event entrance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Left - Bride and groom at archway */}
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Wedding couple at archway"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Bottom Right - Outdoor dining event */}
              <div className="aspect-square overflow-hidden rounded-xl">
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

      {/* How It Works Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Three simple steps to collect all your event photos
            </p>
          </div>

          {/* Step 1: Create Event */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Creating event on PhotoLog"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <span className="text-6xl font-bold text-deep-green">01</span>
                  <div className="h-px w-16 bg-deep-green"></div>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Create Your Event
                </h3>
                <p className="text-xl text-black/70 leading-relaxed mb-8">
                  Sign up and create your event in under a minute. Add event details, set a password if needed, and customize your gallery.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Share QR Code */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <span className="text-6xl font-bold text-deep-green">02</span>
                  <div className="h-px w-16 bg-deep-green"></div>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Share Your QR Code
                </h3>
                <p className="text-xl text-black/70 leading-relaxed mb-8">
                  Get your unique QR code and shareable link instantly. Display it at your venue or share digitally with your guests.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="QR code display at event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Collect Photos */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Guests uploading photos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <span className="text-6xl font-bold text-deep-green">03</span>
                  <div className="h-px w-16 bg-deep-green"></div>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Collect Photos Instantly
                </h3>
                <p className="text-xl text-black/70 leading-relaxed mb-8">
                  Guests scan and upload photos instantly from their phones. You moderate, download, and keep all the memories in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-deep-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              Why PhotoLog
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to collect and manage event photos effortlessly
            </p>
          </div>

          {/* Feature 1: Full-width image with overlay text */}
          <div className="mb-32 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Phone scanning QR code"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-deep-green via-deep-green/80 to-transparent flex items-center">
              <div className="max-w-2xl px-8 lg:px-12 py-12">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  No App Required
                </h3>
                <p className="text-xl text-white/90 leading-relaxed mb-4">
                  Guests simply scan your QR code and upload photos directly from their phone's browser. No downloads, no signups, no hassle.
                </p>
                <span className="text-sm text-white/70 uppercase tracking-wider">Instant Access</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Centered text with side-by-side images */}
          <div className="mb-32">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Full Control
              </h3>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Moderate every photo before it goes live. Delete unwanted images, download everything as a ZIP, or remove your event entirely—you're in complete control.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard with photo management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Photo moderation interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <span className="text-sm text-white/60 uppercase tracking-wider">Your Gallery, Your Rules</span>
            </div>
          </div>

          {/* Feature 3: Split screen with gradient */}
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl">
            <div className="aspect-[3/4] lg:aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Secure event gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-teal-brown to-deep-green flex flex-col justify-center px-8 lg:px-12 py-16">
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Privacy First
              </h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Optional password protection keeps your gallery secure. Only people with your QR code or link can access and upload photos.
              </p>
              <div className="flex items-center space-x-2 text-white/70">
                <div className="h-px w-12 bg-white/40"></div>
                <span className="text-sm uppercase tracking-wider">Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
              Perfect for Every Event
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, PhotoLog works for any occasion
            </p>
          </div>

          {/* Event Type 1: Weddings */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    alt="Wedding celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center px-4 lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Weddings
                </h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Collect all the special moments from your big day. Guests share their favorite shots instantly, giving you memories from every angle.
                </p>
                <span className="text-sm text-deep-green uppercase tracking-wider font-medium">Share the Love</span>
              </div>
            </div>
          </div>

          {/* Event Type 2: Corporate Events */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 order-1 lg:order-1 flex flex-col justify-center px-4 lg:px-8 lg:text-right">
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Corporate Events
                </h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Capture networking moments, presentations, and team celebrations. Professional galleries for professional gatherings.
                </p>
                <span className="text-sm text-teal-brown uppercase tracking-wider font-medium inline-block">Professional Network</span>
              </div>
              <div className="lg:col-span-3 order-2 lg:order-2">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    alt="Corporate event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event Type 3: Birthday Celebrations */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    alt="Birthday party"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center px-4 lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Birthdays
                </h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Make every birthday memorable. Friends and family share their favorite moments from the celebration in one beautiful gallery.
                </p>
                <span className="text-sm text-accent-pink uppercase tracking-wider font-medium">Celebrate Together</span>
              </div>
            </div>
          </div>

          {/* Event Type 4: Conferences */}
          <div>
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 order-1 lg:order-1 flex flex-col justify-center px-4 lg:px-8 lg:text-right">
                <h3 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Conferences
                </h3>
                <p className="text-lg text-black/70 leading-relaxed mb-6">
                  Document sessions, keynotes, and networking. Participants share insights and connections from across the event.
                </p>
                <span className="text-sm text-deep-gold uppercase tracking-wider font-medium inline-block">Connect & Share</span>
              </div>
              <div className="lg:col-span-3 order-2 lg:order-2">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    alt="Tech conference"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Stats Section */}
      <section className="py-32 bg-gradient-to-br from-cream via-cream-light to-cream overflow-hidden relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-deep-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
            <div className="text-center lg:text-left">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-deep-green mb-3">
                10K+
              </div>
              <div className="text-lg text-black/70 font-medium">
                Events Created
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-deep-green mb-3">
                500K+
              </div>
              <div className="text-lg text-black/70 font-medium">
                Photos Shared
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-deep-green mb-3">
                50K+
              </div>
              <div className="text-lg text-black/70 font-medium">
                Happy Hosts
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-deep-green mb-3">
                99%
              </div>
              <div className="text-lg text-black/70 font-medium">
                Satisfaction Rate
              </div>
            </div>
          </div>

          {/* Testimonials - Overlapping Cards Style */}
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">
                Loved by Event Hosts
              </h2>
              <p className="text-xl text-black/70 max-w-2xl mx-auto">
                See what people are saying about PhotoLog
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Testimonial 1 */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-black/80 leading-relaxed mb-6">
                    "PhotoLog made our wedding photo collection effortless. Guests loved how easy it was to upload, and we got so many amazing moments we would have missed otherwise."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-deep-green to-emerald overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Sarah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black">Sarah Chen</div>
                      <div className="text-sm text-black/60">Wedding Host</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Offset slightly */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 transform lg:rotate-1 lg:translate-y-8 hover:rotate-0 hover:translate-y-0 transition-transform duration-300">
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-black/80 leading-relaxed mb-6">
                    "As an event planner, PhotoLog saves me hours. No more chasing guests for photos or dealing with messy file sharing. It's professional, elegant, and just works."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-brown to-deep-green overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Marcus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black">Marcus Johnson</div>
                      <div className="text-sm text-black/60">Event Planner</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-black/5 transform lg:-rotate-1 lg:translate-y-4 hover:rotate-0 hover:translate-y-0 transition-transform duration-300">
                <div className="mb-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-black/80 leading-relaxed mb-6">
                    "The QR code feature is brilliant. At our tech conference, attendees scanned and shared photos instantly. We had a complete gallery within hours of the event ending."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-deep-green overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="David"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-black">David Park</div>
                      <div className="text-sm text-black/60">Conference Organizer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

