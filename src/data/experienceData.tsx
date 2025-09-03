import React from "react";

export interface ExperienceData {
  jobTitle: string;
  jobDuration: string;
  description: string[];
  longDescription: React.ReactNode;
  technologies: string;
}

export const experiences: ExperienceData[] = [
  {
    jobTitle: "SWE Intern @ Oracle",
    jobDuration: "May 2024 - Aug 2024",
    description: [
      "Leveraged OCI GenAI Services to develop a full-stack interactive dashboard for operational reporting and integrated AI help tool with Inference Pipelines for context-sensitive user assistance",
      "Engineered backend AI Help tool using Python & Natural Language Processing to enable real-time database retrieval and customer support, enhancing end user experience",
      "Developed within an agile/scrum framework to consistently meet deliverables & plan and execute sprints",
      "Developed customer solutions on Oracle Cloud using API first approach and microservice-based architecture",
    ],
    longDescription: (
      <>
        Oracle was my first software engineering internship. I came on as a{" "}
        <strong>back-end software engineering intern</strong> but quickly
        transitioned to a <em>full-stack role</em>, working with databases and
        cloud services. Over the course of the internship, I learned how to
        manage projects and software on a large scale, with a great emphasis on
        communication and collaboration.
        <br />
        <br />
        One project I am particularly proud of is a full-stack module with a
        chatbot to fetch and analyze user data from natural language. I was the
        <strong> lead developer</strong> with my two teammates. We'd spend days
        scribbling on the whiteboards, iterating on the design. We developed an
        efficient AI inference pipeline to achieve our project objective with
        our limited compute resources.
        <br />
        <br />
        To conclude the internship, we pitched the idea to the team of
        <strong> 50+ engineers from 8+ time zones</strong>. During the course of
        the internship, I also earned a certification as an
        <em> OCI Gen AI Professional</em> (and a few more on cloud infrastructure),
        expanding on my technical knowledge. Despite the skills, the most
        invaluable thing I gained was the friendships and connections I made
        during my time at Oracle. The people I met and the experiences I had will
        stay with me for the rest of my life.
      </>
    ),
    technologies:
      "Python, GraphQL, FastAPI, TypeScript/JavaScript, React, OCI, Docker, Oracle Database",
  },
];