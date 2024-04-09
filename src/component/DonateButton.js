import { useEffect } from "react";
import { ImCross } from "react-icons/im";

const DonateButton = ({ isOpen, onClose, clientId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.addEventListener("load", () => {
      // @ts-ignore
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Can be dynamically set
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Donation successful, thank you!");
            });
          },
        })
        .render("#paypal-button-container");
    });
    document.body.appendChild(script);
  }, [clientId]); // clientId as dependency

  return (
    <div className={`donate-form pf t0 b0 w100 ${isOpen ? "open-d-form" : ""}`}>
      <div id="paypal-button-container" className="pr">
        <ImCross
          className="pa r0 t0 mr16 mt16 fs16 box-center cp"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default DonateButton;
