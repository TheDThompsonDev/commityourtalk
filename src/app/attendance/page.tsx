import MainLayout from "@/components/layout/MainLayout";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import AttendanceClient from "./AttendanceClient";

export default async function AttendancePage() {
  const { user } = await withAuth();

  if (!user) {
    const signInUrl = await getSignInUrl();
    redirect(signInUrl);
  }

  return (
    <MainLayout user={user}>
      <AttendanceClient user={user} />
    </MainLayout>
  );
}
