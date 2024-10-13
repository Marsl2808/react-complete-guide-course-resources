// alternative: obj-destruction: CoreConcept(props) -> CoreConcepts({title, description, image})
// -> can be used to set default vals
export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>
        {props.title}
      </h3>
      <p>
        {props.description}
      </p>
    </li>
  );
}