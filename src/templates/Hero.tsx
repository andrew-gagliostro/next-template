import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

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

      <Section yPadding="py-20">
        <HeroOneButton
          title={
            <>
              {'Create, Rate, Categorize, and Share\n'}
              <span className="text-4xl text-purple-700">A simple and personalized way to keep track of your favorite products or services and share them with others</span>
            </>
          }
          button={
            <Link href="/sisu">
              <a color='purple'>
                <Button>Create An Account Now</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  )
};

export { Hero };
