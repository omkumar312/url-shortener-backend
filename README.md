# MyURL – URL Shortener App

## Development Process

## Initial Setup
- [x] Setup React project using Vite
- [x] Configure Vite (https://vitejs.dev/config/)
- [x] Setup Tailwind CSS and shadcn/ui
- [x] Setup Supabase project
- [x] Configure environment variables

## Authentication System
- [x] User Signup using Supabase Auth
- [x] User Login using Supabase Auth
- [x] Secure session handling
- [x] Protected dashboard routes
- [x] Logout functionality

## URL Shortening Core
- [x] Accept long URL from user
- [x] Generate unique short URL
- [x] Support custom short URLs
- [x] Store original and short URLs in database
- [x] Redirect short URL to original URL

## QR Code Generation
- [x] Generate QR code for each short URL
- [x] Use react-qrcode-logo
- [x] Allow QR code download
- [x] Store QR code images in Supabase Storage

## Image Uploads (Supabase Storage)
- [x] Create storage buckets in Supabase
- [x] Upload QR code images to bucket
- [x] Upload user profile images
- [x] Secure bucket access with RLS policies

## Analytics Tracking
- [x] Track total clicks per short URL
- [x] Identify device type (Desktop, Mobile, Other)
- [x] Track city and country of visitor
- [x] Track date and time of each click
- [x] Store analytics data in database
- [x] Use https://ipapi.co/json for location tracking

## Analytics Dashboard
- [x] Display total clicks count
- [x] Show device usage analytics
- [x] Show location-based analytics
- [x] Visualize data using Recharts
- [x] https://recharts.github.io/en-US/

## UI and Styling
- [x] Fully responsive user interface
- [x] Built with Tailwind CSS
- [x] Modern components using shadcn/ui
- [x] Clean dashboard layout
- [x] Mobile, tablet, and desktop friendly

## Authorization
- [x] Only authenticated users can create short URLs
- [x] Users can view only their own analytics
- [x] Secure database access using RLS

## Features
- [x] Responsive web design (RWD)
- [x] User authentication (Login/Register/Logout)
- [x] URL shortening with custom aliases
- [x] QR code generation
- [x] Click analytics tracking
- [x] Device and location detection
- [x] Image uploads using Supabase Storage
- [x] RESTful architecture

-------------------------------------------------------------------------

## Normal Routes
[Method]  [Route]  
GET       /                 Landing page  
GET       /login            User login page  
GET       /register         User registration page  
GET       /dashboard        User dashboard  

-------------------------------------------------------------------------

## Authentication Routes
[Method]  [Route]  
POST      /auth/register    Create new user  
POST      /auth/login       Login user  
POST      /auth/logout      Logout user  

-------------------------------------------------------------------------

## URL Routes
[Method]  [Route]  
GET       /urls             Fetch all user URLs  
POST      /urls             Create a new short URL  
GET       /:shortUrl        Redirect to original URL  
DELETE    /urls/:id         Delete a short URL  

-------------------------------------------------------------------------

## Analytics Routes
[Method]  [Route]  
GET       /analytics/:id    Fetch URL analytics  
POST      /analytics        Store click analytics  

## Technologies

### Frontend
React JS  
Vite  
Tailwind CSS  
shadcn/ui  
Recharts  
react-qrcode-logo  

### Backend / Services
Supabase  
Supabase Auth  
Supabase PostgreSQL  
Supabase Storage  

## Getting Started

Clone this repository
```bash
git clone https://github.com/your-username/your-repo-name.git

## Navigate to the project directory
cd your-repo-name

## Install dependencies
npm install

## Run the development server
npm run dev


## Open your browser and visit:
http://localhost:5173/

## Build for Production
npm run build

## Preview production build
npm run preview

## Deployment

## Live Website:
https://myurl-in-n47b.onrender.com
Hosted on Render
