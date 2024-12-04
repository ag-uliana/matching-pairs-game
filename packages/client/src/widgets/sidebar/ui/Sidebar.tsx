import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { RouteNames, routePaths } from '@/shared/constants/router';
import { LogoutModal } from '@/features/auth';
import { ThemeToggle } from '@/features/theming';
import cls from './Sidebar.module.scss';

const getNavLinkClass = (isActive: boolean) =>
  clsx(cls.navItem, { [cls.active]: isActive });

export const Sidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <aside className={cls.sidebar}>
      <nav className={cls.navbarContainer}>
        <h2 className={cls.logo}>Memory Cards</h2>
        <ul className={cls.navList}>
          <li>
            <NavLink
              to={routePaths[RouteNames.START_GAME]}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Играть
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.FORUM]}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Форум
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.LEADERBOARD]}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Лидерборд
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routePaths[RouteNames.PROFILE]}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Ваш профиль
            </NavLink>
          </li>
          <li className={`${cls.navItem} ${cls.logoutButton}`}>
            <div onClick={open}>Выйти</div>
          </li>
          <ThemeToggle />
        </ul>
      </nav>
      <LogoutModal opened={opened} onClose={close} />
    </aside>
  );
};
