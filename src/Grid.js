import Word from "./Word";

export default function Grid({ words }) {
  return (
    <div>
      {words.map((letters) => (
        <div>
          <Word letters={letters} />
        </div>
      ))}
    </div>
  );
}
