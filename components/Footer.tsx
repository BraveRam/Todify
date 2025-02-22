import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-sm mb-20 w-full flex flex-col items-center text-center">
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <span className="font-bold">|</span>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
      </div>
      <p className="mt-3 font-extrabold">&copy; {new Date().getFullYear()} Todify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;