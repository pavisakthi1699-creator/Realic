'use client';

import React from 'react';

interface Neighborhood {
  name: string;
  subtitle: string;
  image: string;
  alt: string;
}

interface NeighborhoodInsightsSectionProps {
  onSelectNeighborhood?: (name: string) => void;
}

export const NeighborhoodInsightsSection: React.FC<NeighborhoodInsightsSectionProps> = ({
  onSelectNeighborhood
}) => {
  const handleNeighborhoodClick = (name: string) => {
    if (onSelectNeighborhood) {
      onSelectNeighborhood(name);
    }
  };

  return (
    <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-sm md:py-section-gap-lg">
      <div className="mb-8 md:mb-12">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Neighborhood Insights</h2>
        <p className="font-body-md text-body-md text-text-medium-emphasis">
          Explore detailed insights into top localities to find your perfect fit.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-gutter h-auto md:h-[500px]">
        {/* Large Feature Block - South Delhi */}
        <div
          onClick={() => handleNeighborhoodClick('South Delhi')}
          className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm min-h-[300px]"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyaUWXhY9md9nv6c2EQB2NZrfA9ayk_UvsyrFF_P-Mp1MfBt3g-_ldrnvI_mlwPxKi6U0NacEVIUlE11SHwG78lXl5zHq6kAeeC7xZgcw-shkEUIzSgSRVgot951d8dKR5Jr7r1ekfSybX2LrTsfOMcxPFzsjtmC4uFY-0sjoVlMqmPNe8q51f7Cfa13dr8n1eT2md9Hi_AllnK73ConlBHSx86MJ7GZBc4NDhccYj4Hvy-IOSU3MH"
            alt="An expansive aerial drone shot of South Delhi"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[300px] md:min-h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="bg-secondary text-white text-[11px] font-bold px-2.5 py-1 rounded mb-2 inline-block">Featured locality</span>
              <h3 className="font-headline-md text-headline-md text-on-primary mb-1">South Delhi</h3>
              <p className="font-body-md text-body-md text-on-primary/90">Premium living &amp; heritage estates</p>
            </div>
            <span className="material-symbols-outlined text-white text-3xl opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all">
              arrow_forward
            </span>
          </div>
        </div>

        {/* Secondary Block 1 - Bandra West */}
        <div
          onClick={() => handleNeighborhoodClick('Bandra West')}
          className="rounded-xl overflow-hidden relative group cursor-pointer shadow-sm min-h-[200px]"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYGj-qJhnQjYZPrmTJwPwZjny3awQdzjGlFBDYrPr1pPEExPzT7T90ka_IvKt1Nto3ElPPju7Vk6uHsnmG0xmh_Mn-FBYPwYruZj5gF4eA0hEAVlJ-0mTO3j4JxN_AHpMAbs1DyzwzoUF5FboqKOJFSHLOIfQLGVDBc0u2V6G_XEdPwJm-6dAQN9w5etRLLFy5kOJ2DkJy4ia8lcW1OeHrHfcIQj9AL-RD01pFSHzl6ZOLpoznFpJk"
            alt="A vibrant, bustling upscale street scene in Bandra West, Mumbai"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Bandra West</h3>
              <p className="font-body-sm text-on-primary/90">Cosmopolitan lifestyle</p>
            </div>
            <span className="material-symbols-outlined text-white text-2xl opacity-80 group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </div>
        </div>

        {/* Secondary Block 2 - Whitefield */}
        <div
          onClick={() => handleNeighborhoodClick('Whitefield')}
          className="rounded-xl overflow-hidden relative group cursor-pointer shadow-sm min-h-[200px]"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJb1mRYTVZfmYv8svdTxbraTe96hVF5EcuDTHXC3uKcABT5jilNI0ylu4fq9BNsAli8CJxajmbE4n4ctwxLoSp7aRDxFnTdwHcyTzQUATkrwOUyryVAtNutLxjtwfzHxXTOMii7NF7sjad77ImtWLAfe632qq620dfBK_uQOpt_QxyOqitL1CW5d7HpUzqXRDK2bry5NJ3PBExK1e531XILlfjFxYafCcyRHLWh4fmF0sCwx_pd5-n"
            alt="A modern cityscape of Whitefield, Bangalore"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[200px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary mb-1">Whitefield</h3>
              <p className="font-body-sm text-on-primary/90">Tech Hub &amp; Modern Villas</p>
            </div>
            <span className="material-symbols-outlined text-white text-2xl opacity-80 group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
