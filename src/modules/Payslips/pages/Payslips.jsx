import { useState } from 'react';
import Layout from '../../../shared/components/Layout.jsx';
import { PageHeader, TabBar, MetricGrid, DataTable } from '../../../shared/components/hr/HrPage.jsx';

const METRICS = [
  { label: 'Latest Net Pay', value: 'AED 16,240', note: 'July 2026 · WPS transfer', highlight: true },
  { label: 'YTD Gross', value: 'AED 128,800', note: 'Jan to Jul 2026' },
  { label: 'Deductions YTD', value: 'AED 6,420', note: 'Incl. pension' },
  { label: 'Next Pay Date', value: '28 Aug', note: 'WPS transfer' },
];

const formatCurrency = (value) => `AED ${value.toLocaleString('en-US')}`;

const COLUMNS = [
  { key: 'period', label: 'Period', group: null, width: '25%', render: (row) => row.period, sortValue: (row) => row.periodDate },
  { key: 'gross', label: 'Gross', group: null, width: '18.75%', render: (row) => formatCurrency(row.gross), sortValue: (row) => row.gross },
  { key: 'deductions', label: 'Deductions', group: null, width: '18.75%', render: (row) => formatCurrency(row.deductions), sortValue: (row) => row.deductions },
  { key: 'netPay', label: 'Net Pay', group: null, width: '18.75%', render: (row) => formatCurrency(row.netPay), sortValue: (row) => row.netPay },
  { key: 'status', label: 'Status', group: null, width: '18.75%', render: (row) => row.status, sortValue: (row) => row.status },
];

const ROWS = [
  { id: '2026-07', period: 'July 2026', periodDate: '2026-07', gross: 18000, deductions: 1760, netPay: 16240, status: 'Paid' },
  { id: '2026-06', period: 'June 2026', periodDate: '2026-06', gross: 18000, deductions: 1760, netPay: 16240, status: 'Paid' },
  { id: '2026-05', period: 'May 2026', periodDate: '2026-05', gross: 19400, deductions: 1760, netPay: 17640, status: 'Paid' },
  { id: '2026-04', period: 'April 2026', periodDate: '2026-04', gross: 18000, deductions: 900, netPay: 17100, status: 'Paid' },
];

const TABS = ['2026', '2025'];

const Payslips = () => {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <Layout>
      <div className="flex flex-col gap-[22px]">
        <PageHeader title="Payroll" subtitle="Monthly statements, WPS transfers and year-to-date totals" />
        <TabBar tabs={TABS} active={tab} onChange={setTab} />
        <MetricGrid metrics={METRICS} />
        <DataTable columns={COLUMNS} rows={tab === '2026' ? ROWS : []} statusColumn="status" />
      </div>
    </Layout>
  );
};

export default Payslips;
