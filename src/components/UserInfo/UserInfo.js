import css from './UserInfo.module.css';

export const UserInfo = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Nik</p>
      <p className={css.exit}>Exit</p>
    </div>
  );
};
