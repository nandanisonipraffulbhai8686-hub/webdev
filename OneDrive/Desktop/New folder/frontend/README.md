# React Task Documentation

## i. Virtual DOM and Stamina Updates

The Virtual DOM compares the updated UI with the previous UI using a diffing process.  
When the stamina value changes, React updates only the changed part instead of reloading the whole page.

---

## ii. Modulus Logic for 5th-Click Bug

```javascript
if (clickCount % 5 === 0) {
  console.log("Bug triggered on 5th click");
}
```

---

## iii. Differences Between Vite and Create React App (CRA)

| Vite | CRA |
|------|------|
| Faster startup time | Slower startup |
| Uses native ES modules | Uses Webpack |
| Faster hot reload | Slower hot reload |