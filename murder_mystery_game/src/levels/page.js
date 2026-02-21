import Link from "next/link";

export default function Levels() {
  const stories = [
    { id: 1, title: "Story 1", description: "Short description ..." },
    { id: 2, title: "Story 2", description: "Short description ..." },
    { id: 3, title: "Story 3", description: "Short description ..." },
    { id: 4, title: "Story 4", description: "Short description ..." },
  ];

  return (
    <div className="size-full bg-white p-8">
        <Link href="/">
            <button 
                className="text-black hover:text-gray-600 mb-8"
            >
                Back to Main Menu
            </button>
        </Link>
      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col">
            <button className="bg-gray-300 hover:bg-gray-400 transition-colors rounded-3xl p-16 flex items-center justify-center mb-3">
              <span className="text-5xl text-black">{story.title}</span>
            </button>
            <p className="text-black text-center">{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}