# MyURL – Full-Stack Scalable URL Shortening App

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
```

## Deployment

## Live Website:
https://myurl-in-n47b.onrender.com

Hosted on Render

# MY URL
A full-stack URL Shortener web application that allows users to convert long URLs into short, generate QR Codes and track their usage.

Deployed on Render:
https://myurl-in-n47b.onrender.com


<h2>Gallery</h2>


Dashboard

<img width="1919" height="1086" alt="Screenshot 2026-01-17 214355" src="https://github.com/user-attachments/assets/08753132-bac0-41b1-ba47-1f93e4f27e09" />



Create New URL

<img width="1915" height="1038" alt="Screenshot 2026-01-17 214524" src="https://github.com/user-attachments/assets/dc017028-c273-418f-b740-f46199a7205a" />



Custom your URL

<img width="1917" height="1036" alt="Screenshot 2026-01-17 214721" src="https://github.com/user-attachments/assets/9c97a821-50a0-4132-ac6a-4c8b3f45c97a" />



Shorten URL with QR Code

<img width="500" height="656" alt="Screenshot 2026-01-17 220621" src="https://github.com/user-attachments/assets/3cbc3f3e-9a1b-4ee4-a5ec-ad54af4e3fdc" />



Redirecting...

<img width="1408" height="797" alt="Screenshot 2026-01-17 220658" src="https://github.com/user-attachments/assets/3b03da80-2229-4406-b89b-697bc968f466" />



Redirect to Original URL

<img width="1915" height="927" alt="Screenshot 2026-01-17 220735" src="https://github.com/user-attachments/assets/6f1f6f31-b5d8-4265-ae4c-462f8079bb3b" />



Authentication

<img width="1536" height="635" alt="image" src="https://github.com/user-attachments/assets/dd55bb41-7b6c-437e-926e-3ad96e242530" />



Create More

<img width="1843" height="1084" alt="Screenshot 2026-01-17 220815" src="https://github.com/user-attachments/assets/7c5bd9bc-5760-4d31-8db5-b9e685b2d057" />



Total Clicks & Live Tracking

<img width="1414" height="1025" alt="image" src="https://github.com/user-attachments/assets/f2245a77-6fdb-440d-b458-14cbb433944e" />





