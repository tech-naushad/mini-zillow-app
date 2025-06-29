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
