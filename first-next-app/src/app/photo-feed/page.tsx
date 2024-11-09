import Link from "next/link";
import wonders from "./wander";
import Image from "next/image";
export default function PhotoFeed() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full h-80 object-cover aspect-sqare rounded border-black bg-indigo-500 shadow-lg shadow-indigo-500/50"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
