# PirateHub 🏴‍☠️

PirateHub is a dynamic web platform where users can create, upvote, search, and view posts, all within a smooth infinite scrolling experience.  
The project is built using React, Supabase, and modern responsive design techniques.

---

## 🚀 Features

### 📝 Create Posts
- Users can create new posts with:
  - Title (required)
  - Content (optional)
  - Image URL (optional; supports Imgur links, auto-converted)
- If an Imgur page link is pasted, it is automatically converted into a direct image link.

### 🔍 Search Posts
- Real-time search bar on the homepage.
- Search filters posts live based on the post Title.

### 🔃 Sort Posts
- Posts can be sorted by:
  - Newest (date created)
  - Most Upvotes
- Sorting updates dynamically without reloading the page.

### 📜 Infinite Scroll
- Homepage initially loads a limited number of posts.
- As the user scrolls down, additional posts load automatically ("infinite scroll" experience).
- No need to click any "Load More" button.

### 🆙 Upvote Posts
- Each post displays an upvote count.
- Users can upvote posts both from:
  - The homepage card view
  - The individual post detail page
- Upvotes update instantly and persist to Supabase.

### 🖼️ Image Support
- Posts can include an optional image.
- Supports direct image URLs (jpg, png, gif).
- Corrects Imgur links automatically if user pastes a page link instead of an image link.

### 🏷️ Post Details Page
- Clicking on any post opens a full-page detailed view.
- Displays:
  - Post Title
  - Post Content (if provided)
  - Creation time
  - Upvotes
  - Image (if provided)
  - Comments section

### 💬 Comment Section
- Each post detail page includes a comments area:
  - Users can view existing comments.
  - Users can submit new comments (appended to post in Supabase).
- If no comments exist, a friendly message appears.

### ✏️ Edit Posts
- Posts can be edited after creation.
- Users can modify Title, Content, and Image URL.
- Edits do not delete existing comments or upvotes.

# Post Showcase

![postfunction](https://github.com/user-attachments/assets/be5094ce-1544-4798-95e4-08516a9cd2ce)

# Database Showcase
![supabasefuncion](https://github.com/user-attachments/assets/c23ae2a2-4b82-4be2-b168-30f2f1156fd0)

# Cloud Server Showcase
![cloudserverPirateHUb](https://github.com/user-attachments/assets/26e82a54-5773-444b-83ed-9d83a8871526)


### Cloud Deployment Url
https://onepiecepiratehub.netlify.app/

