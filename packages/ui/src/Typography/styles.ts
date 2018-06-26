// Global import
import styled from 'styled-components';

export const StyledStory: any = styled.section`
  /* align-items: flex-start; */
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px;
  /* text-align: left; */
`;

export const TypoCollection: any = styled.section`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;

  & > h1 {
    width: 15rem;
  }
`;

export const Card: any = styled.div`
  padding: 1rem;
  text-align: left;

  & .Bold {
    font-weight: 700;
  }

  & .Regular {
    font-weight: 400;
  }

  & .Light {
    font-weight: 300;
  }

  & .Mega {
    font-size: 4.2rem;
    font-weight: 300;
    line-height: 1.08;
  }
`;
