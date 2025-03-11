import TeamMember from "@/components/team-member";

// Type definition for an individual team member
export type TeamMember = {
  name: string;
  role: string;

  image?: string; // for previous teams that i am too lazy to track down
  bio?: string; // for previous teams that i am too lazy to track down
};

// Type definition for a project timeline item
export type ProjectTimelineItem = {
  date: string;
  title: string;
  description: string;
};

// Type definition for a project
export type Project = {
  name: string;
  description: string;
  images: string[];

  repoLink?: string;
  demoLink?: string;

  goals?: string[];
  timeline?: ProjectTimelineItem[];
  socialImages?: string[];
};


// Type definition for a team
export type Team = {
  name: string;
  vp: TeamMember;
  directors: TeamMember[];
  image: string;

  project?: Project;  // too lazy to source everyone's project, so i made this param optional
  slug?: string;  // slug for if we wanna have a seperate page for the team instead of a popup
  description?: string // optional parameter for ppl who want to add description
};

export type TeamYear = {
  year: string;
  teams: Team[];
  executives: TeamMember[];
}

export type Award = {
  hackathon: string;
  projectName: string;
  awardTitle: string;
  teamMembers: string[];

  alumni?: string[]; 
  // if you want to turn on the alumni feature that highlights people on the team 
  // that are alumni, feel free to. i thought it was cheesy but you can add everyone on the
  // team and just highlight alumni. i j only added WFN ppl on the team bc i am lazy

  repoLink?: string;
  devpostLink?: string;
  description: string;
}

export type AwardYear = {
  year: string;
  awards: Award[]
}

