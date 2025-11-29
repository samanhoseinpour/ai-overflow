import {
  House,
  UsersRound,
  UserRound,
  Images,
  CalendarSync,
  Tags,
  FileQuestionMark,
} from "lucide-react";

export const navLinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    id: 2,
    label: "Community",
    href: "/community",
    icon: UserRound,
  },
  {
    id: 3,
    label: "Collections",
    href: "/collections",
    icon: Images,
  },
  {
    id: 4,
    label: "Find Jobs",
    href: "/find-jobs",
    icon: CalendarSync,
  },
  {
    id: 5,
    label: "Tags",
    href: "/tags",
    icon: Tags,
  },
  {
    id: 6,
    label: "Communities",
    href: "/communities",
    icon: UsersRound,
  },
  {
    id: 7,
    label: "Ask a Question",
    href: "/ask-questions",
    icon: FileQuestionMark,
  },
];
