import { treatments } from "@/data/treatments";
import { TreatmentPage } from "@/components/TreatmentPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ treatment: string }>;
};

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


// // viene del json file que contiene los tratamientos
// // de modo que teaments contiene la informacion sobre los tratamientos
// import { treatments } from "@/data/treatments";
// import { TreatmentPage } from "@/components/TreatmentPage";
// import { notFound } from "next/navigation";


// export default function Treatment({ params }) {
//     // encontrar un tratamiento unico
//     console.log("Contenido:",params)
//     const treatment = treatments.find((t) => t.slug === params.treatment);

//     //este viene de import { notFound } from "next/navigation";
//     if (!treatment) return notFound();

//     return (
//         <TreatmentPage
//             title={treatment.title}
//             image={treatment.image}
//             description={treatment.description}
//         />
//     );
// }