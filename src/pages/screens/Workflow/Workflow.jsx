import workflow from './Workflow.module.scss';

import ProjectBacklog from './images/ProjectBacklog.svg';
import SprintBacklog from './images/SprintBacklog.svg';
import Sprint from './images/Sprint.svg';
import Software from './images/Software.svg';

import Container from '../../../shared/UI/Container/Container';
import H2 from '../../../shared/UI/H2/H2';
import IMG from '../../../shared/UI/IMG/IMG';

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

          <ul className={workflow.workflowList}>
            <li className={workflow.workflowListItem}>
              <IMG
                className={workflow.workflowListImage}
                src={ProjectBacklog}
              />
              <p className={workflow.workflowListImageSub}>
                бэклог <br /> проекта
              </p>
            </li>
            <li className={workflow.workflowListItem}>
              <IMG className={workflow.workflowListImage} src={SprintBacklog} />
              <p className={workflow.workflowListImageSub}>
                Бэклог <br /> спринта
              </p>
            </li>
            <li className={workflow.workflowListItem}>
              <IMG className={workflow.workflowListImageSprint} src={Sprint} />
              <p className={workflow.workflowListImageSubSprint}>Спринт</p>
            </li>
            <li className={workflow.sprintListWrapper}>
              <ul className={workflow.sprintList}>
                <li className={workflow.sprintListItem}>Дизайн</li>
                <li className={workflow.sprintListItem}>Разработка</li>
                <li className={workflow.sprintListItem}>Тестирование</li>
                <li className={workflow.sprintListItem}>Наладка</li>
                <li className={workflow.sprintListItem}>Поддержка</li>
              </ul>
            </li>
            <li className={workflow.workflowListItem}>
              <IMG className={workflow.workflowListImage} src={Software} />
              <p className={workflow.workflowListImageSubNoArrow}>
                Работающее По с новыми возможностями
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;
