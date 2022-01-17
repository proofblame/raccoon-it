import about from './About.module.scss';

import Container from '../../shared/UI/Container/Container';
import Button from '../../shared/UI/Button/Button';
import H2 from '../../shared/UI/H2/H2';

const About = () => {
  return (
    <section className={about.section}>
      <Container>
        <div className={about.wrapper}>
          <H2>О нас</H2>
        </div>
        <Button>Оставить заявку</Button>
      </Container>
    </section>
  );
};

export default About;
