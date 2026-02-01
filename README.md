## 🗂️ Kanban Board

A modern, lightweight **Kanban board** built using **pure HTML, CSS, and JavaScript**, focused on clean architecture, secure DOM rendering, and an intuitive drag-and-drop experience — no frameworks or external libraries used.

## ✨ Features

- Three-column Kanban workflow (**To Do / In Progress / Done**)  
- Drag & drop tasks across boards  
- Tag-based filtering with dynamic tag creation  
- Inline tag removal and filter toggling  

## 🧠 Implementation Overview

- Tasks and filters are managed as **centralized state objects**, persisted in localStorage
- Rendering is handled via **explicit DOM creation (`createElement`, `textContent`)** to prevent XSS attacks
- Drag & drop is implemented using **native HTML5 Drag and Drop APIs**

<table>
  <tr>
    <td width="50%">
      <img src="https://github.com/user-attachments/assets/8a6d9892-396a-455b-bbf9-bdd1ca2c08fb" />
    </td>
    <td width="50%">
      <img src="https://github.com/user-attachments/assets/0cdd208a-6901-4485-a0c9-85d17e656d73" />
    </td>
  </tr>
  <img src="https://github.com/user-attachments/assets/9c52a665-f658-4d17-b732-cc450eee5708" />
</table>
