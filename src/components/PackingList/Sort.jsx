import Swal from "sweetalert2";
export default function SortClear({ handleClear, handleSort }) {
  function handleAlert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to clear this!",
      icon: "warning",
      height: "900px",
      width: "400px",
      position: "top",
      showCancelButton: true,
      confirmButtonColor: "#76C7AD",
      cancelButtonColor: "#E5771F",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        handleClear();
      }
    });
  }

  return (
    <div className="actions">
      <select onChange={handleSort} name="select" id="selectId">
        <option value="input">sort by input order</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed status</option>
      </select>
      <button onClick={handleAlert}>CLEAR LIST</button>
    </div>
  );
}
