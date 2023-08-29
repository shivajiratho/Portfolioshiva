import Image from "next/image";
import Link from "next/link";
import NavLogo from "../../public/assets/monk.png";

// global navbar logo
export default function NavbarLogoGlobal(): JSX.Element {
  return (
    <Link href="/">
      <Image src={NavLogo} alt="/" className="cursor-pointer w-20" />
    </Link>
  );
}
