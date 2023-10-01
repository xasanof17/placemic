import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404! Not Found Page",
  description: "Not Found Page",
};

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-xl font-medium text-black">404! Not Found Page</h1>
      <Link href="/" className="text-lg font-normal">
        Home
      </Link>
    </div>
  );
}
