import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompCalendar from "./rds-comp-calendar";
import { isToday } from "date-fns/esm";
import startOfToday from "date-fns/startOfToday";

export default {
  title: "Components/Calendar",
  component: RdsCompCalendar,

  argTypes: {
    onclick: { action: "deleted" },
  },
} as ComponentMeta<typeof RdsCompCalendar>;

const Template: ComponentStory<typeof RdsCompCalendar> = (args: any) => (
  <RdsCompCalendar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  events: [
    {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2021, 6, 10),
      end: new Date(2021, 6, 12),
    },
    {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
    },
    {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
    },
  ],
};
