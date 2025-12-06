import React, { useState } from "react";
import CarCard from "./CarCard";
import { cars } from "./data";
import "./inventoryPage.css"; 
import Header from '../Header';

// 假筛选用
const provinces = ["北京", "上海", "广东"];
const cities = {
  北京: ["北京"],
  上海: ["上海"],
  广东: ["广州", "深圳", "佛山"]
};

const InventoryPage = () => {
  const [selectedProvince, setSelectedProvince] = useState("北京");
  const [selectedCity, setSelectedCity] = useState("北京");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTrim, setSelectedTrim] = useState("");

  // 自动从数据中提取 trim 列表（避免硬编码）
  const trims = [...new Set(cars.map((c) => c.trim))];

  // --------------------------
  //       实时筛选逻辑
  // --------------------------
  const filteredCars = cars.filter((car) => {
    return (
      (selectedModel ? car.model === selectedModel : true) &&
      (selectedTrim ? car.trim === selectedTrim : true)
    );
  });

  return (
    <div className="inventory-container">
 <Header />
      {/* 左上角“现车” */}
      <h1 className="inventory-title">现车</h1>

      <div className="inventory-layout">

        {/* ------------------ 左侧筛选栏 ------------------ */}
        <aside className="filter-box">

          <label>省份</label>
          <select
            value={selectedProvince}
            onChange={(e) => {
              setSelectedProvince(e.target.value);
              setSelectedCity(cities[e.target.value][0]);
            }}
          >
            {provinces.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <label>城市</label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities[selectedProvince].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <label>车型</label>
          <div className="filter-group">
            <button
              className={selectedModel === "" ? "active" : ""}
              onClick={() => setSelectedModel("")}
            >
              全部
            </button>
            {["Model 3", "Model Y", "Model S", "Model X"].map((model) => (
              <button
                key={model}
                className={selectedModel === model ? "active" : ""}
                onClick={() => setSelectedModel(model)}
              >
                {model}
              </button>
            ))}
          </div>

          <label>版本（Trim）</label>
          <div className="filter-group">
            <button
              className={selectedTrim === "" ? "active" : ""}
              onClick={() => setSelectedTrim("")}
            >
              全部
            </button>
            {trims.map((t) => (
              <button
                key={t}
                className={selectedTrim === t ? "active" : ""}
                onClick={() => setSelectedTrim(t)}
              >
                {t}
              </button>
            ))}
          </div>

        </aside>

        {/* ------------------ 右侧车辆展示 ------------------ */}
        <div className="car-list">
          {filteredCars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
