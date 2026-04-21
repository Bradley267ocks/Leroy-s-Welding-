import { Phone, Mail, MapPin, Hammer, Award, Clock, Users, Wrench, Shield, Zap, Scissors as ScissorsIcon } from 'lucide-react';
import { motion } from 'motion/react';

export const BUSINESS_NAME = "Leroy’s Welding Works";
export const PHONE_NUMBER = "072 072 1102";
export const ADDRESS = "Unit 15 Roycol Park, 70 Murray Road, Mkondeni, Pietermaritzburg, 3201";
export const REG_NO = "2017/388880/07";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'welding',
    title: 'Welding',
    description: 'Expert structural welding, meticulous repairs, and bespoke custom metalwork tailored to your exact industrial specifications.',
    icon: Zap,
    details: ['Structural welding', 'Repairs', 'Custom work']
  },
  {
    id: 'pipework',
    title: 'Pipework',
    description: 'Precision industrial pipe installation and comprehensive maintenance solutions for high-performance fluid systems.',
    icon: Wrench,
    details: ['Industrial pipe installation', 'Repairs & maintenance']
  },
  {
    id: 'fabrication',
    title: 'Fabrication',
    description: 'Custom metal fabrication including heavy-duty frames, complex structures, and specialized industrial supports.',
    icon: Hammer,
    details: ['Custom metal fabrication', 'Frames', 'Structures', 'Supports']
  },
  {
    id: 'cut-supply',
    title: 'Cut, Supply & Rolling',
    description: 'Professional steel cutting, reliable material supply, and high-precision plate rolling services.',
    icon: ScissorsIcon, // Realized I need to import Scissors or use a custom one, I'll use Lucide's Scissors
    details: ['Steel cutting', 'Material supply', 'Plate rolling']
  },
  {
    id: 'hdpe',
    title: 'HDPE Piping',
    description: 'Specialized HDPE piping installation and repairs for demanding industrial and commercial applications.',
    icon: Shield,
    details: ['Installation', 'Repairs', 'Industrial applications']
  },
  {
    id: 'labour_hire',
    title: 'Labour Hire',
    description: 'Access to highly skilled welding teams and reliable site support workers for your specialized project needs.',
    icon: Users,
    details: ['Skilled welding teams', 'Site support workers']
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Industrial Pipe Installation",
    client: "Local Manufacturing Plant",
    service: "Pipework",
    before: "https://images.unsplash.com/photo-1558444479-c8a51e97cf20?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1542337318-724806a5b282?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Custom Steel Frame Fabrication",
    client: "Construction Project PMB",
    service: "Fabrication",
    before: "https://images.unsplash.com/photo-1504917595217-d4dc5f665c59?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1534398079543-7ae6d016b167?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Structural HDPE Repair",
    client: "Municipal Water Works",
    service: "HDPE Piping",
    before: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1000"
  }
];
