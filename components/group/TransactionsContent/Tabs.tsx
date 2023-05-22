import cx from "classnames";

type TabsType = {
  title: string;
  isActive?: boolean;
  onclick: () => void;
};

const Tabs = (props: TabsType) => {
  const { title, isActive = false, onclick } = props;

  const tabBtnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": isActive,
  });
  return (
    <button onClick={onclick} className={tabBtnClass}>
      {title}
    </button>
  );
};

export default Tabs;
