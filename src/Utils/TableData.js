import React, { useState, useEffect } from "react";
import { APICall } from "../Utils/CommonFunctions";
import API from "../Utils/ApiConstant";

// table imports
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Table js
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
// table js end
const columns = [
  {
    id: "order_id",
    label: "Order Id",
    minWidth: 170,
    align: "left",
  },
  {
    id: "user_id",
    label: "Customer Id",
    minWidth: 170,
    align: "left",
  },
  {
    id: "assigned_to",
    label: "Seller Name",
    minWidth: 200,
    align: "left",
  },
  {
    id: "delivery_date",
    label: "Time Alloted",
    minWidth: 200,
    align: "left",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "slot",
    label: "Delivery Slot",
    minWidth: 200,
    align: "left",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "shop",
    label: "Locality",
    minWidth: 300,
    align: "left",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "order_status",
    label: "Order Status",
    minWidth: 200,
    align: "left",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "payment_status",
    label: "Payment Status",
    minWidth: 200,
    align: "left",
    // format: (value) => value.toFixed(2),
  },
];

const TableData = ({ orderType }) => {
  const classes = useStyles();

  // API integration
  const [assigned, setAssigned] = useState([]);

  useEffect(() => {
    const tokenValue = localStorage.getItem("token");
    console.log("tokenValue", tokenValue);
    let object = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenValue}`,
      },
    };
    APICall(API[orderType], object, (error, result) => {
      if (error) console.log(error);
      else if (result.status) {
        console.log(result.orders, "orders");
        setAssigned(result.orders);
      } else alert("Something went wrong");
    });
  }, []);
  useEffect(() => {
    console.log(assigned);
  }, [assigned]);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {assigned.length !== 0
              ? assigned.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column?.id === "user_id" ||
                            column?.id === "order_id" ? (
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                (window.location.href = "/orderdetails")
                              }
                            >
                              {" "}
                              {`${value}`}
                            </div>
                          ) : column?.id === "shop" ? (
                            `${value?.address?.locality}`
                          ) : column?.id === "assigned_to" ? (
                            `${JSON.stringify(value?.name)}`
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
              : "No Data"}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default TableData;
