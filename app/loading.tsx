import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading...",
  description: "Page is loading...",
};

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <h1 className="text-xl text-black">Loading...</h1>
    </div>
  );
}
