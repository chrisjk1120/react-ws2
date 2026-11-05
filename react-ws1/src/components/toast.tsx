import type {ToastMessage} from "./toastMessage.ts";
import { CheckCircle2, X, AlertCircle, Info } from 'lucide-react';

import {useEffect} from "react";
type ToastType = 'success' | 'error' | 'info';
type ToastProps = {
  message: string;
  type?: ToastType;    // "?" means optional — if not passed, the default below is used
  onClose: () => void; // a function passed as a prop — called when the X button is clicked
};
const Toast = ({message,type='success',onClose}: ToastProps) =>
{
  useEffect(() => {
    // EFFECT: runs when the Toast appears (mounts) — start the countdown
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    // CLEANUP: runs when the Toast unmounts — cancel the countdown
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="text-emerald-500" size={20} />,
    error:   <AlertCircle  className="text-rose-500"    size={20} />,
    info:    <Info         className="text-blue-500"    size={20} />,
  };

  const backgrounds = {
    success: 'bg-emerald-50 border-emerald-100',
    error:   'bg-rose-50 border-rose-100',
    info:    'bg-blue-50 border-blue-100',
  };
  return (

    <div className="w-full p-6 text-black text-sm ${backgrounds[type]">{message}aasdasdasd</div>

  )
};




export default Toast;
