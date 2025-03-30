import { Team, TeamMember } from "@/types";

// THIS LIST ACTUALLY CREATES THE NEW PROJECT TEAM PAGE AT domain/teams/[your-team-slug]
// AND REMEMBER TO EXPORT YOUR NEW TEAM OBJECT TO allTeamData TO GENERATE
// export default const allTeamData: Team[] = [...team2024_2025, ...team2023_2024]

// see more about slug in @/types/index

` if you don't export your team object at the end of the file, it won't register on /teams and send you to the not found page when you go to /teams/firstName-lastName-year`

export const team2024_2025: Team[] = [
  {
    slug: "ethan-rong-2025",
    name: "Ethan Rong 2025",
    image: "/teams/2025/ethan-rong/coverPage.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    vp: {
      name: "Ethan Rong",
      role: "VP of Projects",
      bio: "Alex is a senior majoring in Computer Science with a passion for user-centric design. With internship experience at top tech companies, Alex brings industry insights to lead our product development initiatives.",
      image: "/teams/2025/ethan-rong/ethanR.jpg"
    },
    directors: [
      {
        name: "Brianna Xiao",
        role: "Director of Projects 2024-2025",
        bio: "Jamie brings creative flair to the team with a background in graphic design and human-computer interaction. Their designs have won multiple awards in student competitions.",
        image: "/teams/2025/ethan-rong/brianna-xiao.jpg"
      },
      {
        name: "Jasmine Zhu",
        role: "Director of Projects 2024-2025",
        bio: "Riley is a coding prodigy who loves turning innovative ideas into functional prototypes. They've contributed to several open-source projects and organized coding bootcamps for beginners.",
        image: "/teams/2025/ethan-rong/jasmine-zhu.jpg"
      },
      {
        name: "Kevin Li",
        role: "Director of Projects 2024-2025",
        bio: "Taylor has a keen eye for market trends and user needs. Their strategic insights have been crucial in shaping our product roadmap and feature prioritization.",
        image: "/teams/2025/ethan-rong/kevin-li.jpg"
      },
      {
        name: "Satwika Pujari",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/ethan-rong/satwika-pujari.jpg"
      },
      {
        name: "Tudor Filimon",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/ethan-rong/tudor-filimon.jpg"
      }
    ],
    project: {
      name: "Umami App",
      description: "Umami is a mobile application designed to enhance the cooking experience by integrating AI-powered recipe generation with a social community. The app allows users to generate recipes, share their creations, engage with other home chefs, and explore a personalized feed of culinary inspiration.",
      goals: [
        "Develop a seamless AI-driven recipe generation feature",
        "Enable users to engage with recipes through likes, comments, and shares",
        "Integrate a user-friendly interface for posting and saving recipes",
        "Create an intuitive swipe-based interaction for recipe selection"
      ],
      timeline: [
        {
          date: "March 5th - 12th",
          title: "Initial Development Phase",
          description: "Establish project branding, color scheme, and development environment setup"
        },
        {
          date: "March 18th - 22nd",
          title: "Posting System Implementation",
          description: "Develop the ability for users to post recipes with captions and images"
        },
        {
          date: "March 23rd - 29th",
          title: "Home Page and Messaging",
          description: "Develop the explore page and implement messaging functionality"
        }
      ],
      images: [
        "/projects/campusconnect-mockup.jpg",
        "/projects/campusconnect-features.jpg",
        "/projects/campusconnect-dashboard.jpg",
        "/projects/campusconnect-events.jpg"
      ],
      socialImages: [
        "/social/team-meeting.jpg",
        "/social/design-workshop.jpg",
        "/social/coding-session.jpg",
        "/social/user-testing.jpg",
        "/social/team-celebration.jpg",
        "/social/presentation.jpg"
      ]
    }
  },

  {
    slug: "ethan-zhao-2025",
    name: "Ethan Zhao 2025",
    image: "/teams/2025/ethan-zhao/coverPage.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    vp: {
      name: "Ethan Zhao",
      role: "VP of Projects",
      bio: "Alex is a senior majoring in Computer Science with a passion for user-centric design. With internship experience at top tech companies, Alex brings industry insights to lead our product development initiatives.",
      image: "/teams/2025/ethan-zhao/ethanZ.jpg"
    },
    directors: [
      {
        name: "Derrick Ha",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/ethan-zhao/derrick-ha.jpg"
      },
      {
        name: "Emily Ruan",
        role: "Director of Projects 2024-2025",
        bio: "Taylor has a keen eye for market trends and user needs. Their strategic insights have been crucial in shaping our product roadmap and feature prioritization.",
        image: "/teams/2025/ethan-zhao/emily-ruan.jpg"
      },
      {
        name: "Felix Jeong",
        role: "Director of Projects 2024-2025",
        bio: "Riley is a coding prodigy who loves turning innovative ideas into functional prototypes. They've contributed to several open-source projects and organized coding bootcamps for beginners.",
        image: "/teams/2025/ethan-zhao/felix-jeong.jpg"
      },
      {
        name: "Shahar Philipp Mayorov",
        role: "Director of Projects 2024-2025",
        bio: "Jamie brings creative flair to the team with a background in graphic design and human-computer interaction. Their designs have won multiple awards in student competitions.",
        image: "/teams/2025/ethan-zhao/shahar-philipp-mayorov.jpg"
      },
      {
        name: "Zanan Virani",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/ethan-zhao/zanan-virani.jpg"
      }
    ],
    project: {
      name: "CampusConnect App",
      description: "CampusConnect is a mobile application designed to enhance student life by providing a centralized platform for campus events, resources, and community engagement. Our app aims to bridge the gap between various student activities, academic resources, and campus services, creating a more connected and informed student body.",
      goals: [
        "Increase student participation in campus activities by 50%",
        "Streamline access to university resources and information",
        "Foster a stronger sense of community among students",
        "Implement AI-driven personalized recommendations for events and resources",
        "Achieve a 4.5+ star rating on app stores within the first six months of launch"
      ],
      timeline: [
        {
          date: "September 2023",
          title: "Project Kickoff",
          description: "Initial brainstorming and project planning sessions"
        },
        {
          date: "November 2023",
          title: "Design Phase Completion",
          description: "Finalization of UI/UX designs and user flow"
        },
        {
          date: "January 2024",
          title: "Alpha Testing",
          description: "Internal testing of core features and functionality"
        },
        {
          date: "March 2024",
          title: "Beta Launch",
          description: "Limited release to select group of students for feedback"
        },
        {
          date: "August 2024",
          title: "Full Release",
          description: "Official launch of CampusConnect for the Fall 2024 semester"
        }
      ],
      images: [
        "/projects/campusconnect-mockup.jpg",
        "/projects/campusconnect-features.jpg",
        "/projects/campusconnect-dashboard.jpg",
        "/projects/campusconnect-events.jpg"
      ],
      socialImages: [
        "/social/team-meeting.jpg",
        "/social/design-workshop.jpg",
        "/social/coding-session.jpg",
        "/social/user-testing.jpg",
        "/social/team-celebration.jpg",
        "/social/presentation.jpg"
      ]
    }
  },

  {
    slug: "nicholas-lam-2025",
    name: "Nicholas Lam 2025",
    image: "/teams/2025/nicholas-Lam/coverPage.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    vp: {
      name: "Nicholas Lam",
      role: "VP of Projects",
      bio: "Alex is a senior majoring in Computer Science with a passion for user-centric design. With internship experience at top tech companies, Alex brings industry insights to lead our product development initiatives.",
      image: "/teams/2025/nicholas-lam/nick.jpg"
    },
    directors: [
      {
        name: "Clara Chen",
        role: "Director of Projects 2024-2025",
        bio: "Jamie brings creative flair to the team with a background in graphic design and human-computer interaction. Their designs have won multiple awards in student competitions.",
        image: "/teams/2025/nicholas-lam/clara-chen.jpg"
      },
      {
        name: "Daniel Tan",
        role: "Director of Projects 2024-2025",
        bio: "Riley is a coding prodigy who loves turning innovative ideas into functional prototypes. They've contributed to several open-source projects and organized coding bootcamps for beginners.",
        image: "/teams/2025/nicholas-lam/daniel-tan.jpg"
      },
      {
        name: "Kathy Dong",
        role: "Director of Projects 2024-2025",
        bio: "Taylor has a keen eye for market trends and user needs. Their strategic insights have been crucial in shaping our product roadmap and feature prioritization.",
        image: "/teams/2025/nicholas-lam/kathy-dong.jpg"
      },
      {
        name: "Sarina Cheng",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/nicholas-lam/sarina-cheng.jpg"
      },
      {
        name: "Theo Badea",
        role: "Director of Projects 2024-2025",
        bio: "Jordan ensures that our products meet the highest standards of quality and user satisfaction. Their meticulous approach to testing has significantly improved our product reliability.",
        image: "/teams/2025/nicholas-lam/theo-badea.jpg"
      }
    ],
    project: {
      name: "CampusConnect App",
      description: "CampusConnect is a mobile application designed to enhance student life by providing a centralized platform for campus events, resources, and community engagement. Our app aims to bridge the gap between various student activities, academic resources, and campus services, creating a more connected and informed student body.",
      goals: [
        "Increase student participation in campus activities by 50%",
        "Streamline access to university resources and information",
        "Foster a stronger sense of community among students",
        "Implement AI-driven personalized recommendations for events and resources",
        "Achieve a 4.5+ star rating on app stores within the first six months of launch"
      ],
      timeline: [
        {
          date: "September 2023",
          title: "Project Kickoff",
          description: "Initial brainstorming and project planning sessions"
        },
        {
          date: "November 2023",
          title: "Design Phase Completion",
          description: "Finalization of UI/UX designs and user flow"
        },
        {
          date: "January 2024",
          title: "Alpha Testing",
          description: "Internal testing of core features and functionality"
        },
        {
          date: "March 2024",
          title: "Beta Launch",
          description: "Limited release to select group of students for feedback"
        },
        {
          date: "August 2024",
          title: "Full Release",
          description: "Official launch of CampusConnect for the Fall 2024 semester"
        }
      ],
      images: [
        "/projects/campusconnect-mockup.jpg",
        "/projects/campusconnect-features.jpg",
        "/projects/campusconnect-dashboard.jpg",
        "/projects/campusconnect-events.jpg"
      ],
      socialImages: [
        "/social/team-meeting.jpg",
        "/social/design-workshop.jpg",
        "/social/coding-session.jpg",
        "/social/user-testing.jpg",
        "/social/team-celebration.jpg",
        "/social/presentation.jpg"
      ]
    }
  }
]

