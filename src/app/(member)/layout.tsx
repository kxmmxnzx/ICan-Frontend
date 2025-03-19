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
      <div className="flex h-dvh w-screen flex-col overflow-hidden bg-gs100 will-change-scroll md:flex-row">
        <Navbar />
        <div className="relative left-1/2 flex size-full max-w-screen-xl flex-1 -translate-x-1/2 flex-col gap-4 overflow-auto overscroll-contain p-4 md:max-h-[1000px] md:gap-8 md:p-10">
          {children}
        </div>
        <NavbarMobile />
        {modal}
      </div>
    </NavbarProvider>
  );
}
