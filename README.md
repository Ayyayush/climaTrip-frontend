#  ClimaTrip ☀️ Frontend

A modern React-based travel planning and beach safety web application that helps users generate AI-powered travel itineraries, explore destinations, monitor beach safety conditions, and manage their travel experience through an intuitive dashboard.

---

# 🚀 Features

## 🔐 Authentication System

* User Registration
* User Login
* Persistent Login using Local Storage
* Logout Functionality
* Protected Dashboard Access

---

## ✈️ AI Travel Planner

Generate personalized travel plans by providing:

* Source Location
* Destination
* Start Date
* End Date

The application displays:

* Transportation Recommendations
* Day-wise Travel Itinerary
* Tourist Attractions
* Nature Spots
* Local Transportation Options
* Budget Breakdown
* Return Journey Plan

---

## 🏖️ Beach Safety Dashboard

Monitor beach conditions using interactive visualizations.

Displays:

* Wave Height
* Wind Speed
* Water Temperature
* Weather Conditions
* Recreational Activity Safety Scores

Activities include:

* Swimming
* Surfing
* Boating
* Fishing

Safety levels:

* Safe
* Caution
* Unsafe

---

## 🗺️ Interactive Map

Built using React Leaflet.

Features:

* Destination Search
* Dynamic Marker Placement
* Auto-Fly To Destination
* Location-Based Safety Insights

---

## 👤 User Dashboard

User dashboard contains:

### Plan Trip

Generate AI-powered travel plans.

### Beach Safety

Search and analyze beach safety conditions.

### Destinations

Browse travel destinations.

### My Bookings

Future booking management module.

### Favorites

Store favorite destinations.

### Profile

View personal profile information.

---

## 📱 Responsive Design

Fully responsive across:

* Desktop
* Tablet
* Mobile Devices

Built using:

* Tailwind CSS
* Flexbox
* CSS Grid

---

# 🛠️ Tech Stack

## Frontend Framework

* React.js

## Build Tool

* Vite

## Styling

* Tailwind CSS

## HTTP Requests

* Axios

## Routing / Navigation

* React State Based Navigation

## Maps

* React Leaflet
* Leaflet.js

## Notifications

* React Hot Toast

## Icons

* Lucide React

---

# 📂 Project Structure

```bash
src/
│
├── components/
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

Move into project folder

```bash
cd ClimaTrip ☀️-Frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 🌐 Environment Variables

Create a `.env` file in the frontend root.

Example:

```env
VITE_API_BASE_URL=http://localhost:8080
```

---

# 🔄 Application Flow

1. User lands on Home Page.
2. User creates account or signs in.
3. Login state is stored locally.
4. User enters trip details.
5. Frontend sends request to backend API.
6. Backend generates travel plan using AI.
7. Travel plan is displayed in dashboard.
8. User can search beach locations.
9. Safety information is visualized on map and dashboard.

---

# 🎯 Key UI Components

### Header

* Authentication Controls
* Navigation Controls

### Hero Section

* Landing Page Introduction

### Dashboard

* Main User Workspace

### Travel Plan

* AI Generated Itinerary Visualization

### Beach Safety Dashboard

* Safety Monitoring Interface

### Interactive Map

* Location Search & Visualization

### Profile Section

* User Information Display

---

# 📊 Future Improvements

* JWT Authentication
* Profile Editing
* Trip History
* Saved Itineraries
* Hotel Recommendations
* Weather Forecast Integration
* Real-time Beach Alerts
* Multi-user Support
* Payment Gateway Integration
* Dark Mode

---

# 🔒 Security

Frontend implements:

* Protected Dashboard Access
* Login State Persistence
* API Request Validation
* Secure Environment Variable Usage

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

4. Push Branch

```bash
git push origin feature-name
```

5. Create Pull Request

---

# 📜 License

This project is intended for educational, research, and portfolio purposes.

---

# 👨‍💻 Developed By

ClimaTrip ☀️ Development Team

Frontend built using React, Tailwind CSS, Leaflet, and modern JavaScript practices.
