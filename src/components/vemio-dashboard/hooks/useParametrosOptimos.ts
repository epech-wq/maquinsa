"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export interface ParametrosOptimosData {
  dias_inventario_optimo: number;
  dias_inventario_real: number;
  punto_reorden: number; // Objetivo Vemio
  punto_reorden_real: number;
  tamano_pedido_optimo: number;
  tamano_pedido_real: number;
  frecuencia_optima: number;
  frecuencia_real: number;
}

interface UseParametrosOptimosResult {
  data: ParametrosOptimosData | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Hook to fetch optimal parameters data from gonac.tab_parametros_optimos table
 * This hook can be customized to accept filters based on navigation state
 */
export function useParametrosOptimos(): UseParametrosOptimosResult {
  const [data, setData] = useState<ParametrosOptimosData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchParametros() {
      try {
        setLoading(true);

        const { data: parametros, error: fetchError } = await supabase
          .schema("gonac")
          .from("tab_parametros_optimos")
          .select("*")
          .limit(1); // Get first row if multiple exist

        if (fetchError) {
          throw fetchError;
        }

        // Handle array result - get first item or null
        const result = parametros && parametros.length > 0 ? parametros[0] : null;
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch data"));
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchParametros();
  }, []);

  return { data, loading, error };
}



