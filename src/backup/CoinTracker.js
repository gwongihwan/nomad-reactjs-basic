import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(0);
  const [symbol, setSymbol] = useState(null);

  const handleInput = (e) => {
    setMoney(e.target.value);
  };
  const handleSelect = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
    console.log(money);
    console.log(price); // 왜 이미 set 하였음에도 console.log는 이전 값이 찍히는가?
    console.log(money / price);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      I have <input onChange={handleInput} value={money} type="number" /> US
      dollars.
      <select onChange={handleSelect}>
        <option value="">Select Coin..</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <h3>
        It can be exchanged for {money / price} {symbol}.
      </h3>
    </>
  );
}

export default CoinTracker;
