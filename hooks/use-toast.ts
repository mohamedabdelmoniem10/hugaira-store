"use client";

import { toast as sonnerToast } from "sonner";
import { useState, useCallback } from "react";

interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: "default" | "destructive";
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(({ title, description, action, variant = "default" }: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, title, description, action, variant };
    
    setToasts((prev) => [...prev, newToast]);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);

    // Also use sonner for immediate display
    sonnerToast[variant === "destructive" ? "error" : "success"](title, {
      description,
      action: action
        ? {
            label: action.label,
            onClick: action.onClick,
          }
        : undefined,
    });
  }, []);

  const dismiss = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  return { toast, toasts, dismiss };
}