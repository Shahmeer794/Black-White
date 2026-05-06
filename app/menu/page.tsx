import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const categories = [
  {
    name: "Ice Cream",
    subtitle: "Handcrafted Scoops",
    note: "Flavors rotate seasonally.",
    items: [
      { name: "Classic Black Cone",   desc: "Your choice of flavor in our signature dark waffle cone.", price: "From $5" },
      { name: "Double Scoop Cup",     desc: "Two generous scoops in our branded cup.",                   price: "From $8" },
      { name: "Oreo Dream",           desc: "Creamy vanilla packed with crushed Oreo.",                  price: "From $6" },
      { name: "Midnight Chocolate",   desc: "Dark chocolate with a deep espresso swirl.",                price: "From $6" },
      { name: "Blue Velvet",          desc: "Blue raspberry with a gold flake finish.",                  price: "From $7" },
      { name: "Strawberry Bliss",     desc: "Fresh strawberry sorbet, dark waffle cone.",                price: "From $6" },
    ],
    img: "/images/124100673_142956564211411_6878156377720542027_n.jpg",
  },
  {
    name: "Cream Pies",
    subtitle: "Signature Pastries",
    note: "Available whole or by the slice.",
    items: [
      { name: "Classic Cream Pie",    desc: "Buttery graham crust, silky filling, whipped rosettes.",    price: "Slice $7" },
      { name: "Banana Pudding Pie",   desc: "Layered vanilla wafer and banana cream.",                   price: "Slice $8" },
      { name: "Chocolate Silk Pie",   desc: "Dark chocolate ganache in a chocolate crust.",              price: "Slice $8" },
      { name: "Whole Pie",            desc: "Full pie for your gathering — call for current flavors.",    price: "From $45" },
    ],
    img: "/images/596963348_1514122307380579_4184674621993084385_n.jpg",
  },
  {
    name: "Sundaes & Specials",
    subtitle: "Elevated Creations",
    note: "Made to order.",
    items: [
      { name: "Brownie Sundae",       desc: "Warm brownie, two scoops, caramel drizzle, fresh cream.",   price: "From $12" },
      { name: "Ice Cream Float",      desc: "Premium soda with a house scoop.",                          price: "From $9" },
      { name: "Dessert Flight",       desc: "Three mini scoops — a tasting of the day's flavors.",       price: "From $10" },
      { name: "Build Your Own",       desc: "Choose your base, scoops, toppings, and drizzle.",          price: "Market" },
    ],
    img: "/images/493406476_1303909578401854_5805577515556471217_n.jpg",
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────── */}
      <section className="relative pt-48 pb-0 bg-bw-black overflow-hidden">
        <FadeIn className="container-xl px-6 md:px-14 lg:px-24 pb-20 relative z-10">
          <p className="eyebrow mb-6">The Menu</p>
          <h1 className="h1 text-bw-white max-w-2xl">
            Everything<br />
            <span className="italic font-light">we make.</span>
          </h1>
          <div className="rule mt-10 mb-8 ml-0" />
          <p className="body-lg max-w-md">
            Every item is crafted fresh with premium ingredients. Flavors rotate
            seasonally — call us to confirm today&apos;s selections.
          </p>
        </FadeIn>

        {/* Banner image */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 45vh, 560px)" }}>
          <Image
            src="/images/596963348_1514122307380579_4184674621993084385_n.jpg"
            alt="Cream pies"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.3) 30%, rgba(8,8,8,0.3) 70%, #080808 100%)"
          }} />
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────── */}
      {categories.map((cat, ci) => (
        <section
          key={cat.name}
          className={`section-pad ${ci % 2 === 0 ? "bg-bw-black" : "bg-bw-gray"}`}
        >
          <div className="container-xl">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start ${ci % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Image side */}
              <FadeIn direction={ci % 2 === 0 ? "right" : "left"}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bw-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="eyebrow mb-2">{cat.subtitle}</p>
                    <h2 className="font-serif font-light text-[2rem] text-bw-white leading-none">{cat.name}</h2>
                  </div>
                </div>
              </FadeIn>

              {/* Menu items side */}
              <FadeIn direction={ci % 2 === 0 ? "left" : "right"} delay={0.12}>
                <div className="flex flex-col">
                  <p className="body-sm mb-8 pb-8 border-b border-bw-dim">{cat.note}</p>
                  <div className="divide-y divide-bw-dim/60">
                    {cat.items.map((item) => (
                      <div key={item.name} className="group py-7 flex justify-between items-baseline gap-8">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-light text-[1.2rem] text-bw-white mb-1.5 group-hover:text-bw-subtle transition-colors duration-600">
                            {item.name}
                          </h3>
                          <p className="body-sm leading-[1.7]">{item.desc}</p>
                        </div>
                        <p className="font-sans font-light text-sm text-bw-subtle whitespace-nowrap tabular-nums flex-shrink-0">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section-pad bg-bw-black border-t border-bw-dim/40">
        <FadeIn className="container-xl max-w-xl">
          <p className="eyebrow mb-6">Questions?</p>
          <h2 className="h2 text-bw-white mb-8">
            Call for today&apos;s<br />
            <span className="italic font-light">fresh selections.</span>
          </h2>
          <div className="rule ml-0 mb-10" />
          <p className="body-lg mb-10 max-w-sm">
            Our menu changes with the seasons. Reach out to find out what&apos;s
            freshly made today or to place a special order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+12102331811" className="btn-solid">+1 210-233-1811</a>
            <Link href="/contact" className="btn-ghost">Find Us</Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
