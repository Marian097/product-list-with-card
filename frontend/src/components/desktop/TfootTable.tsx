type Props = {
  total: number;
};

export default function TfootTable({ total }: Props) {
  return (
    <tfoot>
      <tr className="grid grid-cols-2 pt-4">
        <td className="font-bold">Total</td>
        <td>{total}$</td>
      </tr>
    </tfoot>
  );
}
