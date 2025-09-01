import Link from "next/link";
import { FC, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
  news: ReactNode;
  analytics: ReactNode;
}

const DashboardLayout: FC<IChildren> = ({ children, analytics, news }) => {
  return (
    <>
    <div className="bg-gray-300 ">
        <h3 className="text-center">Dashboard</h3>
        <div className="flex gap-5">
            <div className="flex-1 bg-amber-300">{analytics}</div>
            <div className="flex-1 bg-amber-400">{news}</div>

        </div>
    </div>
      <div className="flex ">
        <aside className="w-52 p-5 bg-blue-950">
          <h3 className="text-xl">Dashboard Menu</h3>
          <ul className="underline">
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/settings"}>Setting</Link>
            </li>
            <li>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
          </ul>
        </aside>

        <main className="grow">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
