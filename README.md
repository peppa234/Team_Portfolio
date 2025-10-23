
# 🧑‍💻 Team Portfolio — Evkeria Team (G8-TEAM4)

This repository hosts our **Team Portfolio Project**, developed as part of the Distributed Version Control assignment.  
It demonstrates our ability to collaboratively manage a shared software project using **Git, GitHub, and GitHub Pages** while following professional workflows.

---

## 👥 Team Members

| Name                    | Role        | GitHub Username                                            |
| ----------------------- | ----------- | ---------------------------------------------------------- |
| **Aicha Brihmouche**    | Team Leader | [@peppa234](https://github.com/peppa234)                   |
| **Chaima Taberkokt**    | Member      | [@chaimataberkokt](https://github.com/chaimataberkokt)     |
| **Wassim Taleb**        | Member      | [@wassim](https://github.com/WassimTaleb2005)              |
| **Mohamed Kecir**       | Member      | [@kecir-mohamed](https://github.com/kecir-mohamed)         |
| **Wanis Hadj Mohammed** | Member      | [@WanisHADJMOHAMMED](https://github.com/WanisHADJMOHAMMED) |

---

## 🌐 Live Deployment

🔗 **GitHub Pages Link:** [https://peppa234.github.io/Team_Portfolio/](https://peppa234.github.io/Team_Portfolio/)

This website enumerates all team members on the home page. Each name links to an individual profile page containing:

- A professional bio
- Technical competencies
- A link to the member’s GitHub profile
    

---

## 🧱 Project Overview

The **Team Portfolio** project showcases the use of distributed version control in a collaborative software development context.  
Each team member contributed their individual profile page on a dedicated feature branch following the **feature-branch Git workflow**.

### Objectives

- Practice professional Git workflows (branching, PR reviews, merge conflict resolution).
    
- Collaborate efficiently using a shared repository.
    
- Publish a static website via **GitHub Pages**.
    

---

## ⚙️ Tech Stack

|Category|Technologies|
|---|---|
|**Frontend**|React 18 + TypeScript|
|**Styling**|Tailwind CSS + Shadcn UI|
|**Build Tool**|Vite|
|**Hosting**|GitHub Pages|
|**Version Control**|Git + GitHub (Feature Branch Workflow)|

---

## 🧩 Project Structure

```
project/
├── public/                # Static assets (images, vectors, icons)
├── src/
│   ├── components/        # Reusable UI elements
│   ├── screens/           # Page views
│   ├── data/              # Team members data
│   └── lib/               # Utilities and helpers
├── index.html             # Root entry point
└── vite.config.js         # Vite configuration
```

---

## 🚀 Development Workflow

### 1. Repository Setup (Team Lead)

- Created repository `team-portfolio-project` on GitHub.
- Added all collaborators and created a protected `main` branch.
- Created and pushed a `develop` branch for integration.
    

### 2. Individual Contributions (All Members)

Each member:

- Cloned the repo and created a branch named `feature/implement-firstname-lastname-profile`.
- Added their personal React page.
- Committed using **Conventional Commit** format (e.g., `feat: add profile for Aicha Brihmouche`).
- Reviewed and approved at least two teammates’ PRs.
    

### 3. Integration and Deployment

- The `develop` branch was merged into `main` after final review.
- The website was deployed using **GitHub Pages** (deployment source: `main` branch).

---

## 🧠 Team Retrospective Analysis

During development, our team encountered several technical challenges typical of distributed workflows.  
The most significant issue was **resolving merge conflicts** in the `teamData.ts` file, caused by simultaneous edits from multiple feature branches.

To resolve this, each member fetched and merged updates from `develop` before pushing their branch. Conflicts were handled manually using VS Code’s merge editor.  
This process improved our understanding of **Git conflict resolution** and emphasized the importance of frequent synchronization and clear communication.

Another key learning point was the **Pull Request review process**, which enhanced the final code quality by catching minor structural and style inconsistencies early.  

Overall, this project gave us a realistic experience of working within a professional Git-based environment, improving our technical and teamwork skills simultaneously.

