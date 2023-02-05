import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate'

const features = [
  {
    title: <Translate>DevArchitecture</Translate>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <Translate>
        DevArchitecture is a fast software development infrastructure suitable
        for modular PnP (Plug and Play) architecture, adopting CQRS
        (Command Query Responsibility Segregation) and AOP (Aspect Oriented Programming)
        approaches, focusing on SOLID principles and Clean Architecture methods.
      </Translate>
    ),
  },
  {
    title: <Translate>Sustainable</Translate>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <Translate>
        DevArchitecture provides a sustainable infrastructure for a new project
        or conversion projects. Eliminates the estimated first 5 months of development
        infrastructure time to standards. Doing all of this, preserving corporate memory
        is a focus for DevArchitecture.
      </Translate>
    ),
  },
  {
    title: <Translate>Plug & Play Architecture</Translate>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <Translate>
        Adding a new feature or leaving an existing feature is pretty easy.
        Keeps dependencies to a minimum. So much so that even the dependency
        of the systems on DevArchitecture itself is minimal.
      </Translate>
    ),
  }, 
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  var tagline = <Translate>Open Source Rapid Application Framework for .Net 7</Translate>;
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              <Translate>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
