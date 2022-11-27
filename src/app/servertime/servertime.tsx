import React, { FC } from 'react';
import styles from './servertime.module.css';

interface ServertimeProps { }

const Servertime: FC<ServertimeProps> = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className={styles.Servertime} data-testid="Servertime">
      <span className={styles.clock}>
        {date.toLocaleTimeString('pt-BR', { timeZone: 'UTC' })}
      </span>
    </div>
  );
}

export default Servertime;
