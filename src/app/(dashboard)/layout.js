export const metadata = {
  title: "Beauty Queen || Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <header className="h-10 bg-red-500 text-base-100">
        Dashboard header
      </header>

      <main className="min-h-[80vh]">{children}</main>

      <footer className="bg-accent">
        <p className="text-center">Footer</p>
      </footer>
    </>
  );
}
