import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Home, MessageSquare, FileText, TrendingUp, Calculator, PiggyBank, Landmark, Receipt, ArrowUpRight, ArrowLeft, Sparkles, Send, Loader2, Upload, FileCheck, AlertTriangle, CheckCircle2, X, Menu, ChevronRight, Zap, Shield, Target, BookOpen, BarChart3, Lightbulb, Brain, Wallet, CreditCard, Building2 } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

// ============================================================================
// MAIN APP
// ============================================================================
export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { id: 'home', label: 'בית' },
    { id: 'advisor', label: 'יועץ AI', icon: Brain },
    { id: 'tools', label: 'כלים פיננסיים', icon: Zap },
    { id: 'analyzer', label: 'ניתוח מסמכים', icon: FileCheck },
    { id: 'businesses', label: 'ספריית יועצים', icon: Building2 },
    { id: 'insights', label: 'תובנות', icon: Lightbulb },
    { id: 'about', label: 'אודות' },
  ];

  const renderPage = () => {
    switch (page) {
      case 'advisor': return <AIAdvisor />;
      case 'tools': return <ToolsHub setPage={setPage} />;
      case 'analyzer': return <DocumentAnalyzer />;
      case 'insights': return <Insights />;
      case 'about': return <About />;
      case 'mortgage-tool': return <MortgageTool />;
      case 'retirement-tool': return <RetirementTool />;
      case 'compound-tool': return <CompoundTool />;
      case 'portfolio-tool': return <PortfolioTool />;
      case 'tax-tool': return <TaxTool />;
      case 'debt-tool': return <DebtTool />;
      case 'studyfund-tool': return <StudyFundTool />;
      case 'compare-tool': return <CompareReports />;
      case 'gemel-tool': return <GemelTool />;
      case 'portfolio-mgmt-tool': return <PortfolioMgmtTool />;
      case 'businesses': return <BusinessesDirectory setPage={setPage} />;
      case 'business-register': return <BusinessRegister setPage={setPage} />;
      case 'business-page': return <BusinessPage setPage={setPage} />;
      case 'business-login': return <BusinessLogin setPage={setPage} />;
      case 'business-dashboard': return <BusinessDashboard setPage={setPage} />;
      default: return <Landing setPage={setPage} />;
    }
  };

  return (
    <div dir="rtl" style={{ minHeight: '100vh', background: '#FFFFFF', color: '#0A0B0D', fontFamily: "'Heebo', -apple-system, sans-serif" }}>
      <GlobalStyles />
      <Header page={page} setPage={setPage} nav={nav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}

// ============================================================================
// GLOBAL STYLES
// ============================================================================
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Assistant:wght@200;300;400;500;600;700;800&display=swap');
      
      * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
      body { margin: 0; background: #fff; }
      
      :root {
        --bg: #FFFFFF;
        --bg-subtle: #FAFAFA;
        --bg-muted: #F4F4F5;
        --border: #E4E4E7;
        --border-hover: #D4D4D8;
        --text: #0A0B0D;
        --text-muted: #52525B;
        --text-subtle: #71717A;
        --accent: #5E5CE6;
        --accent-hover: #4845C7;
        --success: #10B981;
        --warning: #F59E0B;
        --danger: #EF4444;
      }
      
      button { font-family: inherit; }
      
      .fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .slide-in { animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      .shimmer {
        background: linear-gradient(90deg, transparent, rgba(94,92,230,0.08), transparent);
        background-size: 200% 100%;
        animation: shimmer 2.5s infinite;
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      .spin { animation: spin 1s linear infinite; }
      @keyframes spin { to { transform: rotate(360deg); } }
      
      .pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(94,92,230,0.3); }
        50% { box-shadow: 0 0 0 8px rgba(94,92,230,0); }
      }
      
      .grid-bg {
        background-image: 
          linear-gradient(rgba(228,228,231,0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(228,228,231,0.4) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent);
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #0A0B0D 0%, #5E5CE6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      input, textarea, select {
        font-family: inherit;
        background: #FAFAFA;
        border: 1px solid var(--border);
        color: var(--text);
        padding: 10px 14px;
        border-radius: 10px;
        width: 100%;
        font-size: 15px;
        font-weight: 500;
        transition: all 0.15s;
      }
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: var(--accent);
        background: #fff;
        box-shadow: 0 0 0 3px rgba(94,92,230,0.1);
      }
      
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s;
        border: none;
        font-family: inherit;
        white-space: nowrap;
      }
      .btn-primary {
        background: var(--text);
        color: white;
      }
      .btn-primary:hover:not(:disabled) { background: #1F2024; transform: translateY(-1px); }
      .btn-primary:disabled { opacity: 0.4; cursor: not-allowed; }
      
      .btn-accent {
        background: var(--accent);
        color: white;
      }
      .btn-accent:hover:not(:disabled) { background: var(--accent-hover); }
      .btn-accent:disabled { opacity: 0.4; cursor: not-allowed; }
      
      .btn-outline {
        background: #fff;
        color: var(--text);
        border: 1px solid var(--border);
      }
      .btn-outline:hover { border-color: var(--text); }
      
      .btn-ghost {
        background: transparent;
        color: var(--text-muted);
      }
      .btn-ghost:hover { background: var(--bg-muted); color: var(--text); }
      
      .card {
        background: #fff;
        border: 1px solid var(--border);
        border-radius: 16px;
        transition: all 0.2s;
      }
      .card-hover:hover {
        border-color: var(--border-hover);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.04);
      }
      
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        background: var(--bg-muted);
        border: 1px solid var(--border);
        border-radius: 100px;
        font-size: 12px;
        font-weight: 600;
        color: var(--text-muted);
      }
      
      .scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
      .scrollbar::-webkit-scrollbar-track { background: transparent; }
      .scrollbar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
      .scrollbar::-webkit-scrollbar-thumb:hover { background: var(--border-hover); }
      
      table { width: 100%; border-collapse: collapse; font-size: 13px; }
      th { padding: 10px 12px; text-align: right; font-weight: 600; color: var(--text-muted); background: var(--bg-subtle); border-bottom: 1px solid var(--border); font-size: 12px; }
      td { padding: 10px 12px; border-bottom: 1px solid var(--border); text-align: right; }
      tr:hover td { background: var(--bg-subtle); }
      
      @media (max-width: 768px) {
        .hide-mobile { display: none !important; }
      }
    `}</style>
  );
}

// ============================================================================
// HEADER
// ============================================================================
function Header({ page, setPage, nav, menuOpen, setMenuOpen }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div onClick={() => setPage('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #5E5CE6 0%, #0A0B0D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 16 }}>D</div>
          <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>Double<span style={{ color: '#5E5CE6' }}>.AI</span></div>
        </div>

        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {nav.map(n => (
            <button key={n.id} onClick={() => setPage(n.id)} className="btn btn-ghost" style={{ color: page === n.id ? 'var(--text)' : 'var(--text-muted)', fontWeight: page === n.id ? 700 : 500, fontSize: 14, padding: '8px 14px' }}>
              {n.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button className="btn btn-ghost hide-mobile" onClick={() => setPage('business-login')} style={{ fontSize: 13, padding: '8px 12px' }}>
            <Building2 size={13} /> עסקים
          </button>
          <button className="btn btn-accent hide-mobile" onClick={() => setPage('advisor')}>
            <Sparkles size={14} /> התחל שיחה
          </button>
          <button className="btn btn-ghost" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', padding: 8 }}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="slide-in" style={{ borderTop: '1px solid var(--border)', padding: 12 }}>
          {nav.map(n => (
            <button key={n.id} onClick={() => { setPage(n.id); setMenuOpen(false); }} className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', padding: '10px 14px', marginBottom: 2, fontWeight: page === n.id ? 700 : 500 }}>
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ============================================================================
// LANDING PAGE
// ============================================================================
function Landing({ setPage }) {
  const [marketData] = useState({
    bankRate: 4.5,
    inflation: 2.9,
    usdIls: 3.62,
    ta125: 2145.3,
  });

  return (
    <div className="fade-in">
      {/* Hero */}
      <section style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          <div className="badge pulse-glow" style={{ marginBottom: 28, background: '#fff', borderColor: '#E4E4E7' }}>
            <Sparkles size={13} style={{ color: '#5E5CE6' }} />
            <span>מופעל על ידי Claude Sonnet 4</span>
          </div>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05, margin: '0 0 24px' }}>
            החלטות פיננסיות<br />
            <span className="gradient-text">חכמות ומדויקות</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 640, margin: '0 auto 40px', fontWeight: 400 }}>
            מרכז פיננסי המשלב בינה מלאכותית עם כלים מקצועיים - יועץ אישי, מחשבונים מתקדמים, וניתוח מסמכים. הכל בעברית, מותאם לשוק הישראלי.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => setPage('advisor')} style={{ padding: '14px 24px', fontSize: 15 }}>
              <Sparkles size={16} /> התחל שיחה עם היועץ
            </button>
            <button className="btn btn-outline" onClick={() => setPage('tools')} style={{ padding: '14px 24px', fontSize: 15 }}>
              חקור את הכלים <ArrowLeft size={16} />
            </button>
          </div>

          {/* Market strip */}
          <div className="card" style={{ marginTop: 64, padding: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'right', maxWidth: 720, margin: '64px auto 0' }}>
            {[
              { l: 'ריבית בנק ישראל', v: marketData.bankRate + '%', c: '#5E5CE6' },
              { l: 'אינפלציה 12ח׳', v: marketData.inflation + '%', c: '#F59E0B' },
              { l: 'דולר/שקל', v: '₪' + marketData.usdIls, c: '#10B981' },
              { l: 'ת״א 125', v: marketData.ta125.toLocaleString(), c: '#EF4444' },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginBottom: 4, fontWeight: 600, letterSpacing: 0.5 }}>{m.l}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: m.c }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16 }}>אקוסיסטם מלא</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 16px' }}>שלושה מוצרים, פלטפורמה אחת</h2>
            <p style={{ fontSize: 18, color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto' }}>כל הכלים שאתה צריך כדי לקבל החלטות פיננסיות מושכלות, במקום אחד</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { icon: Brain, t: 'יועץ AI שיחתי', d: 'שיחה חופשית בעברית על כל נושא פיננסי - משכנתא, השקעות, מיסוי, פרישה', p: 'advisor', c: '#5E5CE6' },
              { icon: Zap, t: '10 כלים מקצועיים', d: 'מחשבונים מתקדמים עם חישובים אקטואריים, טבלאות סילוקין וגרפים', p: 'tools', c: '#10B981' },
              { icon: FileCheck, t: 'ניתוח מסמכים', d: 'העלאת חשבוניות ותלושים - המערכת מזהה חיובים חריגים ונותנת המלצות', p: 'analyzer', c: '#F59E0B' },
              { icon: Building2, t: 'ספריית יועצים', d: 'יועצים פיננסיים מאומתים - משכנתא, פנסיה, מס. פנייה ישירה עם ניסוח AI', p: 'businesses', c: '#6366F1' },
            ].map((f, i) => (
              <div key={i} onClick={() => setPage(f.p)} className="card card-hover" style={{ padding: 32, cursor: 'pointer' }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: f.c + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <f.icon size={22} style={{ color: f.c }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 10px', letterSpacing: '-0.3px' }}>{f.t}</h3>
                <p style={{ color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.6, fontSize: 14 }}>{f.d}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: f.c, fontSize: 13, fontWeight: 700 }}>
                  גלה עוד <ArrowLeft size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools preview */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div className="badge" style={{ marginBottom: 16 }}>כלים זמינים</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.8px', margin: 0 }}>כל מה שצריך לתכנון פיננסי</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => setPage('tools')}>כל הכלים <ArrowLeft size={14} /></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {TOOLS.slice(0, 6).map((t) => (
              <div key={t.id} onClick={() => setPage(t.page)} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: t.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <t.icon size={18} style={{ color: t.color }} />
                  </div>
                  <ArrowUpRight size={16} style={{ color: 'var(--text-subtle)' }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>{t.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / trust */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: Shield, t: 'פרטיות מלאה', d: 'הנתונים שלך נשארים אצלך - אין שמירה בבסיס נתונים' },
              { icon: Target, t: 'דיוק ישראלי', d: 'ריביות בנק ישראל, תקרות פנסיה, ונקודות זיכוי עדכניות ל-2026' },
              { icon: BookOpen, t: 'ללא תשלום', d: 'כל הכלים זמינים בחינם ללא הרשמה או פרסומות' },
            ].map((f, i) => (
              <div key={i} style={{ padding: '24px 0' }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon size={18} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>{f.t}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 16px' }}>
            מוכן להתחיל?
          </h2>
          <p style={{ fontSize: 18, color: 'var(--text-muted)', margin: '0 0 32px' }}>
            שאל את היועץ שלנו כל שאלה פיננסית - זה חינם וללא הרשמה
          </p>
          <button className="btn btn-primary" onClick={() => setPage('advisor')} style={{ padding: '14px 28px', fontSize: 15 }}>
            <Sparkles size={16} /> התחל שיחה עכשיו
          </button>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// AI ADVISOR (Chat interface)
// ============================================================================
const SYSTEM_PROMPT = `את/ה יועץ פיננסי ישראלי מקצועי וידידותי של Double.AI. תן תשובות מדויקות, מעשיות, בעברית שוטפת.

הנחיות:
- התמקד בשוק הישראלי: בנק ישראל, רשות המיסים, ביטוח לאומי, חוקי פנסיה ישראליים
- תשובות קצרות וממוקדות (עד 250 מילים) אלא אם המשתמש ביקש פירוט
- השתמש במספרים קונקרטיים וערכי 2026: ריבית בנ"י 4.5%, נקודת זיכוי ~250 ₪ לחודש, תקרת הפקדה לקרן השתלמות 18,480 ₪ שנתי
- אם שאלה דורשת נתונים אישיים, בקש אותם בקצרה
- הוסף הערה שזה אינו ייעוץ מחייב כשמדובר בהמלצות ספציפיות
- אל תכלול "אני מבין" או "שאלה מעולה" - עבור ישר לעניין`;

function AIAdvisor() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'שלום! אני יועץ פיננסי מבוסס AI. אפשר לשאול אותי כל דבר - ממחזור משכנתא, תכנון פרישה, אופטימיזציית מס, ועד השקעות. איך אוכל לעזור היום?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (textOverride) => {
    const text = textOverride || input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: newMessages.filter(m => m.role !== 'system').map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || 'מצטער, אירעה שגיאה.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (e) {
      setMessages([...newMessages, { role: 'assistant', content: 'אירעה שגיאה בחיבור. נסה שוב בעוד רגע.' }]);
    }
    setLoading(false);
  };

  const suggestions = [
    'כדאי לי למחזר משכנתא בריבית 5.2%?',
    'איך להפחית את תשלומי המס שלי?',
    'מה ההבדל בין פנסיה צוברת לתקציבית?',
    'איך לחסוך ל-500 אלף ₪ תוך 7 שנים?',
    'מה ההבדל בין קרן השתלמות לקופת גמל להשקעה?',
  ];

  return (
    <div className="fade-in" style={{ maxWidth: 860, margin: '0 auto', padding: '32px 24px 0', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #5E5CE6 0%, #0A0B0D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Brain size={20} color="white" />
          </div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>יועץ פיננסי AI</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              מחובר · Claude Sonnet 4
            </div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div ref={scrollRef} className="scrollbar" style={{ flex: 1, overflowY: 'auto', paddingBottom: 24, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} className="fade-in" style={{ display: 'flex', gap: 12, marginBottom: 20, flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, background: m.role === 'user' ? 'var(--text)' : 'linear-gradient(135deg, #5E5CE6, #0A0B0D)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>
              {m.role === 'user' ? 'את' : <Brain size={15} />}
            </div>
            <div style={{ maxWidth: '75%' }}>
              <div style={{ padding: '12px 16px', borderRadius: 14, background: m.role === 'user' ? 'var(--text)' : 'var(--bg-subtle)', color: m.role === 'user' ? 'white' : 'var(--text)', border: m.role === 'user' ? 'none' : '1px solid var(--border)', fontSize: 15, lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="fade-in" style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #5E5CE6, #0A0B0D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Brain size={15} color="white" />
            </div>
            <div style={{ padding: '12px 16px', borderRadius: 14, background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)' }}>
              <Loader2 size={14} className="spin" /> חושב...
            </div>
          </div>
        )}

        {messages.length === 1 && !loading && (
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 12 }}>שאלות פופולריות</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => send(s)} className="btn btn-outline" style={{ fontSize: 13, padding: '8px 14px' }}>{s}</button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ position: 'sticky', bottom: 0, background: '#fff', paddingBottom: 24, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="שאל את היועץ..."
            rows={1}
            style={{ resize: 'none', minHeight: 44, fontSize: 15 }}
          />
          <button onClick={() => send()} disabled={!input.trim() || loading} className="btn btn-accent" style={{ height: 44, paddingLeft: 14, paddingRight: 14 }}>
            <Send size={16} />
          </button>
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 8, textAlign: 'center' }}>
          התשובות לצורכי התרשמות בלבד ואינן מהוות ייעוץ פיננסי מחייב
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TOOLS HUB
// ============================================================================
const TOOLS = [
  { id: 'mortgage', name: 'מחשבון משכנתא', desc: 'תשלום חודשי, טבלת סילוקין, השוואת מסלולים', icon: Home, color: '#5E5CE6', page: 'mortgage-tool' },
  { id: 'retirement', name: 'מחשבון פרישה', desc: 'תחזית הכנסה חודשית, פער פנסיוני, המלצות', icon: PiggyBank, color: '#10B981', page: 'retirement-tool' },
  { id: 'studyfund', name: 'קרן השתלמות', desc: 'חישוב צבירה, הטבות מס, מועד נזילות', icon: Wallet, color: '#06B6D4', page: 'studyfund-tool' },
  { id: 'gemel', name: 'גמל להשקעה', desc: 'צבירה, תיקון 190, תקרות הפקדה 2026', icon: Landmark, color: '#14B8A6', page: 'gemel-tool' },
  { id: 'portfolio-mgmt', name: 'ניהול תיקי השקעות', desc: 'דמי ניהול, השוואה לתיק עצמאי, תשואה נטו', icon: Building2, color: '#6366F1', page: 'portfolio-mgmt-tool' },
  { id: 'compound', name: 'ריבית דריבית', desc: 'צמיחת חיסכון עם הפקדות חודשיות', icon: TrendingUp, color: '#F59E0B', page: 'compound-tool' },
  { id: 'portfolio', name: 'מחשבון תיק השקעות', desc: 'פיזור סיכון ותחזית תשואה', icon: BarChart3, color: '#EF4444', page: 'portfolio-tool' },
  { id: 'tax', name: 'אופטימיזציית מס', desc: 'נקודות זיכוי, החזרי מס, הטבות חבויות', icon: Calculator, color: '#8B5CF6', page: 'tax-tool' },
  { id: 'debt', name: 'מנהל חובות', desc: 'תכנון תשלומי הלוואות ושיטות הפחתה', icon: CreditCard, color: '#EC4899', page: 'debt-tool' },
  { id: 'compare', name: 'השוואת דוחות', desc: 'העלה שני דוחות פיננסיים וקבל השוואה חכמה', icon: FileCheck, color: '#0891B2', page: 'compare-tool' },
];

function ToolsHub({ setPage }) {
  return (
    <div className="fade-in" style={{ maxWidth: 1120, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div style={{ marginBottom: 48, maxWidth: 640 }}>
        <div className="badge" style={{ marginBottom: 16 }}>10 כלים זמינים</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', margin: '0 0 16px', lineHeight: 1.1 }}>כלים פיננסיים מקצועיים</h1>
        <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          מחשבונים מתקדמים עם חישובים אקטואריים מדויקים. כל כלי משלב נוסחה מתמטית עם ניתוח AI שמסביר את המשמעות.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {TOOLS.map((t, i) => (
          <div key={t.id} onClick={() => setPage(t.page)} className="card card-hover" style={{ padding: 28, cursor: 'pointer', animationDelay: `${i * 0.04}s` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 11, background: t.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <t.icon size={22} style={{ color: t.color }} />
              </div>
              <ArrowUpRight size={18} style={{ color: 'var(--text-subtle)' }} />
            </div>
            <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.3px' }}>{t.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// TOOL: MORTGAGE
// ============================================================================
function MortgageTool() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(25);
  const [result, setResult] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  useEffect(() => {
    if (amount && rate && years) calculate();
  }, [amount, rate, years]);

  const calculate = () => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const pmt = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPaid = pmt * n;
    const totalInterest = totalPaid - amount;

    // Amortization
    const schedule = [];
    let balance = amount;
    for (let m = 1; m <= n; m++) {
      const interestPart = balance * r;
      const principalPart = pmt - interestPart;
      balance -= principalPart;
      if (m === 1 || m % 12 === 0 || m === n) {
        schedule.push({
          month: m,
          year: Math.ceil(m / 12),
          payment: pmt,
          principal: principalPart,
          interest: interestPart,
          balance: Math.max(0, balance),
        });
      }
    }

    // Chart data
    const chartData = [];
    let bal = amount;
    let cumInterest = 0;
    let cumPrincipal = 0;
    for (let m = 1; m <= n; m++) {
      const ip = bal * r;
      const pp = pmt - ip;
      bal -= pp;
      cumInterest += ip;
      cumPrincipal += pp;
      if (m % 12 === 0) {
        chartData.push({
          year: m / 12,
          ריבית_מצטברת: Math.round(cumInterest),
          קרן_מצטברת: Math.round(cumPrincipal),
          יתרה: Math.round(Math.max(0, bal)),
        });
      }
    }

    setResult({ pmt, totalPaid, totalInterest, schedule, chartData });
  };

  const getAIAnalysis = async () => {
    setAiLoading(true);
    setAiAnalysis('');
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          system: 'אתה יועץ משכנתאות ישראלי. תשובות קצרות, ממוקדות, בעברית.',
          messages: [{
            role: 'user',
            content: `משכנתא ${amount.toLocaleString('he-IL')} ₪, ריבית ${rate}%, ${years} שנים. תשלום חודשי ${Math.round(result.pmt).toLocaleString('he-IL')} ₪, סך ריבית ${Math.round(result.totalInterest).toLocaleString('he-IL')} ₪.

