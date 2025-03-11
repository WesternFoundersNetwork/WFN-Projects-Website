import {
    team2024_2025, executives2024_2025,
    team2023_2024, executives2023_2024,
} from "@/constants/team-data";
import { TeamYear } from "@/types";


// DATA SHEET FOR THE HOME PAGE (2024-2025....)
//    AND domain/teams (assuming you provided a slug for the teams)

// see more about slug in @/types/index

// Notes in case u fuck up
    // also make sure to add executives array, even if it is empty, because the code still expects something.
    // do not add null or undefined, just add an empty array
    // example: export const executives2023_2024 = []

export const years: TeamYear[] = [
    {
        year: "2024-2025",
        teams: team2024_2025,
        executives: executives2024_2025
    },
    {
        year: "2023-2024",
        teams: team2023_2024,
        executives: executives2023_2024,
    },
]