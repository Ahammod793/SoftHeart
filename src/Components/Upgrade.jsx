import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Upgrade() {
  const [StartDate, setStartDates] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000`)
      .then((res) => res.json())
      .then((data) => {
        const dates = data.map((campaign) => campaign.campaignStart);
        setStartDates(dates);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/users/info`)
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useState(() => {
    fetch(`http://localhost:5000/donatDetails/getInfo`)
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);

  // const totusers = [
  //   { _id: "1", Email: "ahammod@gmail.com", name: "Ahammod", date: "2025-01-28T08:25:31.026Z" },
  //   { _id: "2", Email: "hac@gmail.com", name: "Harun al hac", date: "2025-01-28T08:56:38.184Z" },
  // ];
  // const don = [
  //   { amount: "400", donationDate: "2025-01-28T08:32:48.332Z" },
  //   { amount: "600", donationDate: "2025-01-28T09:05:12.211Z" },
  // ];
  // const stDate = ["2025-01-28T14:26:25.771+06:00", "2025-01-28T15:02:24.061+06:00","2025-01-28T15:02:24.061+06:00","2025-04-28T15:02:24.061+06:00"];
  // console.log('user', totalUsers)
  // console.log('stdate', StartDate)
  // console.log('dona', donation)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // this function return month from any date
  const monthReturner = (date) => {
    const d = new Date(date);
    return `${monthNames[d.getMonth()]}`;
  };
  const toUsers_cal_month = totalUsers.map((u) => monthReturner(u.date));
  const donMonth = donation.map((d) => monthReturner(d.donationDate));
  const campStartMonth = StartDate.map(monthReturner);

  // remove duplicate and convert it an arry
  const months = [
    ...new Set([...toUsers_cal_month, ...donMonth, ...campStartMonth]),
  ];
  // console.log(months)

  const data = months.map((m) => {
    const Users = totalUsers.filter(
      (user) => monthReturner(user.date) === m
    ).length;

    const Donations = donation.filter((donation) => monthReturner(donation.donationDate) === m).reduce((sum, donation) => sum + parseFloat(donation.amount), 0);

    const Campaigns = StartDate.filter(
      (date) => monthReturner(date) === m
    ).length;

    return {
      m,
      Users,
      Donations,
      Campaigns,
    };
  });

  return (
    <div className="mx-auto w-5/6 md:w-11/1 p-2 md:p-4 flex flex-col bg-base-300 mb-12">
      
      
      <div className="items-center justify-center w-full">
      <ResponsiveContainer width={'100%'} height={400}>
        <LineChart
         width={500}
         height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="m" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Donations" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Campaigns" stroke="#ff7300" />
          <Line type="monotone" dataKey="Users" stroke="#117300" />
        </LineChart>
      </ResponsiveContainer>
      </div>
      <div className="items-center justify-center text-center flex flex-row  border border-gray-100 rounded-lg w-3/6 mx-auto my-6  border-secondary">
        <h3 className="flex text-center justify-center items-center py-8 text-secondary">Out website Upgration</h3>
      </div>
    </div>
  );
}
