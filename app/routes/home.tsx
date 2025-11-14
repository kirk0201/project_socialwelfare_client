import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { RootLayout } from "../layouts/RootLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <RootLayout>
      <Welcome />
    </RootLayout>
  );
}
