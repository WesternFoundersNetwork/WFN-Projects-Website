import { AwardYear, Award } from "@/types";

// DATA SHEET FOR THE AWARD PAGE AT domain/awards
// see more about Award Specifications in @/types/index

export const awardsData: AwardYear[] = [
    {
        year: "2024-2025",
        awards: [
            {
              hackathon: "uOttawa",
              projectName: "DigiPen",
              awardTitle: "Best Use Case of Seed Studio Hardware",
              teamMembers: ["Philipp Mayorov"],
              repoLink: "https://github.com/ben-petlach/digipenv2/blob/main/Hardware/accelerometer.ino",
              description: "DigiPen is a pen-tracking device that attaches to any marker, digitizing handwriting in real time. Using an Xiao MCU, accelerometer, and gyroscope, it accurately tracks movement and transfers writing to an e-ink display for a seamless digital experience."
            },
            {
              hackathon: "She Hacks",
              projectName: "Dance It, Post It",
              awardTitle: "Best Beginner Hack",
              teamMembers: ["Jasmine Zhu", "Brianna Xiao", "Kathy Dong"],
              description: "Dance It, Post It compares a user’s movements to a reference by analyzing the angles between joints and limbs. This approach allows new dancers to learn choreography quickly and easily."
            },
            {
              hackathon: "Geese Hacks",
              projectName: "LinkedIt",
              awardTitle: "Best Beginner Hack",
              teamMembers: ["Kevin Li"],
              repoLink: "https://lnkd.in/emrDp9kv",
              devpostLink: "https://lnkd.in/eZ9cmfhJ",
              description: "LinkedIt is a web app that automates the process of finding sponsorship contacts. Users input a company and role to get a curated list of LinkedIn profiles, streamlining outreach. Built with React, Tailwind CSS, Selenium, and Flask, it simplifies sponsorship searches."
            },
            {
              hackathon: "Delta Hacks",
              projectName: "StudyBuddy",
              awardTitle: "Swift Student Challenge & Best Community Building Hack",
              teamMembers: ["Felix Jeong"],
              devpostLink: "https://lnkd.in/edN9ZjKt",
              description: "StudyBuddy is a real-time study analytics app that tracks time spent on each course and notifies friends when users start studying. It helps students stay accountable and reduces procrastination by making study sessions more interactive and collaborative."
            },
            {
              hackathon: "Geese Hacks",
              projectName: "NavigAIt",
              awardTitle: "Best Use of API",
              teamMembers: ["Derrick Ha"],
              repoLink: "https://lnkd.in/gqG8w4JT",
              devpostLink: "https://lnkd.in/gCqk9cx2",
              description: "NavigAIt is an AI-powered onboarding assistant that streamlines training by analyzing user input via GCP APIs. It provides real-time guidance through voice interaction, reducing onboarding time and improving efficiency. Built with React, Next.js, Node.js, and GCP services."
            }
          ]
    }
]
