import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ListIcon, MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { getProfile } from '../../modules/Profile/services/profileService.js';
import { listAttendance } from '../../modules/Attendance/services/attendanceService.js';
import { formatTime } from '../utils/date.js';
import Icon from './Icon.jsx';

const NOTIFICATIONS = [
  { icon: 'calendar', color: 'var(--warn)', title: 'Annual leave 12-16 Sep awaiting approval', time: '2 hours ago' },
  { icon: 'receipt', color: 'var(--ink)', title: 'July payslip is available', time: 'Yesterday' },
  { icon: 'shield', color: 'var(--ink)', title: 'HSE refresher due before 15 Sep', time: '2 days ago' },
];

/**
 * Top bar: a live checked-in status pill, the theme toggle, a notification bell with a dropdown,
 * and the signed-in user's profile chip, which links straight to My Profile.
 * @param {() => void} onMobileMenuToggle - Opens the sidebar overlay on mobile.
 */
const Header = ({ onMobileMenuToggle }) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { data: profile } = useQuery({ queryKey: ['profile'], queryFn: getProfile });
  const { data: todayRecords } = useQuery({ queryKey: ['attendance', 'today'], queryFn: () => listAttendance({ dateFrom: new Date(), dateTo: new Date() }) });
  const [bellOpen, setBellOpen] = useState(false);
  const bellRef = useRef(null);

  const displayName = profile?.name || user?.name || 'User';
  const initials = displayName.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
  const roleLabel = profile?.jobTitle || 'Employee';

  const todayRecord = todayRecords?.[0];
  const isCheckedIn = !!todayRecord && !todayRecord.checkOut;

  useEffect(() => {
    const onOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) setBellOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  return (
    <header className="relative z-[60] flex flex-shrink-0 flex-wrap items-center gap-x-3 gap-y-3 px-4 py-3 sm:flex-nowrap sm:gap-x-[22px] sm:px-6 lg:px-9 lg:py-4">
      <button
        type="button"
        onClick={onMobileMenuToggle}
        className="flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--tx2)] lg:hidden"
        aria-label="Open menu"
      >
        <ListIcon size={17} />
      </button>

      <div className="ml-auto flex flex-shrink-0 items-center gap-[18px]">
        {isCheckedIn && (
          <span className="hidden items-center gap-2 rounded-lg bg-[var(--ok-bg)] px-3.5 py-[7px] text-[13.5px] font-semibold text-[var(--ok)] sm:flex">
            <i className="block h-[7px] w-[7px] rounded-full bg-[var(--ok)]" />
            {`Checked In · ${formatTime(todayRecord.checkIn)}`}
          </span>
        )}

        <button
          type="button"
          onClick={toggleTheme}
          className="flex cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-[5px] text-[var(--tx)] transition-colors duration-200 hover:bg-[var(--bg)]"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </button>

        <div className="relative" ref={bellRef}>
          <button
            type="button"
            onClick={() => setBellOpen((b) => !b)}
            className="relative flex cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-[5px] text-[var(--tx)] transition-colors duration-200 hover:bg-[var(--bg)]"
            aria-label="Notifications"
            aria-expanded={bellOpen}
          >
            <Icon name="bell" size={20} color="var(--tx)" />
            <span className="absolute right-0 top-0 grid h-[17px] min-w-[17px] place-items-center rounded-[9px] bg-[var(--pri)] px-1 text-[10.5px] font-bold tabular-nums text-white">
              {NOTIFICATIONS.length}
            </span>
          </button>

          {bellOpen && (
            <div className="gs-pop absolute -right-[52px] top-full z-[60] mt-3 w-[calc(100vw-2rem)] max-w-[340px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_46px_rgba(27,27,43,0.16)] sm:right-0 sm:w-[340px]">
              <div className="border-b border-[var(--border)] px-[18px] py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--tx2)]">Notifications</div>
              {NOTIFICATIONS.map(({ icon, color, title, time }) => (
                <div key={title} className="flex cursor-pointer gap-3 border-b border-[var(--border)] px-[18px] py-3.5 transition-colors hover:bg-[var(--surface-2)] last:border-b-0">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--ink-bg)]">
                    <Icon name={icon} size={16} color={color} />
                  </div>
                  <div>
                    <div className="text-[14.5px] font-medium text-[var(--tx)]">{title}</div>
                    <div className="mt-0.5 text-[12.5px] text-[var(--tx3)]">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden h-7 w-px bg-[var(--border)] sm:block" />

        <Link
          to="/profile"
          className="flex min-w-0 cursor-pointer items-center gap-[11px] rounded-[10px] border-0 bg-transparent py-1 pl-1 pr-2 transition-colors duration-200 hover:bg-[var(--bg)]"
        >
          {profile?.imageUrl ? (
            <img src={profile.imageUrl} alt={displayName} className="h-10 w-10 flex-shrink-0 rounded-[10px] object-cover" />
          ) : (
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[10px] bg-[var(--ink-solid)] text-[14px] font-bold tabular-nums text-white">
              {initials}
            </div>
          )}
          <div className="hidden min-w-0 max-w-[150px] text-left sm:block xl:max-w-[190px]">
            <div className="truncate text-[15px] font-medium text-[var(--tx)]">{displayName}</div>
            <div className="truncate text-[12.5px] text-[var(--tx2)]">{roleLabel}</div>
          </div>
          <Icon name="chevronDown" size={16} color="var(--tx2)" className="hidden sm:block" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
