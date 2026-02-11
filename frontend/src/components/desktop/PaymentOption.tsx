export default function PaymentOption() {
  return (
    <div>
      <div>
        <label htmlFor="">Cash on delivery</label>
        <input type="checkbox" />
      </div>
      <div>
        <label htmlFor="">Payment by card</label>
        <input type="checkbox" />
      </div>
      <div>
        <button type="submit">Place order</button>
      </div>
    </div>
  );
}
