import Letter from "./Letter";

export default function Word({ letters }) {
  let array = Object.entries(letters);
  if (array.length === 0) {
    array = [
      [" ", "notChecked"],
      [" ", "notChecked"],
      [" ", "notChecked"],
      [" ", "notChecked"],
      [" ", "notChecked"],
    ];
  }

  return array.map(([letter, state]) => (
    <Letter letter={letter} state={state} />
  ));
}
