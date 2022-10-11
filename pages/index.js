import Head from "next/head";
import HomePage from "../components/HomePage";
import BestSpecialties from "../components/Layout/BestSpecialties";
import Samples from "../components/Layout/Samples";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Samples />
      <BestSpecialties />
    </div>
  );
}
