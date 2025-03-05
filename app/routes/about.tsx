import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries App - About Page" },
    { name: "description", content: "Learn more about Countries App." },
  ];
}

export default function About() {
  return <h1>About Page</h1>;
}
