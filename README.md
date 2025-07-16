# Dashboard App (Test Assignment)

## 🔍 Overview

This is a test assignment for a UI dashboard and account interface built using Angular. The project implements two main screens (Dashboard & Account) based on a given design.

- Clean modular architecture with reusable components
- Responsive layout for desktop and tablet
- Hosted and production-ready

## 🧰 Technologies Used

- **Angular 17**
- **TypeScript**
- **SCSS**
- **Angular Router**
- **Mock data (JSON)**
- **GitHub Pages (for hosting)**

## 📐 Structure

### 🖥️ Dashboard Page
- Navbar with active tab
- Work Queue (tabs + table)
- Portfolio Goals (progress indicators)
- Quick Actions (buttons)
- Market Intelligence (news cards)
- My Accounts Table (filters, triage, status, colors)

### 🧾 Account Page
- Header with account info
- Performance Metrics
- Policies Overview
- Account Status & Compliance
- Winnability (graphs and insights)
- Communication (messages, files, replies)
- Policies Table

## ⚙️ Features
- Component-based structure
- Angular routing
- Tab switching
- Active state highlighting
- Icon click reveals details
- Mock data for all views
- Basic responsive layout

## 🤖 AI Tools Used
- ChatGPT (for logic, structure, componentization help)
- GPT Vision (for image → layout suggestions)

## 🌐 Deployment

The app is deployed here:  
🔗 [https://sash0o0k.github.io/dashboard-app](https://sash0o0k.github.io/dashboard-app)

---

## 📁 Project Setup

```bash
npm install
ng build --configuration production --base-href "/dashboard-app/"
npx angular-cli-ghpages --dir=dist/dashboard-app/browser
