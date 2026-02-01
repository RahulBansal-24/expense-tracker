# 💰 Expense Tracker

A modern **Expense Tracker application** built using **React + Vite**, designed with a strong focus on **clean UI**, **usability**, and **component-based architecture**.  

Track your daily expenses, visualize spending patterns, and manage your money efficiently using **local storage** — a perfect learning & portfolio project! 📊💸

---

## ✨ Features

### 📊 Dashboard Analytics
- 🏷️ Displays **total number of expenses**  
- 💵 Shows **total expense amount**  
- 🔺 Highlights **highest expense**  
- 🥧 **Category-wise expense distribution** using a pie chart  

### 🧾 Expense Management
- ➕ Add new expenses with:
  - ✏️ Description  
  - 💰 Amount  
  - 🗂️ Category  
  - 📅 Date  
- ✏️ Edit existing expenses  
- ❌ Delete expenses  
- 🔢 Automatically numbers expenses  

### 🔍 Expense List Enhancements
- 🔎 Search expenses by description  
- ↕️ Sort expenses by **amount or date**  
- 🟢🟡🔴 Category-based colored expense cards  
- 🃏 Clean **card layout** with soft shadows  
- 🪞 Glassmorphism-style value fields  
- 🎨 Rounded, animated action buttons  

### 💾 Data Persistence
- 🗄️ Uses browser **Local Storage**  
- 🔄 Data remains intact across page refreshes  

### 🎨 UI & UX
- ⚪ Polished **white theme**  
- 🗂️ Card-based dashboard layout  
- ✨ Subtle animated background  
- 📱 **Responsive design** for smaller screens  
- 🔠 Modern typography and spacing  

---

## 🛠️ Tech Stack

- ⚛️ **React** (Functional Components & Hooks)  
- 🚀 **Vite** (Fast development & build tool)  
- 📈 **Recharts** (Data visualization)  
- 🎨 **CSS3** (Custom styling & animations)  
- 💾 **Local Storage API**  
- 🐙 **Git & GitHub** (Version control)  

---

## 📂 Project Structure

```text
Expense-Tracker/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── icons/                 
│   │
│   ├── components/
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── ExpenseForm/
│   │   │   └── ExpenseForm.jsx
│   │   │
│   │   ├── ExpenseList/
│   │   │   └── ExpenseList.jsx
│   │   │
│   │   └── index.js               
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── styles/
│   │   ├── index.css              # global styles
│   │   └── App.css                # app / component styles
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/RahulBansal-24/Expense-Tracker
```  

2️⃣ **Install dependencies**    
```bash
npm install
```  

3️⃣ **Run the app locally**  
```bash
npm run dev
```  

The app will be available at: [http://localhost:5173](http://localhost:5173)  

4️⃣ **Explore & contribute**  
Open the project in your favorite editor and start experimenting! 💻✨  

---

## 🔮 Future Improvements

- 🌙 **Dark mode support**  
- 📆 **Monthly and yearly analytics**  
- 📤 **Export expenses to CSV / Excel**  
- 🔐 **User authentication**  
- ☁️ **Cloud-based data storage**  
- 📱 **Mobile-first UI improvements**  
- 📊 **Advanced filters and charts**  

---

## 👨‍💻 Author

**Rahul Bansal**  
🎓 Computer Science & Engineering Student  
💻 Interested in Web Development, UI/UX, and Software Engineering  

🔗 [GitHub](https://github.com/RahulBansal-24)