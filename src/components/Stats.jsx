export default function Stats({ list }) {
  const haveItem = list.length;
  const countPackedTrue = list.filter((data) => data.packed).length;
  const persentase = Math.round((countPackedTrue / haveItem) * 100);

  return (
    <footer className="stats">
      {" "}
      <em>
        💼 you have {haveItem} item on your list, and you already packed{" "}
        {countPackedTrue} ({haveItem !== 0 ? persentase : 0}%)
      </em>
    </footer>
  );
}
