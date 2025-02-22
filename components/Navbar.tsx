"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineAddTask } from "react-icons/md";
import { ModeToggle } from "./features/ModeToggle"
import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const logOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
    
  };

  const { status, data:session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex items-center justify-between mt-2 w-[98%] mx-auto border-2 rounded">
        <div className="flex items-center">
          <MdOutlineAddTask className="text-4xl" />
          {
            session?.user?.name && <h1 className="ml-4 text-2xl font-extrabold">{session.user.name.split(" ")[0]}</h1>
          }
        </div>
        <Menubar>
          <ModeToggle />
          <MenubarMenu>
            <MenubarTrigger>
              <CiMenuFries className="text-[20px] font-extrabold" />
            </MenubarTrigger>
            <MenubarContent>
            <MenubarItem onClick={()=>router.push("/dashboard")}>Home</MenubarItem>
            <MenubarSeparator/>
              <MenubarItem onClick={logOut}>Sign Out</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mt-2 w-[98%] mx-auto border-2 rounded">
      <div>
        <MdOutlineAddTask className="text-4xl" />
      </div>
      <Menubar>
        <ModeToggle />
        <MenubarMenu>
          <MenubarTrigger>
            <CiMenuFries className="text-[20px]" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={()=>signIn("google")} >Roll me In</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;