import React from "react";
import { useOrderContext } from "../context/place_order_context";
import { MdCancel } from "react-icons/md";

const OrderDetail = ({ order_modal, setOrder_modal }) => {
  const { single_order_details } = useOrderContext();

  return (
    <div className={order_modal ? "show order-dialog" : "order-dialog"}>
      <div className="order-detail">
        <div className="od-header">Order Detail </div>
        <div className="od-body">
          {single_order_details === {} ||
          single_order_details === undefined ||
          single_order_details === "" ? null : (
            <div className="od-contet" key={single_order_details.id}>
              <p>Inquiry Id : {single_order_details.id}</p>
            </div>
          )}
        </div>
      </div>
      <div className="main_container_close">
        <p
          onClick={() => setOrder_modal(false)}
          style={{ cursor: "pointer", width: "1rem", height: "1rem" }}
        >
          Cancle
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
