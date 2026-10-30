import restaurantInfo from '../../restaurant_info.json';

export const RESTAURANT = {
  name: restaurantInfo.restaurant.name,
  tagline: restaurantInfo.restaurant.tagline,
  description: restaurantInfo.restaurant.description,
  address: restaurantInfo.location.fullAddress,
  shortAddress: restaurantInfo.location.address,
  city: restaurantInfo.location.city,
  landmark: restaurantInfo.location.landmark,
  coordinates: restaurantInfo.location.coordinates,
  
  // Verified Contact
  phone: restaurantInfo.contact.phone,
  phoneRaw: restaurantInfo.contact.phoneRaw,
  whatsapp: restaurantInfo.contact.whatsapp,
  whatsappRaw: restaurantInfo.contact.whatsappRaw,
  
  // Operating Hours
  hours: restaurantInfo.hours.regularHours,
  lunchHours: restaurantInfo.hours.lunch,
  dinnerHours: restaurantInfo.hours.dinner,
  status: restaurantInfo.hours.status,
  
  // Ratings
  rating: restaurantInfo.ratingsAndReputation.overallRating,
  reviewCount: restaurantInfo.ratingsAndReputation.reviewCount,
  priceRange: restaurantInfo.ratingsAndReputation.priceRange,
  
  // Links
  googleMapsShortUrl: restaurantInfo.location.googleMapsShortUrl,
  googleMapsDirectionsUrl: restaurantInfo.location.googleMapsDirectionsUrl,
  instagramHandle: restaurantInfo.socialMedia.instagram.handle,
  instagramUrl: restaurantInfo.socialMedia.instagram.url,
  facebookUrl: restaurantInfo.socialMedia.facebook.url,

  // Cuisine Highlights
  cuisines: restaurantInfo.restaurant.cuisineTypes,
  highlights: restaurantInfo.restaurant.highlights,
};

// WhatsApp message generator helper functions
export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${RESTAURANT.whatsappRaw}?text=${encodeURIComponent(message)}`;
};

export const getGeneralEnquiryUrl = (): string => {
  return createWhatsAppUrl(`Hello Royal Dine Kasaragod! I would like to inquire about your dining services and today's specials.`);
};

export const getDishEnquiryUrl = (dishName: string, price?: string): string => {
  const priceInfo = price ? ` (${price})` : '';
  return createWhatsAppUrl(
    `Hello Royal Dine Kasaragod! I would like to enquire about ordering *${dishName}*${priceInfo}. Is it available today?`
  );
};

export const getReservationWhatsAppUrl = (data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  specialRequests?: string;
}): string => {
  return createWhatsAppUrl(
    `*Table Reservation Enquiry - Royal Dine Kasaragod*\n\n` +
    `👤 *Name:* ${data.name}\n` +
    `📞 *Phone:* ${data.phone}\n` +
    `📅 *Date:* ${data.date}\n` +
    `⏰ *Time:* ${data.time}\n` +
    `👥 *Guests:* ${data.guests} person(s)\n` +
    `🏛️ *Seating Preference:* ${data.seatingArea}\n` +
    (data.specialRequests ? `📝 *Special Notes:* ${data.specialRequests}\n\n` : `\n`) +
    `Please confirm table availability. Thank you!`
  );
};
