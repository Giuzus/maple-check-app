import React, { FC } from 'react';
import styles from './server-time.module.css';

interface ServertimeProps { }

const ServerTime: FC<ServertimeProps> = () => {
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
    <div className={styles.serverTime} data-testid="ServerTime">
      <span className={styles.clock}>
        {date.toLocaleTimeString('pt-BR', { timeZone: 'UTC' })}
      </span>
    </div>
  );
}

export default ServerTime;
