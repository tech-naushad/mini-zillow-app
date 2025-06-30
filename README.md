# 🏠 Application live url
https://mini-zillow-react-app.onrender.com/

# 🏠 Mini-Zillow-App

A full-stack real estate platform inspired by Zillow — allowing users to list, browse, and manage the properties. Built with **React.js**, **TailwindCSS**, **Node.js/Express**, **MongoDB**, and **JWT Auth**.

---

## 🚀 Features

### 🖥 Frontend
- Built with **React + TailwindCSS**
- Property listing and detail page
- Star-based property rating -  Only partial UI part and fully backend api were developed. It was an optional feature being asked in an intial requirement. 
- Responsive UI with pagination support
- Admin dashboard to manage listings. The current is limited to deleting the property only
- JWT-based login/signup
- Separate Login for Admins

 ### 🖥 Running the app locally 
  - Clone the code from https://github.com/tech-naushad/mini-zillow-app 
  - Clone Nodejs backend api also https://github.com/tech-naushad/mini-zillow
  - run api first with npm start command
  - before running app, please ensure all the setting pointing to local api only. Change the setting in .env file. Change the below setting as per your local box
  VITE_AUTH_SERVICE_BASE_URL=https://auth-service-68a2.onrender.com/api/
  VITE_PROPERTY_SERVICE_BASE_URL=https://property-service-raoo.onrender.com/api/

 ### 🖥 Application feature wise Flow

   - Intial page will be home page where recently added Propertis will be displayed
   - Use can add new property by navigating to menu, Manage Properties->Add New Property 
   - Login is required to add the new property. Please login and navigate agaon to Properties->Add New Property
   - Now fill the details to a new propery and click 
   - The Property will be added
   - Manage Property Listing under ManageProperties menu, will direct you either Admi Dashboard or Admin Login 
   - Admin can delete the proprty.
 
   - User can see the listing created by him/her under Menu UserPorfile->My Lisening

## 🚀 Solution Details

 - Features -  All the core modules
 - Hooks  -  reusable code such as Auth manager
 - Components -  Gneric UI components such as buttons, etc 
 - Rest all self-explainatory

## 🚀 Feature scops

 - Rating functionality can be fully developed
 - Testing can be adde 
 - UI can be made more professional

## 🚀 High level Layered Architecture
 - mini-zillow-app/
 - ├── public/                          # Static assets (index.html, icons, etc.)
 - ├── src/
 - │   ├── assets/                      # Images, logos, CSS, etc.
 - │   ├── components/                  # Reusable UI components (Card, Button, Header, Loader, etc.)
 - │   ├── features/
 - │   │   ├── auth/                    # LoginForm, RegisterForm, auth logic
 - │   │   ├── property/                # PropertyList, PropertyCard, PropertyDetail, create/edit components
 - │   │   └── admin/                   # Listing management tools, dashboard components
 - │   ├── api/                         # Axios client instance, API calls (property, auth services)
 - │   ├── hooks/                       # Custom hooks (useAuth, useFetchProperties, usePagination)
 - │   ├── utils/                       # Helpers (formatting, validation, constants)
 - │   ├── App.jsx                      # Main application component with Router
 - │   └── main.jsx                     # React entry point and render to DOM
 - ├── vite.config.js
 - └── package.json

📚 Layer Breakdown
 - Layer	Content
 - Assets	public/, src/assets/ — static files and media
 - Presentation/UI	src/components/ — reusable, styled React UI components
 - Pages	src/pages/ — route-focused views combining components
 - Features	src/features/ — domain-specific logic for auth, property, admin
 - API Layer	src/api/ — Axios configuration and services for backend calls
 - Hooks	src/hooks/ — custom reusable logic encapsulation
 - Utilities	src/utils/ — helper and validation functions
 - Entry-point	main.jsx and App.jsx — bootstrap and top-level logic

