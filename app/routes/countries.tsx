import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export async function clientLoader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries App - Countries Page" },
    { name: "description", content: "Search the countries." },
  ];
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const filteredCountries = loaderData.filter((country: any) => {
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div>
      <h2>Countries</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredCountries.map((country: any, key: any) => (
          <li key={key}>
            <Link to={`/countries/${country.name.common}`}>
              {country.name.common}
            </Link>
            <div>
              Region: {country.region} | Population {country.population}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
