import React from "react";
import {
  ReabastecimientoLayout,
  DashboardContent,
  OportunidadesContent,
} from "@/components/vemio-dashboard";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <ReabastecimientoLayout
        dashboardContent={<DashboardContent />}
        oportunidadesContent={<OportunidadesContent />}
      />
    </div>
  );
}