תן בעברית (עד 180 מילים) ללא הקדמות:
1. האם התנאים סבירים בהשוואה לריבית בנק ישראל 4.5%
2. 3 טיפים לחיסכון בריבית (פירעון מוקדם, חלוקת מסלולים, ביטוח)
3. אזהרה אחת חשובה`,
          }],
        }),
      });
      const data = await response.json();
      setAiAnalysis(data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '');
    } catch (e) {
      setAiAnalysis('שגיאה בטעינת הניתוח');
    }
    setAiLoading(false);
  };

  return (
    <ToolLayout icon={Home} title="מחשבון משכנתא" subtitle="חישוב תשלום חודשי וטבלת סילוקין מלאה" color="#5E5CE6">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרטי המשכנתא</h3>

          <Field label={`סכום המשכנתא: ${amount.toLocaleString('he-IL')} ₪`}>
            <input type="range" min="100000" max="5000000" step="50000" value={amount} onChange={e => setAmount(+e.target.value)} style={{ padding: 0, height: 6 }} />
            <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} style={{ marginTop: 8 }} />
          </Field>

          <Field label={`ריבית שנתית: ${rate}%`}>
            <input type="range" min="1" max="10" step="0.1" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} />
            <input type="number" step="0.1" value={rate} onChange={e => setRate(+e.target.value)} style={{ marginTop: 8 }} />
          </Field>

          <Field label={`תקופה: ${years} שנים`}>
            <input type="range" min="5" max="30" value={years} onChange={e => setYears(+e.target.value)} style={{ padding: 0, height: 6 }} />
            <input type="number" value={years} onChange={e => setYears(+e.target.value)} style={{ marginTop: 8 }} />
          </Field>

          <button className="btn btn-accent" onClick={getAIAnalysis} disabled={aiLoading || !result} style={{ width: '100%', marginTop: 8 }}>
            {aiLoading ? <><Loader2 size={14} className="spin" /> מנתח...</> : <><Sparkles size={14} /> ניתוח AI</>}
          </button>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* KPIs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="תשלום חודשי" value={Math.round(result.pmt).toLocaleString('he-IL') + ' ₪'} color="#5E5CE6" primary />
              <StatCard label="סך תשלומים" value={Math.round(result.totalPaid).toLocaleString('he-IL') + ' ₪'} />
              <StatCard label="סך ריבית" value={Math.round(result.totalInterest).toLocaleString('he-IL') + ' ₪'} color="#F59E0B" />
              <StatCard label="יחס ריבית לקרן" value={Math.round((result.totalInterest / amount) * 100) + '%'} color="#EF4444" />
            </div>

            {/* AI analysis */}
            {aiAnalysis && (
              <div className="card fade-in" style={{ padding: 24, borderColor: '#5E5CE6', borderWidth: 1, background: 'linear-gradient(180deg, rgba(94,92,230,0.04) 0%, transparent 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Sparkles size={14} style={{ color: '#5E5CE6' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#5E5CE6' }}>ניתוח Claude</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.75, whiteSpace: 'pre-wrap', color: 'var(--text)' }}>{aiAnalysis}</div>
              </div>
            )}

            {/* Chart */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פירוק תשלומים לאורך זמן</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={result.chartData}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#5E5CE6" stopOpacity={0.3} /><stop offset="100%" stopColor="#5E5CE6" stopOpacity={0} /></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3} /><stop offset="100%" stopColor="#F59E0B" stopOpacity={0} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="year" label={{ value: 'שנה', position: 'insideBottom', offset: -5, fontSize: 12 }} fontSize={11} reversed />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Area type="monotone" dataKey="קרן_מצטברת" stroke="#5E5CE6" fill="url(#g1)" strokeWidth={2} />
                  <Area type="monotone" dataKey="ריבית_מצטברת" stroke="#F59E0B" fill="url(#g2)" strokeWidth={2} />
                  <Area type="monotone" dataKey="יתרה" stroke="#0A0B0D" fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Amortization */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>טבלת סילוקין</h3>
              <div style={{ maxHeight: 340, overflowY: 'auto' }} className="scrollbar">
                <table>
                  <thead><tr><th>שנה</th><th>תשלום חודשי</th><th>קרן</th><th>ריבית</th><th>יתרה</th></tr></thead>
                  <tbody>
                    {result.schedule.filter(s => s.month % 12 === 0 || s.month === 1).map(s => (
                      <tr key={s.month}><td>{s.year}</td><td>{Math.round(s.payment).toLocaleString('he-IL')}</td><td>{Math.round(s.principal).toLocaleString('he-IL')}</td><td style={{ color: '#F59E0B' }}>{Math.round(s.interest).toLocaleString('he-IL')}</td><td style={{ fontWeight: 600 }}>{Math.round(s.balance).toLocaleString('he-IL')}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: RETIREMENT
// ============================================================================
function RetirementTool() {
  const [currentAge, setCurrentAge] = useState(40);
  const [retireAge, setRetireAge] = useState(67);
  const [salary, setSalary] = useState(20000);
  const [currentSavings, setCurrentSavings] = useState(300000);
  const [monthlyContrib, setMonthlyContrib] = useState(1200);
  const [rate, setRate] = useState(6);
  const [result, setResult] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    calculate();
  }, [currentAge, retireAge, salary, currentSavings, monthlyContrib, rate]);

  const calculate = () => {
    const years = retireAge - currentAge;
    if (years <= 0) return;

    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    const FV = currentSavings * Math.pow(1 + rate / 100, years) +
      monthlyContrib * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const monthlyIncome = FV / 200; // מקדם המרה ממוצע
    const replacementRate = (monthlyIncome / salary) * 100;

    const chartData = [];
    let value = currentSavings;
    for (let y = 0; y <= years; y++) {
      chartData.push({ age: currentAge + y, ערך_צבירה: Math.round(value) });
      value = value * (1 + rate / 100) + monthlyContrib * 12;
    }

    setResult({ FV, monthlyIncome, replacementRate, chartData, years });
  };

  const getAIAnalysis = async () => {
    setAiLoading(true);
    setAiAnalysis('');
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: 'אתה יועץ פנסיוני ישראלי. קצר, ישיר, בעברית.',
          messages: [{
            role: 'user',
            content: `בן ${currentAge}, פורש ב-${retireAge}, משכורת ${salary} ₪, צבירה נוכחית ${currentSavings} ₪, הפקדה ${monthlyContrib} ₪/חודש.
תחזית: צבירה ${Math.round(result.FV / 1000)}K ₪, הכנסה חודשית ${Math.round(result.monthlyIncome)} ₪, שיעור תחלופה ${Math.round(result.replacementRate)}%.

