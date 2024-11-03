export default function TabButton(props) {
  return (
    <li>
      {/* special built-in children prop corresponds to value between tags -> no attribute needed in client */}
      <button className={props.isSelected ? 'active' : undefined} onClick={props.click}>
        {props.children}
      </button>
    </li>
  );
}
