import React from 'react'
import './home.css'
import FeaturedInfo from '../../Component/featuredInfo/FeaturedInfo'
import Chart from '../../Component/chart/Chart'
import { userData } from "../../dummyData";
import WidgetSm from "../../Component/widgetSm/WidgetSm"
import Sidebar from '../../Component/sidebar/Sidebar';
import Topbar from '../../Component/topbar/Topbar';
// import WidgetLg from '../../Component/widgetLg/WidgetLg';

function Home() {
  return (
    <>
    {/* <Topbar/> */}
    {/* <Sidebar/> */}
    
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetSm/>
        {/* <WidgetLg/> */}
      </div>
    </div>
    </>
  )
}

export default Home