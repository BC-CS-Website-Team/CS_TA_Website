export interface TimeSlot {
    start: number;
    end: number;
}

export interface Link {
    0: string; // Label (e.g., "Slack")
    1: string; // URL
}

export interface Course {
    0: string; // Days (e.g., "M/W/F")
    1: string; // Title
    2: string; // Time string
}

export interface FacultyMember {
    id: string;
    name: string;
    image: string;
    email?: string;
    hours?: TimeSlot[][];
    courses?: Course[];
    links?: Link[];
}

export interface TeamMember {
    id: string;
    name: string;
    image: string;
    email: string;
    role: string;
    hours: TimeSlot[][];
    courses?: Course[];
    links?: Link[];
}

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  profile_picture: string | null;
  is_active: boolean;
  is_superuser: boolean;
  created_at: string;
  roles: Role[];
}
