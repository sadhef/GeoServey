/**
 * Accessible sortable table heading with a visible active direction.
 * @param {{ label: string, direction: null|'asc'|'desc', onSort: () => void, rowSpan: number, isLast: boolean }} props - Header state, layout, and sort action.
 * @returns {JSX.Element} A table heading cell containing the sort control.
 */
const SortHeader = ({ label, direction, onSort, rowSpan, isLast }) => {
  const ariaSort = direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : 'none';
  const nextDirection = direction === 'asc' ? 'descending' : 'ascending';

  return (
    <th
      scope="col"
      aria-sort={ariaSort}
      rowSpan={rowSpan}
      className={`border-b border-[var(--border)] bg-[var(--surface-2)] p-0 text-left align-middle ${isLast ? '' : 'border-r'}`}
    >
      <button
        type="button"
        onClick={onSort}
        aria-label={`Sort ${label} ${nextDirection}`}
        className="flex w-full cursor-pointer items-center justify-between gap-2 px-3.5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--tx2)] outline-none transition-colors hover:bg-[var(--border)] hover:text-[var(--tx)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--pri)]"
      >
        <span className="min-w-0 truncate">{label}</span>
        <svg
          aria-hidden="true"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-none ${direction ? 'text-[var(--pri)]' : 'text-[var(--tx3)]'}`}
        >
          {direction === 'asc' && <path d="m7 14 5-5 5 5" />}
          {direction === 'desc' && <path d="m7 10 5 5 5-5" />}
          {direction === null && (
            <>
              <path d="m8 9 4-4 4 4" />
              <path d="m8 15 4 4 4-4" />
            </>
          )}
        </svg>
      </button>
    </th>
  );
};

export default SortHeader;