עד 150 מילים, ללא הקדמות: האם זה מספק? 3 המלצות קונקרטיות לשיפור, ואזהרה חשובה.`,
          }],
        }),
      });
      const data = await response.json();
      setAiAnalysis(data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '');
    } catch (e) { setAiAnalysis('שגיאה'); }
    setAiLoading(false);
  };

  return (
    <ToolLayout icon={PiggyBank} title="מחשבון פרישה" subtitle="תחזית הכנסה חודשית ושיעור תחלופה" color="#10B981">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרטים אישיים</h3>

          <Field label={`גיל נוכחי: ${currentAge}`}><input type="range" min="20" max="64" value={currentAge} onChange={e => setCurrentAge(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`גיל פרישה: ${retireAge}`}><input type="range" min="55" max="75" value={retireAge} onChange={e => setRetireAge(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`משכורת חודשית: ${salary.toLocaleString('he-IL')} ₪`}><input type="range" min="5000" max="60000" step="500" value={salary} onChange={e => setSalary(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`צבירה נוכחית: ${currentSavings.toLocaleString('he-IL')} ₪`}><input type="range" min="0" max="3000000" step="10000" value={currentSavings} onChange={e => setCurrentSavings(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`הפקדה חודשית: ${monthlyContrib.toLocaleString('he-IL')} ₪`}><input type="range" min="0" max="8000" step="100" value={monthlyContrib} onChange={e => setMonthlyContrib(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`תשואה שנתית: ${rate}%`}><input type="range" min="2" max="10" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>

          <button className="btn btn-accent" onClick={getAIAnalysis} disabled={aiLoading || !result} style={{ width: '100%', marginTop: 12 }}>
            {aiLoading ? <><Loader2 size={14} className="spin" /> מנתח...</> : <><Sparkles size={14} /> ניתוח AI</>}
          </button>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="צבירה בפרישה" value={Math.round(result.FV / 1000).toLocaleString('he-IL') + 'K ₪'} color="#10B981" primary />
              <StatCard label="הכנסה חודשית" value={Math.round(result.monthlyIncome).toLocaleString('he-IL') + ' ₪'} />
              <StatCard label="שיעור תחלופה" value={Math.round(result.replacementRate) + '%'} color={result.replacementRate >= 70 ? '#10B981' : '#F59E0B'} />
              <StatCard label="שנים לפרישה" value={result.years} />
            </div>

            {aiAnalysis && (
              <div className="card fade-in" style={{ padding: 24, borderColor: '#10B981', background: 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, transparent 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Sparkles size={14} style={{ color: '#10B981' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#10B981' }}>ניתוח Claude</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{aiAnalysis}</div>
              </div>
            )}

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>צמיחת הצבירה עד פרישה</h3>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={result.chartData}>
                  <defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity={0.4} /><stop offset="100%" stopColor="#10B981" stopOpacity={0} /></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="age" fontSize={11} reversed />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Area type="monotone" dataKey="ערך_צבירה" stroke="#10B981" fill="url(#rg)" strokeWidth={2.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: COMPOUND INTEREST
// ============================================================================
function CompoundTool() {
  const [initial, setInitial] = useState(50000);
  const [monthly, setMonthly] = useState(2000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [inflation, setInflation] = useState(2.5);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const FV = initial * Math.pow(1 + rate / 100, years) + monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const invested = initial + monthly * months;
    const gains = FV - invested;
    const realValue = FV / Math.pow(1 + inflation / 100, years);

    const chartData = [];
    let value = initial;
    let totalInvested = initial;
    for (let y = 0; y <= years; y++) {
      chartData.push({
        year: y,
        סך_נצבר: Math.round(value),
        סך_הופקד: Math.round(totalInvested),
        רווח: Math.round(value - totalInvested),
      });
      if (y < years) {
        value = value * (1 + rate / 100) + monthly * 12;
        totalInvested += monthly * 12;
      }
    }

    setResult({ FV, invested, gains, realValue, chartData });
  }, [initial, monthly, rate, years, inflation]);

  return (
    <ToolLayout icon={TrendingUp} title="מחשבון ריבית דריבית" subtitle="תחזית צמיחת חיסכון עם הפקדות חודשיות ואינפלציה" color="#F59E0B">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרמטרים</h3>
          <Field label={`סכום התחלתי: ${initial.toLocaleString('he-IL')} ₪`}><input type="range" min="0" max="1000000" step="1000" value={initial} onChange={e => setInitial(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`הפקדה חודשית: ${monthly.toLocaleString('he-IL')} ₪`}><input type="range" min="0" max="10000" step="100" value={monthly} onChange={e => setMonthly(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`תשואה שנתית: ${rate}%`}><input type="range" min="1" max="15" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`תקופה: ${years} שנים`}><input type="range" min="1" max="40" value={years} onChange={e => setYears(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`אינפלציה: ${inflation}%`}><input type="range" min="0" max="6" step="0.1" value={inflation} onChange={e => setInflation(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="ערך סופי נומינלי" value={Math.round(result.FV / 1000).toLocaleString('he-IL') + 'K ₪'} color="#F59E0B" primary />
              <StatCard label="ערך ריאלי (אחרי אינפלציה)" value={Math.round(result.realValue / 1000).toLocaleString('he-IL') + 'K ₪'} />
              <StatCard label="סך הופקד" value={Math.round(result.invested / 1000).toLocaleString('he-IL') + 'K ₪'} />
              <StatCard label="רווח מצטבר" value={Math.round(result.gains / 1000).toLocaleString('he-IL') + 'K ₪'} color="#10B981" />
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>צמיחת החיסכון</h3>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={result.chartData}>
                  <defs>
                    <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity={0.5} /><stop offset="100%" stopColor="#10B981" stopOpacity={0} /></linearGradient>
                    <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3} /><stop offset="100%" stopColor="#F59E0B" stopOpacity={0} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="year" fontSize={11} reversed />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Area type="monotone" dataKey="סך_נצבר" stackId="1" stroke="#F59E0B" fill="url(#cg2)" strokeWidth={2} />
                  <Area type="monotone" dataKey="סך_הופקד" stackId="2" stroke="#5E5CE6" fill="transparent" strokeWidth={2} />
                  <Area type="monotone" dataKey="רווח" stackId="3" stroke="#10B981" fill="url(#cg1)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פירוט לפי שנים</h3>
              <div style={{ maxHeight: 320, overflowY: 'auto' }} className="scrollbar">
                <table>
                  <thead><tr><th>שנה</th><th>סך הופקד</th><th>ערך נצבר</th><th>רווח</th><th>אחוז רווח</th></tr></thead>
                  <tbody>
                    {result.chartData.map(r => (
                      <tr key={r.year}><td>{r.year}</td><td>{r.סך_הופקד.toLocaleString('he-IL')}</td><td style={{ fontWeight: 600 }}>{r.סך_נצבר.toLocaleString('he-IL')}</td><td style={{ color: '#10B981' }}>{r.רווח.toLocaleString('he-IL')}</td><td>{r.סך_הופקד > 0 ? ((r.רווח / r.סך_הופקד) * 100).toFixed(1) + '%' : '-'}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: PORTFOLIO
// ============================================================================
function PortfolioTool() {
  const [stocks, setStocks] = useState(60);
  const [bonds, setBonds] = useState(30);
  const [cash, setCash] = useState(10);
  const [amount, setAmount] = useState(500000);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const total = stocks + bonds + cash;
    if (total === 0) return;

    const expectedReturn = (stocks * 0.08 + bonds * 0.035 + cash * 0.04) / total;
    const volatility = (stocks * 0.16 + bonds * 0.05 + cash * 0.005) / total;

    const pieData = [
      { name: 'מניות', value: stocks, color: '#5E5CE6' },
      { name: 'אגרות חוב', value: bonds, color: '#F59E0B' },
      { name: 'מזומן/מק"מ', value: cash, color: '#10B981' },
    ];

    const projection = [];
    for (let y = 0; y <= 20; y++) {
      projection.push({
        year: y,
        צפי: Math.round(amount * Math.pow(1 + expectedReturn, y)),
        תרחיש_טוב: Math.round(amount * Math.pow(1 + expectedReturn + volatility * 0.3, y)),
        תרחיש_רע: Math.round(amount * Math.pow(1 + expectedReturn - volatility * 0.3, y)),
      });
    }

    setResult({ expectedReturn, volatility, pieData, projection });
  }, [stocks, bonds, cash, amount]);

  const normalize = (setter, newVal, others) => {
    const diff = newVal - (100 - others.reduce((a, b) => a + b, 0));
    setter(newVal);
  };

  return (
    <ToolLayout icon={BarChart3} title="מחשבון תיק השקעות" subtitle="בחינת פיזור סיכון ותחזית תשואה" color="#EF4444">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>הרכב התיק</h3>
          <Field label={`סכום התיק: ${amount.toLocaleString('he-IL')} ₪`}><input type="range" min="10000" max="5000000" step="10000" value={amount} onChange={e => setAmount(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`מניות: ${stocks}%`}><input type="range" min="0" max="100" value={stocks} onChange={e => setStocks(+e.target.value)} style={{ padding: 0, height: 6, accentColor: '#5E5CE6' }} /></Field>
          <Field label={`אגרות חוב: ${bonds}%`}><input type="range" min="0" max="100" value={bonds} onChange={e => setBonds(+e.target.value)} style={{ padding: 0, height: 6, accentColor: '#F59E0B' }} /></Field>
          <Field label={`מזומן: ${cash}%`}><input type="range" min="0" max="100" value={cash} onChange={e => setCash(+e.target.value)} style={{ padding: 0, height: 6, accentColor: '#10B981' }} /></Field>
          <div style={{ padding: '8px 12px', background: stocks + bonds + cash === 100 ? '#10B98115' : '#EF444415', borderRadius: 8, fontSize: 12, fontWeight: 600, color: stocks + bonds + cash === 100 ? '#10B981' : '#EF4444', textAlign: 'center', marginTop: 12 }}>
            סה"כ: {stocks + bonds + cash}% {stocks + bonds + cash !== 100 && '(צריך 100%)'}
          </div>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="תשואה שנתית צפויה" value={(result.expectedReturn * 100).toFixed(2) + '%'} color="#EF4444" primary />
              <StatCard label="תנודתיות" value={(result.volatility * 100).toFixed(2) + '%'} />
              <StatCard label="ערך בעוד 10 שנים" value={Math.round(amount * Math.pow(1 + result.expectedReturn, 10) / 1000) + 'K ₪'} color="#10B981" />
              <StatCard label="יחס שארפ" value={((result.expectedReturn - 0.04) / result.volatility).toFixed(2)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>הרכב התיק</h3>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie data={result.pieData} dataKey="value" innerRadius={60} outerRadius={100} paddingAngle={2} label={e => `${e.name} ${e.value}%`}>
                      {result.pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                    <Tooltip formatter={v => v + '%'} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>תרחישי תחזית 20 שנים</h3>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={result.projection}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                    <XAxis dataKey="year" fontSize={11} reversed />
                    <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                    <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="תרחיש_טוב" stroke="#10B981" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="צפי" stroke="#5E5CE6" strokeWidth={2.5} dot={false} />
                    <Line type="monotone" dataKey="תרחיש_רע" stroke="#EF4444" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: TAX
// ============================================================================
function TaxTool() {
  const [salary, setSalary] = useState(15000);
  const [children, setChildren] = useState(2);
  const [married, setMarried] = useState(true);
  const [studyFund, setStudyFund] = useState(1000);
  const [donations, setDonations] = useState(0);
  const [periphery, setPeriphery] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // מדרגות מס 2026 (משוער)
    const brackets = [
      { limit: 6450, rate: 0.10 },
      { limit: 9240, rate: 0.14 },
      { limit: 14840, rate: 0.20 },
      { limit: 20620, rate: 0.31 },
      { limit: 42910, rate: 0.35 },
      { limit: 55270, rate: 0.47 },
      { limit: Infinity, rate: 0.50 },
    ];

    const monthlyIncome = salary;
    let tax = 0;
    let prev = 0;
    for (const b of brackets) {
      if (monthlyIncome > prev) {
        const taxable = Math.min(monthlyIncome - prev, b.limit - prev);
        tax += taxable * b.rate;
        prev = b.limit;
      }
    }

    // נקודות זיכוי
    let points = 2.25;
    if (married) points += 0.5;
    points += children * 0.5;
    if (periphery) points += 0.5;
    const creditPerMonth = points * 250;

    // הפקדה לקרן השתלמות - זיכוי מס
    const studyFundAnnual = studyFund * 12;
    const studyFundSaving = Math.min(studyFundAnnual, 18480) * 0.35;

    // תרומות
    const donationCredit = Math.min(donations * 0.35, salary * 12 * 0.3);

    const taxAfterCredit = Math.max(0, tax - creditPerMonth);
    const annualTax = taxAfterCredit * 12;
    const annualSavings = studyFundSaving + donationCredit;

    const net = salary - taxAfterCredit - salary * 0.12; // ביטוח לאומי + בריאות משוער

    setResult({
      grossTax: tax,
      points,
      creditPerMonth,
      taxAfterCredit,
      annualTax,
      annualSavings,
      net,
      effectiveRate: (taxAfterCredit / salary) * 100,
      studyFundSaving,
      donationCredit,
    });
  }, [salary, children, married, studyFund, donations, periphery]);

  return (
    <ToolLayout icon={Calculator} title="אופטימיזציית מס" subtitle="חישוב מס הכנסה, נקודות זיכוי והחזרים פוטנציאליים" color="#8B5CF6">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>הנתונים שלך</h3>
          <Field label={`משכורת חודשית: ${salary.toLocaleString('he-IL')} ₪`}><input type="range" min="3000" max="60000" step="500" value={salary} onChange={e => setSalary(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`ילדים: ${children}`}><input type="range" min="0" max="10" value={children} onChange={e => setChildren(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`הפקדה לקרן השתלמות: ${studyFund} ₪/ח׳`}><input type="range" min="0" max="2000" step="50" value={studyFund} onChange={e => setStudyFund(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`תרומות שנתיות: ${donations.toLocaleString('he-IL')} ₪`}><input type="range" min="0" max="50000" step="500" value={donations} onChange={e => setDonations(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14 }}>
              <input type="checkbox" checked={married} onChange={e => setMarried(e.target.checked)} style={{ width: 'auto' }} /> נשוי/אה
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14 }}>
              <input type="checkbox" checked={periphery} onChange={e => setPeriphery(e.target.checked)} style={{ width: 'auto' }} /> תושב פריפריה
            </label>
          </div>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="מס ברוטו חודשי" value={Math.round(result.grossTax).toLocaleString('he-IL') + ' ₪'} color="#EF4444" />
              <StatCard label="אחרי זיכוי" value={Math.round(result.taxAfterCredit).toLocaleString('he-IL') + ' ₪'} color="#8B5CF6" primary />
              <StatCard label="נטו משוער" value={Math.round(result.net).toLocaleString('he-IL') + ' ₪'} color="#10B981" />
              <StatCard label="שיעור מס אפקטיבי" value={result.effectiveRate.toFixed(1) + '%'} />
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פירוט הזיכויים וההחזרים</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <InfoRow label="נקודות זיכוי" value={result.points.toFixed(2)} />
                <InfoRow label="זיכוי חודשי" value={Math.round(result.creditPerMonth).toLocaleString('he-IL') + ' ₪'} />
                <InfoRow label="חיסכון מס מקרן השתלמות" value={Math.round(result.studyFundSaving).toLocaleString('he-IL') + ' ₪'} color="#10B981" />
                <InfoRow label="זיכוי מתרומות" value={Math.round(result.donationCredit).toLocaleString('he-IL') + ' ₪'} color="#10B981" />
                <InfoRow label="סך מס שנתי משוער" value={Math.round(result.annualTax).toLocaleString('he-IL') + ' ₪'} color="#EF4444" />
                <InfoRow label="סך החזר שנתי צפוי" value={Math.round(result.annualSavings).toLocaleString('he-IL') + ' ₪'} color="#10B981" bold />
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(139,92,246,0.04) 0%, transparent 100%)', borderColor: '#8B5CF6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Lightbulb size={16} style={{ color: '#8B5CF6' }} />
                <strong style={{ color: '#8B5CF6', fontSize: 13 }}>טיפים לאופטימיזציה</strong>
              </div>
              <ul style={{ paddingRight: 20, margin: 0, fontSize: 14, lineHeight: 1.8, color: 'var(--text)' }}>
                <li>הגדלת הפקדה לקרן השתלמות עד תקרה של 18,480 ₪ תחסוך עוד {Math.round((Math.min(18480, 18480 - studyFund * 12)) * 0.35).toLocaleString('he-IL')} ₪ במס</li>
                <li>הגשת טופס 135 לרשות המיסים יכולה להחזיר מס מהשנים האחרונות</li>
                <li>תרומות מעבר ל-190 ₪ לשנה מזכות ב-35% החזר מס</li>
                <li>הוצאות רפואיות מעל 12.5% מההכנסה השנתית מזכות בזיכוי</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: DEBT
// ============================================================================
function DebtTool() {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(8);
  const [months, setMonths] = useState(36);
  const [extraPayment, setExtraPayment] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const r = rate / 100 / 12;
    const basePmt = (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

    // Without extra
    const totalBase = basePmt * months;
    const interestBase = totalBase - amount;

    // With extra
    let balance = amount;
    let month = 0;
    let totalInterest = 0;
    const schedule = [];
    while (balance > 0 && month < 600) {
      month++;
      const interestPart = balance * r;
      const principalPart = Math.min(balance, basePmt + extraPayment - interestPart);
      balance -= principalPart;
      totalInterest += interestPart;
      schedule.push({ month, payment: basePmt + extraPayment, principal: principalPart, interest: interestPart, balance: Math.max(0, balance) });
      if (balance <= 0) break;
    }

    const interestSaved = interestBase - totalInterest;
    const monthsSaved = months - month;

    setResult({ basePmt, totalBase, interestBase, monthsReal: month, totalInterest, interestSaved, monthsSaved, schedule });
  }, [amount, rate, months, extraPayment]);

  return (
    <ToolLayout icon={CreditCard} title="מנהל חובות" subtitle="תכנון תשלומי הלוואה עם אסטרטגיית תשלום מואץ" color="#EC4899">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרטי ההלוואה</h3>
          <Field label={`סכום: ${amount.toLocaleString('he-IL')} ₪`}><input type="range" min="5000" max="500000" step="1000" value={amount} onChange={e => setAmount(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`ריבית שנתית: ${rate}%`}><input type="range" min="1" max="20" step="0.25" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`חודשי פירעון: ${months}`}><input type="range" min="6" max="120" value={months} onChange={e => setMonths(+e.target.value)} style={{ padding: 0, height: 6 }} /></Field>
          <Field label={`תוספת תשלום חודשית: ${extraPayment.toLocaleString('he-IL')} ₪`} hint="כמה נוסף תשלם מעבר לתשלום הרגיל">
            <input type="range" min="0" max="5000" step="100" value={extraPayment} onChange={e => setExtraPayment(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="תשלום חודשי בסיסי" value={Math.round(result.basePmt).toLocaleString('he-IL') + ' ₪'} primary color="#EC4899" />
              <StatCard label={extraPayment > 0 ? 'תשלום חודשי כולל' : 'סך ריבית'} value={extraPayment > 0 ? Math.round(result.basePmt + extraPayment).toLocaleString('he-IL') + ' ₪' : Math.round(result.interestBase).toLocaleString('he-IL') + ' ₪'} />
              {extraPayment > 0 && <StatCard label="חודשים חסוכים" value={result.monthsSaved} color="#10B981" />}
              {extraPayment > 0 && <StatCard label="ריבית חסוכה" value={Math.round(result.interestSaved).toLocaleString('he-IL') + ' ₪'} color="#10B981" />}
            </div>

            {extraPayment > 0 && (
              <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(16,185,129,0.06) 0%, transparent 100%)', borderColor: '#10B981' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                  <strong style={{ color: '#10B981', fontSize: 13 }}>חיסכון אמיתי</strong>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                  על ידי תשלום של {extraPayment.toLocaleString('he-IL')} ₪ נוספים בכל חודש, תסיים את ההלוואה {result.monthsSaved} חודשים מוקדם יותר
                  ותחסוך {Math.round(result.interestSaved).toLocaleString('he-IL')} ₪ בריבית. זו תשואה שקשה לקבל בהשקעה רגילה.
                </p>
              </div>
            )}

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>לוח תשלומים</h3>
              <div style={{ maxHeight: 320, overflowY: 'auto' }} className="scrollbar">
                <table>
                  <thead><tr><th>חודש</th><th>תשלום</th><th>קרן</th><th>ריבית</th><th>יתרה</th></tr></thead>
                  <tbody>
                    {result.schedule.filter((s, i) => i % 3 === 0 || i === result.schedule.length - 1).map(s => (
                      <tr key={s.month}><td>{s.month}</td><td>{Math.round(s.payment).toLocaleString('he-IL')}</td><td>{Math.round(s.principal).toLocaleString('he-IL')}</td><td style={{ color: '#EC4899' }}>{Math.round(s.interest).toLocaleString('he-IL')}</td><td style={{ fontWeight: 600 }}>{Math.round(s.balance).toLocaleString('he-IL')}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: STUDY FUND (קרן השתלמות)
// ============================================================================
function StudyFundTool() {
  const [salary, setSalary] = useState(15000);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [employeePercent, setEmployeePercent] = useState(2.5);
  const [employerPercent, setEmployerPercent] = useState(7.5);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(6);
  const [taxBracket, setTaxBracket] = useState(35);
  const [result, setResult] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const SALARY_CAP = 15712; // תקרת משכורת מוטבת 2026
    const cappedSalary = Math.min(salary, SALARY_CAP);

    const monthlyEmployee = cappedSalary * (employeePercent / 100);
    const monthlyEmployer = cappedSalary * (employerPercent / 100);
    const monthlyTotal = monthlyEmployee + monthlyEmployer;
    const annualTotal = monthlyTotal * 12;

    // חישוב הטבות מס
    const employerTaxBenefit = Math.min(cappedSalary * (employerPercent / 100) * 12, 18480) * (taxBracket / 100);
    // על רווחים - פטור ממס רווחי הון (25%) עד תקרה
    const taxSavingOnGains = 0.25; // שיעור מס רווחי הון שנחסך

    // חישוב צבירה
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const FV = currentBalance * Math.pow(1 + rate / 100, years) +
      monthlyTotal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const totalContributions = currentBalance + monthlyTotal * months;
    const gains = FV - totalContributions;
    const gainsAfterTaxBenefit = gains * taxSavingOnGains; // חיסכון ממס רווחי הון

    // גרף צמיחה
    const chartData = [];
    let value = currentBalance;
    let totalPut = currentBalance;
    for (let y = 0; y <= years; y++) {
      chartData.push({
        year: y,
        צבירה: Math.round(value),
        הפקדות_מצטברות: Math.round(totalPut),
        רווחים: Math.round(value - totalPut),
      });
      if (y < years) {
        value = value * (1 + rate / 100) + annualTotal;
        totalPut += annualTotal;
      }
    }

    // מועד נזילות - 6 שנים מהפתיחה (נניח שהחל מעכשיו)
    const liquidityDate = new Date();
    liquidityDate.setFullYear(liquidityDate.getFullYear() + 6);

    setResult({
      monthlyEmployee, monthlyEmployer, monthlyTotal, annualTotal,
      FV, totalContributions, gains, gainsAfterTaxBenefit,
      employerTaxBenefit, chartData, liquidityDate,
      exceedsCap: salary > SALARY_CAP,
      capExcess: Math.max(0, salary - SALARY_CAP),
    });
  }, [salary, currentBalance, employeePercent, employerPercent, years, rate, taxBracket]);

  const getAIAnalysis = async () => {
    setAiLoading(true);
    setAiAnalysis('');
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          system: 'אתה יועץ פיננסי ישראלי מומחה בקרנות השתלמות. קצר, ישיר, בעברית.',
          messages: [{
            role: 'user',
            content: `קרן השתלמות: משכורת ${salary} ₪, יתרה נוכחית ${currentBalance} ₪, הפקדה חודשית ${Math.round(result.monthlyTotal)} ₪ (עובד ${employeePercent}% + מעביד ${employerPercent}%), תקופה ${years} שנים, מדרגת מס ${taxBracket}%.
תחזית: צבירה ${Math.round(result.FV)} ₪, רווחים ${Math.round(result.gains)} ₪, חיסכון מס מרווחים ${Math.round(result.gainsAfterTaxBenefit)} ₪.

עד 200 מילים, ללא הקדמות:
1. האם הקרן מנוצלת אופטימלית
2. 3 פעולות לשיפור (הסטת מסלולים, ניוד, משיכה חכמה)
3. האם כדאי למשוך בנזילות או להשאיר - כולל ניתוח מס`,
          }],
        }),
      });
      const data = await response.json();
      setAiAnalysis(data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '');
    } catch (e) { setAiAnalysis('שגיאה בניתוח'); }
    setAiLoading(false);
  };

  return (
    <ToolLayout icon={Wallet} title="מחשבון קרן השתלמות" subtitle="חישוב צבירה, הטבות מס ומועד נזילות" color="#06B6D4">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרטי הקרן</h3>

          <Field label={`משכורת ברוטו: ${salary.toLocaleString('he-IL')} ₪`} hint="תקרת משכורת מוטבת: 15,712 ₪">
            <input type="range" min="5000" max="40000" step="250" value={salary} onChange={e => setSalary(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`יתרה נוכחית: ${currentBalance.toLocaleString('he-IL')} ₪`}>
            <input type="range" min="0" max="1000000" step="5000" value={currentBalance} onChange={e => setCurrentBalance(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`הפקדת עובד: ${employeePercent}%`} hint="בין 0% ל-2.5%">
            <input type="range" min="0" max="2.5" step="0.5" value={employeePercent} onChange={e => setEmployeePercent(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`הפקדת מעביד: ${employerPercent}%`} hint="בין 0% ל-7.5%">
            <input type="range" min="0" max="7.5" step="0.5" value={employerPercent} onChange={e => setEmployerPercent(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`תשואה שנתית צפויה: ${rate}%`}>
            <input type="range" min="2" max="12" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`תקופת חיסכון: ${years} שנים`}>
            <input type="range" min="1" max="30" value={years} onChange={e => setYears(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`מדרגת מס שולית: ${taxBracket}%`}>
            <input type="range" min="10" max="50" step="1" value={taxBracket} onChange={e => setTaxBracket(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <button className="btn btn-accent" onClick={getAIAnalysis} disabled={aiLoading || !result} style={{ width: '100%', marginTop: 12 }}>
            {aiLoading ? <><Loader2 size={14} className="spin" /> מנתח...</> : <><Sparkles size={14} /> ניתוח AI</>}
          </button>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {result.exceedsCap && (
              <div className="card" style={{ padding: 16, background: '#F59E0B10', borderColor: '#F59E0B', display: 'flex', alignItems: 'center', gap: 12 }}>
                <AlertTriangle size={18} style={{ color: '#F59E0B', flexShrink: 0 }} />
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                  המשכורת שלך עולה על תקרת המשכורת המוטבת (15,712 ₪). על {result.capExcess.toLocaleString('he-IL')} ₪ לא תקבל הטבות מס על הפקדת המעביד - חלק זה יחויב במס כשכר.
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="צבירה בסוף התקופה" value={Math.round(result.FV / 1000).toLocaleString('he-IL') + 'K ₪'} color="#06B6D4" primary />
              <StatCard label="סך הפקדות" value={Math.round(result.totalContributions / 1000).toLocaleString('he-IL') + 'K ₪'} />
              <StatCard label="רווחים מצטברים" value={Math.round(result.gains / 1000).toLocaleString('he-IL') + 'K ₪'} color="#10B981" />
              <StatCard label="הפקדה חודשית כוללת" value={Math.round(result.monthlyTotal).toLocaleString('he-IL') + ' ₪'} />
            </div>

            {/* הטבות מס */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>הטבות מס - השווי הסמוי של הקרן</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <InfoRow label="חיסכון מס שנתי על הפקדת מעביד" value={Math.round(result.employerTaxBenefit).toLocaleString('he-IL') + ' ₪'} color="#10B981" bold />
                <InfoRow label="חיסכון מס רווחי הון בתום התקופה" value={Math.round(result.gainsAfterTaxBenefit).toLocaleString('he-IL') + ' ₪'} color="#10B981" bold />
                <InfoRow label="הפקדה חודשית - עובד" value={Math.round(result.monthlyEmployee).toLocaleString('he-IL') + ' ₪'} />
                <InfoRow label="הפקדה חודשית - מעביד" value={Math.round(result.monthlyEmployer).toLocaleString('he-IL') + ' ₪'} />
                <InfoRow label="מועד נזילות ראשון" value={result.liquidityDate.toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })} color="#06B6D4" />
                <InfoRow label="תשואה נטו משוקללת" value={((result.gains / result.totalContributions) * 100).toFixed(1) + '%'} bold />
              </div>
            </div>

            {aiAnalysis && (
              <div className="card fade-in" style={{ padding: 24, borderColor: '#06B6D4', background: 'linear-gradient(180deg, rgba(6,182,212,0.04) 0%, transparent 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Sparkles size={14} style={{ color: '#06B6D4' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#06B6D4' }}>ניתוח Claude</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{aiAnalysis}</div>
              </div>
            )}

            {/* גרף */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>צמיחת הקרן</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={result.chartData}>
                  <defs>
                    <linearGradient id="sfg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#06B6D4" stopOpacity={0.4} /><stop offset="100%" stopColor="#06B6D4" stopOpacity={0} /></linearGradient>
                    <linearGradient id="sfg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity={0.3} /><stop offset="100%" stopColor="#10B981" stopOpacity={0} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="year" fontSize={11} reversed label={{ value: 'שנה', position: 'insideBottom', offset: -5, fontSize: 11 }} />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Area type="monotone" dataKey="צבירה" stroke="#06B6D4" fill="url(#sfg1)" strokeWidth={2.5} />
                  <Area type="monotone" dataKey="הפקדות_מצטברות" stroke="#5E5CE6" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                  <Area type="monotone" dataKey="רווחים" stroke="#10B981" fill="url(#sfg2)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* פירוט טבלאי */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פירוט שנתי</h3>
              <div style={{ maxHeight: 320, overflowY: 'auto' }} className="scrollbar">
                <table>
                  <thead><tr><th>שנה</th><th>הפקדות</th><th>צבירה</th><th>רווחים</th><th>% רווח</th></tr></thead>
                  <tbody>
                    {result.chartData.map(r => (
                      <tr key={r.year}>
                        <td>{r.year}</td>
                        <td>{r.הפקדות_מצטברות.toLocaleString('he-IL')}</td>
                        <td style={{ fontWeight: 600 }}>{r.צבירה.toLocaleString('he-IL')}</td>
                        <td style={{ color: '#10B981' }}>{r.רווחים.toLocaleString('he-IL')}</td>
                        <td>{r.הפקדות_מצטברות > 0 ? ((r.רווחים / r.הפקדות_מצטברות) * 100).toFixed(1) + '%' : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: COMPARE REPORTS
// ============================================================================
function CompareReports() {
  const [doc1, setDoc1] = useState(null);
  const [doc2, setDoc2] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [label1, setLabel1] = useState('דוח A');
  const [label2, setLabel2] = useState('דוח B');
  const [docType, setDocType] = useState('חשבונית חשמל');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fileToBase64 = (file) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

  const compare = async () => {
    if ((!doc1 && !text1.trim()) || (!doc2 && !text2.trim())) return;
    setLoading(true);
    setResult(null);

    try {
      const content = [];

      // Doc 1
      if (doc1) {
        const b64 = await fileToBase64(doc1);
        content.push({ type: 'image', source: { type: 'base64', media_type: doc1.type, data: b64 } });
        content.push({ type: 'text', text: `זה "${label1}" - ${docType}.` });
      } else {
        content.push({ type: 'text', text: `${label1} (${docType}):\n${text1}\n` });
      }

      // Doc 2
      if (doc2) {
        const b64 = await fileToBase64(doc2);
        content.push({ type: 'image', source: { type: 'base64', media_type: doc2.type, data: b64 } });
        content.push({ type: 'text', text: `זה "${label2}" - ${docType}.` });
      } else {
        content.push({ type: 'text', text: `${label2} (${docType}):\n${text2}\n` });
      }

      content.push({
        type: 'text',
        text: `השווה בין שני הדוחות. החזר JSON נקי בלי markdown:
{
  "summary": "סיכום כללי של ההשוואה בשתי משפטים",
  "winner": "${label1}" או "${label2}" או "שווה",
  "winnerReason": "למה הדוח הזה עדיף בקצרה",
  "comparison": [
    {"field": "סוג המדד", "value1": "ערך מ${label1}", "value2": "ערך מ${label2}", "better": "1" או "2" או "tie"}
  ],
  "keyDifferences": ["הבדל 1", "הבדל 2", "הבדל 3"],
  "recommendations": ["המלצה 1", "המלצה 2"],
  "savingsPotential": "סכום חיסכון פוטנציאלי אם יש"
}

