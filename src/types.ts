export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string; // Verified price, or undefined if unverified
  priceNote?: string; // e.g. "Quarter", "Full", "Per Plate"
  isVeg: boolean;
  isSpecial?: boolean;
  tag?: string; // "Chef's Signature", "Bestseller", "Tandoor Special"
  image: string;
  calories?: string;
  spiceLevel?: 1 | 2 | 3; // 1 = Mild, 2 = Medium, 3 = Spicy
  serves?: string;
  ingredients?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  dish?: string;
  avatarBg?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'ambience' | 'grill';
  imageUrl: string;
  description: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Family AC Cabin' | 'Main Dining Hall' | 'Party / Group Table';
  specialRequests?: string;
}
