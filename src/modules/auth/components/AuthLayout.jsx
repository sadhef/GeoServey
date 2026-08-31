
/**
 * Shared authentication shell: a full-bleed brand photo beside the form, both on the app canvas.
 * @param {{ children: React.ReactNode }} props - The form panel's content.
 */
const AuthLayout = ({ children }) => (
  <div className="flex min-h-full w-full flex-col gap-[22px] overflow-y-auto bg-[var(--surface)] p-4 sm:p-6 lg:flex-row">
    <section className="gs-fade relative hidden flex-[1.05] flex-col justify-between overflow-hidden rounded-[24px] p-8 text-white lg:flex xl:p-12">
      <img
        src="/brand/login-hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%]"
        style={{ backgroundImage: 'linear-gradient(180deg,transparent 0%,rgba(6,10,24,.5) 45%,rgba(6,10,24,.92) 100%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(180deg,rgba(6,10,24,.4) 0%,transparent 24%)' }}
      />

      <img src="/brand/geosurvey-logo-white.png" alt="Geo Survey Tech" className="relative block w-[220px]" />

      <div className="relative max-w-[520px]">
        <h2 className="m-0 mt-3.5 text-[38px] font-extrabold leading-[1.1] tracking-[-0.025em] xl:text-[44px]" style={{ textWrap: 'pretty' }}>
          Transforming environments into intelligent digital twins.
        </h2>
        <p className="mt-[18px] max-w-[430px] text-[16px] leading-[1.6] text-white/70" style={{ textWrap: 'pretty' }}>
          One place for your attendance, leave, payroll and documents
        </p>
      </div>
    </section>

    <section className="flex min-h-[calc(100dvh-2rem)] flex-1 items-center justify-center p-0 sm:min-h-[calc(100dvh-3rem)] sm:p-5 lg:min-h-0">
      <div className="gs-fade w-full max-w-[404px]" style={{ animationDelay: '0.1s' }}>
        {children}
      </div>
    </section>
  </div>
);

export default AuthLayout;
