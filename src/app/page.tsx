import React from "react";
import ReabastecimientoLayout from "@/components/reabastecimiento/ReabastecimientoLayout";
import DashboardContent from "@/components/reabastecimiento/DashboardContent";
import OportunidadesContent from "@/components/reabastecimiento/OportunidadesContent";

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

