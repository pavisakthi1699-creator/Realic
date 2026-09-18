export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  experience: string;
  linkedin?: string;
}

export const LEADERSHIP: TeamMember[] = [
  {
    id: 'eleanor-vance',
    name: 'Eleanor Vance',
    role: 'Founder & Chief Executive Officer',
    bio: 'Former institutional real estate investment banker with 18+ years orchestrating marquee commercial and luxury residential transactions across global tech hubs.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialty: 'Capital Allocation & High-Value Portfolios',
    experience: '18+ Years',
  },
  {
    id: 'julian-mercer',
    name: 'Julian Mercer',
    role: 'Head of Legal & Compliance Counsel',
    bio: 'Advocate with over two decades specializing in RERA compliance, title lineage dispute resolution, and institutional land parcel acquisitions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    specialty: 'Title Due Diligence & RERA Regulatory Law',
    experience: '22+ Years',
  },
  {
    id: 'sarah-lin',
    name: 'Sarah Lin',
    role: 'Partner, Private Client Services',
    bio: 'Dedicated client advocate managing confidential ultra-high-net-worth acquisitions, penthouses, and bespoke estate disposition programs.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    specialty: 'Private Wealth & Off-Market Acquisitions',
    experience: '14+ Years',
  },
  {
    id: 'amit-vikram',
    name: 'Amit Vikram',
    role: 'Managing Director, Bihar & Eastern Corridor',
    bio: 'Leading Patna premier residential transformation, spearheading standardized compliance and modernized luxury brokerage operations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialty: 'Patna & Bihar Elite Developments',
    experience: '16+ Years',
  },
];
