import Navbar from '@/components/common/navbar/Navbar';
import NavbarMobile from '@/components/common/navbar/NavbarMobile';
import { NavbarProvider } from '@/components/common/NavbarContext';

export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <NavbarProvider>
      <div className="flex h-dvh w-screen flex-col overflow-hidden bg-gs100 md:flex-row">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <div className="relative flex size-full max-w-screen-xl flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 md:left-1/2 md:max-h-[1000px] md:-translate-x-1/2 md:gap-8 md:p-10">
            {children}
          </div>
        </div>
        <NavbarMobile />
        {modal}
      </div>
    </NavbarProvider>
  );
}
