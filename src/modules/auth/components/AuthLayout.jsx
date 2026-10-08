import './auth-hero.css';

/**
 * Renders the animated brand panel and authentication form.
 * @param {{ children: React.ReactNode }} props - Authentication form content.
 * @returns {React.ReactElement} Responsive authentication shell; throws no custom errors.
 */
const AuthLayout = ({ children }) => {
  return (
    <div className="geo-auth">
      <section className="geo-hero" aria-label="Geo Survey Tech employee portal">
        <header className="geo-hero__header">
          <img src={`${import.meta.env.BASE_URL}brand/geosurvey-logo.png`} alt="Geo Survey Tech" className="geo-hero__logo" />
          <span className="geo-hero__edition">EMPLOYEE PORTAL</span>
        </header>

        <div className="geo-hero__art" aria-hidden="true">
          <svg className="geo-hero__survey" viewBox="0 0 520 420" fill="none">
            <defs>
              <linearGradient id="geo-terrain-surface" x1="80" y1="160" x2="420" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity=".95" />
                <stop offset="1" stopColor="#bce4f1" stopOpacity=".5" />
              </linearGradient>
              <linearGradient id="geo-terrain-line" x1="100" y1="280" x2="420" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#26308c" stopOpacity=".2" />
                <stop offset=".55" stopColor="#29abe2" />
                <stop offset="1" stopColor="#29abe2" stopOpacity=".15" />
              </linearGradient>
            </defs>
            <path className="geo-hero__foundation" d="M62 277L260 169L458 277L260 385Z" />
            <path className="geo-hero__substrate" d="M62 253L260 145L458 253L260 361Z" />
            <g className="geo-hero__terrain">
              <path className="geo-hero__surface" d="M62 229L260 121L458 229L260 337Z" />
              <path className="geo-hero__mesh" d="M111 202L309 310M161 175L359 283M210 148L408 256M111 256L309 148M161 283L359 175M210 310L408 202" />
              <path className="geo-hero__contours" d="M113 226C153 194 166 232 215 202S279 163 319 192S360 209 407 224M142 251C186 219 204 253 243 226S295 204 328 225S355 252 381 245M183 275C210 244 232 277 266 250S314 245 336 267" />
              <path className="geo-hero__scan" d="M113 226C153 194 166 232 215 202S279 163 319 192S360 209 407 224" pathLength="1" />
              <g className="geo-hero__points">
                <circle cx="113" cy="226" r="4" />
                <circle cx="243" cy="226" r="4" />
                <circle cx="336" cy="267" r="4" />
                <circle cx="407" cy="224" r="4" />
              </g>
            </g>
            <path className="geo-hero__projection" d="M260 191V252" />
            <ellipse className="geo-hero__shadow" cx="260" cy="251" rx="32" ry="9" />
            <image className="geo-hero__mark" href={`${import.meta.env.BASE_URL}brand/geosurvey-mark.png`} x="194" y="24" width="132" height="190" />
          </svg>
        </div>

        <div className="geo-hero__copy">
          <h2>Transforming environments into <span>intelligent digital twins.</span></h2>
          <p className="geo-hero__description">One place for your attendance, leave and documents</p>
        </div>

      </section>

      <section className="geo-auth__form" aria-label="Sign in">
        <div className="w-full max-w-[404px]">{children}</div>
      </section>
    </div>
  );
};

export default AuthLayout;
