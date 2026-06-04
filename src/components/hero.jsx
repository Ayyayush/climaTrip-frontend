import { useState } from "react";
import {
  Sun,
  Wind,
  Plane,
  MapPin,
  Camera,
  Compass,
  UtensilsCrossed,
  Mountain,
  Globe,
} from "lucide-react";

const Hero = () => {
  const [preferredActivity, setPreferredActivity] = useState("adventure");

  const travelActivities = [
    {
      id: "adventure",
      label: "🏔️ Adventure Travel",
      icon: <Compass className="h-6 w-6" />,
      description: "Explore & discover",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: "relaxation",
      label: "🌴 Leisure Escapes",
      icon: <Sun className="h-6 w-6" />,
      description: "Relax & recharge",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: "food",
      label: "🍜 Food & Culture",
      icon: <UtensilsCrossed className="h-6 w-6" />,
      description: "Taste local flavors",
      color: "from-red-400 to-orange-500",
    },
    {
      id: "exploration",
      label: "📸 City & Sightseeing",
      icon: <Camera className="h-6 w-6" />,
      description: "Visit iconic places",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const getActivityLabel = (activityId) => {
    const activity = travelActivities.find((act) => act.id === activityId);
    return activity ? activity.label : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Animated Background with Travel Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
          {/* Animated Clouds */}
          <div className="absolute top-20 left-10 animate-float opacity-30">
            <div className="w-20 h-12 bg-white rounded-full"></div>
            <div className="w-16 h-10 bg-white rounded-full -mt-6 ml-4"></div>
          </div>
          <div className="absolute top-32 right-20 animate-float-delayed opacity-25">
            <div className="w-24 h-14 bg-white rounded-full"></div>
            <div className="w-18 h-12 bg-white rounded-full -mt-7 ml-6"></div>
          </div>

          {/* Animated Airplane */}
          <div className="absolute bottom-40 right-16 animate-plane opacity-50">
            <svg
              width="80"
              height="50"
              viewBox="0 0 80 50"
              className="text-blue-600"
            >
              {/* Fuselage */}
              <ellipse
                cx="40"
                cy="25"
                rx="28"
                ry="7"
                fill="currentColor"
                opacity="0.85"
              />
              {/* Wings */}
              <path
                d="M30 25 L15 10 L45 22 Z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M30 25 L15 40 L45 28 Z"
                fill="currentColor"
                opacity="0.5"
              />
              {/* Tail */}
              <path
                d="M60 25 L72 15 L70 25 Z"
                fill="currentColor"
                opacity="0.6"
              />
              <path
                d="M60 25 L72 35 L70 25 Z"
                fill="currentColor"
                opacity="0.4"
              />
              {/* Nose */}
              <ellipse
                cx="70"
                cy="25"
                rx="5"
                ry="4"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Hot Air Balloon */}
          <div className="absolute top-16 right-1/4 animate-balloon opacity-40">
            <svg
              width="55"
              height="70"
              viewBox="0 0 55 70"
              className="text-orange-500"
            >
              {/* Balloon */}
              <ellipse
                cx="27"
                cy="27"
                rx="22"
                ry="25"
                fill="currentColor"
                opacity="0.75"
              />
              {/* Stripes */}
              <path
                d="M10 15 Q27 10 44 15"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M7 25 Q27 20 47 25"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M8 35 Q27 30 46 35"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              {/* Ropes */}
              <line
                x1="20"
                y1="50"
                x2="18"
                y2="60"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <line
                x1="34"
                y1="50"
                x2="36"
                y2="60"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
              {/* Basket */}
              <rect
                x="16"
                y="60"
                width="22"
                height="9"
                rx="2"
                fill="currentColor"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* Globe */}
          <div className="absolute bottom-32 left-16 opacity-20 animate-sway">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              className="text-blue-700"
            >
              <circle
                cx="27"
                cy="27"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <ellipse
                cx="27"
                cy="27"
                rx="12"
                ry="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="3"
                y1="27"
                x2="51"
                y2="27"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="27"
                y1="3"
                x2="27"
                y2="51"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 15 Q27 18 46 15"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M6 38 Q27 35 48 38"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>

          {/* Mountain Silhouette */}
          <div className="absolute bottom-20 left-8 opacity-20">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              className="text-gray-700"
            >
              <path
                d="M0 60 L20 20 L40 45 L55 15 L80 60 Z"
                fill="currentColor"
              />
              <path d="M50 22 L55 15 L60 22 Z" fill="white" opacity="0.6" />
            </svg>
          </div>

          {/* Location Pin Decorative */}
          <div className="absolute bottom-24 right-32 opacity-25 animate-sway">
            <svg
              width="35"
              height="50"
              viewBox="0 0 35 50"
              className="text-red-500"
            >
              <path
                d="M17 2 C9 2 2 9 2 17 C2 28 17 48 17 48 C17 48 32 28 32 17 C32 9 25 2 17 2 Z"
                fill="currentColor"
              />
              <circle cx="17" cy="17" r="6" fill="white" opacity="0.8" />
            </svg>
          </div>

          {/* Compass Rose */}
          <div className="absolute top-48 left-1/2 opacity-15 animate-float-slow">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className="text-teal-700"
            >
              <circle
                cx="25"
                cy="25"
                r="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polygon points="25,5 28,23 25,21 22,23" fill="currentColor" />
              <polygon
                points="25,45 28,27 25,29 22,27"
                fill="currentColor"
                opacity="0.6"
              />
              <polygon
                points="5,25 23,22 21,25 23,28"
                fill="currentColor"
                opacity="0.6"
              />
              <polygon points="45,25 27,22 29,25 27,28" fill="currentColor" />
              <circle cx="25" cy="25" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Floating Travel Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 animate-float">
            <Plane className="h-8 w-8 text-blue-400 opacity-30 transform rotate-45" />
          </div>
          <div className="absolute top-48 right-32 animate-float-delayed">
            <Camera className="h-6 w-6 text-cyan-500 opacity-40" />
          </div>
          <div className="absolute bottom-40 left-32 animate-float-slow">
            <Compass className="h-7 w-7 text-teal-500 opacity-35" />
          </div>
          <div className="absolute top-60 right-16 animate-float">
            <MapPin className="h-6 w-6 text-blue-500 opacity-30" />
          </div>
          <div className="absolute top-40 left-1/2 animate-float-delayed">
            <Globe className="h-8 w-8 text-blue-400 opacity-25" />
          </div>
          <div className="absolute bottom-32 right-1/4 animate-float-slow">
            <Mountain className="h-10 w-10 text-teal-500 opacity-30" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Enhanced Title with Travel Theme */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2 animate-fade-in-up">
                Clima
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 animate-gradient-x">
                  Trip
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-2 text-blue-600 animate-fade-in-up-delayed">
                <Globe className="h-6 w-6 animate-pulse" />
                <span className="text-lg font-medium">
                  Smart Travel Planning For Every Destination
                </span>
                <Globe className="h-6 w-6 animate-pulse" />
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-2">
              Plan smarter journeys with AI-powered itineraries, destination
              insights, weather forecasts, safety analysis, and personalized
              travel recommendations for every kind of traveler. ✈️🌍
            </p>
          </div>

          {/* Travel Style Preference Selector */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What's Your Travel Style?
              </h3>
              <p className="text-gray-600">
                Choose your preferred travel experience and discover
                destinations tailored just for you
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {travelActivities.map((activity, index) => (
                <button
                  key={activity.id}
                  onClick={() => setPreferredActivity(activity.id)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up ${
                    preferredActivity === activity.id
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105"
                      : "border-gray-200 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:bg-white/90"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient Background for Selected */}
                  {preferredActivity === activity.id && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-10 rounded-2xl`}
                    ></div>
                  )}

                  <div className="relative flex flex-col items-center space-y-3">
                    <div
                      className={`p-3 rounded-full transition-all duration-300 ${
                        preferredActivity === activity.id
                          ? `bg-gradient-to-r ${activity.color} text-white shadow-lg`
                          : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      {activity.icon}
                    </div>

                    <div className="text-center">
                      <span
                        className={`font-semibold text-sm block mb-1 ${
                          preferredActivity === activity.id
                            ? "text-blue-700"
                            : "text-gray-700"
                        }`}
                      >
                        {activity.label}
                      </span>
                      <span
                        className={`text-xs ${
                          preferredActivity === activity.id
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {activity.description}
                      </span>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {preferredActivity === activity.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action with Travel Theme */}
          <div className="text-center animate-fade-in-up-delayed-3">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg">
              <Plane className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-blue-700 font-medium">
                Discover your next unforgettable journey
              </span>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Preview Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Travel Adventure Starts Here
            </h2>
            <p className="text-gray-600 mb-6">
              Based on your preference for{" "}
              <span className="font-semibold text-blue-600">
                {getActivityLabel(preferredActivity)}
              </span>
              , we'll help you discover amazing destinations around the world
              tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Destinations
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-all duration-300">
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for Travel Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes plane {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(15px) translateY(-10px);
          }
          50% {
            transform: translateX(25px) translateY(-5px);
          }
          75% {
            transform: translateX(10px) translateY(-12px);
          }
        }
        @keyframes balloon {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          33% {
            transform: translateX(8px) translateY(-12px);
          }
          66% {
            transform: translateX(-6px) translateY(-8px);
          }
        }
        @keyframes sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-plane {
          animation: plane 10s ease-in-out infinite;
        }
        .animate-balloon {
          animation: balloon 12s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }
        .animate-fade-in-up-delayed-3 {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Hero;
