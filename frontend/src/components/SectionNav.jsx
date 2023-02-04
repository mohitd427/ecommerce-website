import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width:400px;
  margin-top: 20px;
  background-color: #dc143c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
  
`;

const SectionNav = ({Heading}) => {
    
  return (
    <>
      <Container>{Heading}</Container>;
    </>
  );
};

export default SectionNav;
