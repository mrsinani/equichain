import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="#top" className="flex items-center gap-2.5">
            <span className="relative h-8 w-8 overflow-hidden rounded-lg ring-1 ring-white/15">
              <Image
                src="/equichain.jpg"
                alt="EquiChain"
                fill
                className="object-cover"
                sizes="32px"
              />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              EquiChain
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-400">
            Private Markets. Public Access.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Educational concept prototype.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Made by{" "}
            <span className="font-medium text-slate-300">
              Ingkar Serikpayeva
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Product
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="#solution"
                  className="text-slate-300 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-slate-300 hover:text-white"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#persona"
                  className="text-slate-300 hover:text-white"
                >
                  For investors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Company
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <span className="text-slate-300">About</span>
              </li>
              <li>
                <span className="text-slate-300">Team</span>
              </li>
              <li>
                <span className="text-slate-300">Contact</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Legal
            </h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <span className="text-slate-300">Disclosures</span>
              </li>
              <li>
                <span className="text-slate-300">Terms</span>
              </li>
              <li>
                <span className="text-slate-300">Privacy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-start justify-between gap-2 border-t border-white/5 px-6 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:px-8">
        <p>© {year} EquiChain. All rights reserved.</p>
        <p className="max-w-2xl text-slate-500/90">
          This site is a student concept prototype for educational purposes
          only. It does not offer securities or investment advice.
        </p>
      </div>
    </footer>
  );
}
