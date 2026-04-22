import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type Recipe = {
  title: string;
  slug: string;
  intro: string;
  time: string;
  serves: string;
  heroImage: string;
  videoThumbnail: string;
  gallery: string[];
  steps: string[];
  ingredients: string[];
  relatedProducts: {
    name: string;
    slug: string;
    price: string;
    image: string;
  }[];
};

const recipes: Recipe[] = [
  {
    title: "Royal Paneer Masala",
    slug: "royal-paneer-masala",
    intro:
      "A rich, restaurant-style paneer curry finished with aromatic masala, cream, and a warm spice base.",
    time: "18 min",
    serves: "4 servings",
    heroImage:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1400&q=90",
    videoThumbnail:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488e?auto=format&fit=crop&w=1000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=90",
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=90"
    ],
    steps: [
      "Heat oil in a pan and saute onions until golden and soft.",
      "Add ginger garlic paste, tomato puree, and blended masala. Cook until the oil separates.",
      "Add paneer cubes, a splash of water, and simmer until the gravy turns glossy.",
      "Finish with cream, crushed kasuri methi, and fresh coriander."
    ],
    ingredients: [
      "250g paneer cubes",
      "2 tbsp Pinak Pani blended masala",
      "1 tbsp ginger garlic paste",
      "2 tomatoes, pureed",
      "1 onion, finely chopped",
      "2 tbsp cream",
      "Salt and coriander to taste"
    ],
    relatedProducts: [
      {
        name: "Kitchen King Masala",
        slug: "kitchen-king-masala",
        price: "Rs. 149",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Ginger Garlic Paste",
        slug: "ginger-garlic-paste",
        price: "Rs. 119",
        image:
          "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Garam Masala",
        slug: "garam-masala",
        price: "Rs. 129",
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488e?auto=format&fit=crop&w=700&q=90"
      }
    ]
  },
  {
    title: "Homestyle Chole",
    slug: "homestyle-chole",
    intro:
      "A comforting chickpea curry with deep spice, slow-cooked flavor, and a clean homestyle finish.",
    time: "30 min",
    serves: "4 servings",
    heroImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=90",
    videoThumbnail:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=900&q=90",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=90"
    ],
    steps: [
      "Soak and boil chickpeas until tender, then reserve some cooking water.",
      "Cook onions, tomatoes, ginger garlic paste, and chole masala until fragrant.",
      "Add chickpeas and simmer until the curry thickens.",
      "Finish with lemon juice, coriander, and sliced onions."
    ],
    ingredients: [
      "2 cups boiled chickpeas",
      "2 tbsp chole masala",
      "1 tbsp ginger garlic paste",
      "2 onions, chopped",
      "2 tomatoes, chopped",
      "1 tsp whole cumin",
      "Lemon and coriander to finish"
    ],
    relatedProducts: [
      {
        name: "Black Pepper",
        slug: "black-pepper",
        price: "Rs. 179",
        image:
          "https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Garam Masala",
        slug: "garam-masala",
        price: "Rs. 129",
        image:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488e?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Red Chilli Powder",
        slug: "red-chilli-powder",
        price: "Rs. 99",
        image:
          "https://images.unsplash.com/photo-1606914469633-bd39206ea739?auto=format&fit=crop&w=700&q=90"
      }
    ]
  },
  {
    title: "Tandoori Veg Skewers",
    slug: "tandoori-veg-skewers",
    intro:
      "Smoky vegetable skewers coated with a bold tandoori-style spice mix and finished with lemon.",
    time: "22 min",
    serves: "3 servings",
    heroImage:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1400&q=90",
    videoThumbnail:
      "https://images.unsplash.com/photo-1606914469633-bd39206ea739?auto=format&fit=crop&w=1000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=90",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=90"
    ],
    steps: [
      "Mix curd, ginger garlic paste, chilli powder, turmeric, and garam masala.",
      "Coat vegetables evenly and rest for 15 minutes.",
      "Skewer the vegetables and grill until lightly charred.",
      "Finish with lemon juice, coriander, and a pinch of chaat masala."
    ],
    ingredients: [
      "1 cup mixed vegetables",
      "3 tbsp thick curd",
      "1 tbsp ginger garlic paste",
      "1 tsp red chilli powder",
      "1 tsp garam masala",
      "1 tsp turmeric powder",
      "Lemon and coriander to finish"
    ],
    relatedProducts: [
      {
        name: "Red Chilli Powder",
        slug: "red-chilli-powder",
        price: "Rs. 99",
        image:
          "https://images.unsplash.com/photo-1606914469633-bd39206ea739?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Turmeric Powder",
        slug: "turmeric-powder",
        price: "Rs. 89",
        image:
          "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Ginger Garlic Paste",
        slug: "ginger-garlic-paste",
        price: "Rs. 119",
        image:
          "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?auto=format&fit=crop&w=700&q=90"
      }
    ]
  },
  {
    title: "Masala Rice Bowl",
    slug: "masala-rice-bowl",
    intro:
      "A quick, aromatic rice bowl made with vegetables, warm spices, and a simple masala finish.",
    time: "20 min",
    serves: "2 servings",
    heroImage:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1400&q=90",
    videoThumbnail:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488e?auto=format&fit=crop&w=1000&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=90",
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=90"
    ],
    steps: [
      "Heat oil and temper cumin with whole spices.",
      "Add vegetables, salt, turmeric, and blended masala.",
      "Fold in cooked rice and toss until the masala coats every grain.",
      "Serve hot with curd, pickle, or fresh salad."
    ],
    ingredients: [
      "2 cups cooked rice",
      "1 cup mixed vegetables",
      "1 tsp whole cumin",
      "1 tsp turmeric powder",
      "1 tbsp blended masala",
      "1 tsp garam masala",
      "Salt and coriander to taste"
    ],
    relatedProducts: [
      {
        name: "Kitchen King Masala",
        slug: "kitchen-king-masala",
        price: "Rs. 149",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Whole Spices",
        slug: "whole-spices",
        price: "Rs. 199",
        image:
          "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=700&q=90"
      },
      {
        name: "Turmeric Powder",
        slug: "turmeric-powder",
        price: "Rs. 89",
        image:
          "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=700&q=90"
      }
    ]
  }
];

