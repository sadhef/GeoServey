import { useState } from 'react';
import Layout from '../../../shared/components/Layout.jsx';
import { PageHeader, TabBar, CardGrid } from '../../../shared/components/hr/HrPage.jsx';

const CARDS = [
  { title: 'Zayed National Museum LOD 500 handover', subtitle: 'Project Communications', body: 'The landscape and site package - hardscape, softscape, irrigation and topography - cleared clash detection and was signed off by the consultant.', meta: '18 Aug 2026', badge: 'Company', avatar: { tag: 'BIM' }, group: 'Company' },
  { title: 'Riyadh delivery centre opens in October', subtitle: 'Corporate Communications', body: 'Our KSA office adds capacity for GIS and mobile mapping work. Internal transfer applications open on 1 September.', meta: '11 Aug 2026', badge: 'Company', avatar: { tag: 'KSA' }, group: 'Company' },
  { title: 'Mandatory HSE refresher before 15 September', subtitle: 'Human Resources', body: 'All field staff must complete the two-hour refresher. Sessions run every Tuesday and Thursday at the Mussafah training room.', meta: '15 Aug 2026', badge: 'HR', avatar: { tag: 'HSE' }, group: 'HR' },
  { title: 'Q3 performance reviews open', subtitle: 'Human Resources', body: 'Self-assessments are due by 31 August. Your manager review follows in the first week of September.', meta: '14 Aug 2026', badge: 'HR', avatar: { tag: 'REV' }, group: 'HR' },
  { title: 'GIS platform upgrade this weekend', subtitle: 'IT Service Desk', body: 'Field Maps sync will be unavailable Friday 22:00 to Saturday 02:00 GST. Cache your assigned areas before leaving site.', meta: '08 Aug 2026', badge: 'IT', avatar: { tag: 'GIS' }, group: 'IT' },
  { title: 'Leica RTC360 scanners issued to survey crews', subtitle: 'Equipment & Assets', body: 'Four new scanners are available from the Mussafah stores. Bring a signed asset issue form and your HSE card when collecting.', meta: '17 Aug 2026', badge: 'IT', avatar: { tag: 'KIT' }, group: 'IT' },
];

const TABS = ['All', 'Company', 'HR', 'IT'];

const Announcements = () => {
  const [tab, setTab] = useState(TABS[0]);
  const cards = tab === 'All' ? CARDS : CARDS.filter((c) => c.group === tab);

  return (
    <Layout>
      <div className="flex flex-col gap-[22px]">
        <PageHeader title="Announcements" subtitle="Company news and updates" />
        <TabBar tabs={TABS} active={tab} onChange={setTab} />
        <CardGrid cards={cards} columns={2} />
      </div>
    </Layout>
  );
};

export default Announcements;
