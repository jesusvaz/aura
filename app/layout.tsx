import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { treatments } from "@/data/treatments";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="bg-pink-600 text-white p-4">
          <nav className="flex flex-wrap gap-4 justify-center font-semibold">
            <Link href="/">Inicio</Link>
            {treatments.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`}>
                {t.title}
              </Link>
            ))}
          </nav>
        </header>

        {children}

        <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
          © 2026 Aura · Todos los derechos reservados
        </footer>
      </body>
    </html>
  );
}




// import type { ReactNode } from "react";
// import "./globals.css";
// import Link from "next/link";
// import { treatments } from "@/data/treatments"
// export default function RootLayout({ children }) {
//   return (
//     <html lang="es">
//       <body>
//         <header className="bg-pink-600 text-white p-4">
//           <nav className="flex flex-wrap gap-4 justify-center font-semibold">
//             <Link href="/">Inicio</Link>
//             {treatments.map((t) => (
//               <Link key={t.slug} href={`/${t.slug}`}>
//                 {t.title}
//               </Link>
//             ))}
//           </nav>
//         </header>
//         {children}
//         <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500">
//           © 2026 Aura · Todos los derechos reservados
//         </footer>
//       </body>
//     </html >
//   );
// }