export const executives2024_2025: TeamMember[] = [
  {
    name: "Stephanie Sheng",
    role: "Project Lead",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/teams/2025/stephanie-sheng/stephanie.png"
  },
  {
    name: "Eli Bensimon 2025",
    role: "Advisor",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/teams/2025/eli-bensimon/eli.jpg"
  }
]


export const executives2023_2024: TeamMember[] = [
]
export const team2023_2024: Team[] = [
  {
    name: "Ethan Rong 2024",
    image: "/teams/2024/ethan-rong/coverPage.jpg",
    vp: {
      name: "Ethan Rong",
      role: "VP of Projects",
      bio: "Alex is a senior majoring in Computer Science with a passion for user-centric design. With internship experience at top tech companies, Alex brings industry insights to lead our product development initiatives.",
      image: "/teams/2023/ethan-rong/ethanR.jpg"
    },
    directors: [
      {
        name: "Ethan Zhao",
        role: "Director of Projects 2023-2024",
      },
      {
        name: "Kathy Yao",
        role: "Director of Projects 2023-2024",
      },
      {
        name: "Ken Sue-A-Quan",
        role: "Director of Projects 2023-2024",
      },
      {
        name: "Stephanie Li",
        role: "Director of Projects 2023-2024",
      }
    ],
    /*
    project: {
      name: "Harbour Link",
      description: `
        Have you ever forgotten meeting someone before? With HarbourLink you won't need to worry!

        HarbourLink makes networking seamless by allowing you to capture contact information instantly through QR codes. With AI-powered facial recognition and a smart chat assistant, you can easily recall details about anyone you’ve met. Whether it's their name, where you met, or past conversations, HarbourLink ensures your connections are always at your fingertips—helping you build and maintain meaningful relationships effortlessly.
      `,
      images: [
        "/teams/2024/ethan-rong/project/pic1.jpg",
        "/teams/2024/ethan-rong/project/pic2.jpg",
        "/teams/2024/ethan-rong/project/pic3.jpg",  
      ],
      repoLink: "https://github.com/ethan-rng/contactAppV2/tree/main"
    }
    */
  },

  {
    name: "Nicholas Lam 2023-2024",
    image: "/teams/2024/nicholas-lam/coverPage.jpg",

    vp: {
      name: "Nicholas Lam",
      role: "VP of Projects",
      bio: "Nicholas is a strategic thinker with a passion for technology-driven solutions. With experience in leading teams and product development, he ensures HarbourLink delivers a seamless networking experience.",
      image: "/teams/2025/nick-lam/nicholas-lam.jpg"
    },
    directors: [
      {
        name: "Ethan Won",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Shaun Ahuja",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Stephanie Sheng",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Yesol Lee (Alison Lee)",
        role: "Director of Projects 2023-2024"
      }
    ],
  },

  {
    name: "Thomas Michalski 2023-2024",
    image: "/teams/2024/thomas-michalski/coverPage.jpg",
    vp: {
      name: "Thomas Michalski",
      role: "VP of Projects",
      bio: "Nicholas is a strategic thinker with a passion for technology-driven solutions. With experience in leading teams and product development, he ensures HarbourLink delivers a seamless networking experience.",
      image: "/teams/2025/thomas-michalski/thomasM.jpg"
    },
    directors: [
      {
        name: "Kai Antoine",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Hailey Mitsubata",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Athul Charanthara",
        role: "Director of Projects 2023-2024"
      },
      {
        name: "Sachi Sisodia",
        role: "Director of Projects 2023-2024"
      }      
    ],
  }

]


const allTeamData: Team[] = [...team2024_2025, ...team2023_2024]
export default allTeamData