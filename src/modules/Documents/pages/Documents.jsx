import { useState } from 'react';
import toast from 'react-hot-toast';
import Layout from '../../../shared/components/Layout.jsx';
import { PageHeader, TabBar, CardGrid } from '../../../shared/components/hr/HrPage.jsx';

const CARDS = [
  { title: 'Employee Handbook', subtitle: 'PDF · 2.1 MB', body: 'Code of conduct, working hours and workplace policies for all Geo Survey Tech staff.', meta: 'Updated 04 Jun 2026', badge: 'Company', avatar: { icon: 'file' }, group: 'Company' },
  { title: 'Site & Field Safety Policy', subtitle: 'PDF · 860 KB', body: 'PPE requirements, geofenced check-in rules and incident reporting for survey crews.', meta: 'Updated 22 Jul 2026', badge: 'Company', avatar: { icon: 'shield' }, group: 'Company' },
  { title: 'Equipment Issue & Return Policy', subtitle: 'PDF · 540 KB', body: 'How GNSS receivers, laser scanners and drones are issued, logged and returned.', meta: 'Updated 09 May 2026', badge: 'Company', avatar: { icon: 'file' }, group: 'Company' },
  { title: 'Employment Contract', subtitle: 'PDF · 1.0 MB', body: 'Your signed contract and the 2026 salary revision addendum.', meta: 'Issued 01 Feb 2024', badge: 'HR', avatar: { icon: 'receipt' }, group: 'Personal' },
  { title: 'Salary Certificate', subtitle: 'PDF · 190 KB', body: 'Bank-addressed certificate issued on request.', meta: 'Issued 04 Aug 2026', badge: 'HR', avatar: { icon: 'receipt' }, group: 'Personal' },
  { title: 'Emirates ID & Visa Copy', subtitle: 'JPG · 1.1 MB', body: 'Residence visa and Emirates ID scans held on your HR record.', meta: 'Expires 09 Feb 2027', badge: 'HR', avatar: { icon: 'file' }, group: 'Personal' },
  { title: 'HSE Site Induction', subtitle: 'PDF · 190 KB', body: 'Mandatory induction certificate required for all Abu Dhabi project sites.', meta: 'Expires 15 Sep 2026', badge: 'Expiring soon', avatar: { icon: 'shield' }, group: 'Certificates' },
  { title: 'GCAA Drone Operator Permit', subtitle: 'PDF · 512 KB', body: 'Civil aviation permit covering site and route mapping flights in the UAE.', meta: 'Valid to 30 Nov 2026', badge: 'Valid', avatar: { icon: 'award' }, group: 'Certificates' },
  { title: 'GIS Field Maps Training', subtitle: 'PDF · 320 KB', body: 'Training completion certificate for GIS asset-mapping data collection.', meta: 'Completed 18 Mar 2026', badge: 'IT', avatar: { icon: 'award' }, group: 'Certificates' },
];

const TABS = ['Company', 'Personal', 'Certificates'];

const Documents = () => {
  const [tab, setTab] = useState(TABS[0]);
  const cards = CARDS.filter((c) => c.group === tab);

  return (
    <Layout>
      <div className="flex flex-col gap-[22px]">
        <PageHeader
          title="Documents"
          subtitle="Company policies and your personal records"
          actionLabel="Request Document"
          onAction={() => toast('Document requests aren\'t available yet, contact HR directly.')}
        />
        <TabBar tabs={TABS} active={tab} onChange={setTab} />
        <CardGrid cards={cards} columns={3} />
      </div>
    </Layout>
  );
};

export default Documents;
