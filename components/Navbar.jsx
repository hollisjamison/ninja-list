import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/TSM_Logo.svg.png" height={100} width={100}/>
      </div>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/ninjas">
        Ninja
      </Link>
    </nav>
  );
};

export default Navbar;
