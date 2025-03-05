import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries App - Countries Page" },
    { name: "description", content: "Search the countries." },
  ];
}

export default function Countries() {
  return <h1>Countries Page</h1>;
}
