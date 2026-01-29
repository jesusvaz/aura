import { Bad_Script } from "next/font/google";

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
});

type TreatmentPageProps = {
  title: string;
  image: string;
  description: string;
};

export function TreatmentPage({
  title,
  image,
  description,
}: TreatmentPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className={`text-5xl text-pink-500 font-bold ${badScript.className}`}>
        {title}
      </h1>

      <img
        src={image}
        alt={title}
        className="w-full max-w-md rounded-2xl shadow-lg my-6"
      />

      <p className="text-lg text-gray-600 text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
}

