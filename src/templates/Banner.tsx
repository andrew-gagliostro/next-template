import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Start building your lists now"
      subtitle="Create Account"
      button={
        <Link href="/sisu">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
