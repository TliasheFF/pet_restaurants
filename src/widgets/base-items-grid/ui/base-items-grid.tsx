import styles from './base-items-grid.module.css';

export const BaseItemsGrid = (props: { children: React.ReactNode }) => {
  return <div className={styles['base-items-grid']}>{props.children}</div>;
};
