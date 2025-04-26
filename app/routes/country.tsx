import CountryInfo from "~/components/countryInfo";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subregion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital || "N/A",
    population: loaderData[0]?.population || "N/A",
    flagUrl: loaderData[0]?.flags?.png || "",
  };
  return (
      <CountryInfo
        name={country.name}
        officialName={country.officialName}
        capital={country.capital}
        region={country.region}
        subregion={country.subregion}
        population={country.population}
        flagUrl={country.flagUrl}
      />
  );
}