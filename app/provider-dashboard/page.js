"use client";
import Cards from "./(dashboard)/cards";
import GraphSection from "./(dashboard)/graph";
import TableSection from "./(dashboard)/table";

export default function Home() {
  return (
    <div className="py-4 mx-2  lg:mx-7 ">
      <Cards />
      <GraphSection />
      <TableSection />
    </div>
  );
}
