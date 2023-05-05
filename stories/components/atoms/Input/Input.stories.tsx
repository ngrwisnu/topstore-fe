import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input, { InputType } from "../../../../components/atom/Input/InputField";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label Name",
};