חשוב: החזר 5-8 שדות ב-comparison, טקסט בעברית, רק JSON.`
      });

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          system: 'אתה אנליסט פיננסי ישראלי. תחזיר JSON נקי בלבד, בלי markdown ובלי הקדמות.',
          messages: [{ role: 'user', content }],
        }),
      });

      const data = await response.json();
      const rawText = data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '';
      const clean = rawText.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
    } catch (e) {
      console.error(e);
      setResult({ error: 'שגיאה בהשוואה. ודא שהדוחות ברורים וכוללים מידע להשוואה.' });
    }
    setLoading(false);
  };

  const FileDropzone = ({ file, setFile, text, setText, label, setLabel, color }) => (
    <div className="card" style={{ padding: 24 }}>
      <input
        value={label}
        onChange={e => setLabel(e.target.value)}
        style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, background: 'transparent', border: 'none', padding: 0, color }}
      />

      <label style={{ display: 'block', border: '2px dashed var(--border)', borderRadius: 12, padding: 24, textAlign: 'center', cursor: 'pointer', background: file ? color + '10' : 'var(--bg-subtle)', marginBottom: 12, transition: 'all 0.2s' }}>
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
        {file ? (
          <>
            <FileCheck size={24} style={{ color, marginBottom: 6 }} />
            <div style={{ fontSize: 13, fontWeight: 600, color }}>{file.name}</div>
          </>
        ) : (
          <>
            <Upload size={24} style={{ color: 'var(--text-subtle)', marginBottom: 6 }} />
            <div style={{ fontSize: 13, fontWeight: 600 }}>העלה קובץ</div>
          </>
        )}
      </label>

      <div style={{ textAlign: 'center', margin: '8px 0', color: 'var(--text-subtle)', fontSize: 11 }}>או</div>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
        placeholder="הדבק טקסט מהדוח..."
        style={{ resize: 'vertical', fontSize: 13 }}
      />
    </div>
  );

  return (
    <div className="fade-in" style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 80px' }}>
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: '#0891B215', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FileCheck size={24} style={{ color: '#0891B2' }} />
        </div>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>השוואת דוחות</h1>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>העלה שני דוחות פיננסיים וקבל ניתוח השוואתי</div>
        </div>
      </div>

      {/* Type selector */}
      <div className="card" style={{ padding: 20, marginBottom: 24 }}>
        <Field label="סוג הדוחות להשוואה">
          <select value={docType} onChange={e => setDocType(e.target.value)}>
            <option>חשבונית חשמל</option>
            <option>חשבונית מים</option>
            <option>חשבונית סלולר</option>
            <option>פוליסת ביטוח רכב</option>
            <option>פוליסת ביטוח דירה</option>
            <option>פוליסת ביטוח בריאות</option>
            <option>דוח קרן השתלמות</option>
            <option>דוח קרן פנסיה</option>
            <option>דוח קופת גמל</option>
            <option>דוח חשבון בנק</option>
            <option>הצעת משכנתא</option>
            <option>תלוש שכר</option>
            <option>אחר</option>
          </select>
        </Field>
      </div>

      {/* Two documents side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
        <FileDropzone file={doc1} setFile={setDoc1} text={text1} setText={setText1} label={label1} setLabel={setLabel1} color="#5E5CE6" />
        <FileDropzone file={doc2} setFile={setDoc2} text={text2} setText={setText2} label={label2} setLabel={setLabel2} color="#F59E0B" />
      </div>

      <button
        className="btn btn-accent"
        onClick={compare}
        disabled={loading || ((!doc1 && !text1.trim()) || (!doc2 && !text2.trim()))}
        style={{ width: '100%', padding: '14px 24px', fontSize: 15 }}
      >
        {loading ? <><Loader2 size={16} className="spin" /> משווה דוחות...</> : <><Sparkles size={16} /> השווה דוחות</>}
      </button>

      {/* Results */}
      {result?.error && (
        <div className="card" style={{ padding: 24, marginTop: 24, borderColor: '#EF4444', background: '#EF444410' }}>
          <AlertTriangle size={20} style={{ color: '#EF4444', marginBottom: 8 }} />
          <div style={{ color: '#EF4444', fontWeight: 600 }}>{result.error}</div>
        </div>
      )}

      {result && !result.error && (
        <div className="fade-in" style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Winner */}
          <div className="card" style={{ padding: 28, background: 'linear-gradient(135deg, rgba(8,145,178,0.08) 0%, transparent 100%)', borderColor: '#0891B2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <CheckCircle2 size={18} style={{ color: '#0891B2' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#0891B2', letterSpacing: 0.5 }}>הדוח המשתלם יותר</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
              {result.winner === 'שווה' ? '⚖️ הדוחות שווים' : `🏆 ${result.winner}`}
            </div>
            <div style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.6 }}>{result.winnerReason}</div>
            {result.savingsPotential && (
              <div style={{ marginTop: 16, padding: '10px 14px', background: '#10B98115', borderRadius: 8, display: 'inline-block' }}>
                <span style={{ fontSize: 11, color: '#10B981', fontWeight: 700, letterSpacing: 0.5 }}>חיסכון פוטנציאלי: </span>
                <strong style={{ fontSize: 14, color: '#10B981' }}>{result.savingsPotential}</strong>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="card" style={{ padding: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, letterSpacing: 0.5 }}>סיכום השוואה</div>
            <div style={{ fontSize: 15, lineHeight: 1.7 }}>{result.summary}</div>
          </div>

          {/* Comparison Table */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>השוואה מפורטת</h3>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>מדד</th>
                    <th style={{ color: '#5E5CE6' }}>{label1}</th>
                    <th style={{ color: '#F59E0B' }}>{label2}</th>
                    <th>עדיף</th>
                  </tr>
                </thead>
                <tbody>
                  {result.comparison?.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{row.field}</td>
                      <td style={{ background: row.better === '1' ? '#10B98108' : 'transparent', fontWeight: row.better === '1' ? 700 : 400 }}>{row.value1}</td>
                      <td style={{ background: row.better === '2' ? '#10B98108' : 'transparent', fontWeight: row.better === '2' ? 700 : 400 }}>{row.value2}</td>
                      <td>
                        {row.better === '1' && <span style={{ color: '#5E5CE6', fontWeight: 700 }}>{label1}</span>}
                        {row.better === '2' && <span style={{ color: '#F59E0B', fontWeight: 700 }}>{label2}</span>}
                        {row.better === 'tie' && <span style={{ color: 'var(--text-muted)' }}>שווה</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Differences */}
          {result.keyDifferences?.length > 0 && (
            <div className="card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Target size={16} style={{ color: '#F59E0B' }} />
                <strong style={{ fontSize: 13, color: '#F59E0B' }}>הבדלים מרכזיים</strong>
              </div>
              <ul style={{ margin: 0, paddingRight: 20, fontSize: 14, lineHeight: 1.9 }}>
                {result.keyDifferences.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations?.length > 0 && (
            <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(16,185,129,0.04) 0%, transparent 100%)', borderColor: '#10B981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <Lightbulb size={16} style={{ color: '#10B981' }} />
                <strong style={{ fontSize: 13, color: '#10B981' }}>המלצות פעולה</strong>
              </div>
              <ul style={{ margin: 0, paddingRight: 20, fontSize: 14, lineHeight: 1.9 }}>
                {result.recommendations.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// TOOL: GEMEL LEHASHKA'A (גמל להשקעה)
// ============================================================================
function GemelTool() {
  const [currentAge, setCurrentAge] = useState(45);
  const [initialDeposit, setInitialDeposit] = useState(50000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(1500);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(6);
  const [useTikun190, setUseTikun190] = useState(false);
  const [result, setResult] = useState(null);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const ANNUAL_CAP = 81711; // תקרת הפקדה שנתית לגמל להשקעה 2026
    const MONTHLY_CAP = ANNUAL_CAP / 12;

    const effectiveMonthly = Math.min(monthlyDeposit, MONTHLY_CAP);
    const exceedsCap = monthlyDeposit > MONTHLY_CAP;

    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    const FV = initialDeposit * Math.pow(1 + rate / 100, years) +
      effectiveMonthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const totalDeposited = initialDeposit + effectiveMonthly * months;
    const gains = FV - totalDeposited;

    // מס רווחי הון על רווחים ריאליים: 25%
    // אם תיקון 190 - פטור ממס אם נמשך כקצבה אחרי גיל 60
    const ageAtWithdrawal = currentAge + years;
    const canUseAsPension = ageAtWithdrawal >= 60;

    const capitalGainsTax = gains * 0.25;
    const netWithdrawalRegular = FV - capitalGainsTax;

    // תיקון 190: משיכה כקצבה = מס 15% על רווחים (במקום 25%)
    const tikun190Tax = useTikun190 && canUseAsPension ? gains * 0.15 : capitalGainsTax;
    const netWithdrawalTikun190 = FV - tikun190Tax;

    const taxSaving = useTikun190 && canUseAsPension ? capitalGainsTax - tikun190Tax : 0;

    // גרף
    const chartData = [];
    let value = initialDeposit;
    let deposited = initialDeposit;
    for (let y = 0; y <= years; y++) {
      chartData.push({
        year: y,
        צבירה: Math.round(value),
        הפקדות: Math.round(deposited),
        רווחים: Math.round(value - deposited),
      });
      if (y < years) {
        value = value * (1 + rate / 100) + effectiveMonthly * 12;
        deposited += effectiveMonthly * 12;
      }
    }

    setResult({
      FV, totalDeposited, gains, capitalGainsTax, netWithdrawalRegular,
      tikun190Tax, netWithdrawalTikun190, taxSaving, canUseAsPension,
      ageAtWithdrawal, chartData, exceedsCap, effectiveMonthly,
    });
  }, [currentAge, initialDeposit, monthlyDeposit, years, rate, useTikun190]);

  const getAIAnalysis = async () => {
    setAiLoading(true);
    setAiAnalysis('');
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          system: 'אתה יועץ פיננסי ישראלי מומחה בגמל להשקעה ותיקון 190. קצר, ישיר, בעברית.',
          messages: [{
            role: 'user',
            content: `גמל להשקעה: גיל נוכחי ${currentAge}, הפקדה חודשית ${monthlyDeposit} ₪, הפקדה ראשונית ${initialDeposit} ₪, תקופה ${years} שנים.
תחזית: צבירה ${Math.round(result.FV)} ₪, רווחים ${Math.round(result.gains)} ₪. גיל במשיכה: ${result.ageAtWithdrawal}.
מס במשיכה רגילה: ${Math.round(result.capitalGainsTax)} ₪. חיסכון בתיקון 190: ${Math.round(result.taxSaving)} ₪.

