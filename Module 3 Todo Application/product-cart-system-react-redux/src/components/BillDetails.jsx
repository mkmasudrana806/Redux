import { useSelector } from "react-redux";

const BillDetails = () => {
  const carts = useSelector((state) => state.carts);
  const totalAmount = carts.reduce(
    (count, cart) => cart.quantity * cart.price + count,
    0
  );
  return (
    <div>
      <div className="billDetailsCard">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          {/* <!-- sub total --> */}
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="lws-subtotal">{totalAmount}</span>
            </p>
          </div>
          {/* <!-- Discount --> */}
          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span className="lws-discount">0</span>
            </p>
          </div>
          {/* <!-- VAT --> */}
          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span className="vat">0</span>
            </p>
          </div>
          {/* <!-- Total --> */}
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              BDT <span className="lws-total">{totalAmount}</span>
            </p>
          </div>
          <button
            disabled={totalAmount == 0 ? true : false}
            className="placeOrderbtn"
          >
            {totalAmount > 0 ? "place order" : "no cart selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
