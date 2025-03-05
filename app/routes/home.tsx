import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries App - Home Page" },
    { name: "description", content: "Welcome to Countries App!" },
  ];
}

export default function Home() {
  return <h1>Home Page</h1>;
}
