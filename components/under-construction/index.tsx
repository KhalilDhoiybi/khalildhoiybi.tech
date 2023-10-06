import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

/**
 * UnderConstruction component
 * This component is used to display a placeholder font for pages that are under construction
 */
const UnderConstruction = () => {
  return (
    <section className="container space-y-8 py-4">
      <h1 className="font-dela text-xl  md:text-3xl">🚧 Pardon Our Dust! 🚧</h1>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src="/images/under-construction.jpg"
          className="rounded-md object-cover"
          alt="under-construction"
          fill
        />
      </AspectRatio>
      <h2 className="font-serif font-bold text-lg">
        Welcome to the Future Home of Awesomeness!
      </h2>
      <div className="font-sans space-y-4">
        <p>
          Hey there, intrepid explorer! You&apos;ve stumbled upon a section of
          our digital realm that&apos;s currently undergoing a cosmic makeover
          🌟.
        </p>
        <p>
          While we&apos;re putting on the finishing touches, I invite you to
          check out the other sections of my site.
        </p>
        <p>Cheers to what&apos;s to come! 🌌🚀.</p>
      </div>
    </section>
  );
};

export default UnderConstruction;
