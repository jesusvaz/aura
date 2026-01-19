// "use4 client"
// import { Bad_Script } from "next/font/google";
import { treatments } from "@/data/treatments";
import { TreatmentPage } from "@/components/TreatmentPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ treatment: string }>;
};

// const badScript = Bad_Script({
//   subsets: ["latin"],
//   weight: "400",
// });

export default async function Page({ params }: Props) {
  const { treatment } = await params;

  const data = treatments.find((t) => t.slug === treatment);

  if (!data) return notFound();

  return (
    <TreatmentPage
    
      title={data.title}
      image={data.image}
      description={data.description}
    />
  );
}

