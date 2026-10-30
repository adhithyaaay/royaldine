import { MenuItem, MenuCategory } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'all',
    name: 'Full Menu',
    shortName: 'All',
    iconName: 'Utensils',
    description: 'Explore our complete multi-cuisine dining collection.'
  },
  {
    id: 'grills',
    name: 'Arabian Grills & Alfaham',
    shortName: 'Grills',
    iconName: 'Flame',
    description: 'Tender chicken marinated in Arabian aromatics, charcoal-grilled to perfection.'
  },
  {
    id: 'biryani',
    name: 'Royal Biryanis',
    shortName: 'Biryani',
    iconName: 'Bowl',
    description: 'Slow-cooked fragrant basmati rice layered with delicate saffron, herbs and spices.'
  },
  {
    id: 'curries',
    name: 'Curries & Gravies',
    shortName: 'Curries',
    iconName: 'Soup',
    description: 'Slow-simmered rich North Indian, Kashmiri and Mughlai delicacies.'
  },
  {
    id: 'tandoor',
    name: 'Tandoor & Artisan Breads',
    shortName: 'Tandoor',
    iconName: 'Wheat',
    description: 'Clay-oven baked breads, roasted kebabs and fluffy layered porottas.'
  },
  {
    id: 'chinese',
    name: 'Indo-Chinese',
    shortName: 'Chinese',
    iconName: 'Sparkles',
    description: 'Sizzling wok-tossed starters, saucy gravies and fragrant fried rice.'
  },
  {
    id: 'beverages',
    name: 'Desserts & Beverages',
    shortName: 'Beverages',
    iconName: 'GlassWater',
    description: 'Signature layered Royal Faloodas, chilled fruit shakes and mocktails.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Arabian Grills
  {
    id: 'alfaham-classic',
    name: 'Signature Charcoal Alfaham',
    category: 'grills',
    description: 'Authentic Arabian-style whole/cut chicken marinated in traditional Arabic spices, slow-grilled over natural charcoal embers. Served with freshly baked kuboos, velvety garlic toum, and crisp house salad.',
    price: '₹210',
    priceNote: 'Quarter / with Kuboos',
    isVeg: false,
    isSpecial: true,
    tag: "Chef's Signature",
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Charcoal grilled chicken', 'Arabic spice rub', 'Garlic Toum dip', 'Fresh Kuboos', 'Pickled turnip']
  },
  {
    id: 'pepper-alfaham',
    name: 'Fiery Black Pepper Alfaham',
    category: 'grills',
    description: 'Our standout crowd favorite. Succulent chicken infused with fresh ground Malabar black peppercorns, roasted garlic, and Arabian herbs, finished with a smoky charred crust.',
    price: '₹220',
    priceNote: 'Quarter / with Kuboos',
    isVeg: false,
    isSpecial: true,
    tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 3,
    serves: '1-2 persons',
    ingredients: ['Freshly crushed Malabar pepper', 'Roasted garlic', 'Smoked marinade', 'Garlic sauce', 'Kuboos']
  },
  {
    id: 'shawarma-plate',
    name: 'Special Chicken Shawarma Plate',
    category: 'grills',
    description: 'Thinly shaved rotisserie chicken tossed with pickled gherkins and creamy tahini-garlic dressing, served with hot kuboos, fries, and spicy dip.',
    price: '₹140',
    priceNote: 'Platter',
    isVeg: false,
    isSpecial: false,
    tag: 'Quick Bite',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Slow-roasted chicken', 'Pickled cucumber', 'Garlic mayo', 'French fries', 'Warm flatbread']
  },
  {
    id: 'chicken-shawarma-roll',
    name: 'Classic Chicken Shawarma Roll',
    category: 'grills',
    description: 'Succulent marinated grilled chicken flakes tightly wrapped in warm rumali bread with homemade garlic mayonnaise and crisp fries.',
    price: '₹70',
    priceNote: 'Single Roll',
    isVeg: false,
    isSpecial: false,
    tag: 'Street Legend',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Rotisserie chicken', 'Garlic aioli', 'Rumali bread', 'Pickles']
  },
  {
    id: 'shish-tawook',
    name: 'Lebanese Shish Tawook',
    category: 'grills',
    description: 'Boneless tender chicken cubes soaked in yogurt, lemon, and Lebanese sumac, char-grilled on skewers until juicy and golden.',
    price: '₹250',
    priceNote: 'Per Plate (6 pcs)',
    isVeg: false,
    isSpecial: true,
    tag: 'Arabic Delight',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1-2 persons',
    ingredients: ['Boneless chicken breast', 'Greek yogurt', 'Sumac & zaatar', 'Lemon zest', 'Grilled peppers']
  },

  // Biryanis
  {
    id: 'chicken-dum-biryani',
    name: 'Royal Chicken Dum Biryani',
    category: 'biryani',
    description: 'The crown jewel of our kitchen. Aged premium basmati rice delicately steamed in sealed dum with tender bone-in chicken cuts, caramelized golden onions, mint, and pure ghee.',
    price: '₹190',
    priceNote: 'Full Portion',
    isVeg: false,
    isSpecial: true,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Aged Basmati Rice', 'Tender Chicken', 'Saffron milk', 'Crispy brown onions', 'Mint & Coriander', 'Raita & Pickle']
  },
  {
    id: 'mutton-dum-biryani',
    name: 'Malabar Special Mutton Biryani',
    category: 'biryani',
    description: 'Rich, melt-in-mouth mutton cuts slow-cooked with aromatic Malabar whole spices and fragrant kaima/jeerakasala rice, topped with fried cashews and raisins.',
    price: '₹270',
    priceNote: 'Full Portion',
    isVeg: false,
    isSpecial: true,
    tag: 'Royal Special',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Tender baby mutton', 'Short-grain kaima rice', 'Pure desi ghee', 'Golden cashews', 'Sultanas', 'Biryani masala']
  },
  {
    id: 'prawns-biryani',
    name: 'Coastal Prawns Masala Biryani',
    category: 'biryani',
    description: 'Succulent fresh Arabian Sea prawns tossed in a tangy coastal onion-tomato gravy, layered with steamed basmati rice and fresh curry leaves.',
    price: '₹280',
    priceNote: 'Chef Special',
    isVeg: false,
    isSpecial: false,
    tag: 'Seafood Catch',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Fresh tiger prawns', 'Coconut spiced masala', 'Basmati rice', 'Curry leaf infusion', 'Raita']
  },

  // Curries & Gravies
  {
    id: 'mutton-rogan-josh',
    name: 'Kashmiri Mutton Rogan Josh',
    category: 'curries',
    description: 'A regal Northern delicacy. Succulent pieces of mutton slow-braised in a deeply flavored, crimson gravy scented with Kashmiri red chilies, roasted fennel, and cloves.',
    price: '₹290',
    priceNote: 'Full Gravy',
    isVeg: false,
    isSpecial: true,
    tag: 'Customer Favorite',
    image: 'https://images.unsplash.com/photo-1545247181-516773ca838b?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '2 persons',
    ingredients: ['Slow-braised mutton', 'Kashmiri deghi mirch', 'Ground fennel seeds', 'Yogurt gravy', 'Garam masala']
  },
  {
    id: 'butter-chicken',
    name: 'Mughlai Butter Chicken',
    category: 'curries',
    description: 'Clay-oven smoked shredded tandoori chicken cooked in a velvety, buttery tomato gravy finished with fenugreek leaves (kasuri methi) and fresh cream.',
    price: '₹230',
    priceNote: 'Full Gravy',
    isVeg: false,
    isSpecial: true,
    tag: 'Classic',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '2 persons',
    ingredients: ['Tandoori chicken tikka', 'Fresh tomato purée', 'White butter', 'Kasuri methi', 'Dairy cream']
  },
  {
    id: 'paneer-butter-masala',
    name: 'Royal Paneer Butter Masala',
    category: 'curries',
    description: 'Soft cottage cheese cubes gently simmered in a mildly spiced, creamy tomato and cashew-nut gravy, garnished with ginger juliennes.',
    price: '₹190',
    priceNote: 'Full Gravy',
    isVeg: true,
    isSpecial: false,
    tag: 'Vegetarian Prime',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '2 persons',
    ingredients: ['Fresh farm paneer', 'Cashew cream', 'Ripe tomato sauce', 'Butter', 'Mild spices']
  },
  {
    id: 'kadai-chicken',
    name: 'Smoky Kadai Chicken',
    category: 'curries',
    description: 'Tender chicken pieces wok-tossed with thick capsicum, diced red onions, and freshly ground coriander-coriander seeds in a robust semi-dry gravy.',
    price: '₹220',
    priceNote: 'Full Gravy',
    isVeg: false,
    isSpecial: false,
    tag: 'Spicy Wok',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 3,
    serves: '2 persons',
    ingredients: ['Chicken pieces', 'Bell peppers', 'Diced onions', 'Pounded kadai spices', 'Fresh cilantro']
  },

  // Tandoor & Artisan Breads
  {
    id: 'butter-garlic-naan',
    name: 'Butter Garlic Naan',
    category: 'tandoor',
    description: 'Artisanal leavened flatbread freshly slapped onto the walls of our searing clay tandoor, brushed generously with melted butter and fresh chopped roasted garlic.',
    price: '₹60',
    priceNote: 'Per Piece',
    isVeg: true,
    isSpecial: false,
    tag: 'Tandoor Special',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Refined wheat dough', 'Charred garlic bits', 'Salted dairy butter', 'Coriander leaves']
  },
  {
    id: 'tandoori-chicken-tikka',
    name: 'Bhatti Murgh Tikka',
    category: 'tandoor',
    description: 'Boneless chicken morsels infused with hung curd, mustard oil, and ground spices, skewered and baked over hot coals for a tantalizing char.',
    price: '₹240',
    priceNote: '6 Juicy Pieces',
    isVeg: false,
    isSpecial: true,
    tag: 'Tandoor Legend',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Boneless chicken', 'Mustard oil', 'Kashmiri red chili', 'Hung yogurt', 'Chaat masala & lemon']
  },
  {
    id: 'kerala-porotta',
    name: 'Flaky Malabar Porotta',
    category: 'tandoor',
    description: 'Traditional multi-layered, flaky, golden Kerala flatbread kneaded with milk and cooked crisp on a hot iron griddle.',
    price: '₹15',
    priceNote: 'Per Piece',
    isVeg: true,
    isSpecial: false,
    tag: 'Kerala Essential',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Layered kneaded dough', 'Ghee brush', 'Golden toasted crust']
  },

  // Indo-Chinese
  {
    id: 'dragon-chicken',
    name: 'Crunchy Dragon Chicken',
    category: 'chinese',
    description: 'Crispy fried chicken strips tossed in a sweet-and-spicy Indo-Chinese sauce with roasted cashew nuts, dried red chilies, and bell peppers.',
    price: '₹220',
    priceNote: 'Starter Platter',
    isVeg: false,
    isSpecial: true,
    tag: 'Chef Special',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 3,
    serves: '2 persons',
    ingredients: ['Crisp battered chicken', 'Roasted cashews', 'Red chili glaze', 'Spring onions', 'Capsicum']
  },
  {
    id: 'chilli-chicken',
    name: 'Indo-Chinese Chilli Chicken',
    category: 'chinese',
    description: 'The evergreen restaurant staple. Tender chicken chunks wok-seared with fresh green chilies, dark soy sauce, and crunchy scallions.',
    price: '₹210',
    priceNote: 'Dry / Semi-Gravy',
    isVeg: false,
    isSpecial: false,
    tag: 'Classic Starter',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 3,
    serves: '2 persons',
    ingredients: ['Boneless chicken cubes', 'Dark soya sauce', 'Slit green chilies', 'Garlic cloves', 'Spring onions']
  },
  {
    id: 'schezwan-fried-rice',
    name: 'Schezwan Chicken Fried Rice',
    category: 'chinese',
    description: 'Long grain rice tossed at high wok flame with shredded chicken, scrambled eggs, fresh seasonal veggies, and our fiery house Schezwan chili paste.',
    price: '₹180',
    priceNote: 'Full Plate',
    isVeg: false,
    isSpecial: false,
    tag: 'Wok Master',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 2,
    serves: '1-2 persons',
    ingredients: ['Steamed rice', 'House Schezwan sauce', 'Chicken shreds', 'Egg ribbons', 'Carrots & beans']
  },

  // Desserts & Beverages
  {
    id: 'royal-special-falooda',
    name: 'Royal Special Falooda',
    category: 'beverages',
    description: 'A lavish multi-layered chilled dessert. Fragrant rose syrup, sweet basil seeds (sabja), delicate vermicelli, and cold rich milk, crowned with dry fruits and two scoops of premium ice cream.',
    price: '₹140',
    priceNote: 'Tall Glass',
    isVeg: true,
    isSpecial: true,
    tag: 'Sweet Indulgence',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Rose nectar', 'Basil seeds', 'Silky vermicelli', 'Pistachios & almonds', 'Double scoop ice cream']
  },
  {
    id: 'mint-lime-mojito',
    name: 'Sparkling Mint Lime Mojito',
    category: 'beverages',
    description: 'Fresh Kasaragod garden mint leaves and juicy yellow lemons muddled together, topped with crushed ice and chilled sparkling soda.',
    price: '₹80',
    priceNote: 'Chilled Glass',
    isVeg: true,
    isSpecial: false,
    tag: 'Refreshing Refresher',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Fresh muddled mint', 'Zesty lemon', 'Cane sugar syrup', 'Sparkling soda', 'Crushed ice']
  },
  {
    id: 'mango-avocado-shake',
    name: 'Alphonso Mango Cream Shake',
    category: 'beverages',
    description: 'Thick, creamy milkshake prepared with sweet ripe mango pulp, chilled condensed milk, and topped with chopped dry fruits.',
    price: '₹110',
    priceNote: 'Thick Shake',
    isVeg: true,
    isSpecial: false,
    tag: 'Summer Special',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=900&auto=format&fit=crop',
    spiceLevel: 1,
    serves: '1 person',
    ingredients: ['Alphonso mango pulp', 'Chilled dairy milk', 'Vanilla cream', 'Roasted almond slivers']
  }
];
