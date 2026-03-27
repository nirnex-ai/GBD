import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  category: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Guided Architecture',
    category: 'Framework',
    description:
      'Structure docs, design decisions, and release notes with a clear information hierarchy tuned for long-form technical reading.',
  },
  {
    title: 'Procedural Delivery',
    category: 'Workflow',
    description:
      'Ship documentation and blog updates through deterministic CI/CD, including reproducible builds and automated publication.',
  },
  {
    title: 'Search-First Knowledge',
    category: 'Discovery',
    description:
      'Use local hashed search indexes for fast retrieval across docs and the engineering journal without external services.',
  },
];

function Feature({title, category, description}: FeatureItem) {
  return (
    <article className={clsx('col col--4', styles.featureCard)}>
      <p className={styles.category}>{category}</p>
      <Heading as="h3">{title}</Heading>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
