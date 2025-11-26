"use client";
import React from "react";
import { DollarLineIcon, BoxIconLine, AlertIcon } from "@/icons";

interface OportunidadCard {
  id: number;
  tipo: string;
  potencialTotal: number;
  color: "green" | "orange" | "red";
}

const OportunidadesContent: React.FC = () => {
  // Mock data - replace with real data
  const oportunidades: OportunidadCard[] = [
    {
      id: 1,
      tipo: "Venta Incremental",
      potencialTotal: 125000,
      color: "green",
    },
    {
      id: 2,
      tipo: "Riesgo de Agotados",
      potencialTotal: 95000,
      color: "orange",
    },
    {
      id: 3,
      tipo: "Riesgo de Caducidad",
      potencialTotal: 55000,
      color: "red",
    },
  ];

  const totalPotencial = oportunidades.reduce(
    (sum, item) => sum + item.potencialTotal,
    0
  );

  const getCardStyles = (color: "green" | "orange" | "red") => {
    switch (color) {
      case "green":
        return {
          border: "border-success-200 dark:border-success-800",
          bg: "bg-success-50/50 dark:bg-success-500/10",
          text: "text-success-700 dark:text-success-400",
          iconBg: "bg-success-100 dark:bg-success-500/20",
        };
      case "orange":
        return {
          border: "border-warning-200 dark:border-warning-800",
          bg: "bg-warning-50/50 dark:bg-warning-500/10",
          text: "text-warning-700 dark:text-warning-400",
          iconBg: "bg-warning-100 dark:bg-warning-500/20",
        };
      case "red":
        return {
          border: "border-error-200 dark:border-error-800",
          bg: "bg-error-50/50 dark:bg-error-500/10",
          text: "text-error-700 dark:text-error-400",
          iconBg: "bg-error-100 dark:bg-error-500/20",
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white/90 mb-1">
            Oportunidades
          </h3>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Potencial total ${totalPotencial.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Big Opportunity Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {oportunidades.map((oportunidad) => {
          const styles = getCardStyles(oportunidad.color);
          return (
            <div
              key={oportunidad.id}
              className={`rounded-2xl border-2 ${styles.border} ${styles.bg} p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`flex items-center justify-center w-10 h-10 ${styles.iconBg} rounded-lg flex-shrink-0`}>
                  <AlertIcon className={`w-5 h-5 ${styles.text}`} />
                </div>
                <h2 className={`text-2xl font-bold ${styles.text}`}>
                  {oportunidad.tipo}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Potencial total
              </p>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white/90">
                ${oportunidad.potencialTotal.toLocaleString()}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OportunidadesContent;
