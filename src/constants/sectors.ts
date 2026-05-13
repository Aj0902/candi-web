import { Landmark, Users, Globe, Terminal, Briefcase } from 'lucide-react';

export interface Sector {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  color: string;
  size: 'small' | 'large' | 'tall' | 'wide';
  image?: string;
}

export const SECTORS: Sector[] = [
  {
    id: 'lokal',
    title: 'Sektor Lokal',
    description: 'Etalase pelestarian dan narasi Nusantara.',
    longDescription: 'Kurasi discovery budaya, narasi pesantren, dan identitas Nusantara yang harus dijaga dari kepunahan digital.',
    icon: Landmark,
    color: '#c5a059',
    size: 'tall',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc183f27?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'sektor19',
    title: 'Sektor 19',
    description: 'Panggung bagi para Silent Achievers.',
    longDescription: 'Ruang penghargaan khusus untuk tokoh, penggerak komunitas, atau sejarah yang luar biasa namun luput dari sorotan publik.',
    icon: Users,
    color: '#8e6d32',
    size: 'wide',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'net',
    title: 'Sektor Net',
    description: 'Dinamika siber dan tren digital.',
    longDescription: 'Kumpulan discovery tren, fenomena internet, dan kurasi digital yang membuktikan relevansi terhadap zaman.',
    icon: Globe,
    color: '#4a4a4a',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'demo',
    title: 'Sektor Demo',
    description: 'Laboratorium teknologi & eksperimen.',
    longDescription: 'Ruang pamer teknis yang menunjukkan kapabilitas infrastruktur, eksperimen arsitektur web, hingga sistem otomasi.',
    icon: Terminal,
    color: '#6b7280',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'client',
    title: 'Sektor Client',
    description: 'Bukti fungsional solusi bisnis.',
    longDescription: 'Etalase hasil kerja sama nyata, mendemonstrasikan bagaimana nilai artistik dan teknis memecahkan masalah ekonomi.',
    icon: Briefcase,
    color: '#c5a059',
    size: 'wide',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
  }
];
