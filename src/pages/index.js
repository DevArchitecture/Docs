import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'DevArchitecture',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        DevArchitecture CQRS (Command Query Responsibility Segregation) ve 
        AOP (Aspect Oriented Programming) yaklaşımını benimseyen, SOLID prensiplerini ve 
        Temiz Mimari yöntemlerini odağında bulunduran, modüler PnP (Plug and Play) 
        mimarisine uygun hızlı yazılım geliştirme alt yapısıdır.
      </>
    ),
  },
  {
    title: 'Sürdürülebilir',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        DevArchitecture yeni bir proje veya dönüşüm projeleri için sürdürülebilir bir altyapı sağlar. 
        Tahmini ilk 5 aylık standartlara uygun geliştirme altyapısı süresini ortadan kaldırır.
        Bunların tamamını yapmak, kurumsal hafızayı korumak DevArchitecture için odak noktasıdır.
      </>
    ),
  },
  {
    title: 'Plug & Play Mimari',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Yeni özellik eklemek, mevcut bir özellikten vazgeçmek oldukça kolaydır. Bağımlılıkları minimum seviyede tutar. 
        Öyle ki, sistemlerin DevArchitecture'ın kendisine bağımlılığı dahi minimum seviyededir. 
      </>
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Open Source Rapid Application Framework for .Net 5">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Hızlı Başlangıç
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
