import AddContent from "@/components/AddContent/AddContent";
import ShowContent from "@/components/ShowContent/ShowContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-[300px] w-full h-[920px] bg-white flex flex-col md:flex-row justify-start md:justify-center  gap-5 md:gap-10  p-5 pt-20">
      <ShowContent />
      <AddContent />
    </main>
  );
}
