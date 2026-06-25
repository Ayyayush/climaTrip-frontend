import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Users, Plane, ArrowRight, X, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import TravelPlan from './TravelPlan';
const SearchForm = () => {
  
  const [sections, setSections] = useState(null);
  const [showTravelPlans, setShowTravelPlans] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showTravelPlanPopup, setShowTravelPlanPopup] = useState(false);

  const [formData, setFormData] = useState({
           start: '',
           end: '',
           startDate: '',
           endDate: '',
  })
  const changeHandler = (e) => {
      // console.log("hello");
      setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const generatePlanHandler = async (e) => {
  e.preventDefault();

  console.log(formData);

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:3001/api/generate",
      {
        source: formData.start,
        destination: formData.end,
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    setSections(response.data);

    toast.success("Travel Plan Generated Successfully");
  } catch (error) {
    console.log(error);

    toast.error(
      error?.response?.data?.message || "Failed to Generate Travel Plan"
    );
  }
};


 

 

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Enhanced Search Form */}
      <form onSubmit={generatePlanHandler}>
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Perfect Coastal Journey</h2>
          <p className="text-gray-600">Discover amazing beaches and create unforgettable memories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* From Location */}
          <div className="relative lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Where from?</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder="Your starting city"
                name="start"
                value={formData.start}
                onChange={changeHandler}
                onFocus={() => fromLocation.length > 1 && setShowFromSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder-gray-500"
              />
              
              {showFromSuggestions && fromSuggestions.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
                  {fromSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectFromSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-end justify-center pb-4">
            <ArrowRight className="h-6 w-6 text-blue-500" />
          </div>
          
          {/* To Location */}
          <div className="relative lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Where to?</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-4 h-5 w-5 text-purple-500" />
              <input
                type="text"
                placeholder="Your dream destination"
                name="end"
                value={formData.end}
                onChange={changeHandler}
                onFocus={() => toLocation.length > 1 && setShowToSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-500"
              />
              
              {showToSuggestions && toSuggestions.length > 0 && (
                <div className="absolute z-20 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto">
                  {toSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectToSuggestion(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-purple-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          
        </div>
        
        {/* Additional Search Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-4 h-5 w-5 text-green-500" />
              <input
                type="date"
                name='startDate'
                value={formData.startDate}
                onChange={changeHandler}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-4 h-5 w-5 text-green-500" />
              <input
                type="date"
                name = 'endDate'
                value={formData.endDate}
                onChange={changeHandler}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
            </div>
          </div>
          
         
          {/* Generate Travel Plan Button */}
          <div className="flex items-end">
            <button 
              type='submit'
              
              disabled={!formData.start || !formData.end || !formData.startDate || !formData.endDate}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              <span>Generate Plan</span>
            </button>
          </div>
        </div>

        
      </div>
      </form>

      {/* Travel Plan Generator Popup */}
      {showTravelPlanPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Travel Plan Generator</h2>
                  <p className="text-gray-600">Creating your personalized coastal journey</p>
                </div>
                <button
                  onClick={() => setShowTravelPlanPopup(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Perfect Trip</h3>
                <p className="text-gray-600">From <span className="font-semibold text-blue-600">{fromLocation}</span> to <span className="font-semibold text-purple-600">{toLocation}</span></p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Analyzing your preferences...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Finding best routes and accommodations...</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Creating personalized itinerary...</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Trip Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">From:</span>
                    <p className="font-medium text-gray-900">{fromLocation}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">To:</span>
                    <p className="font-medium text-gray-900">{toLocation}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Check-in:</span>
                    <p className="font-medium text-gray-900">{checkIn || 'Not selected'}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Travelers:</span>
                    <p className="font-medium text-gray-900">{guests} {guests === 1 ? 'person' : 'people'}</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">AI Travel Planner will be connected soon...</p>
                <button
                  onClick={() => setShowTravelPlanPopup(false)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Travel Plans Section */}
      {sections && <TravelPlan data={sections} />}
    </div>
  );
};

export default SearchForm;