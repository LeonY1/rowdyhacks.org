import styled from "styled-components";

const UpdateTopMargin = styled.div`
  display: flex;
  height: 70px;
  background-color: rgba(203, 235, 232, 1);
`;

const UpdateTheme = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(203, 235, 232, 1),
    rgba(203, 235, 232, 0)
  );
  color: #034872;
  display: flex;
  flex-direction: column;
  padding: 10px 100px;

  @media (max-width: 800px) {
    padding: 10px 30px;
  }
`;

const UpdateTitle = styled.h1`
  font-family: Arial-Black;
`;

const UpdateParagraph = styled.div`
  text-align: left;
  margin-bottom: 15px;
  font-family: Helvetica;
`;

const UpdateBlockSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-family: Helvetica;
`;

const UpdateBlockTitle = styled.h3`
  text-align: left;
  font-family: Arial-Black;
`;

const UpdateBlockDate = styled.p`
  text-align: left;
  font-weight: 550;
`;

const UpdateContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 300px;
  font-family: Helvetica;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const VerticalDivider = styled.div`
  width: 5px;
  height: inherit;
  background-color: #034872;
  margin: 0px 15px 5px;
  @media (max-width: 800px) {
    width: inherit;
    height: 3px;
    margin: 15px 5px;
  }
`;

const UpdateListItem = styled.a`
  min-width: 120px;
  list-style-type: none;
  border: none;
  color: #034872;
  @media (max-width: 800px) {
    text-align: left;
  }
`;

const UpdateTableTitle = styled.h3`
  text-align: left;
  font-family: Arial-Black;
`;

const UpdateTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateMessageSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Duck = styled.img`
  max-height: 30px;
  max-width: 30px;
`;

export {
  UpdateTheme,
  UpdateTopMargin,
  UpdateTitle,
  UpdateParagraph,
  UpdateBlockSection,
  UpdateBlockTitle,
  UpdateBlockDate,
  UpdateContent,
  VerticalDivider,
  UpdateListItem,
  UpdateTableTitle,
  UpdateTable,
  UpdateMessageSection,
  Duck
};
