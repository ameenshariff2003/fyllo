import React from 'react'
import { data } from "../../result.js"
import "./tabel.scss"

import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"; // Correct path for ag-grid.css
import "ag-grid-community/styles/ag-theme-alpine.css"; // Correct path for ag-theme-alpine.css

const TabelNew = () => {
    const col = [

        {
            field: "id",
            headerName: "Key",
            floatingFilter: true,
            width: 100,
            sortable: true,
          },
          {
            field: "product",
            filter: "agTextColumnFilter",
            headerName: "NAME",
            width: 180,
            sortable: true,
            floatingFilter: true,
          },
          {
            field: "month",
            filter: "agTextColumnFilter",
            headerName: "Month",
            width: 150,
            sortable: true,
            floatingFilter: true,
          },
          {
            field: "_year",
            headerName: "Year",
            width: 200,
            sortable: true,
            filter: "agTextColumnFilter",
            floatingFilter: true,
          },
          
          
          {
            field: "state",
            filter: "agTextColumnFilter",
            headerName: "State",
            width: 250,
            sortable: true,
            floatingFilter: true,
          },
          {
            field: "requirement_in_mt_",
            filter: "agTextColumnFilter",
            headerName: "Agrochemical Required ",
            width: 250,
            sortable: true,
            floatingFilter: true,
          },
          {
            field: "availability_in_mt_",
            filter: "agTextColumnFilter",
            headerName: " Agrochemical Availabel",
            width: 190,
            sortable: true,
            floatingFilter: true,
          },

    ]
    console.log(data)
  return (
    <div className="ItemList">
      <div className='title'>Tabular representation of the Items</div>

      <div className="tabularItem">
        <div className="ag-theme-alpine-dark" style={{ width: "100%", height:"400px" }}>
          <AgGridReact
            rowData={data}
            rowSelection={true}
            columnDefs={col}
          ></AgGridReact>
        </div>
      </div>      
    </div>
      
  )
}

export default TabelNew
