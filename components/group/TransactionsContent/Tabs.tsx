import cx from "classnames";

type TabsType = {
  title: string;
  isActive?: boolean;
};

const Tabs = (props: TabsType) => {
  const { title, isActive = false } = props;

  const tabBtnClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": isActive,
  });
  return (
    <a data-filter="*" href="#" className={tabBtnClass}>
      {title}
    </a>
  );
};

export default Tabs;
