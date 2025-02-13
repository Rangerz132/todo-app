import CheckIcon from "../assets/images/icon-check.svg";

const CheckBox = (props: { onCheck: () => void; isChecked: boolean }) => {
  function handleCheck() {
    props.onCheck();
  }

  return (
    <div
      className={`w-5 h-5 rounded-full border border-neutral-light-theme-light-grayish-blue  cursor-pointer flex items-center justify-center dark:border-neutral-dark-theme-very-drak-grayish-blue-second ${
        props.isChecked
          ? "bg-gradient-to-br from-gradient-blue to-gradient-purple"
          : "bg-transparent"
      }`}
      onClick={() => handleCheck()}
    >
      {props.isChecked && (
        <div>
          <img src={CheckIcon} alt="Check Icon" />
        </div>
      )}
    </div>
  );
};

export default CheckBox;
