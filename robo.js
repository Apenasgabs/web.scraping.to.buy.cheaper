const puppeteer = require("puppeteer");
const listaProduto = [`Projetor LG CineBeam Smart TV 140`, `playstation 5`];
const produto = listaProduto[1];

const myPage = `https://www.google.com/search?q=${produto}`;
console.log(myPage);
async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(myPage);
    const resultado = await page.evaluate(() => {
        return document.querySelector(
            "div.pla-unit-container > div > div >div:nth-child(2)"
        ).textContent;
    });
    let edit = resultado.split(",");
    console.log(`O ${produto} que voce quer`);
    console.log(`Esta custando ${edit[0]}`);
    await browser.close();
    return edit
}

module.exports = robo;