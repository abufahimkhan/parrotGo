import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer: React.FC = ({}: Props) => {
  return (
    <footer className="hidden lg:block h-20 w-full 
    border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto 
      flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/bd.svg"
            alt="Bangladesh"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Bangladesh
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Bangladesh"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japan
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/de.svg"
            alt="Bangladesh"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Germany
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="Bangladesh"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          France
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            alt="Bangladesh"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italy
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
