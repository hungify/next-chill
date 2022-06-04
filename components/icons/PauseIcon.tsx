import Icon from "~/components/icons/Icon";

function Pause() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
      <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
    </svg>
  );
}

export default function PauseIcon() {
  return <Icon component={Pause} />;
}
