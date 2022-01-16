import "./style.css";
import "normalize.css";
import baffle from "baffle";

async function getCloudflareJSON() {
  try {
    let data = await fetch("https://1.1.1.1/cdn-cgi/trace").then((res) =>
      res.text()
    );
    let arr = data
      .trim()
      .split("\n")
      .map((e) => e.split("="));
    return Object.fromEntries(arr);
  } catch {
    return -1;
  }
}

async function getCountry(code) {
  let res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  let data = await res.json();
  const {
    name: { common },
    flag,
  } = data[0];
  return { name: common, flag };
}

baffle(document.querySelectorAll("#app span:not(#flag)"), {
  speed: 150,
}).start();

const main = async () => {
  const { ip, loc } = await getCloudflareJSON();
  const { name, flag } = await getCountry(loc);
  document.querySelector("#app").innerHTML = `
    <a href="https://1.1.1.1/cdn-cgi/trace">https://1.1.1.1/cdn-cgi/trace</a>
    <div id="main">
      <span id="ip">${ip}</span>
      <div class="country">
        <span>${name}</span>
        <span id="flag">${flag}</span>
      </div>
    </div>
`;
  let b = baffle(document.querySelectorAll("#app span:not(#flag)"), {
    speed: 150,
  }).start();
  b.reveal(1000);
};

main();
