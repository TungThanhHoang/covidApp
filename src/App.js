import "antd/dist/antd.css";
import "./style.css";
import React from "react";
import { Layout } from "antd";
import { getContries, getReportByCountry } from "./apis/api";
import { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import ContentWrap from "./components/Content/ContentWrap";
import CountrySelect from "./components/ContrySelect/CountrySelect";
import Chart from "./components/Chart/Chart";
import FooterWrap from "./components/Footer/FooterWrap";
import { sortBy } from "lodash";
const { Content } = Layout;
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    getContries().then((res) => {
      console.log({ res });
      const countries = sortBy(res.data, "Country");
      setCountries(countries);
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (value) => {
    setSelectedCountryId(value);
  };
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      console.log(Slug);
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <Layout>
      <div className="background-container">
        <HeaderBar />
        <Content>
          <CountrySelect
            countries={countries}
            handleOnChange={handleOnChange}
            value={selectedCountryId}
          />
          <ContentWrap report={report} />
          <Chart report={report} selectCountryId={selectedCountryId} />
        </Content>
        <FooterWrap />
      </div>
    </Layout>
  );
}

export default App;