עד 200 מילים, ללא הקדמות:
1. האם גמל להשקעה מתאים למטרה זו (כולל השוואה קצרה לקרן השתלמות וקופת גמל)
2. מתי משתלם תיקון 190 ומתי לא
3. אסטרטגיית משיכה אופטימלית`,
          }],
        }),
      });
      const data = await response.json();
      setAiAnalysis(data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '');
    } catch (e) { setAiAnalysis('שגיאה בניתוח'); }
    setAiLoading(false);
  };

  return (
    <ToolLayout icon={Landmark} title="מחשבון גמל להשקעה" subtitle="צבירה, תיקון 190, ואסטרטגיית משיכה" color="#14B8A6">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרמטרים</h3>

          <Field label={`גיל נוכחי: ${currentAge}`}>
            <input type="range" min="18" max="75" value={currentAge} onChange={e => setCurrentAge(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`הפקדה ראשונית: ${initialDeposit.toLocaleString('he-IL')} ₪`}>
            <input type="range" min="0" max="500000" step="5000" value={initialDeposit} onChange={e => setInitialDeposit(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`הפקדה חודשית: ${monthlyDeposit.toLocaleString('he-IL')} ₪`} hint="תקרה שנתית: 81,711 ₪">
            <input type="range" min="0" max="8000" step="100" value={monthlyDeposit} onChange={e => setMonthlyDeposit(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`תקופה: ${years} שנים`}>
            <input type="range" min="1" max="40" value={years} onChange={e => setYears(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`תשואה שנתית: ${rate}%`}>
            <input type="range" min="2" max="12" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: '12px 14px', background: useTikun190 ? '#14B8A615' : 'var(--bg-subtle)', borderRadius: 10, marginBottom: 16, border: useTikun190 ? '1px solid #14B8A6' : '1px solid var(--border)' }}>
            <input type="checkbox" checked={useTikun190} onChange={e => setUseTikun190(e.target.checked)} style={{ width: 'auto' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>תיקון 190 - משיכה כקצבה</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>זמין מגיל 60 - מס מופחת</div>
            </div>
          </label>

          <button className="btn btn-accent" onClick={getAIAnalysis} disabled={aiLoading || !result} style={{ width: '100%' }}>
            {aiLoading ? <><Loader2 size={14} className="spin" /> מנתח...</> : <><Sparkles size={14} /> ניתוח AI</>}
          </button>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {result.exceedsCap && (
              <div className="card" style={{ padding: 16, background: '#F59E0B10', borderColor: '#F59E0B', display: 'flex', alignItems: 'center', gap: 12 }}>
                <AlertTriangle size={18} style={{ color: '#F59E0B', flexShrink: 0 }} />
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                  הפקדה חודשית חורגת מהתקרה השנתית (81,711 ₪ = 6,809 ₪ לחודש). החישוב מתבצע לפי התקרה בלבד - {Math.round(result.effectiveMonthly).toLocaleString('he-IL')} ₪ לחודש.
                </div>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="צבירה בסוף התקופה" value={Math.round(result.FV / 1000).toLocaleString('he-IL') + 'K ₪'} color="#14B8A6" primary />
              <StatCard label="סך הפקדות" value={Math.round(result.totalDeposited / 1000).toLocaleString('he-IL') + 'K ₪'} />
              <StatCard label="רווחים" value={Math.round(result.gains / 1000).toLocaleString('he-IL') + 'K ₪'} color="#10B981" />
              <StatCard label="גיל במשיכה" value={result.ageAtWithdrawal + ' שנים'} color={result.canUseAsPension ? '#14B8A6' : '#F59E0B'} />
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>תרחישי משיכה</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <div style={{ padding: 20, background: 'var(--bg-subtle)', borderRadius: 12, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: 0.5, marginBottom: 8 }}>משיכה רגילה (הונית)</div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{Math.round(result.netWithdrawalRegular).toLocaleString('he-IL')} ₪</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>מס רווחי הון 25%: -{Math.round(result.capitalGainsTax).toLocaleString('he-IL')} ₪</div>
                </div>
                <div style={{ padding: 20, background: result.canUseAsPension ? '#14B8A608' : 'var(--bg-subtle)', borderRadius: 12, border: result.canUseAsPension ? '1px solid #14B8A6' : '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#14B8A6', letterSpacing: 0.5, marginBottom: 8 }}>תיקון 190 (קצבה) {!result.canUseAsPension && '⚠️'}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, color: result.canUseAsPension ? '#14B8A6' : 'var(--text-muted)' }}>{Math.round(result.netWithdrawalTikun190).toLocaleString('he-IL')} ₪</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    {result.canUseAsPension ? `חיסכון מס: +${Math.round(result.taxSaving).toLocaleString('he-IL')} ₪` : 'לא זמין - דרוש גיל 60+'}
                  </div>
                </div>
              </div>
            </div>

            {aiAnalysis && (
              <div className="card fade-in" style={{ padding: 24, borderColor: '#14B8A6', background: 'linear-gradient(180deg, rgba(20,184,166,0.04) 0%, transparent 100%)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Sparkles size={14} style={{ color: '#14B8A6' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#14B8A6' }}>ניתוח Claude</span>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{aiAnalysis}</div>
              </div>
            )}

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>צמיחת הקרן</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={result.chartData}>
                  <defs>
                    <linearGradient id="gmg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14B8A6" stopOpacity={0.4} /><stop offset="100%" stopColor="#14B8A6" stopOpacity={0} /></linearGradient>
                    <linearGradient id="gmg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#10B981" stopOpacity={0.3} /><stop offset="100%" stopColor="#10B981" stopOpacity={0} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="year" fontSize={11} reversed />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Area type="monotone" dataKey="צבירה" stroke="#14B8A6" fill="url(#gmg1)" strokeWidth={2.5} />
                  <Area type="monotone" dataKey="הפקדות" stroke="#5E5CE6" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                  <Area type="monotone" dataKey="רווחים" stroke="#10B981" fill="url(#gmg2)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// TOOL: PORTFOLIO MANAGEMENT (ניהול תיקי השקעות)
// ============================================================================
function PortfolioMgmtTool() {
  const [amount, setAmount] = useState(1000000);
  const [years, setYears] = useState(10);
  const [grossReturn, setGrossReturn] = useState(7);
  const [mgmtFee, setMgmtFee] = useState(0.8);
  const [performanceFee, setPerformanceFee] = useState(0);
  const [tradingFees, setTradingFees] = useState(0.15);
  const [selfRoi, setSelfRoi] = useState(6);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // תיק מנוהל
    const totalAnnualFees = mgmtFee + performanceFee + tradingFees;
    const netReturnManaged = (grossReturn - totalAnnualFees) / 100;
    const managedFV = amount * Math.pow(1 + netReturnManaged, years);
    const managedGains = managedFV - amount;
    const totalFeesPaid = amount * Math.pow(1 + grossReturn / 100, years) - managedFV;

    // תיק עצמאי
    const selfFV = amount * Math.pow(1 + selfRoi / 100, years);
    const selfGains = selfFV - amount;

    // הפרש
    const diff = managedFV - selfFV;
    const managedIsBetter = diff > 0;

    // גרף השוואה
    const chartData = [];
    for (let y = 0; y <= years; y++) {
      chartData.push({
        year: y,
        תיק_מנוהל: Math.round(amount * Math.pow(1 + netReturnManaged, y)),
        תיק_עצמאי: Math.round(amount * Math.pow(1 + selfRoi / 100, y)),
        דמי_ניהול_מצטברים: Math.round(amount * Math.pow(1 + grossReturn / 100, y) - amount * Math.pow(1 + netReturnManaged, y)),
      });
    }

    // דמי ניהול שנתיים
    const annualFeeAmount = amount * (totalAnnualFees / 100);
    const effectiveFeeRate = totalFeesPaid / managedGains * 100; // אחוז דמי ניהול מתוך הרווח

    setResult({
      managedFV, managedGains, selfFV, selfGains, diff, managedIsBetter,
      totalFeesPaid, annualFeeAmount, effectiveFeeRate, chartData,
      netReturnManaged: netReturnManaged * 100,
      breakEvenGrossReturn: selfRoi + totalAnnualFees, // התשואה הגולמית שצריכה להיות כדי להשתוות לעצמאי
    });
  }, [amount, years, grossReturn, mgmtFee, performanceFee, tradingFees, selfRoi]);

  return (
    <ToolLayout icon={Building2} title="ניהול תיקי השקעות" subtitle="האם דמי הניהול מוצדקים? השוואה לתיק עצמאי" color="#6366F1">
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div className="card" style={{ padding: 24, position: 'sticky', top: 88 }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>פרמטרים</h3>

          <Field label={`סכום התיק: ${amount.toLocaleString('he-IL')} ₪`}>
            <input type="range" min="100000" max="10000000" step="50000" value={amount} onChange={e => setAmount(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`תקופה: ${years} שנים`}>
            <input type="range" min="1" max="30" value={years} onChange={e => setYears(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <div style={{ fontSize: 12, fontWeight: 700, color: '#6366F1', marginBottom: 12, marginTop: 20, letterSpacing: 0.5 }}>תיק מנוהל</div>

          <Field label={`תשואה גולמית צפויה: ${grossReturn}%`}>
            <input type="range" min="2" max="15" step="0.5" value={grossReturn} onChange={e => setGrossReturn(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`דמי ניהול שנתיים: ${mgmtFee}%`} hint="בד"כ 0.5%-1.5%">
            <input type="range" min="0" max="3" step="0.05" value={mgmtFee} onChange={e => setMgmtFee(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`דמי הצלחה: ${performanceFee}%`} hint="בד"כ 0%-20% מהרווח">
            <input type="range" min="0" max="2" step="0.05" value={performanceFee} onChange={e => setPerformanceFee(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <Field label={`עמלות מסחר: ${tradingFees}%`}>
            <input type="range" min="0" max="1" step="0.05" value={tradingFees} onChange={e => setTradingFees(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>

          <div style={{ fontSize: 12, fontWeight: 700, color: '#F59E0B', marginBottom: 12, marginTop: 20, letterSpacing: 0.5 }}>השוואה - תיק עצמאי</div>

          <Field label={`תשואת ETFs עצמאי: ${selfRoi}%`} hint="תשואה ממוצעת של ETFs זולים">
            <input type="range" min="2" max="12" step="0.5" value={selfRoi} onChange={e => setSelfRoi(+e.target.value)} style={{ padding: 0, height: 6 }} />
          </Field>
        </div>

        {result && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
              <StatCard label="תשואה נטו שנתית" value={result.netReturnManaged.toFixed(2) + '%'} color="#6366F1" primary />
              <StatCard label="דמי ניהול שנתיים" value={Math.round(result.annualFeeAmount).toLocaleString('he-IL') + ' ₪'} color="#EF4444" />
              <StatCard label="סך דמי ניהול בתקופה" value={Math.round(result.totalFeesPaid / 1000).toLocaleString('he-IL') + 'K ₪'} color="#EF4444" />
              <StatCard label="% מהרווח שילך לניהול" value={result.effectiveFeeRate.toFixed(1) + '%'} color={result.effectiveFeeRate > 30 ? '#EF4444' : '#F59E0B'} />
            </div>

            {/* השוואה ראשית */}
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 20px' }}>תיק מנוהל מול תיק עצמאי - בסוף התקופה</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                <div style={{ padding: 24, background: '#6366F108', borderRadius: 12, border: '2px solid #6366F1' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#6366F1', marginBottom: 8, letterSpacing: 0.5 }}>תיק מנוהל</div>
                  <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{Math.round(result.managedFV / 1000).toLocaleString('he-IL')}K ₪</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>רווח: <strong style={{ color: '#10B981' }}>+{Math.round(result.managedGains / 1000).toLocaleString('he-IL')}K ₪</strong></div>
                </div>
                <div style={{ padding: 24, background: '#F59E0B08', borderRadius: 12, border: '2px solid #F59E0B' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B', marginBottom: 8, letterSpacing: 0.5 }}>תיק עצמאי (ETFs)</div>
                  <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>{Math.round(result.selfFV / 1000).toLocaleString('he-IL')}K ₪</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>רווח: <strong style={{ color: '#10B981' }}>+{Math.round(result.selfGains / 1000).toLocaleString('he-IL')}K ₪</strong></div>
                </div>
              </div>
              <div style={{ marginTop: 20, padding: 16, borderRadius: 10, background: result.managedIsBetter ? '#10B98110' : '#EF444410', display: 'flex', alignItems: 'center', gap: 12 }}>
                {result.managedIsBetter ? <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} /> : <AlertTriangle size={18} style={{ color: '#EF4444', flexShrink: 0 }} />}
                <div style={{ fontSize: 14 }}>
                  <strong>{result.managedIsBetter ? 'התיק המנוהל רווחי יותר' : 'התיק העצמאי רווחי יותר'}</strong> ב-
                  <strong style={{ color: result.managedIsBetter ? '#10B981' : '#EF4444' }}> {Math.abs(Math.round(result.diff / 1000)).toLocaleString('he-IL')}K ₪ </strong>
                  לאורך {years} שנים.
                </div>
              </div>
            </div>

            {/* Break-even */}
            <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(99,102,241,0.04) 0%, transparent 100%)', borderColor: '#6366F1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Target size={16} style={{ color: '#6366F1' }} />
                <strong style={{ fontSize: 13, color: '#6366F1' }}>נקודת האיזון</strong>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>
                כדי שתיק מנוהל ישתלם יותר מתיק עצמאי, על המנהל להשיג <strong style={{ color: '#6366F1' }}>תשואה גולמית של {result.breakEvenGrossReturn.toFixed(2)}% לפחות</strong> (לכיסוי דמי הניהול של {(mgmtFee + performanceFee + tradingFees).toFixed(2)}%). כל פחות מזה - עדיף לנהל לבד.
              </p>
            </div>

            {/* גרף */}
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>השוואת צמיחה</h3>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={result.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                  <XAxis dataKey="year" fontSize={11} reversed />
                  <YAxis fontSize={11} tickFormatter={v => (v / 1000).toFixed(0) + 'K'} />
                  <Tooltip formatter={v => v.toLocaleString('he-IL') + ' ₪'} contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line type="monotone" dataKey="תיק_מנוהל" stroke="#6366F1" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="תיק_עצמאי" stroke="#F59E0B" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="דמי_ניהול_מצטברים" stroke="#EF4444" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

// ============================================================================
// BUSINESS DATA (Demo businesses stored in-memory)
// ============================================================================
const INITIAL_BUSINESSES = [
  {
    id: 'b1', name: 'יועץ משכנתאות - דני כהן', category: 'יועץ משכנתאות',
    tagline: 'מחזור משכנתא שחוסך לכם מאות אלפי שקלים',
    description: 'יועץ משכנתאות מוסמך עם 15 שנות ניסיון. התמחות במחזור משכנתאות, בניית תיק מסלולים מותאם והובלה מול הבנקים. עבד עם למעלה מ-1,200 משקי בית והציל להם בממוצע 180,000 ₪ לאורך חיי המשכנתא.',
    phone: '050-1234567', email: 'dani@mortgage-pro.co.il', city: 'תל אביב',
    experience: 15, rating: 4.9, reviews: 142, priceRange: '₪₪',
    services: ['מחזור משכנתא', 'משכנתא ראשונה', 'משכנתא הפוכה', 'ייעוץ אסטרטגי'],
    verified: true, color: '#5E5CE6',
    loginEmail: 'dani@mortgage-pro.co.il', loginPassword: 'demo123',
    premium: true,
  },
  {
    id: 'b2', name: 'פיננסים חכמים - מיכל לוי', category: 'מתכננת פיננסית',
    tagline: 'תכנון פיננסי אישי ותכנון פרישה',
    description: 'מתכננת פיננסית מוסמכת (CFP), מומחית בתכנון פרישה ואופטימיזציית פנסיה. בניית תכנית פיננסית כוללת, ליווי קבוע, ואסטרטגיית חיסכון מותאמת. יועצת למשפחות ובעלי עסקים.',
    phone: '052-9876543', email: 'michal@finplan.co.il', city: 'הרצליה',
    experience: 12, rating: 5.0, reviews: 98, priceRange: '₪₪₪',
    services: ['תכנון פרישה', 'תכנון פיננסי', 'אופטימיזציית פנסיה', 'ליווי שוטף'],
    verified: true, color: '#10B981',
    loginEmail: 'michal@finplan.co.il', loginPassword: 'demo123',
    premium: false,
  },
  {
    id: 'b3', name: 'רו"ח אבי שמש', category: 'רואה חשבון',
    tagline: 'החזרי מס והתנהלות מול רשות המיסים',
    description: 'משרד רו"ח המתמחה בהחזרי מס לשכירים, עצמאים ומשקי בית. טיפול מלא בדוחות שנתיים, ייצוג מול רשות המיסים, ואופטימיזציה חכמה של נקודות זיכוי והטבות מס חבויות.',
    phone: '03-1234567', email: 'info@shemesh-cpa.co.il', city: 'רמת גן',
    experience: 22, rating: 4.8, reviews: 234, priceRange: '₪₪',
    services: ['החזרי מס', 'דוח שנתי', 'ייצוג ברשויות', 'ייעוץ מס'],
    verified: true, color: '#F59E0B',
    loginEmail: 'info@shemesh-cpa.co.il', loginPassword: 'demo123',
    premium: true,
  },
  {
    id: 'b4', name: 'Elite Portfolio - ניהול תיקים', category: 'ניהול תיקי השקעות',
    tagline: 'ניהול תיקי השקעות מעל 1 מיליון ₪',
    description: 'בית השקעות המתמחה בניהול תיקי השקעות לקוחות פרטיים ומוסדיים. תיקים מותאמים אישית, דמי ניהול תחרותיים, וגישה ישירה למנהל התיק. מינימום השקעה: 500,000 ₪.',
    phone: '03-5556789', email: 'contact@eliteport.co.il', city: 'תל אביב',
    experience: 20, rating: 4.7, reviews: 67, priceRange: '₪₪₪₪',
    services: ['ניהול תיקי השקעות', 'ייעוץ השקעות', 'פוליסת חיסכון', 'תיק גמיש'],
    verified: true, color: '#6366F1',
    loginEmail: 'contact@eliteport.co.il', loginPassword: 'demo123',
    premium: false,
  },
];

const INITIAL_REVIEWS = [
  { id: 'r1', businessId: 'b1', reviewerName: 'יוסי רמון', rating: 5, title: 'חסך לי 210 אלף שקל!', content: 'דני פשוט אלוף. נפגשנו, הוא ניתח את המשכנתא הקיימת שלי, הראה לי בדיוק איפה אני מפסיד כסף, ניהל מולי ומול הבנק את המשא ומתן. התהליך לקח חודשיים ובסוף חסכתי 210 אלף שקל לאורך חיי המשכנתא. מומלץ בחום.', date: '2026-02-15', verified: true },
  { id: 'r2', businessId: 'b1', reviewerName: 'נטע כהן-בר', rating: 5, title: 'מקצוען אמיתי', content: 'פניתי לדני בגלל שרציתי למחזר משכנתא שנלקחה לפני 8 שנים. הוא מאוד זמין, מסביר בגובה העיניים, ובסופו של דבר חסך לנו 850 שקלים בחודש. התהליך היה שקוף לחלוטין.', date: '2026-01-28', verified: true },
  { id: 'r3', businessId: 'b1', reviewerName: 'אייל פרטר', rating: 4, title: 'מקצועי ויסודי', content: 'ייעוץ טוב ויסודי. לקח יותר זמן ממה שציפיתי אבל התוצאה הייתה שווה. חסכתי בסביבות 120 אלף.', date: '2026-01-10', verified: true },
  { id: 'r4', businessId: 'b2', reviewerName: 'שרון אברמוביץ', rating: 5, title: 'שינתה לי את החיים הפיננסיים', content: 'מיכל היא פשוט מתנה. בנתה איתי תכנית פיננסית מלאה, הסבירה לי על קרן השתלמות, גמל להשקעה, ותיקון 190. סוף סוף אני מבינה איך להתארגן לפרישה.', date: '2026-03-05', verified: true },
  { id: 'r5', businessId: 'b2', reviewerName: 'אמיר לייבוביץ', rating: 5, title: 'ליווי מקצועי ברמה הגבוהה ביותר', content: 'עובד עם מיכל כבר שנתיים. ליווי שוטף, זמינות ברמה גבוהה, ותוצאות מדידות. התיק שלי עלה בסדר גודל משמעותי.', date: '2026-02-20', verified: true },
  { id: 'r6', businessId: 'b3', reviewerName: 'דקלה ברגר', rating: 5, title: 'החזר מס של 18,000 שקל', content: 'לא האמנתי שמגיע לי החזר כזה. אבי בדק רטרואקטיבית 3 שנים וגילה הטבות שלא ידעתי עליהן בכלל. שירות יעיל ומחיר הוגן.', date: '2026-02-12', verified: true },
];

// Simple business state management using window (not localStorage per restriction)
if (typeof window !== 'undefined' && !window.__doubleBusinesses) {
  window.__doubleBusinesses = [...INITIAL_BUSINESSES];
  window.__doubleInquiries = [
    { id: 'inq1', businessId: 'b1', businessName: 'יועץ משכנתאות - דני כהן', name: 'רותם ארזי', phone: '050-3334455', email: 'rotem@example.com', message: 'שלום, יש לי משכנתא של 1.4 מיליון ₪ בריבית ממוצעת 5.1% על 22 שנה. מחפש לבדוק אם יש היגיון למחזר היום.', date: new Date(Date.now() - 86400000).toISOString(), status: 'חדש' },
    { id: 'inq2', businessId: 'b1', businessName: 'יועץ משכנתאות - דני כהן', name: 'יובל רז', phone: '054-1122334', email: 'yuval@example.com', message: 'אשמח לפגישת ייעוץ למשכנתא ראשונה. קונה דירה ב-2.8 מיליון בהרצליה, הון עצמי 800 אלף.', date: new Date(Date.now() - 86400000 * 3).toISOString(), status: 'בטיפול' },
    { id: 'inq3', businessId: 'b1', businessName: 'יועץ משכנתאות - דני כהן', name: 'תמר גולדברג', phone: '052-5566778', email: 'tamar@example.com', message: 'משפחה עם 3 ילדים. משכנתא קיימת + רצון להגדיל. מעוניינת לדבר.', date: new Date(Date.now() - 86400000 * 7).toISOString(), status: 'הושלם' },
  ];
  window.__doubleReviews = [...INITIAL_REVIEWS];
  window.__selectedBusinessId = null;
  window.__loggedInBusiness = null;
}

// ============================================================================
// BUSINESSES DIRECTORY
// ============================================================================
function BusinessesDirectory({ setPage }) {
  const [businesses, setBusinesses] = useState(typeof window !== 'undefined' ? window.__doubleBusinesses : INITIAL_BUSINESSES);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('הכל');
  const [_, forceUpdate] = useState(0);

  const categories = ['הכל', 'יועץ משכנתאות', 'מתכננת פיננסית', 'רואה חשבון', 'ניהול תיקי השקעות', 'יועץ פנסיוני', 'יועץ השקעות'];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBusinesses([...window.__doubleBusinesses]);
    }
  }, []);

  const filtered = businesses.filter(b => {
    if (category !== 'הכל' && b.category !== category) return false;
    if (filter && !b.name.toLowerCase().includes(filter.toLowerCase()) && !b.tagline.toLowerCase().includes(filter.toLowerCase())) return false;
    return true;
  });

  const openBusiness = (id) => {
    window.__selectedBusinessId = id;
    setPage('business-page');
  };

  return (
    <div className="fade-in" style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
        <div style={{ maxWidth: 640 }}>
          <div className="badge" style={{ marginBottom: 16 }}><Building2 size={12} /> ספריית יועצים פיננסיים</div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', margin: '0 0 16px', lineHeight: 1.1 }}>מצא את היועץ הפיננסי הנכון</h1>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            {businesses.length} יועצים פיננסיים מאומתים - יועצי משכנתאות, רואי חשבון, מתכננים פיננסיים ובתי השקעות. בחרו את המומחה המתאים לכם וצרו קשר ישירות.
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setPage('business-register')}>
          <Building2 size={15} /> רישום כעסק
        </button>
      </div>

      {/* Filters */}
      <div className="card" style={{ padding: 20, marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginBottom: 16 }}>
          <input placeholder="חיפוש יועץ..." value={filter} onChange={e => setFilter(e.target.value)} />
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.slice(0, 5).map(c => (
            <button key={c} onClick={() => setCategory(c)} className="btn btn-outline" style={{ fontSize: 12, padding: '6px 14px', background: category === c ? 'var(--text)' : '#fff', color: category === c ? 'white' : 'var(--text)', borderColor: category === c ? 'var(--text)' : 'var(--border)' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Business Cards */}
      {filtered.length === 0 ? (
        <div className="card" style={{ padding: 48, textAlign: 'center', color: 'var(--text-muted)' }}>
          <Building2 size={40} style={{ opacity: 0.3, marginBottom: 16 }} />
          <div style={{ fontWeight: 600 }}>לא נמצאו יועצים התואמים לחיפוש</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {filtered.map((b, i) => (
            <div key={b.id} onClick={() => openBusiness(b.id)} className="card card-hover" style={{ padding: 24, cursor: 'pointer', animationDelay: `${i * 0.05}s`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: b.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: b.color }}>
                  {b.name.charAt(0)}
                </div>
                {b.verified && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', background: '#10B98115', borderRadius: 6, fontSize: 10, fontWeight: 700, color: '#10B981' }}>
                    <CheckCircle2 size={10} /> מאומת
                  </div>
                )}
              </div>

              <div style={{ fontSize: 11, fontWeight: 700, color: b.color, letterSpacing: 0.5, marginBottom: 4 }}>{b.category}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 8px', lineHeight: 1.3 }}>{b.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 14px', lineHeight: 1.5, flex: 1 }}>{b.tagline}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, fontSize: 12, color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ color: '#F59E0B' }}>★</span>
                  <strong style={{ color: 'var(--text)' }}>{b.rating}</strong>
                  <span>({b.reviews})</span>
                </div>
                <div>· {b.experience} שנות ניסיון</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>📍 {b.city}</span>
                <span style={{ fontSize: 13, color: b.color, fontWeight: 700 }}>פרטים ← </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// BUSINESS PAGE (Individual business profile)
// ============================================================================
function BusinessPage({ setPage }) {
  const businessId = typeof window !== 'undefined' ? window.__selectedBusinessId : 'b1';
  const business = typeof window !== 'undefined' ? window.__doubleBusinesses.find(b => b.id === businessId) : null;

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, title: '', content: '' });
  const [reviewSent, setReviewSent] = useState(false);
  const [_, forceUpdate] = useState(0);

  const reviews = typeof window !== 'undefined'
    ? window.__doubleReviews.filter(r => r.businessId === businessId).sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  if (!business) {
    return (
      <div style={{ padding: 48, textAlign: 'center' }}>
        <div>לא נמצא עסק</div>
        <button className="btn btn-outline" onClick={() => setPage('businesses')} style={{ marginTop: 16 }}>חזור לספרייה</button>
      </div>
    );
  }

  const submitReview = () => {
    if (!reviewForm.name || !reviewForm.title || !reviewForm.content) return;
    const newReview = {
      id: 'r_' + Date.now(),
      businessId: business.id,
      reviewerName: reviewForm.name,
      rating: reviewForm.rating,
      title: reviewForm.title,
      content: reviewForm.content,
      date: new Date().toISOString().split('T')[0],
      verified: false,
    };
    if (typeof window !== 'undefined') {
      window.__doubleReviews.push(newReview);
      // Update business rating
      const bizReviews = window.__doubleReviews.filter(r => r.businessId === business.id);
      const avgRating = bizReviews.reduce((sum, r) => sum + r.rating, 0) / bizReviews.length;
      const idx = window.__doubleBusinesses.findIndex(b => b.id === business.id);
      if (idx !== -1) {
        window.__doubleBusinesses[idx].rating = Math.round(avgRating * 10) / 10;
        window.__doubleBusinesses[idx].reviews = bizReviews.length;
      }
    }
    setReviewSent(true);
    setTimeout(() => {
      setReviewForm({ name: '', rating: 5, title: '', content: '' });
      setShowReviewForm(false);
      setReviewSent(false);
      forceUpdate(c => c + 1);
    }, 3000);
  };

  const sendInquiry = () => {
    if (!form.name || !form.phone || !form.message) return;
    const inquiry = {
      id: 'inq_' + Date.now(),
      businessId: business.id,
      businessName: business.name,
      ...form,
      date: new Date().toISOString(),
      status: 'חדש',
    };
    if (typeof window !== 'undefined') {
      window.__doubleInquiries.push(inquiry);
    }
    setSent(true);
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', message: '' });
      setSent(false);
    }, 4000);
  };

  const getAISuggestion = async () => {
    if (!form.message.trim()) return;
    setAiLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 400,
          system: 'אתה עוזר לגולש לכתוב פנייה ברורה וממוקדת ליועץ פיננסי ישראלי. תכתוב פנייה ישירה, מקצועית, בעברית, עד 4 משפטים.',
          messages: [{
            role: 'user',
            content: `העסק: ${business.name} (${business.category}). הפנייה של הגולש כרגע: "${form.message}". שפר ושפץ את הפנייה כך שתהיה ברורה, ממוקדת ומקצועית. החזר רק את הטקסט המשופר, ללא הקדמות.`,
          }],
        }),
      });
      const data = await response.json();
      const suggestion = data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '';
      setAiSuggestion(suggestion);
    } catch (e) {
      setAiSuggestion('שגיאה');
    }
    setAiLoading(false);
  };

  return (
    <div className="fade-in" style={{ maxWidth: 1120, margin: '0 auto', padding: '32px 24px 80px' }}>
      <button className="btn btn-ghost" onClick={() => setPage('businesses')} style={{ marginBottom: 24, padding: '6px 12px' }}>
        <ArrowLeft size={14} /> חזור לספרייה
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'flex-start' }}>
        {/* Main */}
        <div>
          {/* Header Card */}
          <div className="card" style={{ padding: 32, marginBottom: 20, background: `linear-gradient(135deg, ${business.color}08 0%, transparent 60%)`, borderColor: business.color + '30' }}>
            <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
              <div style={{ width: 80, height: 80, borderRadius: 16, background: business.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, fontWeight: 800, color: business.color, flexShrink: 0 }}>
                {business.name.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: business.color, letterSpacing: 0.5 }}>{business.category}</span>
                  {business.verified && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px', background: '#10B98115', borderRadius: 100, fontSize: 10, fontWeight: 700, color: '#10B981' }}>
                      <CheckCircle2 size={10} /> מאומת
                    </span>
                  )}
                  {business.premium && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 8px', background: '#F59E0B15', borderRadius: 100, fontSize: 10, fontWeight: 700, color: '#F59E0B' }}>
                      ⭐ פרו
                    </span>
                  )}
                </div>
                <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>{business.name}</h1>
                <div style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.5 }}>{business.tagline}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, flexWrap: 'wrap' }}>
                  <div><span style={{ color: '#F59E0B' }}>★</span> <strong>{business.rating}</strong> ({business.reviews} חוות דעת)</div>
                  <div style={{ color: 'var(--text-muted)' }}>{business.experience} שנות ניסיון</div>
                  <div style={{ color: 'var(--text-muted)' }}>📍 {business.city}</div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="card" style={{ padding: 28, marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 14px' }}>אודות</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'var(--text)' }}>{business.description}</p>
          </div>

          {/* Services */}
          <div className="card" style={{ padding: 28, marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 14px' }}>שירותים</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {business.services.map((s, i) => (
                <div key={i} style={{ padding: '8px 14px', background: business.color + '10', borderRadius: 100, fontSize: 13, fontWeight: 600, color: business.color, border: '1px solid ' + business.color + '30' }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div className="card" style={{ padding: 28, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>חוות דעת ({reviews.length})</h3>
              {!showReviewForm && (
                <button className="btn btn-outline" onClick={() => setShowReviewForm(true)} style={{ fontSize: 13 }}>
                  ✍️ כתוב חוות דעת
                </button>
              )}
            </div>

            {/* Rating summary */}
            {reviews.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center', padding: 20, background: 'var(--bg-subtle)', borderRadius: 12, marginBottom: 20 }}>
                <div style={{ textAlign: 'center', minWidth: 90 }}>
                  <div style={{ fontSize: 44, fontWeight: 900, color: '#F59E0B', lineHeight: 1 }}>{business.rating}</div>
                  <div style={{ color: '#F59E0B', fontSize: 16, marginTop: 4 }}>
                    {'★'.repeat(Math.round(business.rating))}{'☆'.repeat(5 - Math.round(business.rating))}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{business.reviews} ביקורות</div>
                </div>
                <div>
                  {[5, 4, 3, 2, 1].map(stars => {
                    const count = reviews.filter(r => r.rating === stars).length;
                    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                    return (
                      <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, width: 24 }}>{stars}★</div>
                        <div style={{ flex: 1, height: 6, background: '#fff', borderRadius: 3, overflow: 'hidden', border: '1px solid var(--border)' }}>
                          <div style={{ height: '100%', width: pct + '%', background: '#F59E0B' }} />
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', width: 24, textAlign: 'left' }}>{count}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Review form */}
            {showReviewForm && (
              <div className="fade-in" style={{ padding: 22, background: '#5E5CE608', borderRadius: 12, marginBottom: 20, border: '1px solid #5E5CE630' }}>
                {reviewSent ? (
                  <div style={{ textAlign: 'center', padding: 24 }}>
                    <CheckCircle2 size={32} style={{ color: '#10B981', marginBottom: 12 }} />
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>חוות הדעת פורסמה!</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>תודה על התרומה שלך לקהילה</div>
                  </div>
                ) : (
                  <>
                    <h4 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 14px' }}>כתוב חוות דעת</h4>

                    <Field label="דירוג">
                      <div style={{ display: 'flex', gap: 4 }}>
                        {[1, 2, 3, 4, 5].map(n => (
                          <button
                            key={n}
                            onClick={() => setReviewForm({ ...reviewForm, rating: n })}
                            style={{
                              background: 'none',
                              border: 'none',
                              fontSize: 28,
                              cursor: 'pointer',
                              color: n <= reviewForm.rating ? '#F59E0B' : '#D4D4D8',
                              padding: 2,
                              transition: 'all 0.15s',
                            }}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </Field>

                    <Field label="שמך">
                      <input value={reviewForm.name} onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })} placeholder="שם מלא" />
                    </Field>

                    <Field label="כותרת">
                      <input value={reviewForm.title} onChange={e => setReviewForm({ ...reviewForm, title: e.target.value.slice(0, 80) })} placeholder="לדוגמה: 'חסך לי אלפי שקלים בחודש'" />
                    </Field>

                    <Field label="תוכן הביקורת">
                      <textarea value={reviewForm.content} onChange={e => setReviewForm({ ...reviewForm, content: e.target.value })} rows={4} placeholder="שתף את החוויה שלך - מה עבד, איך הליווי, והתוצאה..." style={{ resize: 'vertical' }} />
                    </Field>

                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-accent" onClick={submitReview} disabled={!reviewForm.name || !reviewForm.title || !reviewForm.content} style={{ flex: 1 }}>
                        פרסם ביקורת
                      </button>
                      <button className="btn btn-ghost" onClick={() => { setShowReviewForm(false); setReviewForm({ name: '', rating: 5, title: '', content: '' }); }}>ביטול</button>
                    </div>

                    <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 10, textAlign: 'center' }}>
                      חוות דעת יעברו בדיקת אמת לפני הופעה כ"מאומת"
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Reviews list */}
            {reviews.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 32, color: 'var(--text-muted)' }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>עדיין אין חוות דעת</div>
                <div style={{ fontSize: 13 }}>היה הראשון לכתוב חוות דעת</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {reviews.slice(0, 5).map(r => (
                  <div key={r.id} style={{ padding: '18px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <strong style={{ fontSize: 14 }}>{r.reviewerName}</strong>
                          {r.verified && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 10, color: '#10B981', fontWeight: 700, padding: '2px 6px', background: '#10B98115', borderRadius: 100 }}>
                              <CheckCircle2 size={9} /> מאומת
                            </span>
                          )}
                        </div>
                        <div style={{ color: '#F59E0B', fontSize: 13 }}>
                          {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>
                        {new Date(r.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{r.title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>{r.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 14px' }}>נתונים מרכזיים</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>דירוג</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: business.color }}>{business.rating}/5.0</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>חוות דעת</div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{business.reviews}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>ניסיון</div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{business.experience} שנים</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>טווח מחיר</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: business.color }}>{business.priceRange}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Sidebar */}
        <div style={{ position: 'sticky', top: 88 }}>
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 18px' }}>יצירת קשר</h3>

            {sent ? (
              <div style={{ padding: 24, background: '#10B98110', borderRadius: 12, border: '1px solid #10B98140', textAlign: 'center' }}>
                <CheckCircle2 size={36} style={{ color: '#10B981', marginBottom: 12 }} />
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>הפנייה נשלחה</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{business.name} יחזור אליך בהקדם</div>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                  <input placeholder="שם מלא" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input placeholder="טלפון" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  <input placeholder="אימייל (לא חובה)" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <textarea
                    placeholder="תיאור קצר של מה שאתה מחפש..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {form.message.trim().length > 10 && !aiSuggestion && (
                  <button className="btn btn-outline" onClick={getAISuggestion} disabled={aiLoading} style={{ width: '100%', marginBottom: 10, fontSize: 12 }}>
                    {aiLoading ? <><Loader2 size={12} className="spin" /> מנסח...</> : <><Sparkles size={12} /> שפר ניסוח עם AI</>}
                  </button>
                )}

                {aiSuggestion && (
                  <div style={{ padding: 14, background: '#5E5CE608', borderRadius: 10, border: '1px solid #5E5CE630', marginBottom: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#5E5CE6', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Sparkles size={11} /> הצעה משופרת
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{aiSuggestion}</div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-ghost" onClick={() => { setForm({ ...form, message: aiSuggestion }); setAiSuggestion(''); }} style={{ fontSize: 11, padding: '4px 10px' }}>השתמש בזה</button>
                      <button className="btn btn-ghost" onClick={() => setAiSuggestion('')} style={{ fontSize: 11, padding: '4px 10px' }}>בטל</button>
                    </div>
                  </div>
                )}

                <button
                  className="btn btn-accent"
                  onClick={sendInquiry}
                  disabled={!form.name || !form.phone || !form.message}
                  style={{ width: '100%', background: business.color }}
                >
                  <Send size={14} /> שלח פנייה
                </button>

                <div style={{ borderTop: '1px solid var(--border)', marginTop: 20, paddingTop: 16 }}>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>או פנה ישירות:</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
                    <a href={`tel:${business.phone}`} style={{ color: 'var(--text)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                      📞 <strong>{business.phone}</strong>
                    </a>
                    <a href={`mailto:${business.email}`} style={{ color: 'var(--text)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                      ✉️ {business.email}
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: 16, padding: 12, background: 'var(--bg-subtle)', borderRadius: 8, fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  🔒 הפרטים שלך מועברים ישירות ליועץ בלבד. Double.AI לא שומר מידע ולא משתף עם צדדים שלישיים.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// BUSINESS REGISTRATION
// ============================================================================
function BusinessRegister({ setPage }) {
  const [form, setForm] = useState({
    name: '', category: 'יועץ משכנתאות', tagline: '', description: '',
    phone: '', email: '', city: '', experience: 5, priceRange: '₪₪',
    services: '', agreedToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const categories = ['יועץ משכנתאות', 'מתכננת פיננסית', 'רואה חשבון', 'ניהול תיקי השקעות', 'יועץ פנסיוני', 'יועץ השקעות', 'יועץ מס', 'אחר'];

  const submit = () => {
    if (!form.agreedToTerms || !form.name || !form.phone || !form.email || !form.description) return;

    const newBusiness = {
      id: 'b_' + Date.now(),
      name: form.name,
      category: form.category,
      tagline: form.tagline,
      description: form.description,
      phone: form.phone,
      email: form.email,
      city: form.city,
      experience: +form.experience,
      rating: 0,
      reviews: 0,
      priceRange: form.priceRange,
      services: form.services.split(',').map(s => s.trim()).filter(Boolean),
      verified: false, // Would be verified after admin review
      color: '#' + ['5E5CE6', '10B981', 'F59E0B', '6366F1', 'EC4899', '14B8A6'][Math.floor(Math.random() * 6)],
    };

    if (typeof window !== 'undefined') {
      window.__doubleBusinesses.push(newBusiness);
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fade-in" style={{ maxWidth: 560, margin: '80px auto', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: 20, background: '#10B98115', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <CheckCircle2 size={36} style={{ color: '#10B981' }} />
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.5px' }}>הרשמה התקבלה!</h2>
        <p style={{ fontSize: 16, color: 'var(--text-muted)', margin: '0 0 28px', lineHeight: 1.7 }}>
          תודה על ההרשמה ל-Double.AI. הצוות שלנו יבחן את הפרטים ויצור איתך קשר לאימות בתוך 48 שעות. לאחר האימות, הכרטיס העסקי יופיע בספריית היועצים.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={() => setPage('businesses')}>חזור לספרייה</button>
          <button className="btn btn-outline" onClick={() => setPage('home')}>דף הבית</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div className="badge" style={{ marginBottom: 16 }}><Building2 size={12} /> רישום עסק</div>
      <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 16px', lineHeight: 1.1 }}>הצטרפו לספריית היועצים</h1>
      <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 32 }}>
        הצטרפו ל-Double.AI וקבלו פניות מגולשים שמחפשים יועץ פיננסי בתחום שלכם. ההרשמה חינם בשלב הראשון.
      </p>

      {/* Benefits */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, marginBottom: 32 }}>
        {[
          { icon: Target, t: 'לידים איכותיים', d: 'גולשים שמחפשים יועץ ספציפית' },
          { icon: Sparkles, t: 'AI לניסוח פניות', d: 'פניות ברורות וממוקדות' },
          { icon: Shield, t: 'סימון אמינות', d: 'תהליך אימות מעמיק' },
        ].map((b, i) => (
          <div key={i} style={{ padding: 16, background: 'var(--bg-subtle)', borderRadius: 10, border: '1px solid var(--border)' }}>
            <b.icon size={18} style={{ color: '#5E5CE6', marginBottom: 8 }} />
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{b.t}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>{b.d}</div>
          </div>
        ))}
      </div>

      {/* Step indicator */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, background: step >= s ? '#5E5CE6' : 'var(--border)' }} />
        ))}
      </div>

      <div className="card" style={{ padding: 32 }}>
        {step === 1 && (
          <>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>פרטים בסיסיים</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>שלב 1 מתוך 3</p>

            <Field label="שם העסק או יועץ *">
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="לדוגמה: יועץ משכנתאות - דני כהן" />
            </Field>

            <Field label="קטגוריה *">
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </Field>

            <Field label="משפט תיאור קצר (tagline) *" hint="עד 80 תווים - מה מיוחד אצלך">
              <input value={form.tagline} onChange={e => setForm({ ...form, tagline: e.target.value.slice(0, 80) })} placeholder="לדוגמה: מחזור משכנתאות שחוסך מאות אלפי שקלים" />
              <div style={{ fontSize: 11, color: 'var(--text-subtle)', textAlign: 'left', marginTop: 4 }}>{form.tagline.length}/80</div>
            </Field>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button className="btn btn-primary" onClick={() => setStep(2)} disabled={!form.name || !form.tagline} style={{ flex: 1 }}>
                הבא <ArrowLeft size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => setPage('businesses')}>ביטול</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>פרטי שירות ומקצועיות</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>שלב 2 מתוך 3</p>

            <Field label="תיאור מפורט *" hint="ספר על עצמך, המומחיות, הניסיון, וערך מוסף ללקוחות">
              <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={5} style={{ resize: 'vertical' }} placeholder="לדוגמה: יועץ משכנתאות מוסמך עם 15 שנות ניסיון. התמחות במחזור משכנתאות..." />
            </Field>

            <Field label="שירותים (מופרדים בפסיקים)">
              <input value={form.services} onChange={e => setForm({ ...form, services: e.target.value })} placeholder="מחזור משכנתא, משכנתא ראשונה, ייעוץ" />
            </Field>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label={`שנות ניסיון: ${form.experience}`}>
                <input type="range" min="0" max="40" value={form.experience} onChange={e => setForm({ ...form, experience: +e.target.value })} style={{ padding: 0, height: 6 }} />
              </Field>
              <Field label="טווח מחיר">
                <select value={form.priceRange} onChange={e => setForm({ ...form, priceRange: e.target.value })}>
                  <option value="₪">₪ - כלכלי</option>
                  <option value="₪₪">₪₪ - בינוני</option>
                  <option value="₪₪₪">₪₪₪ - גבוה</option>
                  <option value="₪₪₪₪">₪₪₪₪ - פרימיום</option>
                </select>
              </Field>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button className="btn btn-primary" onClick={() => setStep(3)} disabled={!form.description} style={{ flex: 1 }}>
                הבא <ArrowLeft size={14} />
              </button>
              <button className="btn btn-outline" onClick={() => setStep(1)}>חזור</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px' }}>פרטי יצירת קשר</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>שלב 3 מתוך 3</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="טלפון *">
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="050-1234567" />
              </Field>
              <Field label="עיר *">
                <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="תל אביב" />
              </Field>
            </div>

            <Field label="כתובת אימייל *">
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="example@domain.co.il" />
            </Field>

            <div style={{ padding: 16, background: 'var(--bg-subtle)', borderRadius: 10, marginTop: 20 }}>
              <label style={{ display: 'flex', gap: 10, cursor: 'pointer' }}>
                <input type="checkbox" checked={form.agreedToTerms} onChange={e => setForm({ ...form, agreedToTerms: e.target.checked })} style={{ width: 'auto', marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 13, lineHeight: 1.5 }}>
                  אני מאשר שהמידע שמסרתי נכון, ומסכים לתנאי השירות. אני מודע לכך שהכרטיס יעבור אימות לפני הופעה בספרייה.
                </span>
              </label>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button
                className="btn btn-accent"
                onClick={submit}
                disabled={!form.agreedToTerms || !form.phone || !form.email || !form.city}
                style={{ flex: 1 }}
              >
                <CheckCircle2 size={14} /> סיום רישום
              </button>
              <button className="btn btn-outline" onClick={() => setStep(2)}>חזור</button>
            </div>
          </>
        )}
      </div>

      {/* Pricing info */}
      <div className="card" style={{ padding: 24, marginTop: 24, background: 'linear-gradient(180deg, rgba(94,92,230,0.04) 0%, transparent 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <Sparkles size={14} style={{ color: '#5E5CE6' }} />
          <strong style={{ fontSize: 13, color: '#5E5CE6' }}>מודל תמחור</strong>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.7 }}>
          <strong>חבילת בסיס - חינם:</strong> הופעה בספרייה, קבלת פניות, כרטיס ביקור דיגיטלי.<br/>
          <strong>חבילת פרו - 249 ₪/חודש:</strong> עדיפות בחיפוש, סטטיסטיקות פניות, באנר מקודם, סימון "מומלץ".
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// BUSINESS LOGIN
// ============================================================================
function BusinessLogin({ setPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      const business = (typeof window !== 'undefined' ? window.__doubleBusinesses : INITIAL_BUSINESSES)
        .find(b => b.loginEmail === email && b.loginPassword === password);
      if (business) {
        if (typeof window !== 'undefined') window.__loggedInBusiness = business.id;
        setPage('business-dashboard');
      } else {
        setError('אימייל או סיסמה שגויים');
      }
      setLoading(false);
    }, 400);
  };

  const demoLogin = (b) => {
    setEmail(b.email);
    setPassword('demo123');
  };

  return (
    <div className="fade-in" style={{ maxWidth: 440, margin: '80px auto', padding: '0 24px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, #5E5CE6 0%, #0A0B0D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <Building2 size={26} color="white" />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>התחברות עסקים</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>ניהול הפניות והכרטיס העסקי שלך</p>
      </div>

      <div className="card" style={{ padding: 32 }}>
        <Field label="אימייל">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@domain.co.il" />
        </Field>
        <Field label="סיסמה">
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="הכנס סיסמה" onKeyDown={e => e.key === 'Enter' && login()} />
        </Field>

        {error && (
          <div style={{ padding: 10, background: '#EF444410', color: '#EF4444', borderRadius: 8, fontSize: 13, marginBottom: 14, textAlign: 'center' }}>
            {error}
          </div>
        )}

        <button className="btn btn-primary" onClick={login} disabled={loading || !email || !password} style={{ width: '100%' }}>
          {loading ? <><Loader2 size={14} className="spin" /> מתחבר...</> : 'התחברות'}
        </button>

        <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}>
          אין לך חשבון? <span onClick={() => setPage('business-register')} style={{ color: '#5E5CE6', cursor: 'pointer', fontWeight: 700 }}>הירשם כעסק</span>
        </div>
      </div>

      {/* Demo accounts */}
      <div className="card" style={{ padding: 20, marginTop: 20, background: 'var(--bg-subtle)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: 0.5, marginBottom: 12 }}>
          חשבונות הדגמה (לחץ למילוי אוטומטי)
        </div>
        {(typeof window !== 'undefined' ? window.__doubleBusinesses : INITIAL_BUSINESSES).slice(0, 2).map(b => (
          <div key={b.id} onClick={() => demoLogin(b)} style={{ padding: '10px 12px', background: '#fff', border: '1px solid var(--border)', borderRadius: 8, cursor: 'pointer', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.15s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#5E5CE6'} onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{b.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{b.email}</div>
            </div>
            <div style={{ fontSize: 10, color: '#5E5CE6', fontWeight: 700 }}>סיסמה: demo123</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// BUSINESS DASHBOARD
// ============================================================================
function BusinessDashboard({ setPage }) {
  const businessId = typeof window !== 'undefined' ? window.__loggedInBusiness : null;
  const [activeTab, setActiveTab] = useState('inquiries');
  const [updateCount, setUpdateCount] = useState(0);
  const [aiReplyLoading, setAiReplyLoading] = useState(null);
  const [aiReplies, setAiReplies] = useState({});

  if (!businessId) {
    return (
      <div style={{ padding: 48, textAlign: 'center' }}>
        <div style={{ marginBottom: 16 }}>נדרשת התחברות</div>
        <button className="btn btn-primary" onClick={() => setPage('business-login')}>התחבר</button>
      </div>
    );
  }

  const business = typeof window !== 'undefined' ? window.__doubleBusinesses.find(b => b.id === businessId) : null;
  const allInquiries = typeof window !== 'undefined' ? window.__doubleInquiries : [];
  const inquiries = allInquiries.filter(i => i.businessId === businessId);
  const reviews = (typeof window !== 'undefined' ? window.__doubleReviews : []).filter(r => r.businessId === businessId);

  // Stats
  const now = Date.now();
  const last7days = inquiries.filter(i => now - new Date(i.date).getTime() < 7 * 86400000);
  const last30days = inquiries.filter(i => now - new Date(i.date).getTime() < 30 * 86400000);
  const newCount = inquiries.filter(i => i.status === 'חדש').length;
  const inProgressCount = inquiries.filter(i => i.status === 'בטיפול').length;
  const completedCount = inquiries.filter(i => i.status === 'הושלם').length;

  // Weekly chart data
  const weeklyData = [];
  for (let i = 6; i >= 0; i--) {
    const dayStart = new Date();
    dayStart.setDate(dayStart.getDate() - i);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(dayStart);
    dayEnd.setHours(23, 59, 59, 999);
    const count = inquiries.filter(inq => {
      const d = new Date(inq.date).getTime();
      return d >= dayStart.getTime() && d <= dayEnd.getTime();
    }).length;
    weeklyData.push({
      day: dayStart.toLocaleDateString('he-IL', { weekday: 'short' }),
      פניות: count + (i > 3 ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2)), // Demo data
    });
  }

  const updateStatus = (inquiryId, newStatus) => {
    if (typeof window !== 'undefined') {
      const idx = window.__doubleInquiries.findIndex(i => i.id === inquiryId);
      if (idx !== -1) window.__doubleInquiries[idx].status = newStatus;
      setUpdateCount(u => u + 1);
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') window.__loggedInBusiness = null;
    setPage('home');
  };

  const generateAIReply = async (inquiry) => {
    setAiReplyLoading(inquiry.id);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: `אתה ${business.name}, ${business.category} מקצועי. עניין בפנייה, ציע פגישת ייעוץ ראשונית, וצור ציפייה חיובית. טון: מקצועי, חם, קצר. עד 5 משפטים. ללא "שלום רב" ארוך, מאוד ענייני.`,
          messages: [{
            role: 'user',
            content: `פנייה שהתקבלה מ-${inquiry.name}: "${inquiry.message}"\n\nכתוב תגובה שאשלח חזרה ללקוח. התחל ב"שלום ${inquiry.name}," ותחתום בשמי. החזר רק את הטקסט לשליחה.`,
          }],
        }),
      });
      const data = await response.json();
      const reply = data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '';
      setAiReplies(prev => ({ ...prev, [inquiry.id]: reply }));
    } catch (e) {
      setAiReplies(prev => ({ ...prev, [inquiry.id]: 'שגיאה ביצירת תגובה' }));
    }
    setAiReplyLoading(null);
  };

  const StatusBadge = ({ status }) => {
    const colors = { 'חדש': '#5E5CE6', 'בטיפול': '#F59E0B', 'הושלם': '#10B981', 'לא רלוונטי': '#71717A' };
    return (
      <span style={{ padding: '3px 10px', background: colors[status] + '15', color: colors[status], borderRadius: 100, fontSize: 11, fontWeight: 700 }}>
        {status}
      </span>
    );
  };

  return (
    <div className="fade-in" style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 80px' }}>
      {/* Dashboard Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32, flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: 13, background: business.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, color: business.color }}>
            {business.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 700, letterSpacing: 0.5 }}>לוח ניהול עסקי</div>
            <h1 style={{ fontSize: 24, fontWeight: 800, margin: '4px 0 2px', letterSpacing: '-0.5px' }}>{business.name}</h1>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              {business.premium && <span style={{ color: '#F59E0B', fontWeight: 700 }}>⭐ חבר פרו · </span>}
              {business.category}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-outline" onClick={() => { window.__selectedBusinessId = business.id; setPage('business-page'); }}>
            <FileText size={14} /> צפייה בכרטיס
          </button>
          <button className="btn btn-ghost" onClick={logout}>יציאה</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
        <StatCard label="פניות חדשות" value={newCount} color="#5E5CE6" primary />
        <StatCard label="השבוע" value={last7days.length} color="#10B981" />
        <StatCard label="בחודש האחרון" value={last30days.length} />
        <StatCard label="דירוג" value={business.rating + ' ★'} color="#F59E0B" />
        <StatCard label="חוות דעת" value={reviews.length || business.reviews} />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24, borderBottom: '1px solid var(--border)', overflowX: 'auto' }} className="scrollbar">
        {[
          { id: 'inquiries', label: 'פניות', count: inquiries.length },
          { id: 'analytics', label: 'סטטיסטיקות' },
          { id: 'reviews', label: 'חוות דעת', count: reviews.length },
          { id: 'profile', label: 'פרופיל עסקי' },
          { id: 'billing', label: 'חיוב ותשלום' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 18px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #5E5CE6' : '2px solid transparent',
              color: activeTab === tab.id ? '#5E5CE6' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'inherit',
              marginBottom: -1,
              whiteSpace: 'nowrap',
            }}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span style={{ marginRight: 6, padding: '1px 8px', background: activeTab === tab.id ? '#5E5CE615' : 'var(--bg-muted)', borderRadius: 100, fontSize: 11, fontWeight: 700 }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* INQUIRIES TAB */}
      {activeTab === 'inquiries' && (
        <div>
          {inquiries.length === 0 ? (
            <div className="card" style={{ padding: 56, textAlign: 'center', color: 'var(--text-muted)' }}>
              <MessageSquare size={40} style={{ opacity: 0.3, marginBottom: 16 }} />
              <div style={{ fontWeight: 600, marginBottom: 6 }}>עדיין אין פניות</div>
              <div style={{ fontSize: 13 }}>כשגולשים יצרו קשר, הפניות יופיעו כאן</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Status filters */}
              <div style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--text-muted)', padding: '0 4px 8px' }}>
                <span>חדש: <strong style={{ color: '#5E5CE6' }}>{newCount}</strong></span>
                <span>·</span>
                <span>בטיפול: <strong style={{ color: '#F59E0B' }}>{inProgressCount}</strong></span>
                <span>·</span>
                <span>הושלם: <strong style={{ color: '#10B981' }}>{completedCount}</strong></span>
              </div>

              {inquiries.sort((a, b) => new Date(b.date) - new Date(a.date)).map(inq => (
                <div key={inq.id} className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 9, background: business.color + '15', color: business.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>
                          {inq.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15 }}>{inq.name}</div>
                          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {new Date(inq.date).toLocaleDateString('he-IL', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                        <a href={`tel:${inq.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>📞 {inq.phone}</a>
                        {inq.email && <a href={`mailto:${inq.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>✉️ {inq.email}</a>}
                      </div>
                    </div>
                    <StatusBadge status={inq.status} />
                  </div>

                  <div style={{ padding: 14, background: 'var(--bg-subtle)', borderRadius: 10, marginBottom: 14, fontSize: 14, lineHeight: 1.6 }}>
                    {inq.message}
                  </div>

                  {/* AI Reply */}
                  {aiReplies[inq.id] && (
                    <div className="fade-in" style={{ padding: 14, background: 'rgba(94,92,230,0.06)', borderRadius: 10, marginBottom: 14, border: '1px solid #5E5CE630' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                        <Sparkles size={12} style={{ color: '#5E5CE6' }} />
                        <strong style={{ fontSize: 11, color: '#5E5CE6' }}>טיוטת תגובה (AI)</strong>
                      </div>
                      <div style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap', marginBottom: 10 }}>{aiReplies[inq.id]}</div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-outline" onClick={() => navigator.clipboard?.writeText(aiReplies[inq.id])} style={{ fontSize: 11, padding: '4px 10px' }}>
                          העתק
                        </button>
                        <button className="btn btn-ghost" onClick={() => setAiReplies(prev => { const n = { ...prev }; delete n[inq.id]; return n; })} style={{ fontSize: 11, padding: '4px 10px' }}>
                          סגור
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <button
                      className="btn btn-accent"
                      onClick={() => generateAIReply(inq)}
                      disabled={aiReplyLoading === inq.id}
                      style={{ fontSize: 12, padding: '6px 12px' }}
                    >
                      {aiReplyLoading === inq.id ? <><Loader2 size={12} className="spin" /> מנסח...</> : <><Sparkles size={12} /> נסח תגובה</>}
                    </button>
                    <a href={`tel:${inq.phone}`} className="btn btn-outline" style={{ fontSize: 12, padding: '6px 12px', textDecoration: 'none' }}>
                      📞 התקשר
                    </a>
                    {inq.email && (
                      <a href={`mailto:${inq.email}`} className="btn btn-outline" style={{ fontSize: 12, padding: '6px 12px', textDecoration: 'none' }}>
                        ✉️ מייל
                      </a>
                    )}
                    <div style={{ flex: 1 }} />
                    <select
                      value={inq.status}
                      onChange={e => updateStatus(inq.id, e.target.value)}
                      style={{ width: 'auto', padding: '6px 12px', fontSize: 12 }}
                    >
                      <option>חדש</option>
                      <option>בטיפול</option>
                      <option>הושלם</option>
                      <option>לא רלוונטי</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ANALYTICS TAB */}
      {activeTab === 'analytics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פניות בשבוע האחרון</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E4E4E7" />
                <XAxis dataKey="day" fontSize={11} />
                <YAxis fontSize={11} />
                <Tooltip contentStyle={{ border: '1px solid #E4E4E7', borderRadius: 8, fontSize: 13 }} />
                <Bar dataKey="פניות" fill="#5E5CE6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>פילוח סטטוסים</h3>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'חדש', value: newCount, color: '#5E5CE6' },
                      { name: 'בטיפול', value: inProgressCount, color: '#F59E0B' },
                      { name: 'הושלם', value: completedCount, color: '#10B981' },
                    ].filter(d => d.value > 0)}
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={2}
                    label={e => e.name}
                  >
                    {[
                      { color: '#5E5CE6' }, { color: '#F59E0B' }, { color: '#10B981' },
                    ].map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 16px' }}>מטריקות מרכזיות</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <InfoRow label="סך פניות" value={inquiries.length} bold />
                <InfoRow label="שיעור המרה" value={inquiries.length > 0 ? Math.round((completedCount / inquiries.length) * 100) + '%' : '0%'} color="#10B981" />
                <InfoRow label="זמן תגובה ממוצע" value="2.3 שעות" />
                <InfoRow label="חוות דעת חדשות החודש" value={reviews.filter(r => now - new Date(r.date).getTime() < 30 * 86400000).length || 2} />
                <InfoRow label="צפיות בפרופיל" value="1,247" />
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(94,92,230,0.04) 0%, transparent 100%)', borderColor: '#5E5CE6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Lightbulb size={16} style={{ color: '#5E5CE6' }} />
              <strong style={{ fontSize: 13, color: '#5E5CE6' }}>תובנות להגדלת פניות</strong>
            </div>
            <ul style={{ paddingRight: 20, margin: 0, fontSize: 14, lineHeight: 1.9 }}>
              <li>הוספת תמונת פרופיל מקצועית מגדילה פניות ב-35% בממוצע</li>
              <li>מענה בתוך שעה מעלה שיעור המרה מ-18% ל-41%</li>
              <li>בקשה לחוות דעת מלקוחות מרוצים תשפר את הנראות בחיפוש</li>
              {!business.premium && <li><strong>שדרוג לחבילת פרו</strong> יעלה את הפרופיל לראש התוצאות ויגדיל פניות פי 3</li>}
            </ul>
          </div>
        </div>
      )}

      {/* REVIEWS TAB */}
      {activeTab === 'reviews' && (
        <div>
          <div className="card" style={{ padding: 28, marginBottom: 20, background: 'linear-gradient(135deg, #F59E0B08 0%, transparent 60%)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 52, fontWeight: 900, color: '#F59E0B', lineHeight: 1 }}>{business.rating}</div>
                <div style={{ color: '#F59E0B', fontSize: 18, marginTop: 4 }}>
                  {'★'.repeat(Math.round(business.rating))}{'☆'.repeat(5 - Math.round(business.rating))}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>מבוסס על {business.reviews} חוות דעת</div>
              </div>
              <div style={{ flex: 1 }}>
                {[5, 4, 3, 2, 1].map(stars => {
                  const count = reviews.filter(r => r.rating === stars).length;
                  const pct = reviews.length > 0 ? (count / reviews.length) * 100 : (stars === 5 ? 85 : stars === 4 ? 12 : stars === 3 ? 3 : 0);
                  return (
                    <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, width: 30 }}>{stars} ★</div>
                      <div style={{ flex: 1, height: 8, background: 'var(--bg-muted)', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: pct + '%', background: '#F59E0B' }} />
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', width: 30, textAlign: 'left' }}>{Math.round(pct)}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {reviews.length === 0 ? (
            <div className="card" style={{ padding: 48, textAlign: 'center', color: 'var(--text-muted)' }}>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>עדיין אין חוות דעת</div>
              <div style={{ fontSize: 13 }}>עודד לקוחות מרוצים לכתוב חוות דעת</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {reviews.map(r => (
                <div key={r.id} className="card" style={{ padding: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 10 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <strong style={{ fontSize: 14 }}>{r.reviewerName}</strong>
                        {r.verified && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 10, color: '#10B981', fontWeight: 700, padding: '2px 7px', background: '#10B98115', borderRadius: 100 }}>
                            <CheckCircle2 size={9} /> מאומת
                          </span>
                        )}
                      </div>
                      <div style={{ color: '#F59E0B', fontSize: 14, marginBottom: 2 }}>
                        {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>
                      {new Date(r.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{r.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text)' }}>{r.content}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PROFILE TAB */}
      {activeTab === 'profile' && (
        <div className="card" style={{ padding: 28 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 20px' }}>עריכת פרופיל עסקי</h3>

          <Field label="שם העסק">
            <input defaultValue={business.name} />
          </Field>

          <Field label="תיאור קצר (tagline)">
            <input defaultValue={business.tagline} />
          </Field>

          <Field label="תיאור מפורט">
            <textarea defaultValue={business.description} rows={5} style={{ resize: 'vertical' }} />
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <Field label="טלפון"><input defaultValue={business.phone} /></Field>
            <Field label="עיר"><input defaultValue={business.city} /></Field>
          </div>

          <Field label="שירותים (מופרדים בפסיקים)">
            <input defaultValue={business.services.join(', ')} />
          </Field>

          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <button className="btn btn-primary" style={{ flex: 1 }}>שמור שינויים</button>
            <button className="btn btn-outline">ביטול</button>
          </div>

          <div style={{ padding: 14, background: 'var(--bg-subtle)', borderRadius: 8, marginTop: 20, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <strong>הערה:</strong> שינויים מהותיים בפרופיל יעברו אישור של צוות Double.AI לפני פרסום.
          </div>
        </div>
      )}

      {/* BILLING TAB */}
      {activeTab === 'billing' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 6px' }}>החבילה הנוכחית</h3>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 20px' }}>פרטי החיוב והמנוי</p>

            <div style={{ padding: 24, background: business.premium ? 'linear-gradient(135deg, #F59E0B10 0%, transparent)' : 'var(--bg-subtle)', borderRadius: 12, border: business.premium ? '1px solid #F59E0B40' : '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: business.premium ? '#F59E0B' : 'var(--text-muted)', letterSpacing: 0.5, marginBottom: 4 }}>
                    {business.premium ? '⭐ חבילת פרו' : 'חבילת בסיס'}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800 }}>
                    {business.premium ? '249 ₪/חודש' : 'חינם'}
                  </div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  {business.premium ? (
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>חיוב הבא</div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>15.5.2026</div>
                    </div>
                  ) : (
                    <button className="btn btn-accent">שדרג לפרו</button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {!business.premium && (
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 16px' }}>מה כוללת חבילת פרו?</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {[
                  'עדיפות בתוצאות החיפוש',
                  'באנר "מומלץ" על הכרטיס',
                  'סטטיסטיקות מפורטות וגרפים',
                  'עד 3 תמונות נוספות בגלריה',
                  'קישור ישיר לאתר עצמאי',
                  'תמיכה עדיפה',
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle2 size={16} style={{ color: '#10B981' }} />
                    <span style={{ fontSize: 14 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 14px' }}>היסטוריית חיוב</h3>
            <table>
              <thead><tr><th>תאריך</th><th>תיאור</th><th>סכום</th><th>סטטוס</th></tr></thead>
              <tbody>
                {business.premium ? (
                  <>
                    <tr><td>15.4.2026</td><td>חבילת פרו - חודשי</td><td>249 ₪</td><td><span style={{ color: '#10B981', fontWeight: 700, fontSize: 12 }}>שולם</span></td></tr>
                    <tr><td>15.3.2026</td><td>חבילת פרו - חודשי</td><td>249 ₪</td><td><span style={{ color: '#10B981', fontWeight: 700, fontSize: 12 }}>שולם</span></td></tr>
                    <tr><td>15.2.2026</td><td>חבילת פרו - חודשי</td><td>249 ₪</td><td><span style={{ color: '#10B981', fontWeight: 700, fontSize: 12 }}>שולם</span></td></tr>
                  </>
                ) : (
                  <tr><td colSpan="4" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 20 }}>אין היסטוריית חיוב</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// DOCUMENT ANALYZER
// ============================================================================
function DocumentAnalyzer() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [docType, setDocType] = useState('חשמל');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFile = async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
  };

  const analyze = async () => {
    if (!text.trim() && !file) return;
    setLoading(true);
    setResult(null);
    try {
      let content;
      if (file) {
        const base64 = await new Promise((res, rej) => {
          const r = new FileReader();
          r.onload = () => res(r.result.split(",")[1]);
          r.onerror = rej;
          r.readAsDataURL(file);
        });
        content = [
          { type: 'image', source: { type: 'base64', media_type: file.type, data: base64 } },
          { type: 'text', text: `זה מסמך מסוג ${docType}. נתח אותו, זהה פרטים חשובים, חיובים חריגים, והמלצות לחיסכון. החזר JSON בפורמט: {"summary": "סיכום", "keyFindings": ["ממצא1", "ממצא2"], "warnings": ["אזהרה1"], "recommendations": ["המלצה1"], "estimatedSavings": "ערכת חיסכון אפשרי"}. החזר רק JSON, בלי הקדמות או markdown.` }
        ];
      } else {
        content = `מסמך מסוג ${docType}:\n${text}\n\nנתח, זהה חריגות, והצע חיסכון. החזר JSON: {"summary": "...", "keyFindings": [...], "warnings": [...], "recommendations": [...], "estimatedSavings": "..."}. רק JSON.`;
      }

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: 'אתה אנליסט מסמכים פיננסיים ישראלי. תחזיר JSON נקי בלבד, ללא markdown ובלי הקדמות.',
          messages: [{ role: 'user', content }],
        }),
      });
      const data = await response.json();
      const textResponse = data.content?.filter(c => c.type === 'text').map(c => c.text).join('\n') || '';
      const clean = textResponse.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
    } catch (e) {
      setResult({ error: 'שגיאה בניתוח. ודא שהמסמך ברור וכולל מידע פיננסי.' });
    }
    setLoading(false);
  };

  return (
    <div className="fade-in" style={{ maxWidth: 1120, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div style={{ marginBottom: 40, maxWidth: 640 }}>
        <div className="badge" style={{ marginBottom: 16 }}><FileCheck size={12} /> ניתוח מסמכים</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 16px', lineHeight: 1.1 }}>העלה מסמך. קבל תובנות.</h1>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          העלה חשבונית חשמל, דו"ח משכנתא, תלוש שכר או כל מסמך פיננסי אחר - והמערכת תנתח אותו, תזהה חיובים חריגים ותציע המלצות קונקרטיות.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        <div className="card" style={{ padding: 28 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 20px' }}>העלאת מסמך</h3>

          <Field label="סוג מסמך">
            <select value={docType} onChange={e => setDocType(e.target.value)}>
              <option>חשמל</option>
              <option>ארנונה</option>
              <option>מים</option>
              <option>גז</option>
              <option>סלולר</option>
              <option>אינטרנט</option>
              <option>ביטוח רכב</option>
              <option>ביטוח בריאות</option>
              <option>תלוש שכר</option>
              <option>דו"ח משכנתא</option>
              <option>אחר</option>
            </select>
          </Field>

          <Field label="העלה קובץ (תמונה של חשבונית)">
            <label style={{ display: 'block', border: '2px dashed var(--border)', borderRadius: 12, padding: 32, textAlign: 'center', cursor: 'pointer', background: file ? '#10B98110' : 'var(--bg-subtle)', transition: 'all 0.2s' }}>
              <input type="file" accept="image/*,.pdf" onChange={handleFile} style={{ display: 'none' }} />
              {file ? (
                <>
                  <FileCheck size={28} style={{ color: '#10B981', marginBottom: 8 }} />
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#10B981' }}>{file.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{(file.size / 1024).toFixed(1)} KB</div>
                </>
              ) : (
                <>
                  <Upload size={28} style={{ color: 'var(--text-subtle)', marginBottom: 8 }} />
                  <div style={{ fontSize: 14, fontWeight: 600 }}>לחץ להעלאת קובץ</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>PNG, JPG או PDF</div>
                </>
              )}
            </label>
          </Field>

          <div style={{ textAlign: 'center', margin: '16px 0', color: 'var(--text-subtle)', fontSize: 13 }}>או</div>

          <Field label="הדבק טקסט מהחשבונית">
            <textarea value={text} onChange={e => setText(e.target.value)} rows={5} placeholder="העתק את פרטי החשבונית כאן - חיובים, סכומים, תאריכים..." style={{ resize: 'vertical' }} />
          </Field>

          <button className="btn btn-accent" onClick={analyze} disabled={loading || (!file && !text.trim())} style={{ width: '100%' }}>
            {loading ? <><Loader2 size={14} className="spin" /> מנתח...</> : <><Sparkles size={14} /> נתח מסמך</>}
          </button>
        </div>

        <div>
          {!result && !loading && (
            <div className="card" style={{ padding: 48, textAlign: 'center', color: 'var(--text-muted)' }}>
              <FileCheck size={40} style={{ marginBottom: 16, opacity: 0.3 }} />
              <div style={{ fontWeight: 600 }}>התוצאות יופיעו כאן</div>
              <div style={{ fontSize: 13, marginTop: 8 }}>העלה מסמך או הדבק טקסט והתחל בניתוח</div>
            </div>
          )}
          {loading && (
            <div className="card" style={{ padding: 48, textAlign: 'center' }}>
              <Loader2 size={32} className="spin" style={{ color: '#5E5CE6', marginBottom: 16 }} />
              <div style={{ fontWeight: 600 }}>מנתח את המסמך...</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>בוחן חיובים וחריגות</div>
            </div>
          )}
          {result && result.error && (
            <div className="card" style={{ padding: 32, borderColor: '#EF4444', background: '#EF444410' }}>
              <AlertTriangle size={24} style={{ color: '#EF4444', marginBottom: 12 }} />
              <div style={{ color: '#EF4444', fontWeight: 600 }}>{result.error}</div>
            </div>
          )}
          {result && !result.error && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card fade-in" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <FileCheck size={16} style={{ color: '#5E5CE6' }} />
                  <strong style={{ fontSize: 13, color: '#5E5CE6' }}>סיכום</strong>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7 }}>{result.summary}</p>
              </div>

              {result.keyFindings?.length > 0 && (
                <div className="card fade-in" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <Target size={16} style={{ color: '#10B981' }} />
                    <strong style={{ fontSize: 13, color: '#10B981' }}>ממצאים עיקריים</strong>
                  </div>
                  <ul style={{ margin: 0, paddingRight: 20, fontSize: 14, lineHeight: 1.8 }}>
                    {result.keyFindings.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}

              {result.warnings?.length > 0 && (
                <div className="card fade-in" style={{ padding: 24, borderColor: '#F59E0B', background: '#F59E0B10' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <AlertTriangle size={16} style={{ color: '#F59E0B' }} />
                    <strong style={{ fontSize: 13, color: '#F59E0B' }}>חריגות ואזהרות</strong>
                  </div>
                  <ul style={{ margin: 0, paddingRight: 20, fontSize: 14, lineHeight: 1.8 }}>
                    {result.warnings.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}

              {result.recommendations?.length > 0 && (
                <div className="card fade-in" style={{ padding: 24, borderColor: '#5E5CE6', background: 'linear-gradient(180deg, rgba(94,92,230,0.04) 0%, transparent 100%)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <Lightbulb size={16} style={{ color: '#5E5CE6' }} />
                    <strong style={{ fontSize: 13, color: '#5E5CE6' }}>המלצות לחיסכון</strong>
                  </div>
                  <ul style={{ margin: 0, paddingRight: 20, fontSize: 14, lineHeight: 1.8 }}>
                    {result.recommendations.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}

              {result.estimatedSavings && (
                <div className="card fade-in" style={{ padding: 20, background: '#10B98110', borderColor: '#10B981', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CheckCircle2 size={20} style={{ color: '#10B981' }} />
                  <div>
                    <div style={{ fontSize: 11, color: '#10B981', fontWeight: 700, letterSpacing: 0.5 }}>חיסכון פוטנציאלי</div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{result.estimatedSavings}</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// INSIGHTS
// ============================================================================
function Insights() {
  const insights = [
    { t: 'מדד המחירים לצרכן', v: '2.9%', change: '+0.3%', pos: false, desc: 'שינוי 12 חודשים אחרונים' },
    { t: 'ריבית בנק ישראל', v: '4.5%', change: 'ללא שינוי', pos: true, desc: 'החלטה אחרונה - מרץ 2026' },
    { t: 'תשואת ת"א 125', v: '+8.2%', change: '+1.1%', pos: true, desc: 'מתחילת 2026' },
    { t: 'דולר/שקל', v: '₪3.62', change: '-0.5%', pos: true, desc: 'התחזקות שקל חודש אחרון' },
  ];

  const articles = [
    { cat: 'משכנתא', t: 'מתי באמת כדאי למחזר משכנתא ב-2026', read: '5 דק׳', color: '#5E5CE6' },
    { cat: 'מיסוי', t: '7 נקודות זיכוי ששוכחים לנצל', read: '4 דק׳', color: '#8B5CF6' },
    { cat: 'פרישה', t: 'פנסיה צוברת מול תקציבית: השוואה מלאה', read: '8 דק׳', color: '#10B981' },
    { cat: 'השקעות', t: 'קרן השתלמות או קופת גמל להשקעה?', read: '6 דק׳', color: '#F59E0B' },
    { cat: 'חובות', t: 'איך לצאת מחובות ב-3 שלבים מדידים', read: '7 דק׳', color: '#EC4899' },
    { cat: 'נדל"ן', t: 'מס רכישה 2026: כל המדרגות החדשות', read: '4 דק׳', color: '#EF4444' },
  ];

  return (
    <div className="fade-in" style={{ maxWidth: 1120, margin: '0 auto', padding: '48px 24px 80px' }}>
      <div style={{ marginBottom: 48, maxWidth: 640 }}>
        <div className="badge" style={{ marginBottom: 16 }}>שוק פיננסי</div>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-1px', margin: '0 0 16px', lineHeight: 1.1 }}>תובנות שוק</h1>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>נתונים מהשוק הישראלי ומאמרים שעוזרים להבין את המגמות הפיננסיות</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 20px' }}>נתוני שוק עדכניים</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {insights.map((m, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8 }}>{m.t}</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 6, letterSpacing: '-0.5px' }}>{m.v}</div>
              <div style={{ fontSize: 12, color: m.pos ? '#10B981' : '#EF4444', fontWeight: 600 }}>{m.change}</div>
              <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 4 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 20px' }}>מדריכים מומלצים</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {articles.map((a, i) => (
            <div key={i} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }}>
              <div style={{ display: 'inline-block', padding: '3px 10px', background: a.color + '15', color: a.color, borderRadius: 100, fontSize: 11, fontWeight: 700, marginBottom: 14 }}>{a.cat}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 10px', lineHeight: 1.4 }}>{a.t}</h3>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>קריאה של {a.read}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// ABOUT
// ============================================================================
function About() {
  return (
    <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 80px' }}>
      <div className="badge" style={{ marginBottom: 16 }}>אודות</div>
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1.5px', margin: '0 0 24px', lineHeight: 1.1 }}>
        טכנולוגיה פיננסית<br />שמיועדת לישראלים
      </h1>
      <div style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 48 }}>
        <p>Double.AI הוא מרכז פיננסי מבוסס בינה מלאכותית שמטרתו לעזור לישראלים לקבל החלטות פיננסיות חכמות. הפלטפורמה משלבת כלי חישוב מקצועיים עם יועץ AI שיחתי שמכיר את השוק הישראלי - מחוקי הפנסיה ועד נקודות זיכוי במס.</p>
        <p>בשונה מכלים כלליים, Double.AI מבוסס על נתוני 2026 של בנק ישראל, רשות המיסים והמוסד לביטוח לאומי. כל חישוב לוקח בחשבון את המציאות הישראלית הייחודית.</p>
      </div>

      <div className="card" style={{ padding: 32, background: 'linear-gradient(135deg, #0A0B0D 0%, #1F2024 100%)', color: 'white' }}>
        <Sparkles size={24} style={{ color: '#5E5CE6', marginBottom: 16 }} />
        <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px' }}>מופעל על ידי Claude</h3>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: 14 }}>
          Claude Sonnet 4 של Anthropic הוא מנוע ה-AI שמאחורי היועץ האישי ומנתח המסמכים. הוא מציע איכות תשובות שלא ניתן לקבל במקום אחר בעברית.
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================
function ToolLayout({ icon: Icon, title, subtitle, color, children }) {
  return (
    <div className="fade-in" style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 80px' }}>
      <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={24} style={{ color }} />
        </div>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>{title}</h1>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>{label}</label>
      {children}
      {hint && <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

function StatCard({ label, value, color = 'var(--text)', primary = false }) {
  return (
    <div className="card" style={{ padding: 20, background: primary ? color + '08' : '#fff', borderColor: primary ? color : 'var(--border)' }}>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 6, letterSpacing: 0.3 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: '-0.5px' }}>{value}</div>
    </div>
  );
}

function InfoRow({ label, value, color = 'var(--text)', bold }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontSize: 15, fontWeight: bold ? 800 : 600, color }}>{value}</span>
    </div>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer({ setPage }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 24px', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: 'linear-gradient(135deg, #5E5CE6 0%, #0A0B0D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 14 }}>D</div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Double<span style={{ color: '#5E5CE6' }}>.AI</span></div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0, lineHeight: 1.6 }}>מרכז פיננסי מבוסס AI לצרכן הישראלי</p>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 12, letterSpacing: 0.5 }}>מוצר</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <a onClick={() => setPage('advisor')} style={{ color: 'var(--text)', textDecoration: 'none', cursor: 'pointer' }}>יועץ AI</a>
            <a onClick={() => setPage('tools')} style={{ color: 'var(--text)', textDecoration: 'none', cursor: 'pointer' }}>כלים פיננסיים</a>
            <a onClick={() => setPage('analyzer')} style={{ color: 'var(--text)', textDecoration: 'none', cursor: 'pointer' }}>ניתוח מסמכים</a>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 12, letterSpacing: 0.5 }}>משאבים</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <a onClick={() => setPage('insights')} style={{ color: 'var(--text)', textDecoration: 'none', cursor: 'pointer' }}>תובנות שוק</a>
            <a onClick={() => setPage('about')} style={{ color: 'var(--text)', textDecoration: 'none', cursor: 'pointer' }}>אודות</a>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 12, letterSpacing: 0.5 }}>משפטי</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'var(--text-muted)' }}>
            <div>מדיניות פרטיות</div>
            <div>תנאי שימוש</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1120, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid var(--border)', fontSize: 12, color: 'var(--text-subtle)', textAlign: 'center' }}>
        © 2026 Double.AI · המידע לצורכי התרשמות בלבד ואינו מהווה ייעוץ פיננסי
      </div>
    </footer>
  );
}
