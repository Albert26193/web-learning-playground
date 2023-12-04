import * as React from 'react';

export default function Clock() {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const timerID = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timerID);
    };
  }, []);

  if (time === null) return null;

  return (
    <section>
      <h1>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}
