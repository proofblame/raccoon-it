import styles from './tech.module.scss'
import H2 from '../../../shared/UI/h2/h2'
import Button from '../../../shared/UI/button/button'

import spring from '../../../shared/images/spring.webp'
import nginx from '../../../shared/images/nginx.webp'
import postgresql from '../../../shared/images/postgresql.webp'
import redis from '../../../shared/images/redis.webp'
import docker from '../../../shared/images/docker.webp'
import java from '../../../shared/images/java.webp'
import react from '../../../shared/images/react.webp'
import javascript from '../../../shared/images/javascript.webp'
import typescript from '../../../shared/images/typescript.webp'
import redux from '../../../shared/images/redux.webp'
import figma from '../../../shared/images/figma.webp'
import photoshop from '../../../shared/images/photoshop.webp'

const Tech = ({ style }) => {
  return (
    <section className={styles.tech} id='techs' style={style}>
      <H2 className={styles.title}>Наши технологии</H2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.itemTitle}>Backend</p>
          <ul className={styles.sublist}>
            <li className={styles.subitem}>
              <img className={styles.image} src={spring} alt="spring logo" />
              <span className={styles.subtitle}>Spring</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={nginx} alt="nginx logo" />
              <span className={styles.subtitle}>nginx</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={postgresql} alt="postgresql logo" />
              <span className={styles.subtitle}>postgresql</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={redis} alt="redis logo" />
              <span className={styles.subtitle}>redis</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={docker} alt="docker logo" />
              <span className={styles.subtitle}>docker</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={java} alt="java logo" />
              <span className={styles.subtitle}>java</span>
            </li>
          </ul>

        </li>

        <li className={styles.item}>
          <p className={styles.itemTitle}>Frontend</p>
          <ul className={styles.sublist}>
            <li className={styles.subitem}>
              <img className={styles.image} src={react} alt="react logo" />
              <span className={styles.subtitle}>react</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={javascript} alt="javascript logo" />
              <span className={styles.subtitle}>javascript</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={typescript} alt="typescript logo" />
              <span className={styles.subtitle}>typescript</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={redux} alt="redux logo" />
              <span className={styles.subtitle}>redux</span>
            </li>
          </ul>

        </li>

        <li className={styles.item}>
          <p className={styles.itemTitle}>design</p>
          <ul className={styles.sublist}>
            <li className={styles.subitem}>
              <img className={styles.image} src={figma} alt="figma logo" />
              <span className={styles.subtitle}>figma</span>
            </li>
            <li className={styles.subitem}>
              <img className={styles.image} src={photoshop} alt="photoshop logo" />
              <span className={styles.subtitle}>photoshop</span>
            </li>
          </ul>

        </li>

      </ul>

    </section>
  )
};

export default Tech;
