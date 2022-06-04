import Icon from "~/components/icons/Icon";

function Play() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
      <path d="M7 6v12l10-6z"></path>
    </svg>
  );
}

export default function PlayIcon() {
  return <Icon component={Play} />;
}
