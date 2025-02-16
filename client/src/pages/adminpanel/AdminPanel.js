import React from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./AdminPanel.css";
import { FiLink } from "react-icons/fi"; // ✅ Import FiLink

import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
// import Usermanagement from "./Usermanagement"; // ✅ Import the component
// import Inventory from "./pages/Inventory";
// import ClientSupplier from "./pages/ClientSupplier";
// import SAPData from "./pages/SAPData";

const AdminPanel = () => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  return (
    <div id="continer">
      {/* Left Sidebar */}
      <div id="left_content">
        <Sidebar />
      </div>

      {/* Right Content */}
      <div id="right_content">
        <div id="user_management" onClick={() => navigate("/Usermanagement")}>
          User Management
          <Link to="/Usermanagement">
                    </Link>
          <img src="user_management.svg" alt="Usermanagement" style={{ width: '90%', height: '90%' }}/>
        </div>

        <div id="inventory_management" onClick={() => navigate("/InventoryManagement")}>
          Inventory Management
          <Link to="/InventoryManagement">
                    </Link>
          <img src="inventory_management.svg" alt="Inventory Management" style={{ width: '90%', height: '90%' }}/>
        </div>

        <div id="client_management" onClick={() => navigate("/ClientSupplierManagement")}>
          Client & Supplier Master Management
          <img src="client_supplier_management.svg" alt="Client & Supplier Management" style={{ width: '90%', height: '90%' }}/>
        </div>

        <div id="sap_data" onClick={() => navigate("/SapDataImport")}>
          SAP Data Import
          <img src="sap_data_import.svg" alt="SAP Data Import" style={{ width: '90%', height: '90%' }}/>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
