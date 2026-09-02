onmessage = (e) => {
  const { trackhash, duration, source, timestamp } = e.data;

  const is_dev = location.port === "1719";
  const protocol = location.protocol.replace(':', '');
  const base_url = is_dev ? `${protocol}://${location.hostname}:1718` : location.origin;
  const url = base_url + "/logger/track/log";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ trackhash, duration, source, timestamp }),
    credentials: "include"
  });
};
