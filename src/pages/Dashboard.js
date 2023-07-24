import React, { useEffect } from "react";
import { useOrderContext } from "../context/place_order_context";
import { useUserContext } from "../context/user_context";
import { get_ordet_url } from "../utils/constants";
import axios from "axios";
import OrderDetail from "./OrderDetail";
import { Navigate, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Dashboard = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    minWidth: 320,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    transition: 0.4,
    color: "#0f3460",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const {
    getAddress,
    address_list,
    deleteAddress,
    getOrdersList,
    downloadInvocie,
    my_order_list,
    single_order_details,
    getSingleOrderDetails,
    cancelOrder,
  } = useOrderContext();
  const {
    logintoken,
    isLogin,
    logindata,
    getUserDetails,
    wallet_data,
    getWallet,
  } = useUserContext();

  const mDownloadInvoice = (mID) => {
    var params = {
      order_number: mID,
    };
    downloadInvocie(params);
  };

  useEffect(() => {
    console.log("aaa", my_order_list);
    getOrdersList(logintoken);
  }, []);

  const navigate = useNavigate();

  const handleClick = (...item) => {};

  return (
    <>
      <Header />
      <section className="dashboard">
        <div className="db-sec">
          <div className="db-profile">
            <p className="dbp-title">Profile</p>
            {/* <hr className="bd-divider" /> */}
            <p>
              Username : <b>{logindata.name}</b>
              <br />
              Email : <b>{logindata.email}</b>
            </p>
          </div>
          <div className="db-history">
            <p className="dbh-title">Inquiry History</p>
            {/* <hr className="bd-divider" /> */}
            <div className="dbh-list">
              {my_order_list && my_order_list.length > 0
                ? my_order_list.map((item, index) => {
                    // console.log("item-order-list", item);
                    return (
                      <div className="dbh-item" key={item.id}>
                        <p>
                          Inquiry Id. : <b>{item.id}</b>
                          <br />
                          Inquiry Date : <b>{item.order_date}</b>
                          <br />
                          Total Qty. : <b>{item.total_quantity}</b>
                        </p>
                        <button
                          onClick={() => {
                            getSingleOrderDetails(item.id, logintoken);
                            handleOpen();
                          }}
                          className="db-ih-smd-btn"
                        >
                          Show More Details
                        </button>
                      </div>
                    );
                  })
                : null}
            </div>

            <Modal
              open={open}
              // key={single_order_details.id}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="od-modal"
            >
              <Box sx={style}>
                <h2 className="od-header">Order Detail :</h2>
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography> */}
                <div className="od-body">
                  {single_order_details === {} ||
                  single_order_details === undefined ||
                  single_order_details === "" ? null : (
                    <div className="od-content">
                      <p className="pl-01">
                        Inquiry Id : <b>{single_order_details.id}</b>
                      </p>
                      <p className="pl-01">
                        Inquiry Date : <b>{single_order_details.order_date}</b>
                      </p>
                      <p className="pl-01">
                        Total Qty. :{" "}
                        <b>{single_order_details.total_quantity}</b>
                      </p>
                      <hr className="od-line" />
                      <div className="pl-01">
                        Product List :
                        <div className="od-pro-list">
                          {single_order_details &&
                            single_order_details.order_lines &&
                            single_order_details.order_lines.map((item) => {
                              return (
                                <div className="order-lines">
                                  <p>
                                    Product Id : <b>{item.product_id}</b>
                                  </p>
                                  <p>
                                    Product Name : <br />
                                    <b>{item.product_name}</b>
                                  </p>
                                  <p>
                                    Product Qty. : <b>{item.quantity}</b>
                                  </p>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    // href="javasript:void(0);"
                    title="Download Invoice"
                    className="db-ih-smd-btn"
                    onClick={() => mDownloadInvoice(single_order_details.id)}
                  >
                    View Quotation
                  </button>
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                    className="db-ih-smd-btn"
                  >
                    close
                  </button>
                </div>
              </Box>
            </Modal>

            {/* <p>Product List :</p>
          <div className="bd-proList">
          <div className="db-proItem">
          <img />
          <p>Demo Static Product Title 01</p>
          <p>Qty. 22</p>
          </div>
          <div className="db-proItem">
          <img />
          <p>Demo Static Product Title 02</p>
              <p>Qty. 34</p>
            </div>
          </div> */}
          </div>
        </div>
        {/* <OrderDetail order_modal={order_modal} setOrder_modal={setOrder_modal} /> */}
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
