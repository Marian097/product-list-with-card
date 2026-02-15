export default function TheadTable() {
  return (
    <thead>
      <tr>
        <div className = "grid grid-cols-4">
          <div className = "col-span-2">
            <th>Product</th>
          </div>
          <div>
            <th>Buc</th>
          </div>
          <div>
            <th>Sub-total</th>
          </div>
        </div>
      </tr>
    </thead>
  );
}
