import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import api from "@/lib/api";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] =
    useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/auth/profile")
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        navigate({
          to: "/login",
        });
      });
  }, [navigate]);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}