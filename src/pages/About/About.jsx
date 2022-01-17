import about from './About.module.scss';

import Container from '../../shared/UI/Container/Container';
import H2 from '../../shared/UI/H2/H2';

const About = () => {
  return (
    <section className={about.section}>
      <Container>
        <H2></H2>
      </Container>
    </section>
  );
};

export default About;
