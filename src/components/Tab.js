import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Chart from "./Chart";
import NewChart from "./NewChart";
import ConfirmOrder from "./ConfirmOrder";
import SabtKala from './SabtKala';
import EditKala from './Editkala';
import SatisfactionTime from "./SatisfactionTime";
import SatisfactionCategory from "./SatisfactionCategory";

const TabAdmin=()=> {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="ثبت کالا">
        <SabtKala />
      </Tab>
      <Tab eventKey="edit" title="ویرایش کالا">
        <EditKala />
      </Tab>
      <Tab eventKey="ConfirmOrder" title="تایید سفارش مشتریان">
        <ConfirmOrder />
      </Tab>
      <Tab eventKey="Chart" title="میزان فروش بر اساس تعداد کالاها">
        <Chart />
      </Tab>
      <Tab eventKey="NewChart" title="میزان فروش بر اساس ارزش فروش کالا">
        <NewChart />
      </Tab>
      <Tab eventKey="SatisfactionTime" title="میزان رضایت کاربران در بازه مشخص">
        <SatisfactionTime />
      </Tab>
      <Tab eventKey="SatisfactionCategory" title="میزان رضایت کابران در دسته بندی">
        <SatisfactionCategory />
      </Tab>
      {/* <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
      </Tab> */}
    </Tabs>
  );
}

export default TabAdmin;