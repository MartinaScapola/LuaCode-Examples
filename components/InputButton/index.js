import styles from "./InputButton.module.scss";

export default function InputButton(props) {
  return (
    <button
      className={`${styles.inputButton} ${
        props.size == "large" && styles.large
      }`}
    >
      {props.label}
    </button>
  );
}
