import { useState } from 'react';
import Layout from '../../../shared/components/Layout.jsx';
import { PageHeader, TabBar, CardGrid } from '../../../shared/components/hr/HrPage.jsx';

const CARDS = [
  { title: 'Ahmed Al Suwaidi', subtitle: 'GIS & Mapping Manager', body: 'ahmed.alsuwaidi@geosurveytech.com · +971 2 555 4410', meta: 'GIS · Abu Dhabi', badge: 'Company', avatar: 'AS', group: 'GIS & BIM' },
  { title: 'Priya Nair', subtitle: 'BIM Coordinator', body: 'priya.nair@geosurveytech.com · +971 2 555 4423', meta: 'BIM · Abu Dhabi', badge: 'Company', avatar: 'PN', group: 'GIS & BIM' },
  { title: 'Sneha Varghese', subtitle: 'GIS Analyst', body: 'sneha.varghese@geosurveytech.com · +91 484 402 1180', meta: 'GIS · Kochi', badge: 'Company', avatar: 'SV', group: 'GIS & BIM' },
  { title: 'Jomon Mathew', subtitle: 'Party Chief - Land Survey', body: 'jomon.mathew@geosurveytech.com · +971 4 555 4438', meta: 'Survey · Dubai', badge: 'Company', avatar: 'JM', group: 'Survey' },
  { title: 'Karthik Ramesh', subtitle: 'Drone Survey Pilot', body: 'karthik.ramesh@geosurveytech.com · +971 4 555 4441', meta: 'Drone · Dubai', badge: 'Company', avatar: 'KR', group: 'Survey' },
  { title: 'Mohammed Hassan', subtitle: '3D Laser Scanning Lead', body: 'mohammed.hassan@geosurveytech.com · +974 4 555 2210', meta: 'Scanning · Doha', badge: 'Company', avatar: 'MH', group: 'Survey' },
  { title: 'Liza Corpuz', subtitle: 'HR Business Partner', body: 'liza.corpuz@geosurveytech.com · +971 2 555 4402', meta: 'People · Mussafah', badge: 'HR', avatar: 'LC', group: 'Corporate' },
  { title: 'Faisal Al Marri', subtitle: 'QA / QC Engineer', body: 'faisal.almarri@geosurveytech.com · +966 11 555 8830', meta: 'Quality · Riyadh', badge: 'Company', avatar: 'FA', group: 'Corporate' },
  { title: 'Rania Basem', subtitle: 'IT Support Engineer', body: 'rania.basem@geosurveytech.com · +971 2 555 4455', meta: 'IT · Abu Dhabi', badge: 'IT', avatar: 'RB', group: 'Corporate' },
];

const TABS = ['All', 'Survey', 'GIS & BIM', 'Corporate'];

const Directory = () => {
  const [tab, setTab] = useState(TABS[0]);
  const cards = tab === 'All' ? CARDS : CARDS.filter((c) => c.group === tab);

  return (
    <Layout>
      <div className="flex flex-col gap-[22px]">
        <PageHeader title="Team Directory" subtitle="Find colleagues across teams and offices" />
        <TabBar tabs={TABS} active={tab} onChange={setTab} />
        <CardGrid cards={cards} columns={3} />
      </div>
    </Layout>
  );
};

export default Directory;
