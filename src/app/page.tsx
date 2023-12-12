'use client'
import React from "react";
import Header from "./components/header";
import LoginForm from "./components/form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <LoginForm />
      </main>
    </>
  );
}
