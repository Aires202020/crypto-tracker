const coins =( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
const container = document.querySelector(".container");
let html = "";
async function getCoins() {
    const response = await fetch(coins);
    const data = await response.json();
    data.forEach((datas,datasof) => {
        if (datas.id === "bitcoin") {
            if (datas.current_price >= 100000) {
                alert("BTC just hit a new ATH twice today")

            }
        }
console.log(datas)

if(datas.current_price){
      if(datas.current_price >= 10000){
    alert("its here")  }
   }
        html +=
            `<div class=""> 
        <h2>${datas,datasof}<h2/>
            <img class="coinimage" src = "   ${datas.image}"/>
            <h2 class="coinsymbol">${datas.symbol}</h2>
            <h2 class="coinprice">price:$${datas.current_price}</h2>
            <h2 class="coinmarketcap">marketcap:$${datas.market_cap}</h2>
            <h2 class="coincirculation">circulating supply:${datas.circulating_supply}</h2>

         </div>`

    });
    container.innerHTML = html;

};

getCoins(); 


