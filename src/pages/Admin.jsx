import React, { useState, useMemo } from 'react';
import { useSiteData, defaultData } from '../context/SiteDataContext';

const ADMIN_PASSWORD = 'admin2024';

// ─── Helpers ─────────────────────────────────────────────────────────────────
function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function exportCSV(rows, filename) {
  if (!rows.length) return;
  const keys = Object.keys(rows[0]);
  const csv = [keys.join(','), ...rows.map(r => keys.map(k => `"${String(r[k] ?? '').replace(/"/g, '""')}"`).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click();
}

// ─── Small UI Components ──────────────────────────────────────────────────────
function Input({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>}
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" />
    </div>
  );
}

function Textarea({ label, value, onChange, rows = 3 }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>}
      <textarea rows={rows} value={value} onChange={e => onChange(e.target.value)}
        className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-y" />
    </div>
  );
}

function SaveButton({ onClick, label = 'Save Changes' }) {
  const [saved, setSaved] = useState(false);
  const handle = () => { onClick(); setSaved(true); setTimeout(() => setSaved(false), 2000); };
  return (
    <button onClick={handle} className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${saved ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}>
      <span className="material-symbols-outlined text-[18px]">{saved ? 'check' : 'save'}</span>
      {saved ? 'Saved!' : label}
    </button>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-6">
      <h3 className="text-white font-bold mb-5 flex items-center gap-2">
        <span className="w-1 h-5 bg-indigo-500 rounded-full inline-block"></span>
        {title}
      </h3>
      {children}
    </div>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);
  const tryLogin = () => { if (pw === ADMIN_PASSWORD) { onLogin(); } else { setError(true); setTimeout(() => setError(false), 2000); } };
  return (
    <div className="min-h-screen bg-slate-950 dark-grid-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 justify-center mb-10">
          <span className="material-symbols-outlined text-indigo-400 text-4xl">admin_panel_settings</span>
          <div>
            <p className="text-white font-black text-xl tracking-tight">Saint & Supper</p>
            <p className="text-slate-400 text-xs">Admin Panel</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-white font-bold text-lg mb-6 text-center">Enter Admin Password</h2>
          <div className="flex flex-col gap-4">
            <input type="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} onKeyDown={e => e.key === 'Enter' && tryLogin()}
              className={`bg-slate-800 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-700 focus:border-indigo-500'}`} />
            {error && <p className="text-red-400 text-sm text-center">Incorrect password</p>}
            <button onClick={tryLogin} className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold transition-all">Sign In</button>
          </div>
          <p className="text-slate-600 text-xs text-center mt-6">Demo password: <span className="text-slate-400 font-mono">admin2024</span></p>
        </div>
      </div>
    </div>
  );
}

