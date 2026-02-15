type Props = {
  total: number;
};

export default function TfootTable({ total }: Props) {
  return (
    <tfoot>
      <tr>
        <div className = "grid grid-cols-2 pt-4">
          <div>
            <td className = "font-bold">Total</td>
          </div>
          <div>
            <td>{total}$</td>
          </div>
        </div>
      </tr>
    </tfoot>
  );
}
