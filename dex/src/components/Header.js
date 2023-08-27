import React from "react";
import Eth from "../eth.svg";
import Logo from "../moralis-logo.svg";

function Header(connect) {
  return (
    <div>
      <header>
        <div className="leftH">
          <img src={Logo} alt="logo" className="logo" />
          <div className="headerItem">Swap</div>
          <div className="headerItem">Tokens</div>
          <div className="rightH">
            <div className="headerItem">
              <img src={Eth} alt="eth logo" className="eth" />
              Ethereum
            </div>
            <div className="connectButton" onClick={connect}>
Connect
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
