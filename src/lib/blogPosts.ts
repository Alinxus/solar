export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  imageUrl?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'powering-nigerias-future-solar-revolution',
    title: "Powering Nigeria's Future: The Solar Revolution",
    date: 'October 26, 2023', // You can update the date
    author: 'Solar Spark Team',
    summary: 'Discover how solar energy is transforming lives and businesses across Nigeria, offering a reliable and clean alternative to traditional power sources. Join us as we lead the charge towards a brighter, sustainable future.',
    imageUrl: '/building-image.jpg', // Placeholder image path
    content: `
      <p class="mb-4 text-lg text-gray-700">Nigeria stands at a pivotal moment in its energy journey. With a dynamic population and a growing economy, the demand for reliable power is more critical than ever. However, traditional energy sources often fall short, leading to challenges for homes and businesses alike. This is where the solar revolution comes in, offering a beacon of hope and a path to a sustainable energy future.</p>
      <h2 class="text-3xl font-semibold text-gray-800 mt-6 mb-3">The Unmistakable Rise of Solar</h2>
      <p class="mb-4 text-lg text-gray-700">Solar energy is no longer a niche alternative; it's a mainstream solution rapidly gaining traction across Nigeria. Its benefits are compelling:
        <ul class="list-disc list-inside my-4 space-y-2 text-lg text-gray-700">
          <li><strong>Reliability:</strong> Say goodbye to unpredictable power outages. Solar systems, especially when paired with battery storage, provide a consistent and dependable flow of electricity.</li>
          <li><strong>Cost Savings:</strong> Reduce your dependence on expensive diesel and fluctuating electricity tariffs. Solar energy offers long-term savings and a predictable energy expenditure.</li>
          <li><strong>Environmental Stewardship:</strong> Embrace clean energy and reduce your carbon footprint. Solar power is a green solution that contributes to a healthier planet for future generations.</li>
          <li><strong>Energy Independence:</strong> Take control of your power supply. With solar, you're less vulnerable to grid failures and fuel scarcity.</li>
        </ul>
      </p>
      <figure class="my-6">
        <img src="/blog/nigeria-solar-installation.jpg" alt="Solar installation in Nigeria" class="rounded-lg shadow-md w-full h-auto object-cover max-h-[400px]" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">Solar panels bringing clean energy to a Nigerian community.</figcaption>
      </figure>
      <h2 class="text-3xl font-semibold text-gray-800 mt-6 mb-3">Our Commitment to a Brighter Nigeria</h2>
      <p class="mb-4 text-lg text-gray-700">As Nigeria's leading solar provider, we are dedicated to empowering homes and businesses with premium solar solutions. Our mission aligns with the nation's aspiration for energy security and sustainable development. We believe in powering your future, no grid required, ensuring that everyone has access to the clean, reliable energy they deserve.</p>
      <p class="mb-4 text-lg text-gray-700">The solar revolution is not just about technology; it's about transforming lives, fostering economic growth, and building a resilient future for Nigeria. Join us on this exciting journey.</p>
      <div class="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
        <h3 class="text-2xl font-semibold text-orange-600 mb-2">Ready to Embrace Solar?</h3>
        <p class="text-gray-700 mb-4">Learn more about our innovative solar solutions and how you can become part of Nigeria's clean energy transformation.</p>
        <a href="/get-started" class="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors">Explore Solutions</a>
      </div>
    `
  },
  {
    slug: 'uninterrupted-living-solar-solution',
    title: 'Uninterrupted Living: Say Goodbye to Generator Woes with Solar',
    date: 'October 22, 2023', // You can update the date
    author: 'Solar Spark Team',
    summary: 'Tired of the constant hum and rising costs of generators? Explore how solar energy offers a silent, efficient, and dependable power source for modern Nigerian homes and businesses.',
    imageUrl: '/building-image.jpg', // Placeholder image path
    content: `
      <p class="mb-4 text-lg text-gray-700">For many in Nigeria, the drone of a generator is an all-too-familiar soundtrack to daily life. While serving as a temporary fix for power instability, reliance on generators comes with a host of challenges: noise pollution, high fuel costs, frequent maintenance, and harmful emissions. But what if there was a better way? A way to enjoy uninterrupted power, silently and sustainably? Enter solar energy.</p>
      <h2 class="text-3xl font-semibold text-gray-800 mt-6 mb-3">The Daily Grind of Generator Dependency</h2>
      <p class="mb-4 text-lg text-gray-700">Living with generators often means:
        <ul class="list-disc list-inside my-4 space-y-2 text-lg text-gray-700">
          <li><strong>Noise Pollution:</strong> The constant noise can disrupt peace, sleep, and productivity.</li>
          <li><strong>Rising Fuel Costs:</strong> The unpredictable and often increasing cost of diesel or petrol significantly impacts budgets.</li>
          <li><strong>Maintenance Headaches:</strong> Generators require regular servicing, oil changes, and repairs, adding to the expense and effort.</li>
          <li><strong>Environmental Concerns:</strong> Emissions from generators contribute to air pollution and climate change.</li>
        </ul>
      </p>
      <figure class="my-6">
        <img src="/blog/peaceful-home-solar.jpg" alt="Family enjoying a peaceful home with solar power" class="rounded-lg shadow-md w-full h-auto object-cover max-h-[400px]" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">Experience the tranquility of uninterrupted solar power.</figcaption>
      </figure>
      <h2 class="text-3xl font-semibold text-gray-800 mt-6 mb-3">Solar: The Silent, Dependable Alternative</h2>
      <p class="mb-4 text-lg text-gray-700">Solar power systems offer a stark contrast. Once installed, they operate silently, harnessing the sun's abundant energy to power your home or business. Here's why solar is the superior choice for uninterrupted living:</p>
      <ul class="list-disc list-inside my-4 space-y-2 text-lg text-gray-700">
        <li><strong>Peace and Quiet:</strong> Enjoy the sound of silence. Solar panels produce no noise, creating a more tranquil environment.</li>
        <li><strong>Consistent Power:</strong> With a well-designed system and battery storage, you can have reliable electricity 24/7, regardless of grid status.</li>
        <li><strong>Minimal Maintenance:</strong> Solar panels are incredibly durable and require very little upkeep compared to generators.</li>
        <li><strong>Clean Energy:</strong> Reduce your carbon footprint and contribute to a healthier environment.</li>
      </ul>
      <p class="mb-4 text-lg text-gray-700">Making the switch to solar isn't just an energy decision; it's a lifestyle upgrade. It's about choosing peace of mind, long-term savings, and a sustainable way of life.</p>
      <div class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 class="text-2xl font-semibold text-green-600 mb-2">Ready for Silent, Reliable Power?</h3>
        <p class="text-gray-700 mb-4">Discover how a custom solar solution can free you from generator dependency and provide clean, uninterrupted energy for your needs.</p>
        <a href="/calculator" class="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors">Calculate Your Savings</a>
      </div>
    `
  }
]; 