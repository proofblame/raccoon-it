import workflow from './Workflow.module.scss';

import ProjectBacklog from './images/ProjectBacklog.svg';
import SprintBacklog from './images/SprintBacklog.svg';
import Sprint from './images/Sprint.svg';
import Software from './images/Software.svg';
import Arrow from './images/Arrows.svg';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import IMG from '../../../shared/UI/IMG/IMG';
import Button from '../../../shared/UI/Button/Button';

const Workflow = () => {
  return (
    <section className={workflow.section}>
      <Container>
        <div className={workflow.wrapper}>
          <H2 className={workflow.header}>Как мы работаем?</H2>
          <p className={workflow.subscription}>
            Мы изучаем особенности ваших клиентов и подвираем лучшее решение для
            вашего бизнеса. Работаем по гибкой методологии Agile, что позволяет
            быстро менять продукт под требования рынка.
          </p>
          <div className={workflow.listWrapper}>
            <ul className={workflow.estimationList}>
              <li className={workflow.estimationListItem}>
                <span className={workflow.estimationListItemNumber}>01</span>
                <p className={workflow.estimationListItemText}>
                  Определяем цели
                </p>
              </li>
              <li className={workflow.estimationListItem}>
                <span className={workflow.estimationListItemNumber}>02</span>
                <p className={workflow.estimationListItemText}>
                  Создаём прототип
                </p>
              </li>
              <li className={workflow.estimationListItem}>
                <span className={workflow.estimationListItemNumber}>03</span>
                <p className={workflow.estimationListItemText}>
                  Верстаем и программируем
                </p>
              </li>
              <li className={workflow.estimationListItem}>
                <span className={workflow.estimationListItemNumber}>04</span>
                <p className={workflow.estimationListItemText}>
                  Тестируем и оптимизируем
                </p>
              </li>
            </ul>
          </div>

          <div className={workflow.workflowWrapper}>
            <ul className={workflow.workflowList}>
              <li className={workflow.workflowListItem}>
                <IMG
                  className={workflow.workflowListImage}
                  src={ProjectBacklog}
                  alt='бэклог проекта'
                />
                <p className={workflow.workflowListImageSub}>
                  бэклог <br /> проекта
                </p>
              </li>
              <li className={workflow.workflowListItem}>
                <IMG
                  className={workflow.workflowListImage}
                  src={SprintBacklog}
                  alt='бэклог спринта'
                />
                <p className={workflow.workflowListImageSub}>
                  Бэклог <br /> спринта
                </p>
              </li>
              <li className={workflow.workflowListItem}>
                <IMG
                  className={workflow.workflowListImageSprint}
                  src={Sprint}
                  alt='спринт'
                />
                <p className={workflow.workflowListImageSubSprint}>Спринт</p>
              </li>
              <li className={workflow.workflowListItem}>
                <IMG
                  className={workflow.workflowListImage}
                  src={Software}
                  alt='Работающее По с новыми возможностями'
                />
                <p className={workflow.workflowListImageSubNoArrow}>
                  Работающее По с новыми возможностями
                </p>
              </li>
            </ul>

            <div className={workflow.sprintListWrapper}>
              <IMG className={workflow.arrows} src={Arrow}></IMG>
              <ul className={workflow.sprintList}>
                <li className={workflow.sprintListItem}>Дизайн</li>
                <li className={workflow.sprintListItem}>Разработка</li>
                <li className={workflow.sprintListItem}>Тестирование</li>
                <li className={workflow.sprintListItem}>Наладка</li>
                <li className={workflow.sprintListItem}>Поддержка</li>
              </ul>
            </div>

            <div className={workflow.buttonWrapper}>
              <Button className={workflow.bidButton}>Оставить заявку</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;