function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export default async function RecipePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-peacock-950 px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-royal-gold">
            Recipe
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
            {recipe.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{recipe.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.12em]">
            <span className="rounded bg-white/10 px-4 py-2">{recipe.time}</span>
            <span className="rounded bg-white/10 px-4 py-2">{recipe.serves}</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5">
            <Link
              href={recipe.heroImage}
              className="group block overflow-hidden rounded bg-peacock-950 shadow-premium"
            >
              <img
                src={recipe.heroImage}
                alt={recipe.title}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </Link>

            <div className="grid gap-5 sm:grid-cols-3">
              <Link
                href={recipe.videoThumbnail}
                className="group relative overflow-hidden rounded bg-peacock-950 shadow-premium sm:col-span-1"
              >
                <img
                  src={recipe.videoThumbnail}
                  alt={`${recipe.title} video thumbnail`}
                  className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-peacock-950/20">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-peacock-950 shadow-lg">
                    <svg aria-hidden="true" className="h-5 w-5 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </span>
                </span>
              </Link>

              {recipe.gallery.map((image) => (
                <Link
                  key={image}
                  href={image}
                  className="group overflow-hidden rounded bg-peacock-950 shadow-premium"
                >
                  <img
                    src={image}
                    alt={`${recipe.title} ingredient`}
                    className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded bg-peacock-50 p-6 shadow-premium ring-1 ring-peacock-100 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-royal-gold">
              Method
            </p>
            <h2 className="mt-3 text-3xl font-black text-peacock-950">Recipe Steps</h2>
            <div className="mt-8 space-y-5">
              {recipe.steps.map((step, index) => (
                <Link
                  key={step}
                  href={`/recipes/${recipe.slug}#step-${index + 1}`}
                  id={`step-${index + 1}`}
                  className="flex gap-4 rounded bg-white p-4 shadow-sm ring-1 ring-peacock-100 transition hover:-translate-y-1 hover:shadow-premium"
                >
                  <span className="grid h-9 min-w-9 place-items-center rounded bg-peacock-900 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-7 text-slate-600">{step}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-peacock-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-royal-gold">
            Ingredients
          </p>
          <h2 className="mt-3 text-4xl font-black text-peacock-950">What You Need</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recipe.ingredients.map((ingredient) => (
              <Link
                key={ingredient}
                href={`/products?search=${encodeURIComponent(ingredient)}`}
                className="rounded bg-white p-5 text-sm font-bold text-peacock-950 shadow-sm ring-1 ring-peacock-100 transition hover:-translate-y-1 hover:shadow-premium"
              >
                {ingredient}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-royal-gold">
            Related Products
          </p>
          <h2 className="mt-3 text-4xl font-black text-peacock-950">Shop This Recipe</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipe.relatedProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded bg-white shadow-premium ring-1 ring-peacock-100 transition hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden bg-peacock-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-peacock-950">{product.name}</h3>
                  <p className="mt-3 text-lg font-black text-peacock-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
