import type { Service } from '@/types/auth.ts';
import { t } from 'i18next';

export const SERVICES_DATA: Service[] = [
  { id: 'authentik', title: t('dashboard.services.authentik'), url: 'https://auth.owl-nest.ch' },
  { id: 'cloud', title: t('private.dashboard.services.cloud'), url: 'https://cloud.owl-nest.ch' },
  { id: 'adguard', title: t('dashboard.services.adguard'), url: 'https://adguard.owl-nest.ch' },
  {
    id: 'vaultwarden',
    title: t('dashboard.services.vaultwarden'),
    url: 'https://warden.owl-nest.ch',
  },
  { id: 'vikunja', title: t('dashboard.services.vikunja'), url: 'https://tasks.owl-nest.ch' },
  {
    id: 'grafana',
    title: t('private.dashboard.services.grafana'),
    url: 'https://grafana.owl-nest.ch',
  },
  {
    id: 'sonarqube',
    title: t('private.dashboard.services.sonarqube'),
    url: 'https://sonar.owl-nest.ch',
  },
  {
    id: 'actual-budget',
    title: t('private.dashboard.services.actualBudget'),
    url: 'https://budget.owl-nest.ch',
  },
  {
    id: 'navidrome',
    title: t('private.dashboard.services.navidrome'),
    url: 'https://misic.owl-nest.ch',
  },
];
