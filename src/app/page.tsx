import { LinkButton } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-300 justify-center items-center">
      <div className=" max-w-96 w-full bg-slate-50 min-h-80 p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <header className="flex flex-col justify-center items-center gap-2">
          <h1 className=" text-xl font-bold text-slate-800">Sarath TK</h1>
          <h2 className="text-md font-semibold text-slate-600">
            Full-Stack Developer
          </h2>
          <p className=" text-sm text-slate-700 text-center">
            Building polished software and web experiences. Crafting interfaces.
          </p>
        </header>

        <main className="flex flex-col items-center gap-6">
          <LinkButton
            className=" w-full rounded-3xl"
            size="sm"
            href="https://github.com/saratonite"
          >
            Github
          </LinkButton>
          <LinkButton
            className=" w-full rounded-3xl"
            size="sm"
            href="https://saratonite.github.io/resume?src=main.link"
          >
            Resume
          </LinkButton>

          <LinkButton
            className=" w-full rounded-3xl"
            size="sm"
            href="https://saratonite.github.io/resume?src=main.link"
          >
            Mail
          </LinkButton>
        </main>
      </div>
    </div>
  );
}
