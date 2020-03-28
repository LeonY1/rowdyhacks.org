import React from "react";
import {
  UpdateTheme,
  UpdateTopMargin,
  UpdateTitle,
  UpdateParagraph,
  UpdateBlockSection,
  UpdateBlockTitle,
  UpdateBlockDate,
  UpdateContent,
  UpdateMessageSection,
  VerticalDivider,
  UpdateListItem,
  UpdateTableTitle,
  UpdateTable
} from "./UpdateStyle";
import { UpdatesConstants } from "../SectionConstant";
import useWindowWidth from "../../hooks/useWindowWidth";

const UpdateSection: React.FC = () => {
  const { updates } = UpdatesConstants;

  const windowWidth = useWindowWidth();

  function convertDate(date: string) {
    return date.replace(", ", "-").replace(" ", "-");
  }

  return (
    <>
      {windowWidth > 800 && <UpdateTopMargin />}
      <UpdateTheme>
        <UpdateTitle>ROWDYHACKS UPDATES</UpdateTitle>
        <UpdateContent>
          <UpdateTable>
            <UpdateTableTitle>Updates</UpdateTableTitle>
            {updates
              .slice()
              .reverse()
              .map(({ date }) => {
                return (
                  <UpdateListItem
                    key={date.toLowerCase()}
                    href={"#" + convertDate(date.toLowerCase())}
                  >
                    {date}
                  </UpdateListItem>
                );
              })}
          </UpdateTable>
          <VerticalDivider />
          <UpdateMessageSection>
            {updates
              .slice()
              .reverse()
              .map(({ title, date, message }, index) => {
                return (
                  <UpdateBlockSection
                    key={date.toLowerCase()}
                    id={convertDate(date.toLowerCase())}
                  >
                    <UpdateBlockTitle>{title}</UpdateBlockTitle>
                    <UpdateBlockDate>{date}</UpdateBlockDate>
                    {message.map(paragraph => {
                      return <UpdateParagraph>{paragraph}</UpdateParagraph>;
                    })}
                  </UpdateBlockSection>
                );
              })}
          </UpdateMessageSection>
        </UpdateContent>
      </UpdateTheme>
    </>
  );
};

export default UpdateSection;
