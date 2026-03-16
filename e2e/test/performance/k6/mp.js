import { group, sleep, check } from "k6";
import http from "k6/http";
import execution from "k6/execution";

export const options = {
  stages: [
    { target: 20, duration: "1m" },
    { target: 20, duration: "3m30s" },
    { target: 0, duration: "1m" },
  ],
};

export default function () {
  let params;
  let resp;
  let match;
  let regex;
  let url;
  const correlation_vars = {};

  group("Default group", function () {
    params = {
      headers: {
        "sec-ch-ua": `"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"Windows"`,
        "upgrade-insecure-requests": `1`,
        accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "sec-fetch-site": `none`,
        "sec-fetch-mode": `navigate`,
        "sec-fetch-user": `?1`,
        "sec-fetch-dest": `document`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-GB,en-US;q=0.9,en;q=0.8`,
        priority: `u=0, i`,
      },
      cookies: {},
    };

    url = http.url`https://denis690.nexudus.site/`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "cache-control": `max-age=0`,
        "sec-ch-ua": `"Not:A-Brand";v="99", "Google Chrome";v="145", "Chromium";v="145"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"Windows"`,
        "upgrade-insecure-requests": `1`,
        accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "sec-fetch-site": `same-origin`,
        "sec-fetch-mode": `navigate`,
        "sec-fetch-user": `?1`,
        "sec-fetch-dest": `document`,
        referer: `https://denis690.nexudus.site/denis690`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-GB,en-US;q=0.9,en;q=0.8`,
        priority: `u=0, i`,
      },
      cookies: {},
    };

    url = http.url`https://denis690.nexudus.site/denis690`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });
  });
  sleep(1);
}
