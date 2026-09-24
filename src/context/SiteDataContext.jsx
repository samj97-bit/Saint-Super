import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'saintSupperAdmin';

const defaultData = {
  hero: {
    badge: 'Registered NGO',
    headline: 'Hope Needs Action.',
    headlineAccent: 'Start Here.',
    subtitle: 'Behind every statistic is a beating heart. Your contribution provides warm meals for the hungry, safe classrooms for children, and a fighting chance for families struggling to survive.',
    ctaPrimary: 'Give Hope Today',
    ctaSecondary: 'Read Our Story',
    sliderImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCiQn1E5_P6-5ukhFWXclYtIU766CAINxn5ZhXUWlBhvp4fUHSMW-L8HfxhEfpX1YmJbGH-iywyqqGr9fHrJHxwFVzNNHfKBQ2knS7HJcB7q6-bsRp-7tcwRpQ0exvHFCSQTQr7fyP9qzvkYGG2T0GBuYzGGe_VWQ7DDPOpl8toYHbHKVCTHml_7MsFN1AMkHJma4NiBF2HJPmT9pkrFyKrDkE_4enUTIrG8Mjhvp_vx0H_kNA1MNNFQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsdCJEecFTYtaN8uQSbrrZQ_F8BawQPwIYZdi71cJNN0NgG6sWOLeKxQy3_VWaITS3CK54SKbPXrPaI86QBrx1L-JFcAYP63z_tYFU40489MQCPpUvaHyJSEtbR351QdiNjsAQ_DF8Y-DLDlBYwAlbCR6RUWL4kWmhlyeNoXENWb9760QgetsbvwOyCTMMsUXHatHjo93qvuw7YSWeptjZRwtuiN8Hh9WkWepzway-ojgdrpIDXEVEGw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNSTFB2FjMWWk5Bbvf3kGuViU72FKtuBSLpNQKrW-XprBR_I6XNBw_5YeQQoqgFePc0echOLMCleSZa_Mrs5VCkNAOLbzE9HFTECZkjsHG0Tc5bVm35yzYmT0jnAEplKBA1qRDeUTe3UgofcjEzP23TqoICWDDgyOlzGO_vCnaArBV9I4HaaEVmMC5bVHnOCeCjeZASZL_Tjsozi0J8vuHqqenfnkpFZlmGZfkr_yzapmwfPB5R1QxA'
    ]
  },
  stats: [
    { value: '1.2M+', label: 'Warm Meals Shared' },
    { value: '2,500', label: 'Children Educated' },
    { value: '300+', label: 'Caring Volunteers' },
    { value: '5+', label: 'Years of Love' }
  ],
  impactCards: [
    { target: 1000, suffix: '+', label: 'CHILDREN PROTECTED', desc: 'Providing safe spaces, mentorship, and a chance to dream beyond the slums.', icon: 'groups' },
    { target: 500, suffix: '+', label: 'FAMILIES UPLIFTED', desc: 'Restoring dignity through nutrition, medical aid, and unwavering emotional support.', icon: 'volunteer_activism' },
    { target: 50, suffix: '+', label: 'HEARTS ENGAGED', desc: 'Selfless volunteers who pour their love and time into our communities every single week.', icon: 'diversity_1' },
    { target: 4, suffix: '+', label: 'LIFELINES CREATED', desc: 'Targeted initiatives designed to break the cycle of poverty and replace despair with hope.', icon: 'rocket_launch' }
  ],
  testimonials: [
    { quote: "I used to cry when my children asked for food at night. Because of Annapurna, they sleep with full stomachs and a smile. You didn't just give us food; you gave us our dignity back.", name: "Lakshmi", role: "Mother of three", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
    { quote: "Before Udaan, I thought I would work in a factory forever. Now, I am learning computers and I want to be an engineer. They believed in me when no one else did.", name: "Raju", role: "Udaan Student, Age 14", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200" },
    { quote: "Volunteering here changed my life. Seeing the sheer joy on a grandmother's face when we installed the solar light in her hut... that is a feeling I will carry with me forever.", name: "Vikram", role: "ASTRYX Volunteer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
  ],
  founder: {
    quote: 'Kindness is not a luxury; it is the fundamental obligation of a civilized society to look after its own.',
    name: 'Arjun V. Saint',
    title: 'Founder & Chairperson',
    portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWVWspSTDp8xHLv_nTAK1s_pe6jYB2BnYntBH613ZeHpjhA0khI1zWt_BV8f8tcpa-4ZgkFXnl-zs4kCc8ooyWU0xtK1FZXJwb1sVHrzx-u6OdKn2qzY8_SZQ1ZzWNJmtsEB6rLCEowqYmNhAoaxNPjttwg3Wx4UXWAO1AaHLuUFaL5KtrVcsw6lQphQcEVkVTcXDvWQfH0ZrY8ZWlhhqF8kZ8Gbma7N3C8em-J3ub5W1qFRxojNfJhA',
    signature: 'Arjun Saint'
  },
  storyEras: [
    { year: '2018', title: 'How We Started', description: "It started in a small apartment in Delhi. Our founders noticed the massive amount of food being thrown away at local events while families on the street just outside were starving. That weekend, three volunteers rented a van, collected surplus meals from a local catering hall, and distributed them to 40 families living near the railway station. We didn't have a master plan—we just wanted to feed people.", image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200', icon: 'rocket_launch' },
    { year: '2020', title: 'Scaling the Kitchens', description: 'When the pandemic hit, daily wage workers lost their livelihoods overnight. The need for food jumped from hundreds to tens of thousands. We formally registered the Foundation and launched our first permanent community kitchen. For six straight months, our volunteers worked 18-hour shifts to cook and deliver over 5,000 hot meals every single day.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200', icon: 'restaurant' },
    { year: '2022', title: 'Opening Learning Centers', description: "While serving food in the slums, we realized that hunger was just the symptom; a lack of opportunity was the cause. We rented two small rooms and hired local teachers to start after-school tutoring for the children. This pilot program became 'Udaan', which has since grown into 12 active learning centers helping kids stay in school.", image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200', icon: 'school' },
    { year: 'Today', title: 'Where We Are Now', description: "Today, we operate a network of community kitchens, learning centers, and rural technology projects across four states. We have grown from three friends in a rented van to a massive network of over 500 active volunteers. We are still learning, still growing, and still driven by the exact same goal we had on day one: making sure no one gets left behind.", image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200', icon: 'diversity_3' }
  ],
  initiatives: [
    { id: 'annapurna', title: 'Annapurna', subtitle: 'Food Security Program', description: 'A community kitchen initiative providing daily hot meals to daily wage workers and homeless individuals. Operating across 5 major locations, Annapurna serves over 1,200 meals every day to ensure basic food security for the most vulnerable demographics.', stats: '1,200+ Daily Meals', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200' },
    { id: 'udaan', title: 'Udaan', subtitle: 'Primary Education Support', description: 'An educational support program for children in urban slums. Udaan provides after-school tutoring, essential school supplies, and mentorship. We currently operate 12 learning centers, supporting over 2,500 students in their journey to complete primary and secondary education.', stats: '12 Learning Centers', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200' },
    { id: 'astryx', title: 'ASTRYX', subtitle: 'Technology for Welfare', description: 'A technology-for-good initiative where engineers and volunteers build practical solutions for rural communities. Recent deployments include installing low-cost solar lighting in off-grid villages and building sustainable, community-maintained water filtration systems.', stats: '15 Active Deployments', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
    { id: 'conclave', title: 'Conclave', subtitle: 'Annual Policy Summit', description: 'An annual summit that brings together grassroots activists, policymakers, and community leaders. Conclave serves as a pragmatic platform to discuss policy changes, share ground realities, and build collaborative strategies for ongoing social welfare projects.', stats: 'National Summit', image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200' }
  ],
  featuredPost: {
    title: 'One Year of Udaan: How 12 Small Rooms Changed 2,500 Lives',
    category: 'Impact Story',
    date: 'October 15, 2026',
    readTime: '5 min read',
    excerpt: 'When we rented our first two rooms to start the Udaan after-school program, we had no idea how quickly it would grow. Today, we are reflecting on the incredible journey of our students and the teachers who made it happen.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600'
  },
  articles: [
    { title: 'Solar Filters Installed in 5 New Off-Grid Villages', category: 'ASTRYX Project', date: 'October 02, 2026', readTime: '4 min read', excerpt: 'Our engineering volunteers spent the last three weekends deploying low-cost, sustainable water filtration systems to communities that previously lacked access to clean drinking water.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
    { title: 'Why Community Kitchens Matter Now More Than Ever', category: 'Opinion', date: 'September 28, 2026', readTime: '6 min read', excerpt: "Inflation and rising food costs are hitting daily wage earners the hardest. Here is a ground-level look at why free community kitchens are the absolute first line of defense against systemic poverty.", image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800' },
    { title: 'Announcing the 2026 National Policy Conclave', category: 'Event', date: 'September 15, 2026', readTime: '3 min read', excerpt: "We are thrilled to announce the dates for this year's Conclave. Join grassroots activists, policymakers, and our core volunteers as we discuss real, actionable solutions for urban hunger.", image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800' },
    { title: 'Volunteer Diary: My First Month Cooking for Annapurna', category: 'Volunteer Diary', date: 'September 05, 2026', readTime: '4 min read', excerpt: 'Priya, a college student from Delhi, shares her raw, unfiltered experience of waking up at 4 AM every weekend to chop vegetables and serve meals at our largest community kitchen.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
    { title: 'How to Organize a Surplus Food Drive in Your Neighborhood', category: 'Guide', date: 'August 20, 2026', readTime: '7 min read', excerpt: "Want to help but don't know where to start? We've compiled a step-by-step guide on how to safely collect surplus food from local events and ensure it reaches those who need it most.", image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800' },
    { title: 'Meet the Teachers Behind Udaan', category: 'Team Spotlight', date: 'August 12, 2026', readTime: '5 min read', excerpt: "They aren't just teaching math and science; they are providing mentorship, safety, and hope. Meet the incredible local educators running our learning centers.", image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800' }
  ],
  executiveBoard: [
    { name: 'Arjun V. Saint', role: 'Founder & Chairperson', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', bio: 'Arjun has over two decades of experience in grassroots mobilization and community development. His vision for a more equitable society drives our core mission forward every single day.' },
    { name: 'Dr. Maya Sharma', role: 'Vice Chairperson', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', bio: 'A renowned sociologist, Dr. Sharma brings invaluable insights into structural inequalities. She ensures our programs are backed by rigorous research and real-world empathy.' },
    { name: 'David Chen', role: 'Treasurer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', bio: 'With a strong background in ethical finance, David guarantees complete transparency and maximum impact for every donation we receive.' }
  ],
  subcommittee: [
    { name: 'Priya Patel', role: 'Co-Chair, Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80', bio: 'Priya orchestrates our complex on-ground logistics with a warm smile, ensuring that aid reaches the most remote communities efficiently.' },
    { name: 'Anita Desai', role: 'Co-Chair, Programs', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80', bio: "Anita designs and implements our core initiatives. Her passion for child education has transformed thousands of lives." },
    { name: 'Marcus Johnson', role: 'Co-Chair, Strategy', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80', bio: 'Marcus helps us scale our impact through strategic partnerships and innovative advocacy campaigns.' }
  ],
  contact: {
    address: '144 Annapurna Road, New Delhi, India 110001',
    phone: '+91 98765 43210',
    phoneHours: 'Available Mon-Sat, 9AM–6PM',
    email: 'hello@ngo.org'
  },
  footer: {
    tagline: 'Empowering communities and engineering the future of welfare.',
    address: '123 Welfare Avenue, New Delhi, Delhi 110001, India'
  },
  gallery: {
    photos: [
      { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', caption: 'Early morning prep at the Annapurna community kitchen.', location: 'New Delhi, India' },
      { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600', caption: 'Fresh produce delivery from local farmers.', location: 'Punjab, India' },
      { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800', caption: 'Volunteers organizing surplus food drives.', location: 'Mumbai, India' },
      { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', caption: 'Installing the first solar grid in the village.', location: 'Jharkhand, India' },
      { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=600', caption: 'A student reading at an Udaan center.', location: 'Bihar, India' },
      { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600', caption: "A teacher's dedication.", location: 'Pune, India' },
      { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800', caption: 'Community gathering after a successful harvest.', location: 'Odisha, India' },
      { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600', caption: 'Smiling faces at the annual conclave.', location: 'Bangalore, India' },
      { src: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800', caption: 'Planting trees for the ASTRYX project.', location: 'Kerala, India' }
    ],
    videos: [
      { title: 'Volunteer Diary: The 4AM Kitchen Shift', duration: '4:12', cover: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', url: '' },
      { title: 'Voices of Udaan: Meet Anjali', duration: '3:45', cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', url: '' },
      { title: 'Installing Solar in Rural Jharkhand', duration: '8:20', cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', url: '' }
    ],
    featuredVideo: {
      title: 'A Year on the Ground: 2026',
      description: 'Step into the shoes of our volunteers. This 12-minute immersive short film documents the harsh realities and the breathtaking moments of hope we witnessed across rural India this year.',
      cover: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&q=80&w=2000',
      url: ''
    }
  }
};

const SiteDataContext = createContext(null);

export function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with defaults to handle new fields added later
        return { ...defaultData, ...parsed.content };
      }
    } catch (e) { /* ignore */ }
    return defaultData;
  });

  const [submissions, setSubmissions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved).submissions || [];
    } catch (e) { /* ignore */ }
    return [];
  });

  // Persist everything to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ content: siteData, submissions }));
    } catch (e) { /* ignore */ }
  }, [siteData, submissions]);

  const updateSection = (key, value) => {
    setSiteData(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    setSiteData(defaultData);
  };

  const addSubmission = (type, data) => {
    const entry = {
      id: Date.now().toString(),
      type,
      data,
      timestamp: new Date().toISOString(),
      read: false
    };
    setSubmissions(prev => [entry, ...prev]);
  };

  const markRead = (id) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, read: true } : s));
  };

  const deleteSubmission = (id) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
  };

  const clearAllSubmissions = () => setSubmissions([]);

  const unreadCount = submissions.filter(s => !s.read).length;

  return (
    <SiteDataContext.Provider value={{
      siteData,
      submissions,
      unreadCount,
      updateSection,
      resetToDefaults,
      addSubmission,
      markRead,
      deleteSubmission,
      clearAllSubmissions
    }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error('useSiteData must be used inside SiteDataProvider');
  return ctx;
}

export { defaultData };
