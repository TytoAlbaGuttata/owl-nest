import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '@/components/common/PageHeader.tsx';
import { NestCard } from '@/components/common/NestCard.tsx';
import { NestButton } from '@/components/common/NestButton.tsx';
import { getServices } from '@/services/hostedService.ts';

/**
 * @description Private dashboard displaying accessible external services via subdomains.
 * Uses NestCard for layout and NestButton for service navigation.
 */
export const Dashboard = () => {
  const { t } = useTranslation();
  const services = getServices();

  return (
    <Box sx={{ p: 4 }}>
      <PageHeader
        title={t('private.dashboard.title')}
        description={t('private.dashboard.subtitle')}
        zone="04"
      />

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mt: 4 }}>
        {services.map((service) => (
          <NestCard
            key={service.id}
            title={t(`private.dashboard.services.${service.id}`)}
            subtitle={t(`private.dashboard.services.desc_${service.id}`)}
            sx={{ minWidth: 280 }}
          >
            <Stack spacing={2} sx={{ mt: 2 }}>
              <NestButton
                nestVariant="contained"
                onClick={() => window.location.assign(service.url)}
              >
                {t('private.dashboard.services.access')}
              </NestButton>
            </Stack>
          </NestCard>
        ))}
      </Box>
    </Box>
  );
};
