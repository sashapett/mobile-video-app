A React Native video gallery app built with Expo Router, featuring categorized content (Pets & People) with modern iOS-style design.

The application was developed and tested primarily on iPhone. At the time of development, I did not have access to an Android device for Expo Go, and my local Android emulator environment was unavailable due to developing on Windows without access to a macOS setup.
As a result, there may be minor UI or behavior inconsistencies on Android — apologies in advance for that.

Also to note, I didn't test any android or ios release builds like apk or aab cause I didn't have the possibility right now. Overall main focus on ExpoGo testing env.

## 🚀 Setup

```bash
# Install dependencies
npm install

# Start development server
npx expo start

## 🎨 Design Decisions

### Dark Modern Theme
- Background: `#2c2c2e`
- Cards: `#1c1c1e`
- Comfortable viewing for video content

## 🔧 Technical Implementation

### Single API Call Strategy
- ✅ One API call fetches all items on app load
- ✅ Data stored in React Context for instant tab switching
- ✅ Client-side filtering for Pets vs People tabs
- ✅ No redundant network requests

### Dynamic Row Grouping
- Frontend handles pairing of half-width cards
- Shows single card if no pair available
- No dependency on perfect backend data structure

### Navigation Pattern
- Pass only `id` via navigation params
- Retrieve full item data from context (already in memory)
- `/api/item/[id]` endpoint exists but **not used** (data already available)

## ⚠️ Trade-offs & Limitations

### Why Not Navigate with `videoUrl` Instead of `id`?
- **Pros of using `videoUrl`**: No search needed in array afterwards

### Item Detail Endpoint
- `/api/item/[id]` endpoint provided but **not used**
- Reason: All data already available in context
- Same model/fields in list and detail views

### Search Performance
- `items.find(i => i.id === id)` is O(n) linear search
- Acceptable for small datasets
- Future: Use Map for O(1) lookup if needed

### expo-av Deprecation
- Currently using `expo-av` (deprecated but functional)
- No immediate impact on functionality

## 🎯 Key Features

✅ Tab navigation (Pets/People)  
✅ Mixed layout (full-width & half-width cards)  
✅ Video autoplay control  
✅ Play/pause toggle  
✅ Full-screen modal detail view  
✅ Dark theme  
✅ Error handling

## 🚧 Potential Issues to Watch

1. **Data consistency**: Frontend handles incomplete half-width pairs gracefully
2. **Scale**: Current implementation works for <100 items
3. **Deep linking**: Not implemented but architecture supports it
4. Screens have repetetive components, it is best to refactor code a bit move into seperate components and use atomic design pattern across all the app. 

---

Built with Expo Router + React Native + TypeScript
