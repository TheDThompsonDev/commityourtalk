import MainLayout from "@/components/layout/MainLayout";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import AdminSessionsClient from "./AdminSessionsClient";

export default async function AdminSessionsPage() {
  const { user } = await withAuth();

  if (!user) {
    const signInUrl = await getSignInUrl();
    redirect(signInUrl);
  }

  return (
    <MainLayout user={user}>
      <AdminSessionsClient user={user} />
    </MainLayout>
  );
}
