import Link from "next/link";
import { CircleQuestionMark } from "lucide-react";
import ROUTES from "@/constants/routes";
import TagCard from "./cards/TagCard";

export const hotQuestions = [
  {
    id: 1,
    title: "How do I correctly configure dynamic routes in Next.js app router?",
  },
  {
    id: 2,
    title:
      "What is the recommended way to fetch data in Next.js server components?",
  },
  {
    id: 3,
    title: "How can I optimize images with the Next.js Image component?",
  },
  {
    id: 4,
    title: "How do I handle authentication in a Next.js app using middleware?",
  },
  {
    id: 5,
    title:
      "What is the best way to deploy a Next.js app to Vercel and set environment variables?",
  },
];

export const popularTags = [
  {
    id: 1,
    tagTitle: "Next.JS",
    questions: 18493,
  },
  {
    id: 2,
    tagTitle: "Typescript",
    questions: 732,
  },
  {
    id: 3,
    tagTitle: "Python",
    questions: 392,
  },
  {
    id: 4,
    tagTitle: "Rust",
    questions: 223,
  },
];

const RightNavbar = () => {
  return (
    <section className="w-[350px] max-xl:hidden h-svh sticky right-0 top-0 overflow-y-auto flex flex-col justify-start border-l pl-6 gap-24">
      <div className="flex flex-col gap-8">
        <h3>Hot Questions</h3>
        <div className="flex flex-col gap-4">
          {hotQuestions.map(({ id, title }) => (
            <Link
              key={id}
              href={ROUTES.QUESTIONS(id)}
              className="flex justify-between items-center gap-4 bg-blue-50 rounded-lg px-4 py-2"
            >
              <CircleQuestionMark className="dark:text-black" />
              <p className="text-xs dark:text-black">{title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3>Popular Tags</h3>
        <div className="flex flex-col gap-4">
          {popularTags.map(({ id, tagTitle, questions }) => (
            <TagCard
              key={id}
              id={id}
              name={tagTitle}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightNavbar;
