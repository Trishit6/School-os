import GuestHeader from "./components/guest-header";
import GuestFooter from "./components/guest-footer";

type Props = {
  children: React.ReactNode;
};

export default function GuestLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <GuestHeader />

      <main className="flex-1">
        {children}
      </main>

      <GuestFooter />
    </div>
  );
}