// ─── INBOX Panel ─────────────────────────────────────────────────────────────
function InboxPanel() {
  const { submissions, markRead, deleteSubmission, clearAllSubmissions } = useSiteData();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const tabs = [
    { key: 'all', label: 'All', color: 'bg-slate-500' },
    { key: 'contact', label: 'Contact', color: 'bg-blue-500' },
    { key: 'volunteer', label: 'Volunteer', color: 'bg-emerald-500' },
    { key: 'partner', label: 'Partner', color: 'bg-amber-500' },
    { key: 'newsletter', label: 'Newsletter', color: 'bg-purple-500' },
    { key: 'donation', label: 'Donations', color: 'bg-rose-500' }
  ];

  const filtered = useMemo(() => {
    return submissions.filter(s => {
      const matchType = filter === 'all' || s.type === filter;
      const q = search.toLowerCase();
      const matchSearch = !q || JSON.stringify(s.data).toLowerCase().includes(q);
      return matchType && matchSearch;
    });
  }, [submissions, filter, search]);

  const typeColors = { contact: 'bg-blue-500/20 text-blue-300 border-blue-500/30', volunteer: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', partner: 'bg-amber-500/20 text-amber-300 border-amber-500/30', newsletter: 'bg-purple-500/20 text-purple-300 border-purple-500/30', donation: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };

  const exportAll = () => {
    const rows = filtered.map(s => ({ type: s.type, timestamp: s.timestamp, ...s.data }));
    exportCSV(rows, 'submissions.csv');
  };

  const handleSelect = (s) => { setSelected(s); markRead(s.id); };

  return (
    <div className="flex h-full gap-0 relative bg-slate-900/40">
      {/* List */}
      <div className={`w-full md:w-96 flex-shrink-0 flex-col border-r border-slate-800/80 bg-slate-900/80 backdrop-blur-sm z-10 ${selected ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-5 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-black text-xl tracking-tight">Inbox</h2>
            <button onClick={exportAll} className="text-xs bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 font-medium">
              <span className="material-symbols-outlined text-[14px]">download</span> Export
            </button>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search submissions..." className="w-full bg-slate-950/50 dark-grid-bg border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setFilter(t.key)} className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${filter === t.key ? 'bg-indigo-500/20 text-indigo-200 border-indigo-500/30' : 'bg-slate-800/50 text-slate-400 border-transparent hover:bg-slate-800 hover:text-slate-300'}`}>
                {t.label} <span className="ml-1 opacity-60 font-normal">{t.key === 'all' ? submissions.length : submissions.filter(s => s.type === t.key).length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-600 py-20">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">inbox</span>
              </div>
              <p className="text-sm font-medium">No submissions found</p>
            </div>
          ) : filtered.map(s => (
            <button key={s.id} onClick={() => handleSelect(s)}
              className={`w-full text-left p-5 border-b border-slate-800/40 transition-all flex gap-4 items-start relative group ${selected?.id === s.id ? 'bg-slate-800/80 shadow-inner' : 'hover:bg-slate-800/40'}`}>
              
              {/* Active Indicator Line */}
              {selected?.id === s.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 rounded-r"></div>}

              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${s.read ? 'bg-slate-700/50' : 'bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]'}`}></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${typeColors[s.type] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>{s.type}</span>
                  <span className="text-slate-500 text-[10px] font-medium">{timeAgo(s.timestamp)}</span>
                </div>
                <p className={`text-sm truncate mb-0.5 ${!s.read && selected?.id !== s.id ? 'text-white font-bold' : 'text-slate-200 font-medium'}`}>
                  {s.data.firstName ? `${s.data.firstName} ${s.data.lastName || ''}` : s.data.name || s.data.donorName || s.data.orgName || s.data.email || 'Anonymous'}
                </p>
                <p className="text-slate-400 text-xs truncate font-normal leading-relaxed">{s.data.message || s.data.subject || s.data.email || 'No additional details'}</p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Detail */}
      <div className={`flex-1 flex-col overflow-y-auto custom-scrollbar relative bg-slate-950/20 dark-grid-bg ${selected ? 'flex' : 'hidden md:flex'}`}>
        {!selected ? (
          <div className="flex flex-col items-center justify-center h-full text-slate-600">
            <div className="w-24 h-24 bg-slate-900/50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-slate-800/50">
              <span className="material-symbols-outlined text-4xl text-slate-500">mark_email_unread</span>
            </div>
            <p className="text-lg font-medium text-slate-400">Select a submission to view details</p>
          </div>
        ) : (
          <div className="p-6 md:p-10 max-w-4xl mx-auto w-full">
            
            {/* Header Actions */}
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => setSelected(null)} className="md:hidden flex items-center gap-1.5 text-slate-400 hover:text-white text-xs bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/50 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back
              </button>
              
              <div className="hidden md:block"></div> {/* Spacer for desktop */}
              

            </div>

            {/* Submission Card */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 shadow-xl overflow-hidden">
              
              {/* Card Header */}
              <div className="px-8 py-6 border-b border-slate-800/80 bg-slate-900/40 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selected.data.firstName ? `${selected.data.firstName} ${selected.data.lastName || ''}` : selected.data.name || selected.data.donorName || selected.data.orgName || selected.data.email || 'Submission'}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-widest ${typeColors[selected.type] || ''}`}>{selected.type}</span>
                    <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {new Date(selected.timestamp).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                    </span>
                  </div>
                </div>
                
                {/* Avatar Initial */}
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-xl flex-shrink-0">
                  {(selected.data.firstName || selected.data.name || selected.data.donorName || selected.data.orgName || selected.data.email || 'S')[0].toUpperCase()}
                </div>
              </div>

              {/* Card Body - Data Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {Object.entries(selected.data).map(([k, v]) => {
                    // Skip certain keys if they are redundant with the header, or format them specially
                    if (!v) return null;
                    const isLongText = typeof v === 'string' && v.length > 60;
                    return (
                      <div key={k} className={`bg-slate-950/30 dark-grid-bg rounded-xl p-4 border border-slate-800/50 ${isLongText ? 'md:col-span-2' : ''}`}>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                          {k}
                        </p>
                        <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-medium">{String(v)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

// ─── DONATIONS Panel ─────────────────────────────────────────────────────────
function DonationsPanel() {
  const { submissions, deleteSubmission } = useSiteData();
  const [search, setSearch] = useState('');
  const donations = submissions.filter(s => s.type === 'donation');

  const filtered = donations.filter(d => {
    const q = search.toLowerCase();
    return !q || JSON.stringify(d.data).toLowerCase().includes(q);
  });

  const totalRaised = donations.reduce((sum, d) => sum + (Number(d.data.amount) || 0), 0);
  const thisMonth = donations.filter(d => {
    const dt = new Date(d.timestamp);
    const now = new Date();
    return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
  }).reduce((sum, d) => sum + (Number(d.data.amount) || 0), 0);
  const avgDonation = donations.length ? Math.round(totalRaised / donations.length) : 0;

  const exportDonations = () => {
    exportCSV(filtered.map(d => ({ ...d.data, timestamp: d.timestamp })), 'donations.csv');
  };

  const statCards = [
    { label: 'Total Raised', value: `₹${totalRaised.toLocaleString('en-IN')}`, icon: 'payments', color: 'text-emerald-400' },
    { label: 'This Month', value: `₹${thisMonth.toLocaleString('en-IN')}`, icon: 'calendar_month', color: 'text-blue-400' },
    { label: 'Total Donors', value: donations.length, icon: 'group', color: 'text-amber-400' },
    { label: 'Avg Donation', value: `₹${avgDonation.toLocaleString('en-IN')}`, icon: 'trending_up', color: 'text-purple-400' }
  ];

  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Donations Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((c, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
            <span className={`material-symbols-outlined text-2xl ${c.color} mb-2 block`}>{c.icon}</span>
            <p className={`text-2xl font-black ${c.color}`}>{c.value}</p>
            <p className="text-slate-400 text-xs mt-1">{c.label}</p>
          </div>
        ))}
      </div>

      {/* Donor Table */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-slate-700/50 flex items-center justify-between gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search donors..." className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
          <button onClick={exportDonations} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
            <span className="material-symbols-outlined text-[16px]">download</span> Export CSV
          </button>
        </div>
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-600">
            <span className="material-symbols-outlined text-5xl mb-3 block">payments</span>
            <p className="text-sm">No donations yet. They'll appear here once visitors donate on the Support page.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  {['Donor Name', 'Email', 'Amount', 'Type', 'Date', ''].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-400 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(d => (
                  <tr key={d.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 text-white font-medium">{d.data.donorName || '—'}</td>
                    <td className="px-4 py-3 text-slate-400">{d.data.email || '—'}</td>
                    <td className="px-4 py-3 text-emerald-400 font-bold">₹{Number(d.data.amount || 0).toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${d.data.donationType === 'monthly' ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-700 text-slate-300'}`}>
                        {d.data.donationType || 'once'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{new Date(d.timestamp).toLocaleDateString()}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => deleteSubmission(d.id)} className="text-slate-600 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MEDIA Panel ─────────────────────────────────────────────────────────────
function MediaPanel() {
  const { siteData, updateSection } = useSiteData();
  const gallery = siteData.gallery;
  const [mediaTab, setMediaTab] = useState('photos');
  const [newPhoto, setNewPhoto] = useState({ src: '', caption: '', location: '' });
  const [newVideo, setNewVideo] = useState({ title: '', duration: '', cover: '', url: '' });

  const addPhoto = () => {
    if (!newPhoto.src) return;
    updateSection('gallery', { ...gallery, photos: [...gallery.photos, { ...newPhoto }] });
    setNewPhoto({ src: '', caption: '', location: '' });
  };

  const removePhoto = (i) => {
    const photos = gallery.photos.filter((_, idx) => idx !== i);
    updateSection('gallery', { ...gallery, photos });
  };

  const addVideo = () => {
    if (!newVideo.title) return;
    updateSection('gallery', { ...gallery, videos: [...gallery.videos, { ...newVideo }] });
    setNewVideo({ title: '', duration: '', cover: '', url: '' });
  };

  const removeVideo = (i) => {
    const videos = gallery.videos.filter((_, idx) => idx !== i);
    updateSection('gallery', { ...gallery, videos });
  };

  const updateFeatured = (field, val) => {
    updateSection('gallery', { ...gallery, featuredVideo: { ...gallery.featuredVideo, [field]: val } });
  };

  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Media Manager</h2>
      <div className="flex gap-2 mb-6">
        {['photos', 'videos'].map(t => (
          <button key={t} onClick={() => setMediaTab(t)} className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all capitalize ${mediaTab === t ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
            <span className="material-symbols-outlined text-[16px] mr-1 align-middle">{t === 'photos' ? 'photo_library' : 'video_library'}</span>
            {t}
          </button>
        ))}
      </div>

      {mediaTab === 'photos' && (
        <div>
          <SectionCard title="Add New Photo">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label="Image URL" value={newPhoto.src} onChange={v => setNewPhoto(p => ({ ...p, src: v }))} placeholder="https://..." />
              <Input label="Caption" value={newPhoto.caption} onChange={v => setNewPhoto(p => ({ ...p, caption: v }))} placeholder="What is happening in the photo?" />
              <Input label="Location" value={newPhoto.location} onChange={v => setNewPhoto(p => ({ ...p, location: v }))} placeholder="e.g. New Delhi, India" />
              {newPhoto.src && <div className="rounded-xl overflow-hidden h-28 bg-slate-900"><img src={newPhoto.src} alt="preview" className="w-full h-full object-cover" onError={e => e.target.style.display='none'} /></div>}
            </div>
            <button onClick={addPhoto} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all">
              <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span> Add Photo to Gallery
            </button>
          </SectionCard>

          <SectionCard title={`Gallery Photos (${gallery.photos.length})`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {gallery.photos.map((p, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden bg-slate-900 aspect-square">
                  <img src={p.src} alt={p.caption} className="w-full h-full object-cover" onError={e => e.target.style.opacity='0.2'} />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                    <p className="text-white text-[10px] text-center leading-tight">{p.caption}</p>
                    <button onClick={() => removePhoto(i)} className="bg-red-600 text-white rounded-lg px-3 py-1 text-xs font-bold hover:bg-red-500">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {mediaTab === 'videos' && (
        <div>
          <SectionCard title="Featured Documentary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Title" value={gallery.featuredVideo.title} onChange={v => updateFeatured('title', v)} />
              <Input label="Cover Image URL" value={gallery.featuredVideo.cover} onChange={v => updateFeatured('cover', v)} />
              <Textarea label="Description" value={gallery.featuredVideo.description} onChange={v => updateFeatured('description', v)} rows={2} />
              <Input label="Video/Embed URL" value={gallery.featuredVideo.url} onChange={v => updateFeatured('url', v)} placeholder="YouTube embed URL" />
            </div>
          </SectionCard>

          <SectionCard title="Add New Video">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label="Video Title" value={newVideo.title} onChange={v => setNewVideo(p => ({ ...p, title: v }))} />
              <Input label="Duration" value={newVideo.duration} onChange={v => setNewVideo(p => ({ ...p, duration: v }))} placeholder="e.g. 4:12" />
              <Input label="Thumbnail Image URL" value={newVideo.cover} onChange={v => setNewVideo(p => ({ ...p, cover: v }))} placeholder="https://..." />
              <Input label="Video URL" value={newVideo.url} onChange={v => setNewVideo(p => ({ ...p, url: v }))} placeholder="YouTube/Vimeo URL" />
            </div>
            <button onClick={addVideo} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all">
              <span className="material-symbols-outlined text-[18px]">video_call</span> Add Video
            </button>
          </SectionCard>

          <SectionCard title={`Screening Room Videos (${gallery.videos.length})`}>
            <div className="space-y-3">
              {gallery.videos.map((v, i) => (
                <div key={i} className="flex gap-4 items-center bg-slate-900 rounded-xl p-3">
                  <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                    <img src={v.cover} alt={v.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{v.title}</p>
                    <p className="text-slate-500 text-xs">{v.duration}</p>
                  </div>
                  <button onClick={() => removeVideo(i)} className="text-slate-600 hover:text-red-400 transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  );
}

// ─── HERO Editor ─────────────────────────────────────────────────────────────
function HeroEditor() {
  const { siteData, updateSection } = useSiteData();
  const [local, setLocal] = useState(siteData.hero);
  const f = (k) => v => setLocal(p => ({ ...p, [k]: v }));
  const updateImg = (i, val) => {
    const imgs = [...local.sliderImages]; imgs[i] = val;
    setLocal(p => ({ ...p, sliderImages: imgs }));
  };
  const addImg = () => {
    setLocal(p => ({ ...p, sliderImages: [...p.sliderImages, ''] }));
  };
  const removeImg = (i) => {
    const imgs = local.sliderImages.filter((_, idx) => idx !== i);
    setLocal(p => ({ ...p, sliderImages: imgs }));
  };
  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Hero Section</h2>
      <SectionCard title="Text Content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Badge Text" value={local.badge} onChange={f('badge')} />
          <Input label="Main Headline" value={local.headline} onChange={f('headline')} />
          <Input label="Accent Headline (colored)" value={local.headlineAccent} onChange={f('headlineAccent')} />
          <Input label="Primary Button Label" value={local.ctaPrimary} onChange={f('ctaPrimary')} />
          <div className="md:col-span-2"><Textarea label="Subtitle / Description" value={local.subtitle} onChange={f('subtitle')} rows={2} /></div>
          <Input label="Secondary Button Label" value={local.ctaSecondary} onChange={f('ctaSecondary')} />
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('hero', local)} /></div>
      </SectionCard>
      <SectionCard title="Slider Images">
        {local.sliderImages.map((img, i) => (
          <div key={i} className="flex gap-3 items-start mb-4">
            <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900">
              <img src={img} alt={`Slide ${i+1}`} className="w-full h-full object-cover" onError={e => e.target.style.opacity='0'} />
            </div>
            <div className="flex-1">
              <Input label={`Slide ${i + 1} URL`} value={img} onChange={v => updateImg(i, v)} placeholder="https://..." />
            </div>
            <button onClick={() => removeImg(i)} className="mt-6 text-slate-600 hover:text-red-400 transition-colors flex-shrink-0" title="Remove image">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <button onClick={addImg} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all">
            <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span> Add Image
          </button>
          <SaveButton onClick={() => updateSection('hero', local)} />
        </div>
      </SectionCard>
    </div>
  );
}

// ─── STATS Editor ─────────────────────────────────────────────────────────────
function StatsEditor() {
  const { siteData, updateSection } = useSiteData();
  const [stats, setStats] = useState(siteData.stats);
  const [impact, setImpact] = useState(siteData.impactCards);

  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Stats & Impact</h2>
      <SectionCard title="Ticker Stats (Story Section)">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-slate-900 rounded-xl p-4">
              <p className="text-slate-400 text-xs font-bold mb-3">Stat {i + 1}</p>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Value" value={s.value} onChange={v => { const n = [...stats]; n[i] = { ...n[i], value: v }; setStats(n); }} />
                <Input label="Label" value={s.label} onChange={v => { const n = [...stats]; n[i] = { ...n[i], label: v }; setStats(n); }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('stats', stats)} /></div>
      </SectionCard>
      <SectionCard title="Impact Counter Cards">
        <div className="space-y-4">
          {impact.map((c, i) => (
            <div key={i} className="bg-slate-900 rounded-xl p-4">
              <p className="text-slate-400 text-xs font-bold mb-3">Card {i + 1}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Input label="Count Target" type="number" value={c.target} onChange={v => { const n = [...impact]; n[i] = { ...n[i], target: Number(v) }; setImpact(n); }} />
                <Input label="Suffix" value={c.suffix} onChange={v => { const n = [...impact]; n[i] = { ...n[i], suffix: v }; setImpact(n); }} />
                <Input label="Label" value={c.label} onChange={v => { const n = [...impact]; n[i] = { ...n[i], label: v }; setImpact(n); }} />
                <Input label="Icon" value={c.icon} onChange={v => { const n = [...impact]; n[i] = { ...n[i], icon: v }; setImpact(n); }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('impactCards', impact)} /></div>
      </SectionCard>
    </div>
  );
}

// ─── STORY Editor ──────────────────────────────────────────────────────────
function StoryEditor() {
  const { siteData, updateSection } = useSiteData();
  const [founder, setFounder] = useState(siteData.founder);
  const [eras, setEras] = useState(siteData.storyEras);
  const ff = (k) => v => setFounder(p => ({ ...p, [k]: v }));
  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Our Story & Founder</h2>
      <SectionCard title="Founder Message">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2"><Textarea label="Quote" value={founder.quote} onChange={ff('quote')} rows={3} /></div>
          <Input label="Founder Name" value={founder.name} onChange={ff('name')} />
          <Input label="Title / Role" value={founder.title} onChange={ff('title')} />
          <Input label="Signature Text" value={founder.signature} onChange={ff('signature')} />
          <Input label="Portrait Image URL" value={founder.portrait} onChange={ff('portrait')} />
        </div>
        {founder.portrait && <img src={founder.portrait} alt="founder" className="w-24 h-24 object-cover rounded-xl mt-3" onError={e => e.target.style.display='none'} />}
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('founder', founder)} /></div>
      </SectionCard>
      {eras.map((era, i) => (
        <SectionCard key={i} title={`Timeline Era ${i + 1}: ${era.year}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Year / Label" value={era.year} onChange={v => { const n = [...eras]; n[i] = { ...n[i], year: v }; setEras(n); }} />
            <Input label="Title" value={era.title} onChange={v => { const n = [...eras]; n[i] = { ...n[i], title: v }; setEras(n); }} />
            <div className="md:col-span-2"><Textarea label="Description" value={era.description} onChange={v => { const n = [...eras]; n[i] = { ...n[i], description: v }; setEras(n); }} rows={3} /></div>
            <Input label="Image URL" value={era.image} onChange={v => { const n = [...eras]; n[i] = { ...n[i], image: v }; setEras(n); }} />
            <Input label="Icon (material symbol)" value={era.icon} onChange={v => { const n = [...eras]; n[i] = { ...n[i], icon: v }; setEras(n); }} />
          </div>
        </SectionCard>
      ))}
      <div className="flex justify-end"><SaveButton onClick={() => updateSection('storyEras', eras)} /></div>
    </div>
  );
}

// ─── INITIATIVES Editor ───────────────────────────────────────────────────────
function InitiativesEditor() {
  const { siteData, updateSection } = useSiteData();
  const [items, setItems] = useState(siteData.initiatives);
  const update = (i, k, v) => { const n = [...items]; n[i] = { ...n[i], [k]: v }; setItems(n); };

  const addInitiative = () => {
    const newItems = [...items, { title: 'New Program', subtitle: '', stats: '', description: '', image: '', category: 'ongoing' }];
    setItems(newItems);
  };
  
  const removeInitiative = (i) => {
    const newItems = items.filter((_, idx) => idx !== i);
    setItems(newItems);
  };

  return (
    <div className="p-6 overflow-y-auto h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white font-black text-2xl">Initiatives / Programs</h2>
        <button onClick={addInitiative} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-lg">
          <span className="material-symbols-outlined text-[18px]">add</span> Add Program
        </button>
      </div>
      {items.map((item, i) => (
        <SectionCard key={i} title={`Initiative ${i + 1}: ${item.title}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Title" value={item.title} onChange={v => update(i, 'title', v)} />
            <Input label="Subtitle / Tag" value={item.subtitle} onChange={v => update(i, 'subtitle', v)} />
            <Input label="Stats Badge" value={item.stats} onChange={v => update(i, 'stats', v)} />
            <Input label="Image URL" value={item.image} onChange={v => update(i, 'image', v)} />
            <div className="md:col-span-2"><Textarea label="Description" value={item.description} onChange={v => update(i, 'description', v)} rows={3} /></div>
            
            <div className="md:col-span-2 flex justify-between items-center mt-2 border-t border-slate-700/50 pt-4">
              <button onClick={() => removeInitiative(i)} className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1.5 font-bold bg-red-400/10 hover:bg-red-400/20 px-3 py-2 rounded-lg transition-colors border border-red-400/20">
                <span className="material-symbols-outlined text-[16px]">delete</span> Remove Program
              </button>
              <SaveButton onClick={() => updateSection('initiatives', items)} />
            </div>
          </div>
        </SectionCard>
      ))}
      {items.length === 0 && (
        <div className="text-slate-400 text-center py-10 border border-dashed border-slate-700 rounded-xl bg-slate-800/30">
          No programs found. Click "Add Program" to create one.
        </div>
      )}
      {items.length > 0 && (
        <div className="flex justify-end mt-4"><SaveButton onClick={() => updateSection('initiatives', items)} /></div>
      )}
    </div>
  );
}

// ─── BLOG Editor ─────────────────────────────────────────────────────────────
function BlogEditor() {
  const { siteData, updateSection } = useSiteData();
  const [featured, setFeatured] = useState(siteData.featuredPost);
  const [articles, setArticles] = useState(siteData.articles);
  const [newArt, setNewArt] = useState({ title: '', category: '', date: '', readTime: '', excerpt: '', image: '' });
  const ff = (k) => v => setFeatured(p => ({ ...p, [k]: v }));
  const updateArt = (i, k, v) => { const n = [...articles]; n[i] = { ...n[i], [k]: v }; setArticles(n); };
  const addArticle = () => { if (!newArt.title) return; setArticles(p => [...p, { ...newArt }]); setNewArt({ title: '', category: '', date: '', readTime: '', excerpt: '', image: '' }); };
  const removeArticle = (i) => setArticles(articles.filter((_, idx) => idx !== i));
  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Blog</h2>
      <SectionCard title="Featured Post (Banner)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2"><Input label="Title" value={featured.title} onChange={ff('title')} /></div>
          <Input label="Category" value={featured.category} onChange={ff('category')} />
          <Input label="Date" value={featured.date} onChange={ff('date')} />
          <Input label="Read Time" value={featured.readTime} onChange={ff('readTime')} />
          <Input label="Image URL" value={featured.image} onChange={ff('image')} />
          <div className="md:col-span-2"><Textarea label="Excerpt" value={featured.excerpt} onChange={ff('excerpt')} rows={2} /></div>
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('featuredPost', featured)} /></div>
      </SectionCard>
      <SectionCard title="Add New Article">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2"><Input label="Title" value={newArt.title} onChange={v => setNewArt(p => ({ ...p, title: v }))} /></div>
          <Input label="Category" value={newArt.category} onChange={v => setNewArt(p => ({ ...p, category: v }))} />
          <Input label="Date" value={newArt.date} onChange={v => setNewArt(p => ({ ...p, date: v }))} />
          <Input label="Read Time" value={newArt.readTime} onChange={v => setNewArt(p => ({ ...p, readTime: v }))} />
          <Input label="Image URL" value={newArt.image} onChange={v => setNewArt(p => ({ ...p, image: v }))} />
          <div className="md:col-span-2"><Textarea label="Excerpt" value={newArt.excerpt} onChange={v => setNewArt(p => ({ ...p, excerpt: v }))} rows={2} /></div>
        </div>
        <button onClick={addArticle} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all">
          <span className="material-symbols-outlined text-[18px]">add</span> Add Article
        </button>
      </SectionCard>
      {articles.map((a, i) => (
        <SectionCard key={i} title={`Article ${i + 1}: ${a.title.slice(0, 40)}...`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2"><Input label="Title" value={a.title} onChange={v => updateArt(i, 'title', v)} /></div>
            <Input label="Category" value={a.category} onChange={v => updateArt(i, 'category', v)} />
            <Input label="Date" value={a.date} onChange={v => updateArt(i, 'date', v)} />
            <Input label="Image URL" value={a.image} onChange={v => updateArt(i, 'image', v)} />
            <div className="md:col-span-2"><Textarea label="Excerpt" value={a.excerpt} onChange={v => updateArt(i, 'excerpt', v)} rows={2} /></div>
            <div className="md:col-span-2 flex justify-between">
              <button onClick={() => removeArticle(i)} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">delete</span> Remove
              </button>
              <SaveButton onClick={() => updateSection('articles', articles)} />
            </div>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

// ─── TEAM Editor ──────────────────────────────────────────────────────────────
function TeamEditor() {
  const { siteData, updateSection } = useSiteData();
  const [exec, setExec] = useState(siteData.executiveBoard);
  const [sub, setSub] = useState(siteData.subcommittee);
  const updateExec = (i, k, v) => { const n = [...exec]; n[i] = { ...n[i], [k]: v }; setExec(n); };
  const updateSub = (i, k, v) => { const n = [...sub]; n[i] = { ...n[i], [k]: v }; setSub(n); };

  const addExec = () => setExec(p => [...p, { name: 'New Executive', role: '', bio: '', image: '' }]);
  const removeExec = (i) => setExec(exec.filter((_, idx) => idx !== i));

  const addSub = () => setSub(p => [...p, { name: 'New Member', role: '', bio: '', image: '' }]);
  const removeSub = (i) => setSub(sub.filter((_, idx) => idx !== i));

  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Leadership Team</h2>
      
      {/* Executive Board */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Executive Board</h3>
        <button onClick={addExec} className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded font-bold text-xs transition-all shadow">
          <span className="material-symbols-outlined text-[16px]">person_add</span> Add Exec
        </button>
      </div>
      {exec.map((m, i) => (
        <SectionCard key={i} title={`Executive Board — ${m.name}`}>
          <div className="flex gap-4 items-start">
            <img src={m.image} alt={m.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" onError={e => e.target.style.opacity='0.3'} />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Name" value={m.name} onChange={v => updateExec(i, 'name', v)} />
              <Input label="Role" value={m.role} onChange={v => updateExec(i, 'role', v)} />
              <Input label="Photo URL" value={m.image} onChange={v => updateExec(i, 'image', v)} />
              <div className="md:col-span-2"><Textarea label="Bio" value={m.bio} onChange={v => updateExec(i, 'bio', v)} rows={2} /></div>
              
              <div className="md:col-span-2 flex justify-between items-center mt-2 border-t border-slate-700/50 pt-4">
                <button onClick={() => removeExec(i)} className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1.5 font-bold bg-red-400/10 hover:bg-red-400/20 px-3 py-2 rounded-lg transition-colors border border-red-400/20">
                  <span className="material-symbols-outlined text-[16px]">delete</span> Remove Member
                </button>
                <SaveButton onClick={() => updateSection('executiveBoard', exec)} />
              </div>
            </div>
          </div>
        </SectionCard>
      ))}
      <div className="flex justify-end mb-10"><SaveButton onClick={() => updateSection('executiveBoard', exec)} /></div>
      
      {/* Subcommittee */}
      <div className="flex items-center justify-between mb-4 mt-8 pt-8 border-t border-slate-800">
        <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm">Subcommittee</h3>
        <button onClick={addSub} className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded font-bold text-xs transition-all shadow">
          <span className="material-symbols-outlined text-[16px]">person_add</span> Add Member
        </button>
      </div>
      {sub.map((m, i) => (
        <SectionCard key={i} title={`Subcommittee — ${m.name}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Name" value={m.name} onChange={v => updateSub(i, 'name', v)} />
            <Input label="Role" value={m.role} onChange={v => updateSub(i, 'role', v)} />
            <Input label="Photo URL" value={m.image} onChange={v => updateSub(i, 'image', v)} />
            <Textarea label="Bio" value={m.bio} onChange={v => updateSub(i, 'bio', v)} rows={2} />
            <div className="md:col-span-2 flex justify-between items-center mt-2 border-t border-slate-700/50 pt-4">
              <button onClick={() => removeSub(i)} className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1.5 font-bold bg-red-400/10 hover:bg-red-400/20 px-3 py-2 rounded-lg transition-colors border border-red-400/20">
                <span className="material-symbols-outlined text-[16px]">delete</span> Remove Member
              </button>
              <SaveButton onClick={() => updateSection('subcommittee', sub)} />
            </div>
          </div>
        </SectionCard>
      ))}
      <div className="flex justify-end mt-4"><SaveButton onClick={() => updateSection('subcommittee', sub)} /></div>
    </div>
  );
}

// ─── CONTACT Editor ───────────────────────────────────────────────────────────
function ContactEditor() {
  const { siteData, updateSection } = useSiteData();
  const [contact, setContact] = useState(siteData.contact);
  const [footer, setFooter] = useState(siteData.footer);
  return (
    <div className="p-6 overflow-y-auto h-full">
      <h2 className="text-white font-black text-2xl mb-6">Contact & Footer</h2>
      <SectionCard title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2"><Input label="Address" value={contact.address} onChange={v => setContact(p => ({ ...p, address: v }))} /></div>
          <Input label="Phone Number" value={contact.phone} onChange={v => setContact(p => ({ ...p, phone: v }))} />
          <Input label="Phone Hours" value={contact.phoneHours} onChange={v => setContact(p => ({ ...p, phoneHours: v }))} />
          <Input label="Email Address" value={contact.email} onChange={v => setContact(p => ({ ...p, email: v }))} />
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('contact', contact)} /></div>
      </SectionCard>
      <SectionCard title="Footer Content">
        <div className="grid grid-cols-1 gap-4">
          <Textarea label="Tagline" value={footer.tagline} onChange={v => setFooter(p => ({ ...p, tagline: v }))} rows={2} />
          <Input label="Footer Address" value={footer.address} onChange={v => setFooter(p => ({ ...p, address: v }))} />
        </div>
        <div className="mt-4 flex justify-end"><SaveButton onClick={() => updateSection('footer', footer)} /></div>
      </SectionCard>
    </div>
  );
}

// ─── MAIN Admin App ───────────────────────────────────────────────────────────
export function Admin() {
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('adminAuth') === 'true');
  const { unreadCount, resetToDefaults } = useSiteData();
  const [activeTab, setActiveTab] = useState('inbox');

  const handleLogin = () => { sessionStorage.setItem('adminAuth', 'true'); setLoggedIn(true); };
  const handleLogout = () => { sessionStorage.removeItem('adminAuth'); setLoggedIn(false); };

  if (!loggedIn) return <LoginScreen onLogin={handleLogin} />;

  const nav = [
    { key: 'inbox', icon: 'inbox', label: 'Inbox', badge: unreadCount > 0 ? unreadCount : null },
    { key: 'donations', icon: 'payments', label: 'Donations' },
    { key: 'media', icon: 'photo_library', label: 'Media' },
    { key: 'hero', icon: 'home', label: 'Hero' },
    { key: 'stats', icon: 'bar_chart', label: 'Stats' },
    { key: 'story', icon: 'auto_stories', label: 'Story' },
    { key: 'initiatives', icon: 'rocket_launch', label: 'Programs' },
    { key: 'blog', icon: 'article', label: 'Blog' },
    { key: 'team', icon: 'group', label: 'Team' },
    { key: 'contact', icon: 'call', label: 'Contact' }
  ];

  const panels = { inbox: <InboxPanel />, donations: <DonationsPanel />, media: <MediaPanel />, hero: <HeroEditor />, stats: <StatsEditor />, story: <StoryEditor />, initiatives: <InitiativesEditor />, blog: <BlogEditor />, team: <TeamEditor />, contact: <ContactEditor /> };

  return (
    <div className="flex h-screen bg-slate-950 dark-grid-bg font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 md:w-56 flex-shrink-0 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-400 text-2xl">admin_panel_settings</span>
            <span className="hidden md:block text-white font-black text-sm tracking-tight leading-tight">Saint &<br/>Supper</span>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-2 overflow-y-auto space-y-1">
          {nav.map(n => (
            <button key={n.key} onClick={() => setActiveTab(n.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${activeTab === n.key ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
              <span className="material-symbols-outlined text-[20px] flex-shrink-0">{n.icon}</span>
              <span className="hidden md:block">{n.label}</span>
              {n.badge && <span className="absolute top-1 right-1 md:relative md:top-auto md:right-auto md:ml-auto min-w-[18px] h-[18px] bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1">{n.badge}</span>}
            </button>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="p-2 border-t border-slate-800 space-y-1">
          <button onClick={() => { if (window.confirm('Reset ALL site content to defaults?')) resetToDefaults(); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-slate-600 hover:text-amber-400 hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
            <span className="hidden md:block">Reset Defaults</span>
          </button>
          <a href="/" target="_blank" rel="noreferrer" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-slate-600 hover:text-white hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            <span className="hidden md:block">View Website</span>
          </a>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-slate-600 hover:text-red-400 hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {panels[activeTab]}
      </main>
    </div>
  );
}
