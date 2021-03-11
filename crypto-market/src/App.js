import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Place from "../src/components/CoinPlace";
import Th from "../src/components/TableHead";
import CoinName from "../src/components/CoinName";
import CurrentPrice from "../src/components/CurrentPrice";
import ChangePercent24h from "../src/components/ChangePercent24";
import ChangePercent7 from "../src/components/ChangePercent7";
import MarketCap from "../src/components/MarketCap";
import SparkLinez from "../src/components/SparkLinez";
import TotalVolume from "../src/components/TotalVolume";
import CirculatingSupply from "../src/components/CirculatingSupply";

const App = () => {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <table>
      <Th />
      <tbody>
        {coins.map((v, i) => {
          return (
            <tr>
              <Place place={i} />
              <CoinName name={v.name} symbol={v.symbol} image={v.image} />
              <CurrentPrice price={v.current_price} />
              <ChangePercent24h price24={v.price_change_percentage_24h} />
              <ChangePercent7
                price7={v.price_change_percentage_7d_in_currency}
              />
              <MarketCap value={v.market_cap} />
              <TotalVolume value={v.total_volume} />
              <CirculatingSupply
                value={v.circulating_supply}
                symbol={v.symbol}
              />
              <SparkLinez spark={[...v.sparkline_in_7d.price]} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;
