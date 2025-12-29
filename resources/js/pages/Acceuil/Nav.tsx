import { useState } from "react";
import { dashboard, login, register } from "@/routes";
import { SharedData } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import {
  ArrowBigRightDash,
  BookAIcon,
  ClipboardPenLineIcon,
  DoorClosed,
  DoorOpen,
  Home,
  LucideBadgeDollarSign,
  PhoneOutgoingIcon,
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ canRegister = true }: { canRegister?: boolean }) {
  const { auth } = usePage<SharedData>().props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="p-2 text-center text-sm not-has-[nav]:hidden relative">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo/Home */}
          <Link href={'/'}>
            <Home />
          </Link>

          {/* Desktop Menu - caché en dessous de 751px */}
          <span className="hidden md:flex items-center gap-4">
            {auth.user ? (
              <Link
                href={dashboard()}
                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link className="menu-link" href={'/Apropos'}>À propos</Link>
                <Link className="menu-link" href={'contact'}>Contact</Link>
                <Link className="menu-link" href={'tarif'}>Tarifs</Link>
                <Link className="menu-link" href={'creer'}>Créer un livre</Link>
                <Link href={login()} className="menu-link">Connexion</Link>
                {canRegister && <Link href={register()} className="menu-link">Inscription</Link>}
              </>
            )}
          </span>

          {/* Mobile Burger - visible max 750px */}
          <span className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </span>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col items-center gap-2 bg-white dark:bg-[#2C2C2C] rounded-md shadow-lg py-4 w-full absolute left-0">
            {auth.user ? (
              <Link
                href={dashboard()}
                className="menu-link"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link className="menu-link" href={'/Apropos'} onClick={() => setIsOpen(false)}>À propos</Link>
                <Link className="menu-link" href={'contact'} onClick={() => setIsOpen(false)}>Contact</Link>
                <Link className="menu-link" href={'tarif'} onClick={() => setIsOpen(false)}>Tarifs</Link>
                <Link className="menu-link" href={'creer'} onClick={() => setIsOpen(false)}>Créer un livre</Link>
                <Link href={login()} className="menu-link" onClick={() => setIsOpen(false)}>Connexion</Link>
                {canRegister && <Link href={register()} className="menu-link" onClick={() => setIsOpen(false)}>Inscription</Link>}
              </>
            )}
          </div>
        )}
      </header>

    </>
  );
}
