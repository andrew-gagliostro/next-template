import { Background } from '../../background/Background';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../Banner';
import { Footer } from '../Footer';
import { Hero } from '../Hero';
import { VerticalFeatures } from '../VerticalFeatures';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Authenticator, Link } from '@aws-amplify/ui-react';
import { HeroOneButton } from '../../hero/HeroOneButton';
import { AccountLinks } from '../../navigation/AccountInfoSignInSignUp';
import { Button } from '../../button/Button';
import { Logo } from '../Logo';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';

function Base() {

  let [user, setUser] = useState("null")

  useEffect(() => {
    async function getUser() {
      try {
        let tempUser = await Auth.currentAuthenticatedUser();
        setUser(tempUser);
      }
      catch (e) {
        setUser("User")
      }
    }
    getUser();
  })

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Background color="bg-violet-200">
          <div className="antialiased text-gray-600">
            <Meta title={AppConfig.title} description={AppConfig.description} />
            <Background color="bg-gray-300">
              <Section yPadding="py-6">
                <NavbarTwoColumns logo={<Logo xl />}>
                  <li>
                    {(user && user.attributes) && (
                      <Link>
                        <a>Hello {user.attributes.email}!</a>
                      </Link>
                    )}
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
            <VerticalFeatures />
            <Banner />
            <Footer />
          </div>
        </Background>)}
    </Authenticator>
  )
};

export { Base };
