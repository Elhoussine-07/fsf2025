import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">À propos de FSF</h3>
            <p className="text-gray-400">
              FSF est le club des étudiants passionnés de l'ENSA d'Agadir, dédié au partage des connaissances et à l'excellence académique.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@ensa-agadir.ac.ma" className="flex items-center text-gray-400 hover:text-white transition">
                <Mail className="h-5 w-5 mr-2" />
                contact@ensa-agadir.ac.ma
              </a>
              <p className="text-gray-400">BP 1136, Agadir, Maroc</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FSF ENSA Agadir. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}