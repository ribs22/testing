import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-200">
      <div className="w-10/12 mx-auto py-10">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
