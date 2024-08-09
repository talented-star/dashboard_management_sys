import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div className="p-10">
      <Link href={"/subManage"} className="block hover:underline">Subscription Management</Link>
      <Link href={"/integration"} className="block hover:underline">Integration</Link>
      <Link href={"/analytics"} className="block hover:underline">Analytics</Link>
      <Link href={"/userManage"} className="block hover:underline">User Management</Link>
    </div>
  )
};