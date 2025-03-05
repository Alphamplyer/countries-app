import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries App - Country Page" },
    { name: "description", content: "Learn more about the country" },
  ];
}

export default function Country() {
  return <h1>Country Page</h1>;
}
