import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import React from 'react';

import { AccountLinks } from '../navigation/AccountInfoSignInSignUp';


function Hero() {

  return (
    <Background color="bg-gray-300">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/andrew-gagliostro/mylysts">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <AccountLinks />
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Create, Rate, Categorize, and Share\n'}
              <span className="text-purple-700">A simple and personalized way to keep track of your favorite products or services and share them with others</span>
            </>
          }
          description="The easiest way to track "
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a className="text-purple-700" color='purple'>
                <Button >Download Your Free Theme</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  )
};

export { Hero };
