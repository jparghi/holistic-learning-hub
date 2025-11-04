
# 🧠 CodeX Instruction: Add Learning Links for Java & Python Courses (Full Implementation)

## 🎯 Objective
Update **jigishparghi.com** to include a clean, modern “Learning Series” section featuring Jigish Parghi’s open-source Java and Python learning paths — helping showcase his teaching and mentoring expertise.

---

## 🔧 Target Files
- `/index.html` (Home Page)
- OR create a new file `/learning.html` (if you prefer a separate Learning Series page)
- `/assets/css/style.css` (add CSS styles if needed)

---

## 🧱 Section Placement
Place the new section:
- **Below “Projects”** section on the homepage  
- OR as a dedicated navigation link **Learning Series** in the top menu linking to `/learning.html`

---

## 🧩 HTML STRUCTURE

Insert this block in the appropriate place in `index.html` **(or use it as the content of `/learning.html`)**:

```html
<section id="learning-series" class="learning-section">
  <div class="container">
    <h2 class="section-title">🧠 Holistic Learning Series</h2>
    <p class="section-subtitle">
      Learn Java and Python through structured, project-based paths created by <strong>Jigish Parghi</strong>.
      <br><em>🎥 Video tutorials coming soon!</em>
    </p>

    <div class="course-grid">
      <div class="course-card">
        <div class="icon java">☕</div>
        <h3>Holistic Java Series</h3>
        <p>A 3-phase Java roadmap — from basics to advanced interview readiness, with coding drills and bug-fix challenges.</p>
        <a href="https://github.com/jparghi/holistic-java-series" target="_blank" class="btn">View on GitHub</a>
      </div>

      <div class="course-card">
        <div class="icon python">🐍</div>
        <h3>Holistic Python Basics</h3>
        <p>Structured beginner-to-intermediate Python lessons mirroring the Java path, focusing on syntax and problem-solving.</p>
        <a href="https://github.com/jparghi/holistic-python-basics" target="_blank" class="btn">View on GitHub</a>
      </div>
    </div>
  </div>
</section>
````

---

## 🎨 CSS STYLING (add to `style.css` or equivalent)

```css
.learning-section {
  padding: 80px 20px;
  background: #fafafa;
  text-align: center;
}

.learning-section .section-title {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.learning-section .section-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 40px;
}

.course-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.course-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 300px;
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.course-card .icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.course-card h3 {
  font-size: 1.4rem;
  margin: 10px 0;
  color: #222;
}

.course-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.course-card .btn {
  display: inline-block;
  padding: 10px 18px;
  background-color: #0073e6;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.course-card .btn:hover {
  background-color: #005bb5;
}

.icon.java {
  color: #f89820;
}

.icon.python {
  color: #3572A5;
}
```

---

## 🧭 Footer Update (Optional)

Add this in your footer `<footer>` section:

```html
<p>
  💡 Explore my Holistic Learning Series:
  <a href="#learning-series">Java</a> |
  <a href="#learning-series">Python</a>
</p>
```

---

## 🧰 Bonus (Optional Enhancements)

* Add subtle animation on scroll (using AOS.js or simple CSS fade-in)
* Include a **"Join My Learning Journey"** button linking to a future newsletter or YouTube channel
* When videos are ready, replace the “Coming Soon” note with embedded YouTube iframes

---

## ✅ Expected Result

* A clean, modern “Learning Series” section visible on `jigishparghi.com`
* GitHub course links open in new tabs
* Fully responsive across desktop and mobile
* Easy future integration of video tutorials

---

## 🚀 CodeX Task Summary

**Action Items for CodeX:**

1. Locate the `/index.html` or create `/learning.html`.
2. Insert the provided HTML section.
3. Apply CSS (either inline or add to `style.css`).
4. Add navigation link if a new page is created.
5. Verify responsiveness and link correctness.

