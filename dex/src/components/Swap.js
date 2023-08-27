import React from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Swap() {

  const setting = (
    <>
    <div>
      Slippage Tolerance
    </div>
    </>
  )

  return (
    <div className="tradeBox">
      <div className="tradeBoxHeader">
        <h4>Swap</h4>
        <Popover content={setting} title="Settings" trigger="click" placement="bottomRight">
        <SettingOutlined className="cog"/>
        </Popover>
      </div>
      <div className="inputs">

      </div>
    </div>
  );
}

export default Swap;
