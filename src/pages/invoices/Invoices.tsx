/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

import { Breadcrumbs } from 'components/Breadcrumbs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Default } from '../../components/layouts/Default';

export function Invoices() {
  const [t] = useTranslation();

  const pages = [
    { name: t('invoices'), href: '/invoices' },
  ];

  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_TITLE}: ${t('invoices')}`;
  });

  return (
    <Default title={t('invoices')}>
      <Breadcrumbs pages={pages} />

      <RouterLink to="/invoices/create">Create an invoice</RouterLink>
    </Default>
  );
}
