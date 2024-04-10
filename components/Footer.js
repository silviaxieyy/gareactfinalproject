import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-neutral-100">
      <div className='flex flex-row h-10 bg-neutral-100'>
        <Link href="/privite-policy" className="underline ml-20">
          Privite Policy
        </Link>
        <Link href="/terms-conditions" className="underline ml-20">
          Terms and conditions
        </Link>
      </div>
      <div className="flex justify-left ml-20">
        <p>Copyright © 2024 Superfit. All rights reserved</p>
      </div>
    </div>
  );
}
