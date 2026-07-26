# Ai-interview-platform-
AI-powered interview preparation platform that analyzes resumes, detects skill gaps against target job roles (Amazon, Google, Microsoft), runs simulated AI interviews with real-time feedback on communication and correctness, offers coding interviews, generates personalized roadmaps, recommends projects, and provides a 24/7 AI mentor chatbot


AI Interview Preparation Platform

AI-powered interview preparation platform that analyzes resumes, detects skill gaps against target job roles (Amazon, Google, Microsoft), runs simulated AI interviews with real-time feedback on communication and correctness, offers coding interviews, generates personalized roadmaps, recommends projects, and provides a 24/7 AI mentor chatbot.

Problem

Students preparing for placements rely on scattered resources with no personalized feedback, no resume analysis, no interview simulation, no roadmap, and no skill gap analysis. This platform brings all of that into one place.

Features
Authentication — Google Login + JWT
Resume Upload — Upload a PDF, auto-extract skills, education, and projects
Skill Gap Analyzer — Compares your resume against a target job description and lists missing skills
AI Interview Simulation — Track-based (Frontend / Backend / Cloud / AI) interviews with AI evaluation of communication, confidence, correctness, and depth
Coding Interview — Embedded Monaco editor with LeetCode-style questions and AI hints
Roadmap Generator — Personalized prep roadmap for a chosen target company
Project Recommendations — AI-suggested projects based on current skill gaps
AI Mentor Chatbot — 24/7 chatbot aware of your resume, projects, and goals
Dashboard — Charts for interview scores, weak areas, and progress over time
Tech Stack
Layer	Tech
Frontend	React, Tailwind CSS, Chart.js
Backend	Node.js, Express
Database	MongoDB
AI	Gemini / OpenAI, LangChain, ChromaDB
Auth	Firebase Authentication
Deployment	Vercel (frontend), Render / Cloud Run (backend)
Folder Structure
interview-ai-platform/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── services/
├── server/          # Express backend
│   └── src/
│       ├── config/
│       ├── models/
│       ├── routes/
│       ├── controllers/
│       ├── middleware/
│       └── services/
│           └── ai/
└── README.md
