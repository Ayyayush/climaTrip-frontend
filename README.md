# ☀️ ClimaTrip – AI Powered Travel Planning & Beach Safety Platform

ClimaTrip is a modern AI-powered travel planning and coastal safety platform that combines intelligent itinerary generation, beach safety monitoring, interactive maps, and conversational AI assistance into a single travel ecosystem.

Built using React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, JWT Authentication, and Groq AI.

---

# 🚀 Features

## 🔐 Authentication & Security

### User Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Persistent Login Sessions
* Logout Functionality
* Protected Features & Routes

### Validation & Security

* Server-Side Input Validation
* Email Format Validation
* Strong Password Validation
* Password Hashing using bcrypt
* Duplicate User Prevention
* Secure Environment Variables

---

## 🧞 TripGenie AI Assistant

TripGenie is a built-in AI travel companion available throughout the platform.

### Capabilities

* Travel Recommendations
* Destination Suggestions
* Budget Planning
* Trip Optimization
* Travel Tips & Guidance
* Destination Comparisons
* General Travel Queries

### Features

* Floating AI Chat Widget
* Available Across the Entire Application
* Login Required for Access
* Real-Time AI Responses
* Powered by Groq LLM APIs
* Context-Aware Travel Assistance

---

## ✈️ AI Travel Planner

Generate intelligent travel itineraries by providing:

* Source Location
* Destination
* Start Date
* End Date

### Generated Output

* Transportation Recommendations
* Day-Wise Itinerary
* Tourist Attractions
* Nature Spots
* Local Transportation Suggestions
* Budget Breakdown
* Return Journey Planning
* Travel Tips

---

## 🌊 Beach Safety Intelligence

Analyze coastal and beach conditions before planning activities.

### Displays

* Wave Height
* Wind Speed
* Water Temperature
* Weather Conditions
* Safety Analysis Score

### Activity Safety Ratings

* Swimming
* Surfing
* Boating
* Fishing

### Safety Levels

* Safe
* Caution
* Unsafe

---

## 🗺️ Interactive Travel & Safety Maps

Built using React Leaflet and OpenStreetMap.

### Features

* Destination Search
* Dynamic Marker Placement
* Auto Fly-To Location
* Interactive Beach Analysis
* Location-Based Insights
* Real-Time Visualization

---

## 👤 Personalized Dashboard

Authenticated users receive a personalized travel workspace.

### Dashboard Modules

#### Plan Trip

Generate AI-powered itineraries.

#### Beach Safety

Analyze destination safety conditions.

#### Destinations

Explore curated travel destinations.

#### Favorites

Save preferred destinations.

#### My Bookings

Expandable booking management module.

#### Profile

Manage account information and preferences.

---

## 📊 Profile Management

### User Profile Features

* Profile Information
* Personalized Dashboard
* Travel Statistics
* Account Preferences
* Notification Settings
* Safety Alert Preferences

---

## 🎨 Modern User Experience

### UI Features

* Fully Responsive Design
* Smooth Animations
* Interactive Components
* Mobile-First Experience
* Shimmer Loading States
* Modern Glassmorphism Elements
* Gradient-Based Design System

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite

## Styling

* Tailwind CSS
* CSS Grid
* Flexbox

## State Management

* React Hooks

## API Communication

* Axios

## Maps & Geolocation

* React Leaflet
* Leaflet.js
* OpenStreetMap

## Notifications

* React Hot Toast

## Icons

* Lucide React
* React Icons

## AI Integration

* Groq API (Backend Connected)

---

# 📂 Project Structure

```bash
src/
│
├── components/
│   │
│   ├── chatbot/
│   │   └── TripGenie.jsx
│   │
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── AuthPage.jsx
│   ├── Dashboard.jsx
│   ├── TravelPlan.jsx
│   ├── BeachSafetyDashboard.jsx
│   ├── BeachSafetyMap.jsx
│   ├── BeachAlerts.jsx
│   ├── BeachSafetyAnalyzer.jsx
│   ├── DestinationCarousel.jsx
│   ├── AccommodationCards.jsx
│   ├── WeatherInsights.jsx
│   └── ShimmerUI.jsx
│
├── App.jsx
├── main.jsx
│
└── assets/
```

---

# ⚙️ Installation

Clone Repository

```bash
git clone <repository-url>
```

Move into project directory

```bash
cd ClimaTrip-Frontend
```

Install Dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Build Production Version

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

---

# 🌐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:3001 
```

---

# 🔄 Application Workflow

1. User lands on the Home Page.
2. User registers or logs in.
3. Authentication state is stored locally.
4. User gains access to TripGenie AI Assistant.
5. User generates personalized travel plans.
6. Backend generates AI-powered itineraries.
7. Dashboard visualizes generated plans.
8. User searches destinations for safety insights.
9. Interactive maps visualize searched locations.
10. Safety recommendations are displayed for activities.

---

# 🎯 Core Components

### Header

* Authentication Controls
* Navigation Controls

### Hero Section

* Travel Discovery Interface

### Dashboard

* Personalized Travel Workspace

### TripGenie

* AI Travel Assistant

### Travel Planner

* AI Itinerary Generator

### Beach Safety Dashboard

* Coastal Safety Intelligence

### Interactive Maps

* Destination Search & Visualization

### Profile Management

* User Information & Preferences

---

# 🔒 Security Features

### Frontend Security

* Protected Features
* JWT Authentication Support
* Login State Persistence
* Input Validation
* Secure Environment Variable Usage

### Backend Security Support

* Password Hashing
* Strong Password Validation
* Email Validation
* Duplicate User Prevention
* JWT Authentication

---

# 📈 Future Enhancements

* Trip History Storage
* Saved Itineraries
* Hotel Recommendations
* Real-Time Weather Forecasts
* Real-Time Beach Alerts
* Travel Buddy Matching
* Group Trip Planning
* Travel Community Features
* Payment Gateway Integration
* Dark Mode
* Multi-Language Support
* AI Voice Assistant
* Profile Picture Uploads

---

# 🤝 Contributing

1. Fork Repository

2. Create Feature Branch

```bash
git checkout -b feature-name
```

3. Commit Changes

```bash
git commit -m "Added feature"
```

4. Push Changes

```bash
git push origin feature-name
```

5. Create Pull Request

---

# 📜 License

This project is intended for educational, portfolio, and research purposes.

---

# 👨‍💻 Developed By

## ClimaTrip ☀️

AI-Powered Travel Planning & Beach Safety Platform

### Built With

* React.js
* Vite
* Tailwind CSS
* Axios
* React Leaflet
* JWT Authentication
* Groq AI
* Modern Responsive UI Design

### Highlights

* AI Travel Planning
* Beach Safety Intelligence
* Conversational Travel Assistant (TripGenie)
* Interactive Maps
* Personalized User Dashboard
* Secure Authentication System
