# 🌍 Real-Time Tracker

Real-Time Tracker is a web application that allows users to share their real-time location with others on an interactive map. Built with Node.js, Express, Socket.IO, and Leaflet, this app provides a seamless and responsive location tracking experience.

## ✨ Features

- 📍 Real-time location sharing
- 🗺️ Interactive map interface
- 👤 User registration with custom usernames
- 🔄 Automatic marker updates for connected users
- 📱 Responsive design for various screen sizes

## 🛠️ Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.x or higher recommended)
- npm (Node Package Manager) installed

## 🚀 Installation

1. Clone the repository:
```bash
   git clone hhttps://github.com/mitgajera/realtime-tracker.git
   ```

2. Navigate to the project directory:
```bash
   cd realtime-tracker
   ```

3. Install the dependencies:
```bash
    npm install
   ```

## 📖 Usage

1. Start the server:
```bash
    node app.js
   ```  
2. Open a web browser and go to `http://localhost:3000`

3. Enter your name when prompted

4. Allow the application to access your location when asked

5. You should now see your location on the map, and any other connected users will appear as well

## 💻 Technologies Used

- Node.js
- Express.js
- Socket.IO
- Leaflet (for maps)
- EJS (Embedded JavaScript templating)

## 📝 Code Overview

### Server-side (app.js)

The server is set up using Express and Socket.IO. It handles user connections, location updates, and broadcasts this information to all connected clients.

Key features:
- Sets up Express server and Socket.IO
- Handles user registration
- Manages real-time location updates
- Broadcasts user disconnections

### Client-side (public/js/script.js)

The client-side JavaScript handles the map initialization, geolocation tracking, and real-time updates via Socket.IO.

Key features:
- Initializes Leaflet map
- Manages user geolocation
- Sends location updates to the server
- Handles incoming location data for other users
- Updates map markers in real-time

## 🤝 Contributing

Contributions to the Real-Time Tracker project are welcome. Please feel free to submit a Pull Request.

## 🔧 Troubleshooting

- If the map doesn't load, check your internet connection and ensure that the Leaflet CDN is accessible.
- If geolocation doesn't work, make sure you've allowed location access in your browser settings.
- For any server-side issues, check the console output for error messages.

## 🔮 Future Enhancements

- Add user authentication
- Implement private rooms for group tracking
- Add custom markers and user profiles
- Incorporate route tracking and history

## 🙏 Acknowledgements

- Leaflet for providing an excellent open-source mapping solution
- Socket.IO for enabling real-time communication
- The open-source community for continuous inspiration and support

Happy tracking! 🚀🗺️