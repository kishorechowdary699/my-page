/**
 * ============================================================
 * BREAD & BEYOND — Menu Product Data
 * ============================================================
 * 
 * HOW TO UPDATE:
 * 1. Add/remove items within any category's `items` array.
 * 2. Each item needs: subtitle, title, description, price, image.
 * 3. Image paths are relative to your site root (e.g., "images/milk-bread.jpg").
 * 4. To add a new category, add a new object to the MENU_DATA array.
 * 
 * ============================================================
 */

const MENU_DATA = [
  // ─────────────────────────────────────────────
  // CATEGORY 1: Breads
  // ─────────────────────────────────────────────
  {
    category: "Breads",
    items: [
      {
        subtitle: "Classic",
        title: "Milk Bread",
        description: "Soft, fluffy milk bread made with premium dairy and slow-risen dough. Perfect for sandwiches, toast, or simply enjoyed warm with a pat of butter.",
        price: "₹80",
        image: "images/milk-bread.jpg"
      },
      {
        subtitle: "Healthy",
        title: "Whole Wheat",
        description: "Hearty whole wheat bread packed with fiber and nutrients. Stone-ground flour gives it a nutty, wholesome flavour that pairs beautifully with any meal.",
        price: "₹90",
        image: "images/whole-wheat-bread.jpg"
      },
      {
        subtitle: "Street Style",
        title: "Pav Buns",
        description: "Buttery, golden pav buns — pillowy soft and lightly toasted. The perfect companion for pav bhaji, sliders, or your favourite curry.",
        price: "₹60",
        image: "images/pav-buns.jpg"
      },
      {
        subtitle: "Gourmet",
        title: "Burger Buns",
        description: "Sesame-topped brioche-style burger buns with a golden crust and soft, airy crumb. Elevate your homemade burgers to restaurant quality.",
        price: "₹70",
        image: "images/burger-buns.jpg"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CATEGORY 2: Biscuits
  // ─────────────────────────────────────────────
  {
    category: "Biscuits",
    items: [
      {
        subtitle: "Nutty",
        title: "Almond",
        description: "Crunchy almond biscuits studded with roasted almond slivers. Lightly sweetened and baked to a perfect golden edge — ideal with chai or coffee.",
        price: "₹180",
        image: "images/almond-biscuits.jpg"
      },
      {
        subtitle: "Rich",
        title: "Pista",
        description: "Delicate pistachio biscuits with a buttery melt-in-your-mouth texture. Made with real crushed pistachios and a hint of cardamom.",
        price: "₹200",
        image: "images/pista-biscuits.jpg"
      },
      {
        subtitle: "Tropical",
        title: "Coconut",
        description: "Toasted coconut biscuits with crispy edges and a chewy center. Made with desiccated coconut and a touch of vanilla for tropical bliss.",
        price: "₹160",
        image: "images/coconut-biscuits.jpg"
      },
      {
        subtitle: "Berry",
        title: "Cranberry",
        description: "Tangy-sweet cranberry biscuits loaded with dried cranberries and orange zest. A fruity twist on a classic butter biscuit.",
        price: "₹190",
        image: "images/cranberry-biscuits.jpg"
      },
      {
        subtitle: "Berry",
        title: "Blueberry",
        description: "Plump blueberry biscuits bursting with real blueberries. Soft, crumbly, and finished with a dusting of powdered sugar.",
        price: "₹200",
        image: "images/blueberry-biscuits.jpg"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CATEGORY 3: Cakes
  // ─────────────────────────────────────────────
  {
    category: "Cakes",
    items: [
      {
        subtitle: "Tropical",
        title: "Pineapple White Chocolate",
        description: "Luscious pineapple sponge layered with white chocolate ganache and tropical pineapple compote. A celebration of sunshine in every bite.",
        price: "₹650",
        image: "images/pineapple-white-chocolate-cake.jpg"
      },
      {
        subtitle: "Indulgent",
        title: "Chocolate Hazelnut",
        description: "Rich Belgian chocolate cake with hazelnut praline filling and a glossy chocolate ganache. Pure indulgence for chocolate lovers.",
        price: "₹700",
        image: "images/chocolate-cake-tub.jpg"
      },
      {
        subtitle: "Fruity",
        title: "Strawberry",
        description: "Light vanilla sponge layered with fresh strawberry compote and whipped cream. Decorated with glazed strawberries on top.",
        price: "₹600",
        image: "images/strawberry-cake.jpg"
      },
      {
        subtitle: "Seasonal",
        title: "Mango",
        description: "Fresh Alphonso mango cake with mango mousse layers and a creamy mango mirror glaze. The taste of summer in every slice.",
        price: "₹650",
        image: "images/mango-cake-tub.jpg"
      },
      {
        subtitle: "Fusion",
        title: "Gulab Jamun",
        description: "An innovative fusion cake soaked in rose-cardamom syrup with gulab jamun pieces folded into rich sponge layers. Custom flavours available on request.",
        price: "₹750",
        image: "images/gulabjamun-cake.jpg"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CATEGORY 4: Tea Cakes
  // ─────────────────────────────────────────────
  {
    category: "Tea Cakes",
    items: [
      {
        subtitle: "Nutty",
        title: "Pista",
        description: "Moist pistachio tea cake with a beautiful green crumb, topped with crushed pistachios. Best enjoyed warm with your afternoon chai.",
        price: "₹250",
        image: "images/pista-tea-cake.jpg"
      },
      {
        subtitle: "Classic",
        title: "Almond",
        description: "Dense, buttery almond tea cake with ground almonds throughout and a toasted almond topping. A timeless companion for tea time.",
        price: "₹230",
        image: "images/almond-tea-cake.jpg"
      },
      {
        subtitle: "Indulgent",
        title: "Chocolate Hazelnut",
        description: "Rich chocolate tea cake swirled with Nutella and studded with roasted hazelnut pieces. Perfectly portioned for a decadent tea break.",
        price: "₹270",
        image: "images/chocolate-hazelnut-tea-cake.jpg"
      },
      {
        subtitle: "Citrus",
        title: "Orange",
        description: "Bright, zesty orange tea cake with fresh orange zest and a light citrus glaze. Refreshing and aromatic — sunshine in a slice.",
        price: "₹220",
        image: "images/orange-tea-cake.jpg"
      },
      {
        subtitle: "Fusion",
        title: "Gulab Jamun",
        description: "A unique tea cake infused with rose-cardamom syrup and gulab jamun flavours. Indian tradition meets European baking craft.",
        price: "₹280",
        image: "images/gulabjamun-tea-cake.jpg"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CATEGORY 5: Mac & Cheese
  // ─────────────────────────────────────────────
  {
    category: "Mac & Cheese",
    items: [
      {
        subtitle: "Baked",
        title: "Mac & Cheese",
        description: "Creamy, cheesy baked macaroni with a golden breadcrumb crust. Made with a blend of cheddar and mozzarella for the ultimate comfort food experience.",
        price: "₹350",
        image: "images/baked-mac-cheese.jpg"
      }
    ]
  }
];
