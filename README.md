# 🍽️ YummyYummyMenu

A beautiful and responsive React Native app built with **Expo** that allows users to browse delicious food items, mark favorites, and experience smooth offline-ready interactions — all powered by **Zustand**, **local storage**, and a clean modular architecture.

---

## 📱 Features

✅ Browse a menu of food items with name, price, and description
✅ Favorite your preferred dishes and access them anytime
✅ Search for items with instant filtering
✅ Offline support with local data caching
✅ Smooth state management with **Zustand**
✅ Modular code structure with reusable components
✅ Fully responsive with support for multiple screen sizes

---

## 🧹 Tech Stack

* ⚛️ **React Native** (via Expo)
* 🔂 **Zustand** – for global state management
* 📂 **AsyncStorage** – for offline support
* 📡 **Fetch API** – ready for integration with real APIs
* 🤭 **React Navigation** – for screen and tab navigation

---

## 🗂 Project Structure

```
/food-app
│
├── /assets             # Static assets (images, icons, fonts)
├── /components         # UI components (MenuItem, FavoriteButton)
├── /screens            # Screens (Menu, Favorites, Details)
├── /navigation         # App navigation (Tab + Stack)
├── /services           # API + Storage utilities
├── /state              # Zustand store for saved foods
├── /hooks              # Custom hooks (fetching, permissions, sync)
├── /data               # Static JSON (mock food list)
├── App.jsx             # App entry with navigation & providers
└── app.json, etc.
```

---

## 🧫 Zustand Store Overview

The global store (`/state/store.js`) handles:

* `savedFoods`: array of favorited foods
* `saveFood(food)`: adds a food item to favorites
* `removeFood(id)`: removes a food item by ID

---

## 📷 Screenshots

> *(Add screenshots of `MenuScreen`, `FavoritesScreen`, and food items here)*

---

## 💠 Installation

```bash
git clone https://github.com/your-username/food-app
cd food-app
npm install
npx expo start
```

---

## 🔄 Future Improvements

* Integrate a real REST API or Firebase backend
* Add authentication (e.g., Google, email)
* Improve animations and UI polish
* Add category filters and food images
* Sync favorites to cloud

---

## 📄 License

MIT © [magnetarstar]([https://github.com/your-username](https://github.com/magnetarstar-hub))
