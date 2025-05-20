import APP_NAME from '../constants/AppName';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';

export default function Home() {
  const dependencies = [
    { name: "React Router", version: "7.4.0", description: "Routage pour l'application" },
    { name: "TailwindCSS", version: "4.0.15", description: "Framework CSS utilitaire" },
    { name: "Framer Motion", version: "12.5.0", description: "Animations et transitions" },
    { name: "Axios", version: "1.8.4", description: "Client HTTP pour les requêtes API" },
    { name: "React Icons", version: "5.5.0", description: "Bibliothèque d'icônes" },
    { name: "Dotenv", version: "16.4.7", description: "Gestion des variables d'environnement" },
    { name: "Js Cookie", version: "3.0.6", description: "Gestion des cookies" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 p-4">
      <div className="max-w-4xl w-full px-8 py-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-20">
        <div className="text-center mb-12">

          <h1 className="text-2xl md:text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 mb-2">
            {APP_NAME}
          </h1>
          
          <div className="flex justify-center gap-5 mt-6">
            <FaReact className="text-4xl text-blue-500" />
            <SiTypescript className="text-4xl text-blue-700" />
            <SiVite className="text-4xl text-yellow-500" />
            <SiTailwindcss className="text-4xl text-teal-500" />
          </div>
          
          <h2 className="text-xl text-indigo-800 mt-4">
            Application React (TSX) avec Vite
          </h2>

        </div>
        
        <div className="mt-8 text-center text-indigo-900">
          <h2 className="text-2xl font-semibold mb-6">STARTER PACK</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white bg-opacity-50 rounded-lg overflow-hidden">
              <thead className="bg-indigo-500 text-white uppercase">
                <tr>
                  <th className="py-3 px-4 text-center">Bibliothèque</th>
                  <th className="py-3 px-4 text-center">Version</th>
                  <th className="py-3 px-4 text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                {dependencies.map((dep, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-indigo-50 bg-opacity-50" : "bg-white bg-opacity-50"}>
                    <td className="py-2 px-4 border-t border-indigo-100">{dep.name}</td>
                    <td className="py-2 px-4 border-t border-indigo-100">{dep.version}</td>
                    <td className="py-2 px-4 border-t border-indigo-100">{dep.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}