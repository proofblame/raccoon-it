import tenets from './Tenets.module.scss';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import H3 from '../../../shared/UI/H3/H3';

const Tenets = () => {
  return (
    <section className={tenets.section}>
      <Container>
        <div className={tenets.wrapper}>
          <H2 className={tenets.header}>Наши принципы</H2>

          <ul className={tenets.list}>
            <li className={tenets.listItemMobile}>
              <H3 className={tenets.subheader}>mobile first</H3>
              <p className={tenets.listText}>
                Наши сайты безупречно работают на мобильных устройствах и
                планшетах
              </p>
            </li>
            <li className={tenets.listItemSecure}>
              <H3 className={tenets.subheader}>top secure</H3>
              <p className={tenets.listText}>
                Данные ваших пользователей будут надёжно защищены
              </p>
            </li>
            <li className={tenets.listItemUserFriendly}>
              <H3 className={tenets.subheader}>user friendly</H3>
              <p className={tenets.listText}>
                Мы уделяем особое внимание разработке удобных интерфейсов
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Tenets;
