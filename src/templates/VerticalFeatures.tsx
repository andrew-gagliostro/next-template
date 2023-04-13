import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Create and Share Lists with your friends and followers"
  >
    <VerticalFeatureRow
      title="Add lists of your favorites in different categories to your profile"
      description="Whether it's books, movies, music, or anything else, you can easily create and share lists of your favorite things with your friends and followers"
      image="/assets/images/feature1.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Create lists to share products you referenced or used in a postings"
      description="Making it easy for your followers to find and purchase them"
      reverse
    />
    <VerticalFeatureRow
      title="Document and post your recipes any other process you want to share"
      description="Whether you're a food blogger looking to share your recipes with your followers or a DIY enthusiast who wants to share your process with friends, MyLysts is the perfect tool for you"
    />
    <VerticalFeatureRow
      title="Discover the next addition to your lists"
      description="Browse other users' public lists to discover new things to add to your own lists. Whether you're looking for new books to read, new restaurants to try, or new recipes to make, MyLysts has got you covered"
    />
  </Section>
);

export { VerticalFeatures };
