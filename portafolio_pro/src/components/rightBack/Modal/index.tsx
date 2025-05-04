type Project = {
  imgProject: string;
  name: string;
  date: string;
  description: string;
  url: string;
};

type ModalProps = {
  projects: Project[];
  onClose: () => void;
  label: string;
};

export default function Modal({ projects, onClose, label }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-neutral-800 max-h-[80vh] overflow-y-auto rounded-xl p-6 w-full max-w-6xl shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">×</button>
        <h2 className="hero-title text-2xl sm:text-2xl lg:text-2xl font-semibold mb-6 text-white">{label}</h2>

        {/* Scroll horizontal */}
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {projects.map((project, i) => (
            <div
              key={i}
              className="min-w-[300px] sm:min-w-[350px] flex-shrink-0 border border-neutral-600 rounded-lg p-4 bg-neutral-900"
            >
              <img
                src={project.imgProject}
                alt={project.name}
                className="rounded-md mb-2  w-96"
              />
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="text-sm text-neutral-400">{project.date}</p>
              <p className="text-sm text-neutral-300">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
             className="button-profile mt-4 text-gray-900 px-6 py-3 w-28 rounded-full  transition duration-300 flex items-center space-x-2 "
              >
                Ver  →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
