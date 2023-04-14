import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <Background color="bg-gradient-to-t from-violet-200 to-purple-600">
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <VerticalFeatures />
      <Footer />
    </div>
  </Background>
);

export { Base };
