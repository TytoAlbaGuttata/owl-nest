import { SERVICES_DATA } from '@/constants/services.ts';
import type { Service } from '@/types/auth.ts';

export const getServices = (): Service[] => {
  return SERVICES_DATA;
};
